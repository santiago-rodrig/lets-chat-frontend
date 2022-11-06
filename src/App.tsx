import styled from "@emotion/styled";
import ChatBox from "./ChatBox";
import ControlsTape from "./ControlsTape";

function App() {
  return (
    <Container>
      <ControlsTape />
      <ChatBox />
    </Container>
  );
}

export default App;

const Container = styled.div`
  min-width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;
