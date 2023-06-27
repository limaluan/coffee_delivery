import styled from "styled-components";

export const OurCoffeesContainer = styled.section`
  /* Pattern */
  max-width: 80vw;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  
  .title-section {
    font-family: "Baloo 2", cursive;
    font-size: 3.2rem;
  }

  @media (min-width: 768px) {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: auto;

    .title-section {
      grid-column-start: span 2;
    }
  }

  @media (min-width: 1280px) {
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 12rem;
    row-gap: 4rem;
    
    .title-section {
      grid-column-start: span 3;
      justify-self: left;
    }
  }

  @media (min-width: 1920px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    row-gap: 4rem;
    
    .title-section {
      grid-column-start: span 4;
    }
  }
`;
