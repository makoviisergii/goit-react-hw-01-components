import styled from "styled-components";
import FriendList from "components/FriendList/FriendList";

function App() {
  return (
    <Container>
      <FriendList />
    </Container>
  );
}

const Container = styled.div`
background-color:#e7ecf2;
height: 100vh;`

export default App;