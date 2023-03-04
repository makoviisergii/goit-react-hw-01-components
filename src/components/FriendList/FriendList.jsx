import styled from "styled-components";
import FriendListItem from './FriendListItem';
import data from '../FriendList/friends.json';

const FriendList = () => {
  return (
    <List>
      {data.map((item) => (<FriendListItem key={item.id} data={item}/>))}
    </List>
  );
};

const List = styled.ul`
padding: 0;
list-style: none;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
`

export default FriendList;