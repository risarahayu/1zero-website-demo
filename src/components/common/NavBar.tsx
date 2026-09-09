import React from 'react';

interface NavBarProps {
  lang: 'id' | 'en';
  setLang: React.Dispatch<React.SetStateAction<'id' | 'en'>>;
}

import { Link } from "react-router-dom";

const NavBar: React.FC<NavBarProps> = ({ lang, setLang }) => {
  return (
    <nav className="flex flex-col md:flex-row justify-between items-center px-10 py-6 max-w-7xl mx-auto gap-4">
      <Link
        to="/"
        className="text-xl font-bold tracking-widest hover:opacity-80 transition-opacity"
      >
        AURORA<span className="text-indigo-400">STUDIO</span>
      </Link>

      {/* Navigation Menu Items */}
      <div className="flex items-center gap-8 glass px-6 py-2.5 rounded-full text-lg font-semibold border border-sea-salt/20 shadow-lg">

        <Link
          to="/"
          className="text-raisin-black-800 hover:text-sea-salt transition tracking-wide"
        >
          Home
        </Link>

        <Link
          to="/about"
          className="text-indigo-400 font-bold transition tracking-wide"
        >
          About
        </Link>

        <Link
          to="/products"
          className="text-raisin-black-800 hover:text-sea-salt transition tracking-wide"
        >
          Products
        </Link>

        <Link
          to="/portfolio"
          className="text-raisin-black-800 hover:text-sea-salt transition tracking-wide"
        >
          Portfolio
        </Link>

        <Link
          to="/contact"
          className="text-raisin-black-800 hover:text-sea-salt transition tracking-wide"
        >
          Contact
        </Link>

      </div>

      <div className="flex items-center gap-4 glass p-1 rounded-full px-4 border border-sea-salt/20 shadow-lg">
        <button aria-label="Button"
          onClick={() => setLang('id')}
          className={`text-sm font-bold transition-opacity cursor-pointer ${lang === 'id' ? 'opacity-100' : 'opacity-50'}`}
        >
          ID
        </button>
        <div className="w-[1px] h-3 bg-sea-salt/20"></div>
        <button aria-label="Button"
          onClick={() => setLang('en')}
          className={`text-sm font-bold transition-opacity cursor-pointer ${lang === 'en' ? 'opacity-100' : 'opacity-50'}`}
        >
          EN
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
