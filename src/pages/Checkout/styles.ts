import styled from "styled-components";

export const CheckoutContainer = styled.main`
  font-size: 1.4rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 100%;
  padding-bottom: 10rem;

  input {
    all: unset;
    background-color: var(--input);
    border: 1px solid var(--button);

    padding: 1.2rem;
    border-radius: 4px;

    &::placeholder {
      color: #8d8686;
    }
  }

  .titles {
    font-size: 1.8rem;
  }

  .complete-order {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  .form-container,
  .payment-container,
  .payment-methods {
    background-color: var(--card);
    border-radius: 6px;

    display: flex;
    flex-direction: column;
    gap: 2rem;

    padding: 2rem 1rem;
  }

  .form-container {
    max-width: 73rem;
  }

  .user-icon {
    min-width: 2rem;
    min-height: 2rem;
    color: var(--yellow-dark);
  }

  .payment-methods {
    padding: 0;
  }

  .address-form {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;

    input {
      width: 100%;
    }

    #city-input {
      flex: 0.7;
    }

    #uf-input {
      flex: 0.3;
    }
  }

  .client-form {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;

    input {
      width: 100%;
    }
  }

  .form-header,
  .payment-header {
    display: flex;
    align-items: center;
    height: 4.4rem;

    gap: 0.5rem;

    img {
      height: 2rem;
    }

    div :first-child {
      font-size: 1.6rem;

      + p {
        color: var(--black-300);
      }
    }
  }

  .payment-container {
    button {
      display: flex;
      align-items: center;
      padding: 1.6rem;
      gap: 1rem;
      background-color: var(--button);
      border-radius: 6px;
      border: 1px solid var(--button);

      &.selected {
        border: 1px solid var(--purple);
      }
    }
  }

  .order-info {
    display: flex;
    align-items: center;
    flex-wrap: wrap;

    p {
      flex: 50%;
      color: var(--black-300);
      margin-top: 1.2rem;
    }

    p:nth-child(even) {
      text-align: end;
      font-size: 1.6rem;
    }

    p.total {
      font-size: 2rem;
      font-weight: 700;
    }
  }

  @media (min-width: 768px) {
    max-width: 80vw;
    margin: 0 auto;

    .payment-methods {
      flex-direction: row;

      button {
        flex: 50%;
      }
    }
  }

  @media (min-width: 1024px) {
    flex-direction: row;
    position: relative;

    .form-container,
    .payment-container {
      padding: 2rem;
    }

    .address-form {
      flex-direction: row;
      gap: 2rem;

      input {
        flex: 100%;
      }

      input:nth-child(1),
      input:nth-child(3) {
        flex: 0.4;
        width: 100%;
      }

      input:nth-child(4) {
        flex: 0.75;
      }
    }

    .client-form {
      justify-content: space-between;
      flex-direction: row;
      gap: 2rem;

      input:nth-child(1) {
        flex: 0.6;
      }

      input:nth-child(2) {
        flex: 0.4;
      }
    }
  }

  @media (min-width: 1280px) {
    justify-content: space-between;
  }

  /* Hides number arrows on inputs */
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;
