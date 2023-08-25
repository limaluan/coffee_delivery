import { CatalogContainer } from "./styles";
import { useGetProductsQuery } from "../../../store/products/productsSlice";

import { FiEdit2 } from "react-icons/fi";

import trashIconImg from "../../../assets/trash_icon.svg";
import { formatPrice } from "../../../utils/formatPrice";

export function Catalog() {
  const { data: products } = useGetProductsQuery();

  return (
    <CatalogContainer>
      <h1>Catálogo</h1>

      <section className="coffees-container">
        {products?.map((product) => (
          <>
            <div className="coffee-card">
              <img
                className="coffee-img"
                src={`data:image/png;base64, ${product.imagem}`}
                alt="Imagem do Café"
              />
              <div className="coffee-info">
                <div className="info-header">
                  <p className="coffee-name">{product.nome}</p>
                  <p className="coffee-price">
                    R$ {formatPrice(product.preco)}
                  </p>
                </div>
                <p className="coffee-status">Ativo</p>
                <div className="info-buttons">
                  <button className="remove-button">
                    <img src={trashIconImg} alt="Ícone de lixeira" />
                    <span>Remover</span>
                  </button>
                  <button className="remove-button">
                    <FiEdit2 style={{ color: "var(--purple)" }} />
                    <span>Editar</span>
                  </button>
                </div>
              </div>
            </div>
            <hr />
          </>
        ))}
      </section>
    </CatalogContainer>
  );
}
