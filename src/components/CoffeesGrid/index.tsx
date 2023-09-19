import { CoffeeCard } from "../CoffeeCard";
import { CoffeesGridContainer } from "./styles";
import { useGetProductsQuery } from "../../store/products/productsSlice";

import { Skeleton } from "../Skeleton";

export function CoffeesGrid() {
  const { data: products, isLoading } = useGetProductsQuery();

  return (
    <CoffeesGridContainer>
      <h2 className="title-section">Nossos Cafés</h2>

      {isLoading
        ? [...Array(9)].map((_, index) => <Skeleton type="card" key={index} />)
        : products?.map((product) => (
            <CoffeeCard
              descricao={product.descricao}
              idProduto={product.idProduto}
              nome={product.nome}
              preco={product.preco}
              tipo={product.tipo}
              key={product.idProduto}
              imagem={product.imagem}
            />
          ))}
    </CoffeesGridContainer>
  );
}
