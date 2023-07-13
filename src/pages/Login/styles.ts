import styled from "styled-components";

export const LoginContainer = styled.main`
  display: grid;
  height: 100vh;
  grid-template-columns: 1.6fr 1.5fr;

  max-width: 80vw;
  margin: 0 auto;

  .banner {
    width: 100%;
    height: 100%;
  }

  .form-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: left;
    width: 80%;
    margin-left: 5rem;
    gap: 1.5rem;

    div {
      display: flex;
      flex-direction: column;
      align-items: left;
      font-size: 1.6rem;

      p {
        color: gray;
        font-size: 1.4rem;
      }
    }

    input,
    button {
      all: unset;
      padding: 1.5rem;
      border-radius: 0.5rem;
      max-width: 35rem;
    }

    input {
      border: 1px solid var(--purple-dark);
      font-size: 1.4rem;

      &::placeholder {
        font-size: 1.4rem;
      }

      &.error {
        border: 1px solid red;
        animation: shake 600ms;
        
        @keyframes shake {
          0% { transform: translateX(0rem) }
          20% { transform: translateX(0.6rem) }
          40% { transform: translateX(-0.6rem) }
          60% { transform: translateX(0.6rem) }
          80% { transform: translateX(-0.6rem) }
          100% { transform: translateX(0) }
        }
      }
    }

    button {
      background-color: var(--purple-dark);
      color: var(--background);
      text-align: center;
      font-size: 1.4rem;
      cursor: pointer;

      &:hover {
        background-color: rgba(95, 61, 169, 1);
        transition: background 150ms;
      }
    }
  }

  @media (max-width: 600px) {
    height: 100vh;

    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    justify-content: center;
    gap: 2rem;

    .banner {
      height: 15rem;
    }

    .form-container {
      margin-left: 0;
    }
  }
`;
