// components/Header.tsx
"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#1E293B] text-[#EFC349] shadow-md pr-4 ">
      <div className="container-default flex items-center justify-between py-2 mx-auto px-4 md:px-8">
        {/* Logo e nome */}
        <div className="flex items-center gap-2">
          <Image
            src="/logoPet.webp"
            alt="Logo Pet"
            width={40}
            height={40}
            className="sm:w-[60px] sm:h-[60px]"
          />
          <span className="font-bold text-2xl sm:text-4xl text-[#FDF6EC]">
            Love<span className="text-[#FFD449]">Pet</span>
          </span>
        </div>

        {/* Menu hambúrguer */}
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle Menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Navegação */}
        <nav
          className={`${
            open ? "block" : "hidden"
          } absolute top-full z-50 left-0 w-full bg-black/90 md:static md:flex md:items-center md:gap-6 md:bg-transparent md:w-auto p-4 md:p-0`}
        >
          <Link
            href="/"
            className="block py-2 md:py-0 hover:underline "
            onClick={() => setOpen(false)}
          >
            Início
          </Link>
          <Link
            href="#about"
            className="block py-2 md:py-0 hover:underline"
            onClick={() => setOpen(false)}
          >
            Sobre
          </Link>
          <Link
            href="#services"
            className="block py-2 md:py-0 hover:underline"
            onClick={() => setOpen(false)}
          >
            Serviços
          </Link>
          <Link
            href="#contact"
            className="block py-2 md:py-0 hover:underline"
            onClick={() => setOpen(false)}
          >
            Contato
          </Link>
        </nav>
      </div>
    </header>
  );
}
