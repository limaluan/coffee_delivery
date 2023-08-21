import styled from "styled-components";

export const Input = styled.input`
  all: unset;
  background-color: var(--input);
  border: 1px solid var(--button);

  padding: 1.2rem;
  border-radius: 4px;

  &::placeholder {
    color: #8d8686;
  }
`;

export const InputWSearchIconContainer = styled.div`
  position: relative;
  font-size: 1.6rem;
  height: 48px;
  display: flex;
  align-items: center;

  input {
    padding-left: 45px;
    border-radius: 25px;
  }
  
  svg {
    height: 20px;
    position: absolute;
    left: 25px;
    top: 50%;
    transform: translateY(-50%);
    color: #8d8686;
  }
`;
