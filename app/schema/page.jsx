import React from 'react';
import Image from 'next/image';

const EventBlock = ({ time, description, imageSrc }) => (
  <div className="flex flex-col md:flex-row w-full gap-6 items-start mt-8 border-t border-gray-300 pt-8">
    <div className="w-full md:w-1/3 aspect-w-16 aspect-h-9 relative">
      <Image
        src={imageSrc || '/images/weddingRoom.jpg'}
        alt="Event icon"
        layout="fill"
        objectFit="cover"
        className="rounded-md"
      />
    </div>
    <div className="flex flex-col flex-grow w-full md:w-2/3">
      <p className="font-semibold mb-2 text-xl">{time}</p>
      <p className="text-base md:text-lg">{description}</p>
    </div>
  </div>
);

// ... resten av koden förblir oförändrad

const Schema = () => {
  // ... schedule array och övrig kod förblir oförändrad

  return (
    <main className="w-full font-thin">
      {/* Hero-sektion */}
      <div className="relative w-full h-[40vh] sm:h-[50vh] md:h-[60vh]">
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
      <div className="max-w-4xl mx-auto px-4 py-8 sm:py-12">
        <h2 className="text-3xl md:text-4xl font-thin mb-6 sm:mb-8 uppercase tracking-widest text-center">
          Helgens schema
        </h2>
        <p className="text-base md:text-lg mb-8 text-center">
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
