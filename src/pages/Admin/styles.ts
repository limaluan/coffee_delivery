import styled from "styled-components";

export const AdminContainer = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5rem;
  background-color: var(--card);

  h1 {
    color: var(--black-300);
    font-size: 4.2rem;
    text-align: center;
  }

  img {
    max-width: 30rem;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 3.4rem;
    }

    background-color: var(--background);
  }
`;
