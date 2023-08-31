import { CounterContainer } from "./styles";

interface ICounterRootProps {
  children?: React.ReactNode;
  onClickPlus: () => void;
  onClickMinus: () => void;
  quantity: number;
}

export function CounterRoot({
  children,
  onClickMinus,
  onClickPlus,
  quantity,
}: ICounterRootProps) {
  return (
    <CounterContainer>
      <div className="counter">
        <button onClick={onClickMinus} type="button">
          <span>-</span>
        </button>

        <span>{quantity}</span>

        <button onClick={onClickPlus} type="button">
          <span>+</span>
        </button>
      </div>
      {children}
    </CounterContainer>
  );
}
