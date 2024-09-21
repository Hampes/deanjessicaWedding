import './globals.css';
import Hero from '@/components/Hero';
import Header from '@/components/Header';
import Head from 'next/head';
import WeddingCountdown from '@/components/weddingCountdown';

export const metadata = {
  title: 'Dean & Jessica Bröllop',
  description: 'Välkommen till Dean och Jessicas bröllopssida',
};

export default function RootLayout({ children }) {
  return (
    <html lang="sv">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className="bg-gray-100 flex justify-center min-h-screen">
        <div className="w-full max-w-[1200px] bg-white shadow-2xl">
          <div className="mx-auto px-4 sm:px-6 md:px-8 lg:px-12 flex flex-col items-center">
            <Hero />
            <Header />
            <main>{children}</main>
            <WeddingCountdown />
          </div>
        </div>
      </body>
    </html>
  );
}
