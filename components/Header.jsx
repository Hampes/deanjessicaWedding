'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuItems = [
    { name: 'VÄLKOMMEN', path: '/' },
    { name: 'HELGENS SCHEMA', path: '/helgens-schema' },
    { name: 'BOENDE', path: '/boende' },
    { name: 'ÖVRIG INFO', path: '/info' },
    { name: 'OSA', path: '/osa' },
    { name: 'KONTAKTA OSS', path: '/kontakt' },
  ];

  return (
    <div className="text-black border-y-[1px] border-gray-300">
      <div className="lg:hidden flex justify-between items-center py-3 px-4">
        <button onClick={toggleMenu} className="text-2xl mx-4">
          {isMenuOpen ? '✕' : '☰'}
        </button>
        <Link href="/" className="text-xl font-thin tracking-widest">
          BRÖLLOP
        </Link>
      </div>
      <nav
        className={`lg:flex ${
          isMenuOpen ? 'flex' : 'hidden'
        } flex-col lg:flex-row justify-center items-center py-3 lg:py-6 lg:gap-4 lg:mx-4 xl:mx-12`}
      >
        {menuItems.map((item, index) => (
          <React.Fragment key={item.name}>
            <Link
              href={item.path}
              className="hover:text-gray-600 transition-colors py-2 lg:py-0 text-sm sm:text-base lg:text-lg xl:text-xl font-thin tracking-widest"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </Link>
            {index < menuItems.length - 1 && (
              <span className="hidden lg:block text-2xl lg:text-3xl xl:text-4xl">•</span>
            )}
          </React.Fragment>
        ))}
      </nav>
    </div>
  );
};

export default Header;
