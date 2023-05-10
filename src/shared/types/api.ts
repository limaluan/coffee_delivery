export interface ITokenState {
  loading: boolean;
  error: null | string;
  token: null | string;
}

export interface ILoginData {
  email: string;
  senha: string;
}
