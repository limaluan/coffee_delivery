import { CoffeeCard } from "../CoffeeCard";
import { OurCoffeesContainer } from "./styles";

export function OurCoffees() {
  return (
    <OurCoffeesContainer>
      <h2 className="title-section">Nossos Cafés</h2>

      <CoffeeCard/>
      <CoffeeCard/>
      <CoffeeCard/>
      <CoffeeCard/>
    </OurCoffeesContainer>
  )
}
