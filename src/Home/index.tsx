import { HomeContainer } from "./Home.styles";

export function Home() {
  return (
    <HomeContainer>
      <section>
        <h1>Encontre o café perfeito para qualquer hora do dia</h1>
        <p>
          Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
          hora
        </p>

        <img className="coffee mobile-only" src="./src/assets/coffee.svg" alt="Coffee" />
        <div className="items">
          <div className="item">
            <img src="./src/assets/cart_circle_icon.svg" alt="" />
            <span>Compra simples e segura</span>
          </div>
          <div className="item">
            <img src="./src/assets/box_icon.svg" alt="" />
            <span>Embalagem mantém o café intacto</span>
          </div>
          <div className="item">
            <img src="./src/assets/time_icon.svg" alt="" />
            <span>Entrega rápida e rastreada</span>
          </div>
          <div className="item">
            <img src="./src/assets/coffee_icon.svg" alt="" />
            <span>O café chega fresquinho até você</span>
          </div>
        </div>
      </section>

      <img className="coffee desktop-only" src="./src/assets/coffee.svg" alt="Coffee" />
    </HomeContainer>
  );
}
