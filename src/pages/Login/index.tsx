import { LoginContainer } from "./styles";

import coffeeImg from "../../assets/coffee.svg";
import { useForm } from "react-hook-form";
import { useAppDispatch } from "../../shared/hooks/useTypedSelector";
import { login } from "../../features/auth/authSlice";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

export function Login() {
  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm();

  const dispatch = useAppDispatch();

  const setInputError = () => {
    document.getElementsByTagName("input")[0].classList.add("error");
    document.getElementsByTagName("input")[1].classList.add("error");

    toast.error("Email ou senha inválidos!");
  };

  const removeInputError = (inputNumber: number) => {
    document
      .getElementsByTagName("input")
      [inputNumber].classList.remove("error");
  };

  return (
    <>
      <LoginContainer>
        <form
          onSubmit={handleSubmit(async (data) => {
            const response = await dispatch(
              login({ email: data.email, senha: data.password })
            );
            response.meta.requestStatus === "rejected"
              ? setInputError()
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
            onFocus={() => removeInputError(0)}
          />
          <input
            type="password"
            placeholder="Senha"
            {...register("password")}
            onFocus={() => removeInputError(1)}
          />
          <button type="submit">Entrar</button>
        </form>
        <img className="banner" src={coffeeImg} alt="" />
      </LoginContainer>
      <ToastContainer limit={2} />
    </>
  );
}
