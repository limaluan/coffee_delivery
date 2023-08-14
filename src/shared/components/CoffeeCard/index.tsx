import { CoffeeCardContainer } from "./styles";

import CartImg from "../../../assets/cart_icon.svg";
import { Counter } from "../Counter";
import { IProductType } from "../../types";
import { formatPrice } from "../../utils/formatPrice";

export function CoffeeCard(product: IProductType) {
  return (
    <CoffeeCardContainer>
      <img
        className="coffee-img"
        src={`data:image/png;base64, ${product.imagem}`}
        alt="Imagem do Café"
      />

      <div className="coffee-card-content">
        <p className="coffee-tag">Tradicional</p>
        <h3 className="coffee-name">{product.nome}</h3>
        <p className="coffee-description">{product.descricao}</p>

        <div className="coffee-prices">
          <p>
            R$ <b>{formatPrice(product.preco)}</b>
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
