import styled from "@emotion/styled";
import { FC } from "react";
import SendIconSrc from "./send-icon.svg";

const MessageInput: FC = () => {
  return (
    <Container>
      <Input />
      <SubmitButton>
        <img src={SendIconSrc} width={16} />
      </SubmitButton>
    </Container>
  );
};

export default MessageInput;

const Container = styled.div`
  position: relative;
  height: 80px;
`;

const Input = styled.textarea`
  width: calc(100% - 32px);
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  height: calc(100% - 32px);
  border: 1px solid ${(props) => props.theme.colors.divider};
  border-radius: 4px;
  background-color: transparent;
  color: ${(props) => props.theme.colors.dark.text};
  outline: none;
  padding: 8px;
`;

const SubmitButton = styled.button`
  position: absolute;
  right: 12px;
  bottom: 12px;
  background-color: transparent;
  border: none;
  cursor: pointer;

  &:hover {
    opacity: 0.75;
  }
`;