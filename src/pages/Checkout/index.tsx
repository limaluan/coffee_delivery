import { CheckoutContainer } from "./styles";

import gpsIconImg from "../../assets/gps_icon.svg";
import creditCardIconImg from "../../assets/credit_card.svg";
import dollarIconImg from "../../assets/dollar_icon.svg";
import bankIconImg from "../../assets/bank.svg";
import coffeeImg from "../../assets/coffee_placeholder.svg";
import moneyIconImg from "../../assets/money_icon.svg";
import trashIconImg from "../../assets/trash_icon.svg";

import { Counter } from "../../components/Counter";
import { useState } from "react";
import { Input } from "../../components/Input/styles";

interface IPaymentMethod {
  method: null | "credit" | "debit" | "money";
}

export function Checkout() {
  const [payment, setPayment] = useState<IPaymentMethod>({
    method: null,
  });

  return (
    <CheckoutContainer>
      <section className="complete-order">
        <h2 className="titles">Complete seu pedido</h2>

        <div className="address-container">
          <div className="address-header">
            <img src={gpsIconImg} alt="Ícone de um marcador de GPS" />
            <div>
              <p>Endereço de Entrega</p>
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </div>
          </div>

          <form className="address-form">
            <Input type="text" placeholder="CEP" />
            <Input type="text" placeholder="Rua" />
            <Input type="text" placeholder="Número" />
            <Input type="text" placeholder="Complemento" />
            <Input type="text" placeholder="Bairro" />
            <Input type="text" id="city-input" placeholder="Cidade" />
            <Input type="text" id="uf-input" placeholder="UF" />
          </form>
        </div>

        <div className="payment-container">
          <div className="payment-header">
            <img src={moneyIconImg} alt="Ícone de um cifrão" />
            <div>
              <p>Pagamento</p>
              <p>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </p>
            </div>
          </div>

          <div className="payment-methods">
            <button
              className={payment.method === "credit" ? "selected" : ""}
              onClick={() => setPayment({ method: "credit" })}
            >
              <img src={creditCardIconImg} alt="Imagem de cartão de Crédito" />
              <span>CARTÃO DE CRÉDITO</span>
            </button>

            <button
              className={payment.method === "debit" ? "selected" : ""}
              onClick={() => setPayment({ method: "debit" })}
            >
              <img src={bankIconImg} alt="Imagem de um banco" />
              <span>CARTÃO DE DÉDITO</span>
            </button>

            <button
              className={payment.method === "money" ? "selected" : ""}
              onClick={() => setPayment({ method: "money" })}
            >
              <img src={dollarIconImg} alt="Imagem de uma cédula" />
              <span>DINHEIRO</span>
            </button>
          </div>
        </div>
      </section>

      <section className="coffees-container">
        <h2 className="titles">Cafés Selecionados</h2>

        <div className="coffees-selected">
          <div className="coffee-card">
            <img className="coffee-img" src={coffeeImg} alt="Imagem do café" />
            <div className="coffee-info">
              <div className="info-header">
                <p className="coffee-name">Expresso Tradicional</p>
                <p className="coffee-price">R$ 9,90</p>
              </div>

              <div className="info-buttons">
                <Counter />
                <button className="remove-button">
                  <img src={trashIconImg} alt="Ícone de lixeira" />
                  <span>Remover</span>
                </button>
              </div>
            </div>
          </div>

          <div className="coffee-card">
            <img className="coffee-img" src={coffeeImg} alt="Imagem do café" />
            <div className="coffee-info">
              <div className="info-header">
                <p className="coffee-name">Expresso Tradicional</p>
                <p className="coffee-price">R$ 9,90</p>
              </div>

              <div className="info-buttons">
                <Counter />
                <button className="remove-button">
                  <img src={trashIconImg} alt="Ícone de lixeira" />
                  <span>Remover</span>
                </button>
              </div>
            </div>
          </div>

          <div className="order-info">
            <p>Total de Itens</p>
            <p>R$ 29,70</p>
            <p>Entrega</p>
            <p>R$ 3,50</p>
            <p className="total">Total</p>
            <p className="total">R$ 33,20</p>
          </div>

          <button className="confirm-button">CONFIRMAR PEDIDO</button>
        </div>
      </section>
    </CheckoutContainer>
  );
}
