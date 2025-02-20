import React from 'react';
import Image from 'next/image';

const EventBlock = ({ time, description, imageSrc }) => (
  <div className="flex flex-col md:flex-row w-full gap-6 items-start mt-8 border-t border-gray-300 pt-8">
    <div className="md:w-1/3">
      <Image
        src={imageSrc || '/images/weddingRoom.jpg'}
        alt="Event icon"
        width={300}
        height={200}
        objectFit="cover"
        className="rounded-md "
      />
    </div>
    <div className="flex flex-col flex-grow md:w-2/3">
      <p className="font-semibold mb-2 text-xl">{time}</p>
      <p className="text-lg">{description}</p>
    </div>
  </div>
);

const DaySchedule = ({ day, date, events }) => (
  <div className="w-full mb-12">
    <h3 className="font-normal text-3xl mb-6 text-center">
      {day} {date}
    </h3>
    {events.map((event, index) => (
      <EventBlock key={index} {...event} />
    ))}
  </div>
);

const Schema = () => {
  const schedule = [
    {
      day: 'Fredag',
      date: '12 september',
      events: [
        {
          imageSrc: '/images/weddingbyggnad.jpg',

          description:
            'Dagen innan vigseln hoppas vi att så många som möjligt vill komma och umgås med oss på Herrgården! Det kommer att bjudas på grillade hamburgare, härlig dryck och roliga aktiviteter.',
        },
        {
          imageSrc: '/images/weddingbyggnad.jpg',
          time: '16.00-17:30',
          description: 'Incheckning',
        },
      ],
    },
    {
      day: 'Lördag',
      date: '13 september',
      events: [
        {
          imageSrc: '/images/weddingBrunch.jpg',
          time: 'Kl 08.00-09.30',
          description:
            'För er som anlänt på fredagen så serveras frukost i Herrgårdens matsal på plan 2.',
        },
        {
          imageSrc: '/images/lunch.png',
          time: 'Kl 11.00-12.00: Lunch',
          description: 'Enklare lunch kommer kunna hämtas i Herrgårdens kök på våning 2.',
        },
        {
          imageSrc: '/images/vigsel.png',
          time: 'Kl 13.00: Vigsel',
          description:
            'Vigsel i Sura Kyrka, ca 10 minuters bilfärd från Herrgården. Man får själv ansvara för att ta sig till och från kyrkan.',
        },
        {
          imageSrc: '/images/brudskal.png',
          time: 'Ca kl 15.00: Brudskål',
          description:
            'Brudskål och mingel, om vädret tillåter ses vi på terrassen efter vigseln för brudskål och mingel innan middagen.',
        },
        {
          imageSrc: '/images/weddingMat.jpg',
          time: 'Kl 17.00: Middag',
          description:
            'Middag kommer att hållas i Stallet som ligger på andra sidan ån. Vängligen ange allergier och matpreferenser under OSA-fliken.',
        },
        {
          imageSrc: '/images/fest.png',
          time: 'Ca kl 22.00: Fest',
          description: 'Middagen rundas av och festen börjar!',
        },
        {
          imageSrc: '/images/festenfort.png',
          time: '01.00: Festern fortsätter',
          description:
            'Vid 01.00 måste vi lämna lokalen , men festen fortsätter inne i Herrgårdens valv.',
        },
      ],
    },
    {
      day: 'Söndag',
      date: '14 september',
      events: [
        {
          imageSrc: '/images/weddingBreakfast.jpg',
          time: 'Kl 08.30-10.00',
          description: 'Frukost serveras i Herrgårdens matsal på våning 2.',
        },
        {
          time: 'Senast kl 11:00',
          description: 'Utcheckning, Tack för denna helg!',
        },
      ],
    },
  ];

  return (
    <main className="w-full font-thin">
      {/* Hero-sektion */}
      {/* <div className="relative w-full h-[60vh]">
        <Image
          src="/images/testweddingNice.jpg"
          alt="Hero image"
          layout="fill"
          objectFit="cover"
          objectPosition="center center"
          priority
        />
      </div> */}

      {/* Innehåll */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h2 className="text-4xl font-thin mb-8 uppercase tracking-widest text-center">Helgens schema</h2>
        <p className="text-lg mb-8 text-center">
          Här hittar ni en översikt över helgens aktiviteter. Vi ser fram emot att dela dessa speciella
          dagar med er!
        </p>
        {schedule.map((day, index) => (
          <DaySchedule key={index} {...day} />
        ))}
      </div>
    </main>
  );
};

export default Schema;
