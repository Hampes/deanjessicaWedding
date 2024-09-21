const nodemailer = require('nodemailer');

exports.handler = async (event, context) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  try {
    const { guests } = JSON.parse(event.body);

    let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const emailBody = guests
      .map(
        (guest, index) => `
Gäst ${index + 1}:
Namn: ${guest.name}
E-post: ${guest.email}
Deltar: ${guest.attending === 'yes' ? 'Ja' : 'Nej'}
Övernattning: ${
          guest.nights.map((night) => (night === 'friday' ? 'Fredag' : 'Lördag')).join(', ') || 'Ingen'
        }
Önskelåt: ${guest.song || 'Ingen angiven'}
Meddelande: ${guest.message || 'Inget meddelande'}
`
      )
      .join('\n\n');

    await transporter.sendMail({
      from: `"Bröllops-OSA" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: 'Ny OSA för bröllopet',
      text: `Ny OSA mottagen:\n\n${emailBody}`,
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'OSA skickad framgångsrikt' }),
    };
  } catch (error) {
    console.error('Server Error:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Ett fel uppstod när OSA skulle skickas', error: error.message }),
    };
  }
};
