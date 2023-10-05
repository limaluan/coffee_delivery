import { CheckoutContainer } from "./styles";


import { useState } from "react";
import { useForm } from "react-hook-form";
import { api } from "../../services/api";
import { useAppSelector } from "../../hooks/useTypedSelector";

import { Input } from "../../components/Input/styles";
import { CoffeesCartList } from "../../components/CoffeesCartList";

import { IOrderType } from "../../types/order";
import { ToastContainer, toast } from "react-toastify";
import InputMask from "react-input-mask";

import gpsIconImg from "../../assets/gps_icon.svg";
import creditCardIconImg from "../../assets/credit_card.svg";
import dollarIconImg from "../../assets/dollar_icon.svg";
import bankIconImg from "../../assets/bank.svg";
import moneyIconImg from "../../assets/money_icon.svg";
import { AiOutlineUser } from "react-icons/ai";

interface IPaymentMethod {
  method: null | "CREDITO" | "DEBITO" | "DINHEIRO";
}

export function Checkout() {
  const [payment, setPayment] = useState<IPaymentMethod>({
    method: null,
  });

  const { cartItems } = useAppSelector((state) => state.cart);

  const { register, handleSubmit } = useForm();

  return (
    <CheckoutContainer>
      <form
        className="complete-order"
        onSubmit={handleSubmit(async (data, e) => {
          e?.preventDefault();
          console.log(data)

          if (!payment.method)
            return toast.error("Escolha uma forma de pagamento!", {
              autoClose: 1500,
            });

          const orderData: IOrderType = {
            cep: data.cep,
            rua: data.street,
            numero: data.number,
            complemento: data.addition,
            bairro: data.district,
            cidade: data.city,
            uf: data.uf,
            telefone: data.phone,
            nome: data.name,
            formaPagamento: payment.method,
            produto: cartItems.map(({ idProduto, quantidade }) => ({
              idProduto,
              qtProdutos: quantidade,
            })),
          };

          try {
            await api.post("/pedido/criar", orderData);
          } catch (e: any) {
            return console.log(e.message);
          }

          // return (window.location.href = `/confirmado`);
        })}
      >
        <h2 className="titles">Complete seu pedido</h2>

        <div className="form-container">
          <div className="form-header">
            <AiOutlineUser className="user-icon" />
            <div>
              <p>Seus dados</p>
              <p>
                Informe o seu nome e número de celular para podermos entrar em
                contato
              </p>
            </div>
          </div>

          <div className="client-form">
            <Input
              {...register("name")}
              type="text"
              placeholder="Nome"
              required
            />
            <InputMask
              {...register("phone")}
              required
              type="tel"
              mask="(99) 9 9999-9999"
              placeholder="(99) 9 9999-9999"
            />
          </div>
        </div>

        <div className="form-container">
          <div className="form-header">
            <img src={gpsIconImg} alt="Ícone de um marcador de GPS" />
            <div>
              <p>Endereço de Entrega</p>
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </div>
          </div>

          <div className="address-form">
            <InputMask
              {...register("cep")}
              type="text"
              placeholder="CEP"
              mask="99999-999"
              required
            />
            <Input
              {...register("street")}
              type="text"
              placeholder="Rua"
              required
            />
            <Input
              {...register("number")}
              type="number"
              placeholder="Número"
              required
            />
            <Input
              {...register("addition")}
              type="text"
              placeholder="Complemento"
              required
            />
            <Input
              {...register("district")}
              type="text"
              placeholder="Bairro"
              required
            />
            <Input
              {...register("city")}
              type="text"
              id="city-input"
              placeholder="Cidade"
              required
            />
            <Input
              {...register("uf")}
              type="text"
              id="uf-input"
              placeholder="UF"
              required
            />
          </div>
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
              className={payment.method === "CREDITO" ? "selected" : ""}
              onClick={() => setPayment({ method: "CREDITO" })}
              type="button"
            >
              <img src={creditCardIconImg} alt="Imagem de cartão de Crédito" />
              <span>CARTÃO DE CRÉDITO</span>
            </button>

            <button
              className={payment.method === "DEBITO" ? "selected" : ""}
              onClick={() => setPayment({ method: "DEBITO" })}
              type="button"
            >
              <img src={bankIconImg} alt="Imagem de um banco" />
              <span>CARTÃO DE DÉDITO</span>
            </button>

            <button
              className={payment.method === "DINHEIRO" ? "selected" : ""}
              onClick={() => setPayment({ method: "DINHEIRO" })}
              type="button"
            >
              <img src={dollarIconImg} alt="Imagem de uma cédula" />
              <span>DINHEIRO</span>
            </button>
          </div>
        </div>
        <CoffeesCartList />
      </form>
      <ToastContainer />
    </CheckoutContainer>
  );
}
