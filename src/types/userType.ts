export interface IUser {
  nome: string;
  email: string;
  senha: string;
  idUsuario: number;
}

export interface ILoginDataPayload {
  email: string;
  senha: string;
}
