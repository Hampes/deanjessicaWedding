import React from 'react';
import Image from 'next/image';

const InfoSection = ({ title, children }) => (
  <div className="mb-12 border-b border-gray-300 pb-8">
    <h3 className="text-2xl font-light mb-4">{title}</h3>
    {children}
  </div>
);

const Info = () => {
  return (
    <main className="w-full font-thin">
      <div className="relative w-full h-[60vh]">
        <Image
          src="/images/testBild.jpg"
          alt="Info hero image"
          layout="fill"
          objectFit="cover"
          objectPosition="center bottom"
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

        <InfoSection title="Mat och dryck">
          <p>Vi står för all mat och dryck under hela helgen.</p>
        </InfoSection>
        <InfoSection title="Parkering och transport">
          <p>
            Lättast är att ta sig hit med bil. Det finns relativt gott om parkeringar både utanför
            herrgården samt utanför stallet. Se karta över området under fliken boende.
          </p>
        </InfoSection>
        <InfoSection title="Klädkod">
          <p>
            På bröllopsdagen är det mörk kostym som gäller.<br></br> Övriga dagar är det fri klädsel.
          </p>
        </InfoSection>

        <InfoSection title="Presenter">
          <p>
            Vår största önskan är förstås att just du är med och förgyller denna helg, men önskar du att
            även ge en gåva skulle vi varmt uppskatta ett bidrag till bröllopsresan. Banköverföring
            kontonummer: <br></br>Swedbank 8327-9, 764 140 780-9
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
