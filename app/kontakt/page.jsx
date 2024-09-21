import React from 'react';
import Image from 'next/image';

const ContactInfo = ({ title, name, email, phone }) => (
  <div className="mb-8">
    <h3 className="text-2xl font-light mb-4">{title}</h3>
    <p className="mb-2">{name}</p>
    <p className="mb-2">E-post: {email}</p>
    <p>Telefon: {phone}</p>
  </div>
);

const Kontakt = () => {
  return (
    <div className="w-full font-thin">
      <div className="relative w-full h-[60vh]">
        <Image
          src="/images/weddingContact.webp"
          alt="Kontakt hero image"
          layout="fill"
          objectFit="cover"
          objectPosition="center bottom"
          priority
        />
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12">
        <h2 className="text-4xl font-thin mb-8 uppercase tracking-widest text-center">Kontakta oss</h2>

        <p className="text-lg mb-8 text-center">
          Om ni har några frågor eller funderingar, tveka inte att höra av er till oss. Vi ser fram emot
          att fira vår stora dag med er!
        </p>

        <div className="w-full flex flex-col md:flex-row justify-between">
          <ContactInfo
            title="Brud"
            name="Jessica Erstadius"
            email="jessica@example.com"
            phone="070-123 45 67"
          />

          <ContactInfo
            title="Brudgum"
            name="Dean Karlsson"
            email="dean@example.com"
            phone="070-987 65 43"
          />
        </div>

        {/* ... (Övrig information förblir oförändrad) */}
      </div>
    </div>
  );
};

export default Kontakt;
