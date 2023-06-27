import { CoffeeCardContainer } from "./styles";

import CoffeePlaceholderImg from "../../../assets/coffee_placeholder.svg";
import CartImg from "../../../assets/cart_icon.svg";
import { Counter } from "../Counter";

export function CoffeeCard() {
  return (
    <CoffeeCardContainer>
      <img
        className="coffee-img"
        src={CoffeePlaceholderImg}
        alt="Imagem do Café"
      />

      <div className="coffee-card-content">
        <p className="coffee-tag">Tradicional</p>
        <h3 className="coffee-name">Expresso Tradicional</h3>
        <p className="coffee-description">
          O tradicional café feito com água quente e grãos moídos
        </p>

        <div className="coffee-prices">
          <p>
            R$<b>9,90</b>
          </p>

          <div className="coffee-quantity">
            <Counter />
            <button className="cart-button">
              <img src={CartImg} alt="Carrinho de Compra" />
            </button>
          </div>
        </div>
      </div>
    </CoffeeCardContainer>
  );
}
