export interface ICoffeeType {
  nome: string;
  descricao: string;
  tipo: string;
  preco: number;
  idProduto: number;
  imagem: string;
}

export interface ICoffeeTypeWithQuantity extends ICoffeeType {
  quantidade: number;
}
