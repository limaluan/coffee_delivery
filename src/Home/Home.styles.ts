import styled from "styled-components";

export const HomeContainer = styled.main`
  display: flex;
  gap: 11rem;
  justify-content: space-between;
  align-items: center;
  height: calc(100vh - 20rem);
  
  section {
    display: flex;
    flex-direction: column;
    gap: 1.6rem;
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
    display: flex;
    gap: 4rem;
    flex-wrap: wrap;
    padding-top: 7rem;

    font-size: 1.6rem;
  }

  .item {
    display: flex;
    align-items: center;
    gap: 1.2rem;
  }
  
  @media (max-width: 768px) {
    section {
      text-align: center;
    }
    
    .items {
      padding-top: 0;
      gap: 1rem;
    }

    .coffee {
      display: none;
    }
  }
`;
