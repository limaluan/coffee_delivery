import { HeaderContainer } from "./Header.styles";

import cartIcon from "../../assets/cart_icon.svg";
import gpsIcon from "../../assets/gps_icon_full.svg";
import logoImg from "../../assets/logo.svg"

export function Header() {
  return (
    <HeaderContainer>
      <img className="logo" src={logoImg} alt="Coffee Delivery" />
      <div className="user-section">
        <div className="local">
          <img src={gpsIcon} alt="Ícone Gps" />
          <span>Aracaju, SE</span>
        </div>
        <div className="cart">
          <img src={cartIcon} alt="Ícone Carrinho" />
        </div>
      </div>
    </HeaderContainer>
  );
}
