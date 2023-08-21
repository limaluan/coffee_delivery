import { useState } from "react";
import { CounterContainer } from "./styles";

export function Counter() {
  const [itemsAmount, setItemsAmount] = useState(1);

  return (
    <CounterContainer>
      <button
        onClick={() =>
          itemsAmount >= 2 && setItemsAmount((oldAmount) => oldAmount - 1)
        }
      >
        <span>-</span>
      </button>

      <span>{itemsAmount}</span>

      <button onClick={() => setItemsAmount((oldAmount) => oldAmount + 1)}>
        <span>+</span>
      </button>
    </CounterContainer>
  );
}
