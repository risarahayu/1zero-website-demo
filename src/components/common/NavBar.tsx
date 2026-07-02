import React from 'react';

interface NavBarProps {
  lang: 'id' | 'en';
  setLang: React.Dispatch<React.SetStateAction<'id' | 'en'>>;
}

const NavBar: React.FC<NavBarProps> = ({ lang, setLang }) => {
  return (
    <nav className="flex flex-col md:flex-row justify-between items-center px-10 py-6 max-w-7xl mx-auto gap-4">
      <a href="#home" className="text-xl font-bold tracking-widest hover:opacity-80 transition-opacity">
        AURORA<span className="text-indigo-400">STUDIO</span>
      </a>

      {/* Navigation Menu Items */}
      <div className="flex items-center gap-8 glass px-6 py-2.5 rounded-full text-lg font-semibold border border-white/10 shadow-lg">
        <a href="#home" className="text-gray-400 hover:text-white transition tracking-wide">Home</a>
        <a href="#about" className="text-indigo-400 font-bold transition tracking-wide">About</a>
        <a href="#products" className="text-gray-400 hover:text-white transition tracking-wide">Products</a>
        <a href="#portfolio" className="text-gray-400 hover:text-white transition tracking-wide">Portfolio</a>
        <a href="#contact" className="text-gray-400 hover:text-white transition tracking-wide">Contact</a>
      </div>

      <div className="flex items-center gap-4 glass p-1 rounded-full px-4 border border-white/10 shadow-lg">
        <button
          onClick={() => setLang('id')}
          className={`text-sm font-bold transition-opacity cursor-pointer ${lang === 'id' ? 'opacity-100' : 'opacity-50'}`}
        >
          ID
        </button>
        <div className="w-[1px] h-3 bg-white/20"></div>
        <button
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
