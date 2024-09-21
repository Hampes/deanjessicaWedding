import React from 'react';
import Image from 'next/image';

const InfoSection = ({ title, children }) => (
  <div className="mb-12 border-b border-gray-300 pb-8">
    <h3 className="text-2xl font-light mb-4">{title}</h3>
    {children}
  </div>
);

const ContactCard = ({ name, image, description, contact }) => (
  <div className="flex flex-col md:flex-row w-full gap-6 items-start mb-8">
    <div className="md:w-1/3">
      <Image
        src={image || '/images/placeholder.jpg'}
        alt={name}
        width={300}
        height={300}
        layout="responsive"
        objectFit="cover"
        className="rounded-full"
      />
    </div>
    <div className="flex flex-col flex-grow md:w-2/3">
      <h4 className="text-xl font-semibold mb-2">{name}</h4>
      <p className="mb-2">{description}</p>
      <p>{contact}</p>
    </div>
  </div>
);

const Info = () => {
  return (
    <main className="w-full font-thin">
      <div className="relative w-full h-[60vh]">
        <Image
          src="/images/info.webp"
          alt="Info hero image"
          layout="fill"
          objectFit="cover"
          objectPosition="center center"
          priority
        />
      </div>
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h2 className="text-4xl font-thin mb-8 uppercase tracking-widest text-center">
          Övrig information
        </h2>

        <p className="text-lg mb-12 text-center">
          Här hittar ni viktig information om bröllopet. Läs igenom noga och kontakta oss om ni har några
          frågor.
        </p>

        <InfoSection title="Parkering och transport">
          <p>
            Lättast är att ta sig hit med bil. Det finns relativt gott om parkeringar både utanför
            herrgården samt utanför stallet. Se karta över området under fliken boende.
          </p>
        </InfoSection>

        <InfoSection title="Toastmaster och toastmadame">
          <p className="mb-4">
            För att hjälpa oss att se till att detta blir ett minne för livet har vi bett våra
            fantastiska vänner Jesper och Emma ställa upp som toastmaster och toastmadame. Ni kontaktar
            dem om allt som rör planering, tal, överraskningar och annat som förgyller vår dag. Se deras
            kontaktuppgifter nedan.
          </p>

          <ContactCard
            name="Emma"
            image={require('../../public/images/emma.jpg')}
            description="Kort beskrivning om Emma"
            contact="emma@example.com | 070-123 45 67"
          />

          <ContactCard
            name="Jesper"
            image={require('../../public/images/jesper.jpg')}
            description="Kort beskrivning om Jesper"
            contact="jesper@example.com | 070-987 65 43"
          />
        </InfoSection>

        <InfoSection title="Klädkod">
          <p>Mörk kostym.</p>
        </InfoSection>

        <InfoSection title="Presenter">
          <p>
            Vår största önskan är förstås att just du är med och förgyller denna helg, men önskar du att
            även ge en gåva skulle vi varmt uppskatta ett bidrag till bröllopsresan. Banköverföring
            kontonummer: 000000000000.
          </p>
        </InfoSection>

        <InfoSection title="Barn">
          <p>Vi älskar era ungar men denna helg passar det bättre att de är hemma med sin barnvakt.</p>
        </InfoSection>
      </div>
    </main>
  );
};

export default Info;
