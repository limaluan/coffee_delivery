import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/useTypedSelector";
import { CoffeeCard } from "../CoffeeCard";
import { OurCoffeesContainer } from "./styles";
import { getProducts } from "../../../features/products/productsSlice";

export function OurCoffees() {
  const dispatch = useAppDispatch();

  const products = useAppSelector((state) => state.products.products);

  useEffect(() => {
    dispatch(getProducts()).then((response) => console.log(response.payload));
  }, []);

  return (
    <OurCoffeesContainer>
      <h2 className="title-section">Nossos Cafés</h2>

      {products.map((product) => (
        <CoffeeCard
          descricao={product.descricao}
          idProduto={product.idProduto}
          nome={product.nome}
          preco={product.preco}
          tipo={product.tipo}
          key={product.idProduto}
        />
      ))}
    </OurCoffeesContainer>
  );
}
