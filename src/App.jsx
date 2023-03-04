import styled from "styled-components";
import FriendList from "components/FriendList/FriendList";
import Profile from "components/Profile/Profile";
import Statistics from "components/Statistics/Statistics";
import TransactionHistory from "components/TransactionHistory/transactions/transactionsHistory";

function App() {
  return (
    <Container>
      <Profile />
      <Statistics />
      <FriendList />
      <TransactionHistory/>
    </Container>
  );
}

const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
background-color:#e7ecf2;
height: 100%;
`

export default App;