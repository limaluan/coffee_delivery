import { CoffeeCardContainer } from "./styles";

import CartImg from "../../assets/cart_icon.svg";
import { ICoffeeType } from "../../types";
import { formatPrice } from "../../utils/formatPrice";
import { useState } from "react";
import { useAppDispatch } from "../../hooks/useTypedSelector";
import { addItemToCart } from "../../store/cart/cartSlice";
import { ToastContainer, toast } from "react-toastify";

export function CoffeeCard(product: ICoffeeType) {
  const dispatch = useAppDispatch();

  const [coffeeQuantity, setCoffeeQuantity] = useState(1);

  const handleAddToCart = () => {
    dispatch(addItemToCart({ coffee: product, quantityToAdd: coffeeQuantity }));
    setCoffeeQuantity(1);
    return toast.success(`${product.nome} foi adicionado ao carrinho!`, {
      autoClose: 2000,
    });
  };
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
            <div className="counter">
              <button
                onClick={() => {
                  coffeeQuantity >= 2 &&
                    setCoffeeQuantity((oldAmount) => oldAmount - 1);
                }}
              >
                <span>-</span>
              </button>

              <span>{coffeeQuantity}</span>

              <button
                onClick={() => {
                  setCoffeeQuantity((oldAmount) => oldAmount + 1);
                }}
              >
                <span>+</span>
              </button>
            </div>
            <button className="cart-button" onClick={handleAddToCart}>
              <img src={CartImg} alt="Carrinho de Compra" />
            </button>
          </div>
        </div>
      </div>
      <ToastContainer />
    </CoffeeCardContainer>
  );
}
