import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="w-full font-thin">
      {/* Hero-sektion */}
      <div className="relative w-full h-[60vh]">
        <Image
          src="/images/1weddingByggnad.jpg"
          alt="Hero image"
          layout="fill"
          objectFit="cover"
          objectPosition="center bottom"
          priority
        />
      </div>
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-thin mb-6 uppercase tracking-widest text-center">
          Välkomna till vårt bröllop
        </h1>
        <div className="text-center">
          <p className="text-3xl mb-4">Dean & Jessica</p>
          <p className="text-2xl mb-4">8 september 2025</p>
          <p className="text-xl mb-8">Schenströmska Herrgården, Ramnäs, Västerås</p>
        </div>
        <div className="space-y-6 text-lg">
          <p>
            Efter 17 år tillsammans är tiden äntligen kommen för oss att bli man och fru. Du som fått vår
            inbjudan med länken till denna hemsida är en av de personer som, på ett eller annat vis, är
            viktigast i våra liv. Vi vill förstås att du ska komma till vårt bröllop och dela denna helg
            med oss!
          </p>
          <p>
            Vi har samlat all information här på hemsidan, på ett och samma ställe för att underlätta för
            oss alla. Här finner du information om vigsel, fest, boende och praktiska detaljer och lite
            annat som ni kan tänkas vilja veta.
          </p>
          <p className="font-semibold text-center">
            <Link href="/osa" className="hover:underline">
              O.S.A. senast den 1 juni.
            </Link>
          </p>
          <p className="text-center">
            Tveka inte att kontakta oss om ni undrar över något. Vi ser fram emot att se er på vårt
            bröllop!
          </p>
        </div>
      </div>
    </main>
  );
}
