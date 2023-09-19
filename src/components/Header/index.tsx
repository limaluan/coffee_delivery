import { HeaderContainer } from "./styles";

import cartIcon from "../../assets/cart_icon.svg";
import gpsIcon from "../../assets/gps_icon_full.svg";
import logoImg from "../../assets/logo.svg";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/useTypedSelector";
import { useEffect } from "react";
import { loadCart } from "../../store/cart/cartSlice";

export function Header() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const { cartItems } = useAppSelector((state) => state.cart);

  useEffect(() => {
    dispatch(loadCart());
  }, []);

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
        <button className="cart" onClick={() => navigate("checkout")}>
          <img src={cartIcon} alt="Ícone Carrinho" />
          {cartItems.length >= 1 && (
            <div className="cart-counter">
              <span>{cartItems.length}</span>
            </div>
          )}
        </button>
      </div>
    </HeaderContainer>
  );
}
