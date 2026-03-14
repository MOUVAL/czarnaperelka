"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`text-white fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "shadow-2xl opacity-100" : "opacity-0 pointer-events-none"
      }`}
      style={{
        backgroundImage: 'url(/images/menu.webp)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        boxShadow: scrolled ? '0 8px 30px rgba(0,0,0,0.5)' : 'none'
      }}
    >
      <nav className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
        <Link href="/" className="font-serif text-xl px-4 py-2 bg-stone-800/80 rounded border border-amber-600/50 hover:bg-amber-700/80 hover:border-amber-400 transition-colors drop-shadow-md text-amber-400">
          Czarna Perła
        </Link>
        
        <button className="md:hidden bg-stone-800/80 px-3 py-1 rounded border border-amber-600/50" onClick={() => setOpen(!open)}>
          <span className="text-lg">{open ? "✕" : "☰"}</span>
        </button>

        <div className="hidden md:flex gap-4">
          <Link href="/" className="px-4 py-2 bg-stone-800/80 rounded border border-amber-600/50 hover:bg-amber-700/80 hover:border-amber-400 transition-colors drop-shadow-md">Strona główna</Link>
          <Link href="/o-nas" className="px-4 py-2 bg-stone-800/80 rounded border border-amber-600/50 hover:bg-amber-700/80 hover:border-amber-400 transition-colors drop-shadow-md">O nas</Link>
          <Link href="/kontakt" className="px-4 py-2 bg-stone-800/80 rounded border border-amber-600/50 hover:bg-amber-700/80 hover:border-amber-400 transition-colors drop-shadow-md">Kontakt</Link>
        </div>
      </nav>

      {open && (
        <div className="md:hidden px-6 py-4 space-y-3">
          <Link href="/" className="block px-4 py-2 bg-stone-800/90 rounded border border-amber-600/50 hover:bg-amber-700/80 text-center" onClick={() => setOpen(false)}>Strona główna</Link>
          <Link href="/o-nas" className="block px-4 py-2 bg-stone-800/90 rounded border border-amber-600/50 hover:bg-amber-700/80 text-center" onClick={() => setOpen(false)}>O nas</Link>
          <Link href="/kontakt" className="block px-4 py-2 bg-stone-800/90 rounded border border-amber-600/50 hover:bg-amber-700/80 text-center" onClick={() => setOpen(false)}>Kontakt</Link>
        </div>
      )}
    </header>
  );
}
