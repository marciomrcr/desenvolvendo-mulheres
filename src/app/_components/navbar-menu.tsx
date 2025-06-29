import React from "react";

// Tipagem das props esperadas pelo menu
interface NavbarMenuProps {
  open: boolean;
  menuRef: React.RefObject<HTMLUListElement | null>; // Aceita também null
  handleMenuClick: () => void;
  menuItems: { label: string; href: string }[];
}

// Componente responsável por renderizar o menu de navegação
const NavbarMenu: React.FC<NavbarMenuProps> = ({
  open,
  menuRef,
  handleMenuClick,
  menuItems,
}) => {
  return (
    // Menu de navegação (ul)
    <ul
      id="navbar-menu"
      ref={menuRef}
      className={`fixed md:static top-16 right-0 md:top-auto md:right-auto bg-white md:bg-transparent flex-col md:flex-row md:flex gap-6 md:gap-8 list-none m-0 p-6 md:p-0 shadow-lg md:shadow-none transition-all duration-300 ease-in-out ${
        open ? "flex" : "hidden md:flex"
      }`}
    >
      {/* Renderiza dinamicamente os itens do menu a partir do array menuItems */}
      {menuItems.map((item) => (
        <li key={item.href}>
          <a
            href={item.href}
            className="text-gray-800 font-medium hover:text-[#e57373] transition-colors"
            onClick={handleMenuClick}
          >
            {item.label}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default NavbarMenu;
