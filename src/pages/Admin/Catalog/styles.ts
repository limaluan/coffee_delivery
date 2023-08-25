import styled from "styled-components";

export const CatalogContainer = styled.main`
  margin-top: 6rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  font-size: 1.4rem;
  height: 100vh; // Ver depois questão do espaçamento bottom no mobile

  h1 {
    font-size: 3.6rem;
  }

  .coffees-container {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    background-color: var(--card);
    padding: 2rem;
    border-radius: 6px;
  }

  .coffee-card {
    display: flex;
    align-items: center;
    gap: 1.5rem;
    height: 10rem;
    position: relative;
    width: 100%;

    .coffee-img {
      height: 6.4rem;
    }

    .coffee-name {
      font-size: 1.6rem;
      max-width: 70%;
    }

    .coffee-price {
      color: var(--black-300);
      font-size: 1.6rem;
      font-family: Roboto;
      font-weight: 700;
    }

    .coffee-status {
      color: var(--green-dark);
      background-color: var(--green-light);
      width: fit-content;
      padding: 0.5rem;
      border-radius: 6px;
      font-size: 1.2rem;
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
          padding: 0.5rem 1rem;
          gap: 1rem;
        }
      }
    }
  }

  @media (min-width: 769px) {
    margin-top: 0;
    padding: 2rem;

    background-color: var(--card);

    p,
    span {
      font-size: 1.4rem;
    }

    .coffees-container {
      padding: 0;
    }

    .coffee-card {
      .coffee-img {
        height: 100%;
      }
    }
  }
`;
