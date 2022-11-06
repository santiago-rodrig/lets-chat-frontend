import styled from "@emotion/styled";
import { FC, PropsWithChildren, useEffect, useRef, useState } from "react";
import MessageInput from "./MessageInput";

const dummyMessages = [
  { id: 1, value: "Hey", issuer: "yolo99" },
  { id: 2, value: "Hey! How are you doing?", issuer: "yourmom" },
  {
    id: 3,
    value: "Doing fine, thanks for asking. How's your mom?",
    issuer: "yolo99",
  },
  {
    id: 4,
    value: "She's also fine, I'll let her know you asked.",
    issuer: "yourmom",
  },
  {
    id: 5,
    value: "She's also fine, I'll let her know you asked.",
    issuer: "yourmom",
  },
  {
    id: 6,
    value: "She's also fine, I'll let her know you asked.",
    issuer: "yourmom",
  },
  {
    id: 7,
    value: "She's also fine, I'll let her know you asked.",
    issuer: "yourmom",
  },
  {
    id: 8,
    value: "She's also fine, I'll let her know you asked.",
    issuer: "yourmom",
  },
  {
    id: 9,
    value: "She's also fine, I'll let her know you asked.",
    issuer: "yourmom",
  },
  {
    id: 10,
    value: "She's also fine, I'll let her know you asked.",
    issuer: "yourmom",
  },
  {
    id: 11,
    value: "She's also fine, I'll let her know you asked.",
    issuer: "yourmom",
  },
  {
    id: 12,
    value: "She's also fine, I'll let her know you asked.",
    issuer: "yourmom",
  },
  {
    id: 13,
    value: "She's also fine, I'll let her know you asked.",
    issuer: "yourmom",
  },
];

const currentUser = "yolo99";

const ChatBox: FC = () => {
  const messagesBoxRef = useRef<HTMLDivElement | null>(null);
  const [heightMeasured, setHeightMeasured] = useState(false);

  useEffect(() => {
    if (messagesBoxRef.current !== null) {
      messagesBoxRef.current.style.maxHeight =
        messagesBoxRef.current.getBoundingClientRect().height.toString() + "px";
      setHeightMeasured(true);
    }
  }, [messagesBoxRef]);

  return (
    <Container>
      <MessagesBox ref={messagesBoxRef}>
        {heightMeasured &&
          dummyMessages.map((msg) => (
            <Message key={msg.id} leftSide={msg.issuer === currentUser}>
              {msg.value}
            </Message>
          ))}
      </MessagesBox>
      <MessageInput />
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
