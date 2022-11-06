import { FC } from "react";
import styled from "@emotion/styled";
import sendIconSrc from "./send-icon.svg";

const ControlsTape: FC = () => {
  return (
    <Container>
      <Box>
        <Button>
          <Icon src={sendIconSrc} />
        </Button>
      </Box>
      <RightBox>
        <Box>
          <Button>
            <Icon src={sendIconSrc} />
          </Button>
        </Box>
        <Box>
          <Button>
            <Icon src={sendIconSrc} />
          </Button>
        </Box>
      </RightBox>
    </Container>
  );
};

export default ControlsTape;

const Container = styled.aside`
  background-color: ${(props) => props.theme.colors.primary.surface};
  display: flex;
  justify-content: space-between;
`;

const Box = styled.div`
  padding: 16px;
`;

const RightBox = styled.div`
  justify-self: flex-end;
  display: flex;
`;

const Button = styled.button`
  background-color: transparent;
  cursor: pointer;
  border: none;
  position: relative;
  padding: none;
  width: 32px;
  height: 32px;

  &:hover {
    opacity: 0.75;
  }
`;

const Icon = styled.img`
  position: absolute;
  left: 50%;
  right: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
`;
