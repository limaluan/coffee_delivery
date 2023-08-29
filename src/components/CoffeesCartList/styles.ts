import styled from "styled-components";

export const CoffeesListContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

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

    &:disabled {
      background-color: var(--yellow-dark);
      cursor: not-allowed;
    }
  }

  .empty-cart-msg {
    text-align: center;
    font-size: 1.8rem;
    font-weight: 700;
    color: var(--subtitle);
  }
`;
