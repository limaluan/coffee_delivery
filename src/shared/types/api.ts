export interface ITokenState {
  loading: boolean;
  error: null | string;
  token: null | string;
}

export interface IProductsState {
  loading: boolean;
  error: null | string;
  products: IProductsData[];
}

export interface ILoginData {
  email: string;
  senha: string;
}

export interface IProductsData {
  nome: string;
  descricao: string;
  tipo: string;
  preco: number;
  idProduto: number;
}
