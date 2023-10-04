import { SidenavContainer } from "./styles";

import logoImg from "../../assets/logo.svg";
import { InputWSearchIcon } from "../Input";

import { BiSolidDashboard, BiTask, BiMenu } from "react-icons/bi";
import { MdInventory } from "react-icons/md";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export function Sidenav() {
  const navigate = useNavigate();

  const [isSidenavOn, setIsSidenavOn] = useState(window.innerWidth >= 768);
  const [selectedItem, setSelectedItem] = useState("");

  const handleToggleSidenav = () => {
    setIsSidenavOn(!isSidenavOn);
  };

  const menuItems = [
    { icon: <BiSolidDashboard />, text: "Painel" },
    { icon: <MdInventory />, text: "Inventário", path: "/admin/catalogo" },
    { icon: <BiTask />, text: "Pedidos", path: "/admin/pedidos" },
  ];

  function handleMenuItemClick(itemPath: string | undefined) {
    navigate(itemPath || "");
    setSelectedItem(itemPath || "");
  }

  useEffect(() => {
    setSelectedItem(window.location.pathname)
  }, []);

  return (
    <SidenavContainer>
      <header>
        <InputWSearchIcon placeholder="Pesquisar..." />
      </header>
      <nav className={`${isSidenavOn ? "active" : ""}`}>
        <div>
          <img src={logoImg} alt="Logo da Coffee Delivery" />
          <button
            className={`mobile-only ${isSidenavOn ? "active" : ""}`}
            onClick={handleToggleSidenav}
          >
            <BiMenu />
          </button>
        </div>
        <ul className={`${isSidenavOn ? "active" : ""}`}>
          {menuItems.map((item, index) => (
            <li
              key={index}
              onClick={() => handleMenuItemClick(item.path)}
              className={selectedItem === item.path ? "selected" : ""}
            >
              {item.icon}
              <span>{item.text}</span>
            </li>
          ))}
        </ul>
      </nav>
    </SidenavContainer>
  );
}
