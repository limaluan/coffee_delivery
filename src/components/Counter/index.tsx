import { useState } from "react";
import { CounterContainer } from "./styles";

interface ICounterProps {
  onChangeAmmount: (quantity: number) => void;
}

export function Counter({ onChangeAmmount: changeAmmount }: ICounterProps) {
  const [itemsAmount, setItemsAmount] = useState(1);

  return (
    <CounterContainer>
      <button
        onClick={() => {
          itemsAmount >= 2 && setItemsAmount((oldAmount) => oldAmount - 1);
          changeAmmount(itemsAmount);
        }}
      >
        <span>-</span>
      </button>

      <span>{itemsAmount}</span>

      <button
        onClick={() => {
          setItemsAmount((oldAmount) => oldAmount + 1);
          changeAmmount(itemsAmount);
        }}
      >
        <span>+</span>
      </button>
    </CounterContainer>
  );
}
