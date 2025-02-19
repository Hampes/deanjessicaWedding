import React from 'react';
import Image from 'next/image';

const PersonCard = ({ name, role, description, imageSrc }) => (
  <div className="flex flex-col md:flex-row w-full gap-6 items-start mb-8 border-b border-gray-300 pb-8">
    <div className="md:w-1/4 w-1/2 mx-auto md:mx-0">
      <Image
        src={imageSrc || '/images/default-person.jpg'}
        alt={name}
        width={200}
        height={200}
        className="rounded-full object-cover"
      />
    </div>
    <div className="flex flex-col flex-grow md:w-2/3">
      <h3 className="font-semibold mb-2 text-xl">
        {name} - {role}
      </h3>
      <p className="text-lg">{description}</p>
    </div>
  </div>
);

const Nyckelpersoner = () => {
  const personer = [
    {
      name: 'Emma',
      role: 'Toastmadame',
      description:
        'Med sin otroligt härliga energi och förmåga att sprida glädje i alla rum är Emma som klippt och skuren för att vara Toastmadame. Att hon dessutom är en väldigt nära vän till oss båda gör det väldigt betydelsefullt att hon tackade ja till detta uppdrag.',
      imageSrc: '/images/emma.jpg',
    },
    {
      name: 'Jesper',
      role: 'Toastmaster',
      description:
        'En riktig stämningshöjare som kan få vilken fest som helst att bli lyckad. Precis vad vi letar efter i en Toastmaster! Vi är övertygade om att Jesper kommer se till att detta blir en oförglömlig kväll!',
      imageSrc: '/images/jesper.jpg',
    },
  ];

  const brollopsfolje = [
    {
      name: 'Joakim',
      role: 'Best man',
      description:
        'Har känt brudgummen sedan barnsben. Är delvis ansvarig för att ha tänt brudgummens intresse för vin. Delat många stunder i skidbacken och skidspåret tillsammans, bland annat genom två vasalopp.',
      //   imageSrc: '/images/joakim.jpg',
    },
    {
      name: 'Tobias',
      role: 'Marskalk',
      description:
        'Brudgummens vapendragare under gymnasiet. Har tillsammans hittat på en hel del hyss genom åren, och fortsätter skapa härliga minnen tillsammans.      ',
      //   imageSrc: '/images/tobias.jpg',
    },
    {
      name: 'Cristopher',
      role: 'Marskalk',
      description:
        'Har även han känt brudgummen i väldigt många år, gjort flera resor ihop och vart kollegor i över 10 år. Brudgummen har även fått den stora äran att vara gudfar till Cristophers dotter.',
      //   imageSrc: '/images/cristopher.jpg',
    },
    {
      name: 'Klara',
      role: 'Hederstärna',
      description:
        'Har funnits i brudens liv sedan tidiga tonår. Alla som känner Klara kan nog hålla med om att en mer omtänksam person inte går att hitta. Genom vått och torrt ställer hon alltid upp!      ',
      //   imageSrc: '/images/klara.jpg',
    },
    {
      name: 'Natalie',
      role: 'Brudtärna',
      description:
        'Brudens äldsta vän. Har funnits vid brudens sida genom det mesta i livet. Från högstadiet, till gymnasiet och sedan vidare i vuxenlivet med alla toppar och dalar det innebär. En sån varm person som alltid har andras bästa i åtanke!      ',
      //   imageSrc: '/images/natalie.jpg',
    },
    {
      name: 'Emma',
      role: 'Brudtärna',
      description:
        'En relativt nyfunnen vän, men har på kort tid blivit en av de viktigaste personerna i brudens liv. Med sin härliga energi sprider Emma sån fantastisk glädje, men är även en person som bruden alltid kan förlita sig på.',
      //   imageSrc: '/images/emma-brudtarna.jpg',
    },
  ];

  return (
    <main className="w-full font-thin">
      <div className="relative w-full h-[50vh]">
        <Image
          src="/images/info.webp"
          alt="Nyckelpersoner"
          layout="fill"
          objectFit="cover"
          objectPosition="center center"
          priority
        />
      </div>
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h2 className="text-4xl font-thin mb-8 uppercase tracking-widest text-center">Nyckelpersoner</h2>
        <p className="text-lg mb-8 text-center">
          Här presenterar vi några av de fantastiska personer som kommer ha en viktig roll på vår stora
          dag!
        </p>
        {personer.map((person, index) => (
          <PersonCard key={index} {...person} />
        ))}
        <h2 className="text-3xl font-thin mt-12 mb-12 uppercase tracking-widest text-center">
          Bröllopsfölje
        </h2>
        {brollopsfolje.map((person, index) => (
          <PersonCard key={index} {...person} />
        ))}
      </div>
    </main>
  );
};

export default Nyckelpersoner;
