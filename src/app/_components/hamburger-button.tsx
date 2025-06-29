import React from "react";

// Tipagem das props esperadas pelo botão hambúrguer
interface HamburgerButtonProps {
  open: boolean;
  onClick: () => void;
  buttonRef: React.RefObject<HTMLButtonElement | null>; // Aceita também null
}

// Componente responsável por renderizar o botão hambúrguer
const HamburgerButton: React.FC<HamburgerButtonProps> = ({
  open,
  onClick,
  buttonRef,
}) => {
  return (
    // Botão hambúrguer para abrir/fechar o menu no mobile
    <button
      ref={buttonRef}
      className="flex flex-col gap-1.5 bg-transparent border-none cursor-pointer md:hidden focus:outline-none"
      aria-label="Abrir menu"
      aria-expanded={open}
      aria-controls="navbar-menu"
      onClick={onClick} // Alterna o estado do menu
    >
      {/* Três linhas do ícone hambúrguer */}
      <span className="w-7 h-0.5 bg-[#e57373] rounded"></span>
      <span className="w-7 h-0.5 bg-[#e57373] rounded"></span>
      <span className="w-7 h-0.5 bg-[#e57373] rounded"></span>
    </button>
  );
};

export default HamburgerButton;
