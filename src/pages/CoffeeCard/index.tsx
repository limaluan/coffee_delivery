import { CoffeeCardContainer } from "./styles";

import CoffeePlaceholderImg from "../../assets/coffee_placeholder.svg";
import CartImg from "../../assets/cart_icon.svg";
import { useState } from "react";

export function CoffeeCard() {

  const [ itemsAmount, setItemsAmount ] = useState(1);
  
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
            <div className="quantity">
              <button onClick={() => itemsAmount >= 2 && setItemsAmount(oldAmount => oldAmount - 1)}>
                <span>-</span>
              </button>
              
              <span>{itemsAmount}</span>

              <button onClick={() => setItemsAmount(oldAmount => oldAmount + 1)}><span>+</span></button>
            </div>
            
            <button className="cart-button" onClick={() => console.log(itemsAmount)}>
              <img src={CartImg} alt="Carrinho de Compra" />
            </button>
          </div>

        </div>
      </div>
    </CoffeeCardContainer>
  );
}
