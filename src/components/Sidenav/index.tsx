import { SidenavContainer } from "./styles";

import logoImg from "../../assets/logo.svg";
import { InputWSearchIcon } from "../Input";

import { BiSolidDashboard, BiTask, BiMenu } from "react-icons/bi";
import { MdInventory } from "react-icons/md";
import { useState } from "react";

export function Sidenav() {
  const [isSidenavOn, setIsSidenavOn] = useState(window.innerWidth >= 768);

  const handleToggleSidenav = () => {
    setIsSidenavOn(!isSidenavOn);
  };

  const menuItems = [
    { icon: <BiSolidDashboard />, text: "Painel" },
    { icon: <MdInventory />, text: "Inventário" },
    { icon: <BiTask />, text: "Pedidos" },
  ];

  return (
    <SidenavContainer>
      <header>
        <InputWSearchIcon placeholder="Pesquisar..." />
      </header>
      <nav>
        <div>
          <img src={logoImg} alt="Logo da Coffee Delivery" />
          <button
            className={`mobile-only ${isSidenavOn ? 'active' : ''}`}
            onClick={handleToggleSidenav}
          >
            <BiMenu />
          </button>
        </div>
        <ul className={`${isSidenavOn ? 'active' : ''}`}>
          {menuItems.map((item, index) => (
            <li key={index}>
              {item.icon}
              <span>{item.text}</span>
            </li>
          ))}
        </ul>
      </nav>
    </SidenavContainer>
  );
}
