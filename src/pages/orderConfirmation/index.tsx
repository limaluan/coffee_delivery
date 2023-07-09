import { OrderConfirmationContainer } from "./styles";

import scooterManImg from "../../assets/scooter_man.svg";
import localIcon from "../../assets/local_icon.svg";
import paymentIcon from "../../assets/payment_icon.svg";
import timeIcon from "../../assets/time_icon.svg";

export function OrderConfirmation() {
  return (
    <OrderConfirmationContainer>
      <section>
        <div className="header">
          <h1>
            Uhu! Pedido confirmado!
          </h1>
          <p>Agora é só aguardar que logo o café chegará a você</p>
        </div>

        <div className="order-data">
          <div className="item">
            <img src={localIcon} alt="Ícone de um marcador de GPS" />
            <div>
              <p>
                Entrega em <b>Rua João Daniel Martinelli, 102</b>
              </p>
              <p>Farrapos - Porto Alegre, RS</p>
            </div>
          </div>
          <div className="item">
            <img src={timeIcon} alt="Ícone de um relógio" />
            <div>
              <p>Previsão de entrega</p>
              <p>
                <b>20 min - 30 min</b>
              </p>
            </div>
          </div>
          <div className="item">
            <img src={paymentIcon} alt="Ícone de dinheiro" />
            <div>
              <p>Pagamento na entrega</p>
              <p>
                <b>Cartão de Crédito</b>
              </p>
            </div>
          </div>
        </div>
      </section>

      <img
        className="illustration"
        src={scooterManImg}
        alt="Entregador em uma lambreta"
      />
    </OrderConfirmationContainer>
  );
}
