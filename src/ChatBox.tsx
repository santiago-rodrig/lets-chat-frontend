import styled from "@emotion/styled";
import { FC } from "react";
import MessageInput from "./MessageInput";

const ChatBox: FC = () => {
  return (
    <Container>
      <MessagesBox />
      <MessageInput />
    </Container>
  );
};

export default ChatBox;

const Container = styled.main`
  background-color: #333;
  color: #fff;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

const MessagesBox = styled.div`
  flex-grow: 1;
`;
