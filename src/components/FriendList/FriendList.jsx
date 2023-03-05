import styled from 'styled-components';
import FriendListItem from './FriendListItem';
import PropTypes from 'prop-types';

const FriendList = ({ frienns }) => {
  return (
    <List>
      {frienns.map(item => (
        <FriendListItem key={item.id} item={item} />
      ))}
    </List>
  );
};

FriendList.propTypes = {
  frienns: PropTypes.arrayOf(
    PropTypes.shape({
      isOnline: PropTypes.bool,
      avatar: PropTypes.string,
      name: PropTypes.string,
    }).isRequired
  ),
};

export default FriendList;

const List = styled.ul`
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;
