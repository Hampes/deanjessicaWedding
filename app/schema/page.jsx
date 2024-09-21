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
        className="rounded-md"
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
          time: 'Från kl 16:00',
          description:
            'Incheckning. Dagen innan bröllopet hoppas vi att så många som möjligt vill komma och umgås med oss på Herrgården! Det bjuds på lite grillmiddag, härlig dryck och roliga aktiviteter, och för de som vill så finns det badtunnor och bastu.',
        },
      ],
    },
    {
      day: 'Lördag',
      date: '13 september',
      events: [
        {
          imageSrc: '/images/weddingBrunch.jpg',
          time: 'Morgon',
          description: 'För er som checkat in på fredagen inleds dagen med en härlig brunch.',
        },
        {
          imageSrc: '/images/weddingRoom.jpg',
          time: 'Från kl 11:00',
          description: 'Incheckning för er som ankommer på lördagen.',
        },
        {
          imageSrc: '/images/weddingKyrka.jpg',
          time: 'Kl 15:00',
          description:
            'Vigsel i Sura Kyrka, ca 10 minuters bilfärd från Herrgården. Man får själv ansvara för att ta sig till och från kyrkan.',
        },
        {
          imageSrc: '/images/weddingMat.jpg',
          time: 'Efter vigseln',
          description:
            'Vi ses tillbaka på Herrgården för brudskål och lite mingel innan det är dags för middag och fest i Stallet. Vänligen ange allergier och matpreferenser under OSA-fliken.',
        },
      ],
    },
    {
      day: 'Söndag',
      date: '14 september',
      events: [
        {
          imageSrc: '/images/weddingBreakfast.jpg',
          time: 'Morgon',
          description:
            'För att avrunda helgen på bästa sätt så ses vi på en härlig frukost innan det bär av hemåt.',
        },
        {
          time: 'Senast kl 11:00',
          description: 'Utcheckning',
        },
      ],
    },
  ];

  return (
    <main className="w-full font-thin">
      {/* Hero-sektion */}
      <div className="relative w-full h-[60vh]">
        <Image
          src="/images/testweddingNice.jpg"
          alt="Hero image"
          layout="fill"
          objectFit="cover"
          objectPosition="center center"
          priority
        />
      </div>

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
