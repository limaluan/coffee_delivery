import { IProductType } from "./productType";

export interface ITokenState {
  loading: boolean;
  error: null | string;
  token: null | string;
}

export interface ILoginData {
  email: string;
  senha: string;
}

export interface IProductAPIResponse {
  mensagem: string;
  data: string;
  dados: IProductType[];
}
