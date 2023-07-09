import styled from "styled-components";

export const OrderConfirmationContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  gap: 2rem;

  section {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    gap: 2rem;
  }

  .header {
    h1 {
      color: var(--yellow-dark);
      font-size: 3.2rem;
      text-align: center;
    }

    p {
      text-align: center;
    }
  }

  p {
    font-size: 1.6rem;
  }

  .order-data {
    border-top: 1px solid var(--yellow-dark);
    border-left: 1px solid var(--yellow-dark);
    border-right: 1px solid var(--purple);
    border-bottom: 1px solid var(--purple);
    border-radius: 0.6rem 3.6rem;
    padding: 4rem;
    display: flex;
    flex-direction: column;
    gap: 3.2rem;

    .item {
      display: flex;
      gap: 1rem;
      align-items: center;

      img {
        height: 3.6rem;
      }
    }
  }

  .illustration {
    height: 20rem;
  }

  @media (min-width: 1280px) {
    flex-direction: row;
    justify-content: space-between;
    max-width: 80vw;
    margin: auto;

    .header {
      width: 100%;
      h1,
      p {
        text-align: left;
      }
    }

    .order-data {
      width: 55rem;
    }

    .illustration {
      height: 60vh;
      max-width: 60rem;
      transform: translateY(1.5rem);
    }
  }
`;
