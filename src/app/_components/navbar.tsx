"use client";
// Importa o componente de imagem otimizada do Next.js
import Image from "next/image";
// Importa hooks do React para estado, referência e efeitos colaterais
import { useEffect, useRef, useState } from "react";
// Importa o componente de menu extraído
import NavbarMenu from "./navbar-menu";
// Importa o componente do botão hambúrguer extraído
import HamburgerButton from "./hamburger-button";

// Componente funcional Navbar
export default function Navbar() {
  // Estado para controlar se o menu está aberto ou fechado (usado no mobile)
  const [open, setOpen] = useState(false);
  // Referência para o elemento da lista do menu (ul)
  const menuRef = useRef<HTMLUListElement>(null);
  // Referência para o botão de abrir/fechar o menu (hambúrguer)
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Array de objetos representando os itens do menu de navegação
  const menuItems = [
    { label: "Início", href: "#home" },
    { label: "Sobre", href: "#about" },
    { label: "Serviços", href: "#services" },
    { label: "Contato", href: "#contact" },
  ];

  // Hook de efeito para fechar o menu ao clicar fora dele
  useEffect(() => {
    // Função que verifica se o clique foi fora do menu e do botão
    function handleClickOutside(event: MouseEvent) {
      if (
        open &&
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setOpen(false); // Fecha o menu
      }
    }
    // Adiciona o event listener ao montar
    document.addEventListener("mousedown", handleClickOutside);
    // Remove o event listener ao desmontar
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  // Função para fechar o menu ao clicar em algum item de navegação
  function handleMenuClick() {
    setOpen(false);
  }

  return (
    // Barra de navegação principal
    <nav className="flex items-center justify-between bg-white px-8 py-3 shadow-md font-sans relative z-50">
      {/* Logo e nome da marca */}
      <div className="flex items-center gap-2">
        {/* Imagem do logo */}
        <Image src="/logoPet.webp" alt="LovePet Logo" width={40} height={40} />
        {/* Nome estilizado da marca */}
        <span className="text-2xl font-bold text-[#e57373] tracking-wide">
          Love<span className="text-[#FFD449]">Pet</span>
        </span>
      </div>
      {/* Utiliza o componente HamburgerButton extraído, passando as props necessárias */}
      <HamburgerButton
        open={open}
        onClick={() => setOpen((prev) => !prev)}
        buttonRef={buttonRef}
      />
      {/* Utiliza o componente NavbarMenu extraído, passando as props necessárias */}
      <NavbarMenu
        open={open}
        menuRef={menuRef}
        handleMenuClick={handleMenuClick}
        menuItems={menuItems}
      />
    </nav>
  );
}
