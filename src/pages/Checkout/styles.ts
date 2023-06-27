import styled from "styled-components";

export const CheckoutContainer = styled.main`
  font-size: 1.4rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

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

  .address-container,
  .payment-container,
  .payment-methods {
    background-color: var(--card);
    border-radius: 6px;

    display: flex;
    flex-direction: column;
    gap: 2rem;

    padding: 2rem 1rem;
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

  .address-header,
  .payment-header {
    display: flex;
    align-items: center;
    height: 4.4rem;

    gap: 0.5rem;

    img {
      height: 2rem;
      align-self: flex-start;
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

  .coffees-container {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  .coffees-selected {
    background-color: var(--card);
    border-radius: 6px 44px;

    display: flex;
    flex-direction: column;
    gap: 2rem;

    padding: 2rem 1rem;
  }

  .coffee-card {
    display: flex;
    align-items: center;
    gap: 1rem;
    height: 8rem;
    position: relative;

    .coffee-img {
      height: 6.4rem;
    }

    .coffee-name {
      font-size: 1.6rem;
    }

    .coffee-price {
      color: var(--black-300);
      font-size: 1.6rem;
      font-family: Roboto;
      font-weight: 700;
    }

    .coffee-info {
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 1rem;

      .info-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      .info-buttons {
        display: flex;
        gap: 1rem;

        .remove-button {
          display: flex;
          align-items: center;
          background-color: var(--button);
          border-radius: 6px;
          padding: 0 1rem;
          gap: 1rem;
        }
      }
    }

    &::after {
      content: "";
      position: absolute;
      bottom: -8px;
      left: 50%;
      transform: translateX(-50%);
      width: 80%;
      background-color: var(--button);
      height: 1px;
      z-index: 999;
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

  .confirm-button {
    width: 100%;
    background-color: var(--yellow);
    padding: 1.2rem 0;
    font-weight: 700;
    color: #fff;
    text-align: center;
    border-radius: 6px;
    margin-top: 2.4rem;
  }

  @media (min-width: 768px) {
    width: 80vw;
    max-width: 1280px;
    margin: auto;

    .payment-methods {
      flex-direction: row;

      button {
        flex: 50%;
      }
    }
  }

  @media (min-width: 1024px) {
    flex-direction: row;

    .address-container,
    .payment-container,
    .coffees-selected {
      padding: 2rem;
    }

    .coffees-selected {
      width: 40rem;
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
  }

  @media (min-width: 1280px) {
    gap: 10rem;
  }
`;
