import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="text-2xl font-extrabold tracking-wide text-drblue">
          DR9<span className="text-white">AI</span>
        </div>
        <nav className="hidden md:flex gap-8 text-sm font-medium">
          <a href="#inicio" className="hover:text-drblue transition">Início</a>
          <a href="#solucoes" className="hover:text-drblue transition">Soluções</a>
          <a href="#sobre" className="hover:text-drblue transition">Sobre</a>
          <a href="#contato" className="hover:text-drblue transition">Contato</a>
        </nav>
        <a
          href="https://t.me/DR9AI_Support?start=site"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-drblue text-black px-5 py-2 rounded-xl font-semibold hover:opacity-90 transition"
        >
          Fale Conosco
        </a>
      </div>
    </header>
  );
};

export default Navbar;