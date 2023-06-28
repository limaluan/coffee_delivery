import { HomeContainer } from "./styles";

import cartIcon from "../../assets/cart_circle_icon.svg";
import boxIcon from "../../assets/box_icon.svg";
import timeIcon from "../../assets/time_icon.svg";
import coffeeIcon from "../../assets/coffee_icon.svg";
import coffeeImg from "../../assets/coffee.svg";
import { OurCoffees } from "../../shared/components/OurCoffees";

export function Home() {
  return (
    <>
      <HomeContainer>
        <section>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>

          <img className="coffee mobile-only" src={coffeeImg} alt="Coffee" />
          <div className="items">
            <div className="item">
              <img src={cartIcon} alt="" />
              <span>Compra simples e segura</span>
            </div>
            <div className="item">
              <img src={boxIcon} alt="" />
              <span>Embalagem mantém o café intacto</span>
            </div>
            <div className="item">
              <img src={timeIcon} alt="" />
              <span>Entrega rápida e rastreada</span>
            </div>
            <div className="item">
              <img src={coffeeIcon} alt="" />
              <span>O café chega fresquinho até você</span>
            </div>
          </div>
        </section>

        <img className="coffee desktop-only" src={coffeeImg} alt="Coffee" />
      </HomeContainer>
      <OurCoffees />
    </>
  );
}
