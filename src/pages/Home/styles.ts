import styled from "styled-components";

export const HomeContainer = styled.main`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 11rem;
  align-items: center;
  height: calc(100vh - 20rem);

  /* Pattern */
  max-width: 80vw;
  margin: 0 auto;

  section {
    display: flex;
    flex-direction: column;
    gap: 1.6rem;
    margin: 0 auto;
  }

  h1 {
    font-size: 4.8rem;
    font-family: "Baloo 2", cursive;
    font-weight: 800;
  }

  p {
    font-size: 2rem;
  }

  .items {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    column-gap: 4rem;
    row-gap: 2rem;

    padding-top: 7rem;
    justify-self: end;
    font-size: 1.6rem;
  }

  .item {
    display: flex;
    align-items: center;
    width: max-content;
    gap: 1.2rem;
  }

  .coffee.desktop-only {
    margin: 0 auto;
  }

  .coffee.mobile-only {
    display: none;
  }

  @media (max-width: 1024px) {
    gap: 0rem;
    height: fit-content;
    margin: 10rem auto;

    section {
      text-align: center;
      width: 100%;
    }

    .coffee.desktop-only {
      display: none;
    }

    .coffee.mobile-only {
      display: block;

      margin-top: 4rem;
      height: 36rem;
    }
  }

  @media (max-width: 768px) {
    height: fit-content;

    section {
      text-align: center;
      width: 100%;
    }

    .items {
      display: flex;
      flex-direction: column;
      padding-top: 0;
    }

    .coffee.mobile-only {
      display: block;
    }

    .coffee.desktop-only {
      display: none;
    }
  }
`;
