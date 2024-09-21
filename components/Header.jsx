import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <div className="text-black border-y-[1px]  border-gray-300">
      <div className="text-xl py-3 font-thin flex justify-center gap-2 mx-12 items-center tracking-widest">
        <Link href="/" className="hover:text-gray-600 transition-colors">
          VÄLKOMMEN
        </Link>
        <p className="text-4xl">•</p>
        <Link href="/schema" className="hover:text-gray-600 transition-colors">
          HELGENS SCHEMA
        </Link>
        <p className="text-4xl">•</p>
        <Link href="/boende" className="hover:text-gray-600 transition-colors">
          BOENDE
        </Link>
        <p className="text-4xl">•</p>
        <Link href="/info" className="hover:text-gray-600 transition-colors">
          ÖVRIG INFO
        </Link>
        <p className="text-4xl">•</p>
        <Link href="/osa" className="hover:text-gray-600 transition-colors">
          OSA
        </Link>
        <p className="text-4xl">•</p>
        <Link href="/kontakt" className="hover:text-gray-600 transition-colors">
          KONTAKTA OSS
        </Link>
      </div>
    </div>
  );
};

export default Header;
