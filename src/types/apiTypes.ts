import { ICoffeeType } from "./coffeesType";

export interface ITokenState {
  loading: boolean;
  error: null | string;
  token: null | string;
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
