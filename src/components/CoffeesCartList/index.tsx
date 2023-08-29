import { formatPrice } from "../../utils/formatPrice";
import { CoffeesListContainer } from "./styles";
import { useAppDispatch, useAppSelector } from "../../hooks/useTypedSelector";
import {
  addItemToCart,
  removeItemFromCart,
  removeSingleItemFromCart,
} from "../../store/cart/cartSlice";
import { Counter } from "../Counter";

export function CoffeesCartList() {
  const dispatch = useAppDispatch();

  const { cartItems } = useAppSelector((state) => state.cart);

  return (
    <CoffeesListContainer>
      <h2 className="titles">Cafés Selecionados</h2>

      <div className="coffees-selected">
        {cartItems.length >= 1 ? (
          cartItems.map((coffee) => (
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

                <Counter.Root
                  key={coffee.idProduto}
                  quantity={coffee.quantidade}
                  onClickMinus={() =>
                    dispatch(removeSingleItemFromCart(coffee))
                  }
                  onClickPlus={() =>
                    dispatch(addItemToCart({ coffee, quantityToAdd: 1 }))
                  }
                >
                  <Counter.RemoveButton
                    key={coffee.idProduto}
                    onClickRemove={() => dispatch(removeItemFromCart(coffee))}
                  />
                </Counter.Root>
              </div>
            </div>
          ))
        ) : (
          <p className="empty-cart-msg">Seu carrinho ainda está vazio...</p>
        )}

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

        <button className="confirm-button" disabled={cartItems.length < 1}>
          CONFIRMAR PEDIDO
        </button>
      </div>
    </CoffeesListContainer>
  );
}
