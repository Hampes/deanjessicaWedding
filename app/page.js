import Image from 'next/image';
import Link from 'next/link';
import CountdownTimer from '@/components/CountdownTimer';

export default function Home() {
  const weddingDate = new Date('2025-09-08T00:00:00');

  return (
    <main className="w-full font-thin">
      {/* Hero-sektion */}
      <div className="relative w-full h-screen">
        <Image
          src="/images/1weddingByggnad.jpg"
          alt="Hero image"
          layout="fill"
          objectFit="cover"
          objectPosition="center center"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-white">
          <h1 className="text-6xl font-thin mb-6 uppercase tracking-widest text-center">
            Dean & Jessica
          </h1>
          <p className="text-3xl mb-4">8 september 2025</p>
          <p className="text-2xl">Schenströmska Herrgården, Ramnäs, Västerås</p>
        </div>
      </div>

      {/* Välkomsttext */}
      <div className="max-w-4xl mx-auto px-4 py-12 text-center">
        <h2 className="text-3xl font-thin mb-6">Välkomna till vårt bröllop</h2>
        <div className="text-lg space-y-6">
          <p>
            Efter 17 år tillsammans är tiden äntligen kommen för oss att bli man och fru. Du som fått vår
            inbjudan med länken till denna hemsida är en av de personer som, på ett eller annat vis, är
            de viktigaste i våra liv. Vi vill förstås att du ska komma till vårt bröllop och dela denna
            helg med oss!
          </p>
          <p>
            Vi har samlat all information här på hemsidan, på ett och samma ställe för att underlätta för
            oss alla. Här finner du information om vigsel, fest, boende och praktiska detaljer och lite
            annat som ni kan tänkas vilja veta.
          </p>
          <p className="font-semibold">
            <Link href="/osa" className="hover:underline">
              O.S.A. senast den 1 juni.
            </Link>
          </p>
          <p>
            Tveka inte att kontakta oss om ni undrar över något. Vi ser fram emot att se er på vårt
            bröllop!
          </p>
        </div>
      </div>

      {/* Snabbknappar */}
      <div className="bg-gray-100 py-12">
        <div className="max-w-4xl mx-auto px-4 flex justify-center space-x-8">
          <Link
            href="/osa"
            className="bg-white px-8 py-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 text-center"
          >
            O.S.A.
          </Link>
          <Link
            href="/schema"
            className="bg-white px-8 py-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 text-center"
          >
            Schema
          </Link>
          <Link
            href="/boende"
            className="bg-white px-8 py-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 text-center"
          >
            Boende
          </Link>
        </div>
      </div>

      {/* Nedräknare */}
      {/* <div className="max-w-4xl mx-auto px-4 py-12">
        <CountdownTimer targetDate={weddingDate} />
      </div> */}
    </main>
  );
}
