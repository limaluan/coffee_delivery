import { AdminContainer } from "./styles";

import logoImg from "../../assets/coffee.svg";

export function Admin() {
  return (
    <AdminContainer>
      <h1>Bem vindo ao painel Administrativo!</h1>
      <img src={logoImg} alt="" />
    </AdminContainer>
  );
}
