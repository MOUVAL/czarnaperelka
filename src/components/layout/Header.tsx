"use client";

import Link from "next/link";
import { useState } from "react";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header 
      className="text-white fixed top-0 left-0 right-0 z-50"
      style={{
        backgroundImage: 'url(/images/strip.jpg)',
        backgroundSize: 'auto 100%',
        backgroundRepeat: 'repeat-x',
        backgroundPosition: 'top'
      }}
    >
      <nav className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between bg-stone-900/60">
        <Link href="/" className="font-serif text-xl text-amber-400">
          Czarna Perła
        </Link>
        
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          <span className="text-2xl">{open ? "✕" : "☰"}</span>
        </button>

        <div className="hidden md:flex gap-8 text-sm">
          <Link href="/" className="hover:text-amber-400">Strona główna</Link>
          <Link href="/o-nas" className="hover:text-amber-400">O nas</Link>
          <Link href="/kontakt" className="hover:text-amber-400">Kontakt</Link>
        </div>
      </nav>

      {open && (
        <div className="md:hidden bg-stone-900/90 px-6 py-4 space-y-3">
          <Link href="/" className="block hover:text-amber-400" onClick={() => setOpen(false)}>Strona główna</Link>
          <Link href="/o-nas" className="block hover:text-amber-400" onClick={() => setOpen(false)}>O nas</Link>
          <Link href="/kontakt" className="block hover:text-amber-400" onClick={() => setOpen(false)}>Kontakt</Link>
        </div>
      )}
    </header>
  );
}
