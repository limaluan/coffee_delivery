import trashIconImg from "../../assets/trash_icon.svg";

interface ICounterRemoveButtonProps {
  onClickRemove: () => {};
}

export function CounterRemoveButton({
  onClickRemove,
}: ICounterRemoveButtonProps) {
  return (
    <button className="remove-button" onClick={onClickRemove} type="button">
      <img src={trashIconImg} alt="Ícone de lixeira" />
      <span>Remover</span>
    </button>
  );
}
