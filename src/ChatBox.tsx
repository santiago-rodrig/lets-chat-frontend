import styled from "@emotion/styled";
import { connect } from "http2";
import { FC, PropsWithChildren, useEffect, useRef, useState } from "react";
import MessageInput from "./MessageInput";

const ChatBox: FC = () => {
  const messagesBoxRef = useRef<HTMLDivElement | null>(null);
  const [heightMeasured, setHeightMeasured] = useState(false);
  const webSocketConnectionRef = useRef<WebSocket>();

  useEffect(() => {
    if (window["WebSocket"] && webSocketConnectionRef.current === undefined) {
      webSocketConnectionRef.current = new WebSocket("ws://localhost:8080/ws");
      webSocketConnectionRef.current.onclose = () => {
        console.log("connection terminated");
      };
      webSocketConnectionRef.current.onmessage = (e) => {
        console.log("message received");
        console.log(e.data);
      };
      webSocketConnectionRef.current.onopen = () => {
        console.log("connection stablished");
      };
    }
  }, [webSocketConnectionRef]);

  useEffect(() => {
    if (messagesBoxRef.current !== null) {
      messagesBoxRef.current.style.maxHeight =
        messagesBoxRef.current.getBoundingClientRect().height.toString() + "px";
      setHeightMeasured(true);
    }
  }, [messagesBoxRef]);

  return (
    <Container>
      <MessagesBox ref={messagesBoxRef}></MessagesBox>
      <MessageInput webSocketConnection={webSocketConnectionRef.current} />
    </Container>
  );
};

export default ChatBox;

const Container = styled.main`
  background-color: #333;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

const MessagesBox = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  padding-left: 12px;
  padding-right: 12px;
  overflow: auto;
  -ms-overflow-style: none; /* for Internet Explorer, Edge */
  scrollbar-width: none; /* for Firefox */
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none; /* for Chrome, Safari, and Opera */
  }
`;

const Message: FC<MessageProps> = ({ children, leftSide = true }) => {
  return <MessageContent leftSide={leftSide}>{children}</MessageContent>;
};

type MessageProps = PropsWithChildren<LeftSided>;

interface LeftSided {
  leftSide?: boolean;
}

const MessageContent = styled.div<LeftSided>`
  width: 80%;
  max-width: 300px;
  background-color: ${(props) => props.theme.colors.paper.surface};
  color: ${(props) => props.theme.colors.paper.text};
  margin-top: 12px;
  padding: 10px;
  position: relative;
  align-self: ${(props) => (props.leftSide ? "flex-start" : "flex-end")};

  &::after {
    content: "";
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-top: 5px solid ${(props) => props.theme.colors.paper.surface};
    bottom: -5px;
    left: ${(props) => (props.leftSide ? 0 : "calc(100% - 10px)")};
    position: absolute;
  }
`;
