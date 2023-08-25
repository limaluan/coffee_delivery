import { ICoffeeType } from "./coffeeType";

export interface ITokenState {
  loading: boolean;
  error: null | string;
  token: null | string;
}

export interface ILoginData {
  email: string;
  senha: string;
}

export interface ICoffeeAPIResponse {
  mensagem: string;
  data: string;
  dados: ICoffeeType[];
}

export interface ITokenAPIResponse {
  mensagem: string;
  data: string;
  dados: string;
}
