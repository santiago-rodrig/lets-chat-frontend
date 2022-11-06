import { FC } from "react";
import styled from "@emotion/styled";
import backIconSrc from "./back-icon.svg";
import searchIconSrc from "./search-icon.svg";
import menuIconSrc from "./menu-icon.svg";

const ControlsTape: FC = () => {
  return (
    <Container>
      <Box>
        <Button>
          <Icon src={backIconSrc} />
        </Button>
      </Box>
      <RightBox>
        <Box>
          <Button>
            <Icon src={searchIconSrc} />
          </Button>
        </Box>
        <Box>
          <Button>
            <Icon src={menuIconSrc} />
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
  width: 24px;
  height: 24px;

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
