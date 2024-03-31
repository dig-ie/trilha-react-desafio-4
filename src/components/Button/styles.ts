import styled from "styled-components";

export const ButtonContainer = styled.button<{ disabled: boolean }>`
  width: 100%;
  height: 42px;

  background-color: #81259d;
  color: white;

  border: 1px solid #81259d;
  border-radius: 21px;

  &:hover {
    opacity: ${(props) => (props.disabled ? null : "0.6")};
    cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  }
`;
