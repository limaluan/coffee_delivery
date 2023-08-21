import { SidenavContainer } from "./styles";

import logoImg from "../../assets/logo.svg";
import { InputWSearchIcon } from "../Input";

import { BiSolidDashboard, BiTask, BiMenu } from "react-icons/bi";
import { MdInventory } from "react-icons/md";
import { useRef, useState } from "react";

export function Sidenav() {
  const sidenavMenu = useRef<HTMLUListElement>(null);

  const [isSidenavOn, setIsSidenavOn] = useState(false);

  const handleToggleSidenav = () => {
    if (isSidenavOn) {
      if (sidenavMenu.current) {
        sidenavMenu.current.style.transform = "translateX(-100%)";
      }
      return setIsSidenavOn(false);
    } else {
      if (sidenavMenu.current) {
        sidenavMenu.current.style.transform = "translateX(0)";
      }
      return setIsSidenavOn(true);
    }
  };

  window.addEventListener("resize", () => {
    if (window.innerWidth > 768) {
      setIsSidenavOn(true);
      if (sidenavMenu.current) {
        sidenavMenu.current.style.transform = "translateX(0)";;
      }
    }
  });
  
  return (
    <SidenavContainer>
      <header>
        <InputWSearchIcon placeholder="Pesquisar..." />
      </header>
      <nav>
        <div>
          <img src={logoImg} alt="Logo da Coffee Delivery" />
          <button className="mobile-only" onClick={handleToggleSidenav}>
            <BiMenu />
          </button>
        </div>
        <ul ref={sidenavMenu}>
          <li>
            <BiSolidDashboard />
            <span>Painel</span>
          </li>
          <li>
            <MdInventory />
            <span>Inventário</span>
          </li>
          <li>
            <BiTask />
            <span>Pedidos</span>
          </li>
        </ul>
      </nav>
    </SidenavContainer>
  );
}
