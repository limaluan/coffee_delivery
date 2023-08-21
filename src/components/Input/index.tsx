import { InputHTMLAttributes } from "react";
import { Input, InputWSearchIconContainer } from "./styles";

import { AiOutlineSearch } from "react-icons/ai";

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  isSearchBar?: boolean;
}

export function InputWSearchIcon(props: IInputProps) {
  return (
    <InputWSearchIconContainer>
      <Input {...props} />
      <AiOutlineSearch />
    </InputWSearchIconContainer>
  );
}
