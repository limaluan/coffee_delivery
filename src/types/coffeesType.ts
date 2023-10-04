export interface ICoffeeType {
  nome: string;
  descricao: string;
  tipo: string;
  preco: number;
  idProduto: number;
  imagem: string;
  situacao?: 'ATIVO' | 'INATIVO';
  dtCriacao?: string;
  qtProduto?: number;
}

// Type used to know Quantity of coffe on CART
export interface ICoffeeTypeWithQuantity extends ICoffeeType {
  quantidade: number;
}
