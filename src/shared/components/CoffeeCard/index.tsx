import { CoffeeCardContainer } from "./styles";

import CartImg from "../../../assets/cart_icon.svg";
import { Counter } from "../Counter";
import { IProductsData } from "../../types";
import { api } from "../../services/api";
import { useEffect, useState } from "react";

export function CoffeeCard(product: IProductsData) {
  const [coffeeImg, setCoffeeImg] = useState<any>();

  useEffect(() => {
    api
      .get(`/produto/buscarImagem?id=${product.idProduto}`)
      .then((response) => setCoffeeImg(response.data));
  }, []);

  return (
    <>
      {coffeeImg && (
        <CoffeeCardContainer>
          <img
            className="coffee-img"
            src={`data:image/png;base64, ${coffeeImg}`}
            alt="Imagem do Café"
          />

          <div className="coffee-card-content">
            <p className="coffee-tag">Tradicional</p>
            <h3 className="coffee-name">{product.nome}</h3>
            <p className="coffee-description">{product.descricao}</p>

            <div className="coffee-prices">
              <p>
                R$<b>{product.preco}</b>
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
      )}
    </>
  );
}
