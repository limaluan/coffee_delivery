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

      .info-buttons {
        display: flex;
        gap: 1rem;

        .counter {
          display: flex;
          align-items: center;
          gap: 1rem;
          background-color: var(--button);
          padding: 0.6rem 1rem;
          border-radius: 6px;

          button {
            color: var(--purple);

            span {
              font-size: 2rem;
            }
          }

          span {
            font-size: 1.6rem;
          }
        }

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
`;
