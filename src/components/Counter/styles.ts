import styled from "styled-components";

export const CounterContainer = styled.div`
  display: flex;
  gap: 1rem;

  .counter {
    display: flex;
    align-items: center;
    width: 75px;
    justify-content: space-between;
    background-color: var(--button);
    padding: 0.6rem 1.1rem;
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
`;
