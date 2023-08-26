import trashIconImg from "../../assets/trash_icon.svg";

import { formatPrice } from "../../utils/formatPrice";
import { CoffeesListContainer } from "./styles";
import { useAppDispatch, useAppSelector } from "../../hooks/useTypedSelector";
import {
  addItemToCart,
  removeItemFromCart,
  removeSingleItemFromCart,
} from "../../store/cart/cartSlice";

export function CoffeesCartList() {
  const dispatch = useAppDispatch();

  const { cartItems } = useAppSelector((state) => state.cart);

  return (
    <CoffeesListContainer>
      <h2 className="titles">Cafés Selecionados</h2>

      <div className="coffees-selected">
        {cartItems.map((coffee) => (
          <div className="coffee-card" key={coffee.idProduto}>
            <img
              className="coffee-img"
              src={`data:image/png;base64, ${coffee.imagem}`}
              alt="Imagem do café"
            />
            <div className="coffee-info">
              <div className="info-header">
                <p className="coffee-name">{coffee.nome}</p>
                <p className="coffee-price">
                  R$ {formatPrice(coffee.preco * coffee.quantidade)}
                </p>
              </div>

              <div className="info-buttons">
                <div className="counter">
                  <button
                    onClick={() => dispatch(removeSingleItemFromCart(coffee))}
                  >
                    <span>-</span>
                  </button>

                  <span>{coffee.quantidade}</span>

                  <button
                    onClick={() =>
                      dispatch(addItemToCart({ coffee, quantityToAdd: 1 }))
                    }
                  >
                    <span>+</span>
                  </button>
                </div>
                <button
                  className="remove-button"
                  onClick={() => dispatch(removeItemFromCart(coffee))}
                >
                  <img src={trashIconImg} alt="Ícone de lixeira" />
                  <span>Remover</span>
                </button>
              </div>
            </div>
          </div>
        ))}

        <div className="order-info">
          <p>Total de Itens</p>
          <p>
            R$
            {formatPrice(
              cartItems.reduce(
                (total, coffee) => total + coffee.preco * coffee.quantidade,
                0
              )
            )}
          </p>
          <p>Entrega</p>
          <p>R$ 3,50</p>
          <p className="total">Total</p>
          <p className="total">
            R${" "}
            {formatPrice(
              cartItems.reduce(
                (total, coffee) => total + coffee.preco * coffee.quantidade,
                3.5
              )
            )}
          </p>
        </div>

        <button className="confirm-button">CONFIRMAR PEDIDO</button>
      </div>
    </CoffeesListContainer>
  );
}
