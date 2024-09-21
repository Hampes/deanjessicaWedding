'use client';

import React from 'react';
import OSAForm from '../../components/OSAForm';
import Image from 'next/image';

const OSA = () => {
  return (
    <div className="w-full font-thin">
      <div className="relative w-full h-[60vh]">
        <Image
          src="/images/osa.webp"
          alt="OSA hero image"
          layout="fill"
          objectFit="cover"
          objectPosition="center center"
          priority
        />
      </div>
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h2 className="text-4xl font-thin mb-8 uppercase tracking-widest text-center">O.S.A.</h2>

        <div className="text-lg space-y-6 mb-12">
          <p>Vi ser verkligen fram emot att fira de här dagarna med er.</p>

          <p>
            Då rum, bordplacering och mat måste planeras i förväg önskar vi att datumet för att OSA
            respekteras.
          </p>

          <p className="font-semibold">Vänligen OSA senast 1 juni 2025.</p>

          <p>
            Är ni flera personer på samma inbjudan går det bra att o.s.a. för alla samtidigt genom att
            klicka på "Lägg till person" längst ner i formuläret. Det är viktigt att göra en anmälan för
            varje person, även om man delar hushåll.
          </p>

          <p>Ange eventuella allergier och specialkost i meddelandefältet nedan.</p>

          <p>Passa på att önska din favoritlåt att dansa till.</p>

          <p>
            Hemsidan uppdateras löpande med information, och vi kommer att kommunicera viktig information
            till er på mejladressen som ni anger när ni lämnar er O.S.A.
          </p>
        </div>

        <OSAForm />
      </div>
    </div>
  );
};

export default OSA;
