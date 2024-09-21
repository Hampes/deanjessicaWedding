import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const { guests } = await request.json();

    let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Formatera gästinformationen
    const formatGuest = (guest) => `
Namn: ${guest.name}
E-post: ${guest.email}
Deltar: ${guest.attending === 'yes' ? 'Ja' : 'Nej'}
Övernattning: ${
      guest.nights.map((night) => (night === 'friday' ? 'Fredag' : 'Lördag')).join(', ') || 'Ingen'
    }
Önskelåt: ${guest.song || 'Ingen angiven'}
Meddelande: ${guest.message || 'Inget meddelande'}
`;

    const emailBody = `
Ny OSA mottagen:

${guests.map((guest, index) => `Gäst ${index + 1}:\n${formatGuest(guest)}`).join('\n')}
`;

    await transporter.sendMail({
      from: `"Bröllops-OSA" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: 'Ny OSA för bröllopet',
      text: emailBody,
    });

    return new Response(JSON.stringify({ message: 'OSA skickad framgångsrikt' }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Server Error:', error);
    return new Response(
      JSON.stringify({ message: 'Ett fel uppstod när OSA skulle skickas', error: error.message }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
}
