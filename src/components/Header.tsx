import { HeaderContainer } from "./Header.styles";

export function Header() {
  return (
    <HeaderContainer>
      <img className="logo" src="./src/assets/logo.svg" alt="Coffee Delivery" />
      <div className="user-section">
        <div className="local">
          <img src="./src/assets/gps_icon_full.svg" alt="Ícone Gps" />
          <span>Aracaju, SE</span>
        </div>
        <div className="cart">
          <img src="./src/assets/cart_icon.svg" alt="Ícone Carrinho" />
        </div>
      </div>
    </HeaderContainer>
  );
}
