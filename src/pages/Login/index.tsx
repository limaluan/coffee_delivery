import { LoginContainer } from "./styles";

import coffeeImg from "../../assets/coffee.svg";
import { useForm } from "react-hook-form";
import { useAppDispatch } from "../../shared/hooks/useTypedSelector";
import { login } from "../../features/auth/authSlice";

export function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const dispatch = useAppDispatch();

  return (
    <LoginContainer>
      <form
        onSubmit={handleSubmit(async (data) => {
          const response = await dispatch(
            login({ email: data.email, senha: data.password })
          );
          console.log(response);
          response.meta.requestStatus === "rejected"
            ? console.log(response.meta.requestStatus)
            : (window.location.href = "admin");
        })}
        className="form-container"
      >
        <div>
          <h1>Faça seu Login</h1>
          <p>Digite seus dados de acesso</p>
        </div>
        <input
          type="email"
          placeholder="Digite seu email"
          {...register("email")}
        />
        <input type="password" placeholder="Senha" {...register("password")} />
        <button type="submit">Entrar</button>
      </form>
      <img className="banner" src={coffeeImg} alt="" />
    </LoginContainer>
  );
}
