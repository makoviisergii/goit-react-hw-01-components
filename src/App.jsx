import styled from 'styled-components';
import FriendList from 'components/FriendList/FriendList';
import Profile from 'components/Profile/Profile';
import Statistics from 'components/Statistics/Statistics';
import TransactionHistory from 'components/TransactionHistory/Transactions/Transactions';
import user from './data/user.json';
import stat from './data/stat.json';
import frienns from './data/friends.json';
import transactions from './data/transactions.json';

function App() {
  return (
    <Container>
      <Profile user={user} />
      <Statistics stat={stat} title="Upload starts" />
      <FriendList frienns={frienns} />
      <TransactionHistory transactions={transactions} />
    </Container>
  );
}

export default App;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #e7ecf2;
  height: 100%;
`;
