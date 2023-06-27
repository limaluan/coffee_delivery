import { HeaderContainer } from "./styles";

import cartIcon from "../../../assets/cart_icon.svg";
import gpsIcon from "../../../assets/gps_icon_full.svg";
import logoImg from "../../../assets/logo.svg";
import { useNavigate } from "react-router-dom";

export function Header() {
  const navigate = useNavigate();

  return (
    <HeaderContainer>
      <button className="logo" onClick={() => navigate("/")}>
        <img src={logoImg} alt="Coffee Delivery" />
      </button>
      <div className="user-section">
        <div className="local">
          <img src={gpsIcon} alt="Ícone Gps" />
          <span>Aracaju, SE</span>
        </div>
        <button className="cart">
          <img
            src={cartIcon}
            alt="Ícone Carrinho"
            onClick={() => navigate("checkout")}
          />
        </button>
      </div>
    </HeaderContainer>
  );
}
