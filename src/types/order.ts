export interface IOrderType {
  cep: string;
  rua: string;
  numero: number;
  complemento: string;
  bairro: string;
  cidade: string;
  uf: string;
  telefone: string;
  nome: string;
  formaPagamento: "CREDITO" | "DEBITO" | "DINHEIRO" | null;
  produto: {
    idProduto: number;
    qtProdutos: number;
  }[];
}
