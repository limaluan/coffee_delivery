import { CoffeeCard } from "../CoffeeCard";
import { CoffeesGridContainer } from "./styles";
import { useGetProductsQuery } from "../../../store/products/productsSlice";

export function CoffeesGrid() {
  const { data: products } = useGetProductsQuery();

  return (
    <CoffeesGridContainer>
      <h2 className="title-section">Nossos Cafés</h2>

      {products?.map((product) => (
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
