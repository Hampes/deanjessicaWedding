import React from 'react';
import Image from 'next/image';

const InfoBlock = ({ title, description, imageSrc }) => (
  <div className="flex flex-col md:flex-row w-full gap-6 items-start mb-8 border-b border-gray-300 pb-8">
    <div className="md:w-1/3">
      <Image
        src={imageSrc || '/images/weddingRoom.jpg'}
        alt={title}
        width={300}
        height={200}
        layout="responsive"
        objectFit="cover"
        className="rounded-md"
      />
    </div>
    <div className="flex flex-col flex-grow md:w-2/3">
      <h3 className="font-semibold mb-2 text-xl">{title}</h3>
      <p className="text-lg">{description}</p>
    </div>
  </div>
);

const Boende = () => {
  const boendeInfo = [
    {
      title: 'Schenströmska Herrgården',
      description:
        'Schenströmska Herrgården byggdes på mitten av 1700 talet och består av flera byggnader. Herrgården, fyra flyglar, Sjövillan samt festlokalen Stallet. Herrgården har ca 100 sovplatser fördelade i de olika byggnaderna.',
      imageSrc: '/images/weddingOversikt.jpg',
    },
    {
      title: 'Övernattning',
      description:
        'Vi hoppas såklart att du vill bo över på Herrgården men det får du förstås välja själv. Kostnaden för att bo över under helgen är 750kr per person, per natt. Ni anger när ni OSAr vilka nätter ni önskar att bo över.',
      imageSrc: '/images/weddingRoom.jpg',
    },
    {
      title: 'Betalning',
      description:
        'Betalningen behöver vara oss tillhanda senast den 1 augusti, använd nedan kontonummer för överföring: [Ange kontonummer här]',
      imageSrc: '/images/weddingPayment.jpg',
    },
  ];

  return (
    <main className="w-full font-thin">
      {/* Hero-sektion */}
      <div className="relative w-full h-[60vh]">
        <Image
          src="/images/weddingbyggnad.jpg"
          alt="Översiktsbild av Schenströmska Herrgården"
          layout="fill"
          objectFit="cover"
          objectPosition="center center"
          priority
        />
      </div>

      {/* Innehåll */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h2 className="text-4xl font-thin mb-8 uppercase tracking-widest text-center">Boende</h2>
        <p className="text-lg mb-8 text-center">
          Här hittar ni information om boende under bröllopsfirandet. Vi hoppas att ni vill stanna över
          och dela hela helgen med oss!
        </p>
        {boendeInfo.map((info, index) => (
          <InfoBlock key={index} {...info} />
        ))}
      </div>
    </main>
  );
};

export default Boende;
