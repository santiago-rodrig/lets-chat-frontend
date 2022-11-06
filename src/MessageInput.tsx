import styled from "@emotion/styled";
import { ChangeEvent, FC, KeyboardEvent, useState } from "react";
import SendIconSrc from "./send-icon.svg";

const MessageInput: FC<MessageInputProps> = ({ webSocketConnection }) => {
  const [message, setMessage] = useState("");

  const onChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
  };

  const onKeyUp = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      webSocketConnection?.send(message);
      setMessage("");
    }
  };

  return (
    <Container>
      <Input value={message} onChange={onChange} onKeyUp={onKeyUp} />
      <SubmitButton>
        <img src={SendIconSrc} width={16} alt="Send icon" />
      </SubmitButton>
    </Container>
  );
};

interface MessageInputProps {
  webSocketConnection?: WebSocket;
}

export default MessageInput;

const Container = styled.div`
  height: 80px;
  position: relative;
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
  background-color: ${(props) => props.theme.colors.dark.surface};
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
