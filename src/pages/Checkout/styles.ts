import styled from "styled-components";

export const CheckoutContainer = styled.main`
  font-size: 1.4rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 100%;
  padding-bottom: 10rem;

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

  .address-container {
    max-width: 73rem;
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

    &:hover {
      background-color: var(--yellow-dark);
      transition: background-color 75ms;
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
    justify-content: space-between;
  }
`;
