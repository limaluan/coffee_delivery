import { SidenavContainer } from "./styles";

import { LuLayoutList } from "react-icons/lu";
import { RiFileList3Line } from "react-icons/ri";
import { RxExit } from "react-icons/rx";
import {
  AiOutlineBarChart,
  AiOutlineMenu,
  AiOutlineClose,
} from "react-icons/ai";

import logoImg from "../../../assets/logo.svg";
import { Link } from "react-router-dom";
import { useRef, useState } from "react";

export function Sidenav() {
  const menuButton = useRef<HTMLButtonElement>(null);
  const sidenav = useRef<HTMLDivElement>(null);

  const [sidenavIsOn, setSidenavIsOn] = useState(false);

  const toggleSidenav = () => {
    if (!sidenavIsOn) {
      setSidenavIsOn(true);
      if (sidenav.current) {
        sidenav.current.style.left = "0";
      }
    } else {
      setSidenavIsOn(false);
      if (sidenav.current) {
        sidenav.current.style.left = "-25rem";
      }
    }
  };

  window.addEventListener("resize", () => {
    console.log("foi");
    console.log(window.innerWidth);
    if (window.innerWidth > 768) {
      setSidenavIsOn(true);
      if (sidenav.current) {
        sidenav.current.style.left = "0";
      }
    }
  });

  return (
    <SidenavContainer ref={sidenav}>
      <div className="header mobile-only">
        <button ref={menuButton} onClick={toggleSidenav}>
          {sidenavIsOn ? <AiOutlineClose /> : <AiOutlineMenu />}
        </button>
        <img className="logo" src={logoImg} alt="Logo da Coffee Delivery" />
      </div>

      <img
        className="logo desktop-only"
        src={logoImg}
        alt="Logo da Coffee Delivery"
      />

      <ul className="nav-menu">
        <p className="sub-title">Gerenciamento</p>
        <li className="nav-item">
          <Link to={"/admin/pedidos"}>
            <RiFileList3Line />
            Pedidos
          </Link>
        </li>
        <li className="nav-item">
          <Link to={""}>
            <LuLayoutList />
            Catálogo
          </Link>
        </li>
        <li className="nav-item">
          <Link to={""}>
            <AiOutlineBarChart />
            Estatísticas
          </Link>
        </li>
      </ul>

      <Link to={""} onClick={() => (window.location.href = "/")}>
        <RxExit /> Voltar
      </Link>
    </SidenavContainer>
  );
}
