import styled from "styled-components";

export const CounterContainer = styled.div`
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
`;
