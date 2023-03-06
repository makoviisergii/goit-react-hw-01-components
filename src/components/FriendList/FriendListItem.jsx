import styled from 'styled-components';
import PropTypes from 'prop-types';

const FriendListItem = ({ item }) => {
  const { isOnline, avatar, name } = item;
  return (
    <Item>
      <Status isOnline={isOnline} />
      <Avatar src={avatar} alt="User avatar" />
      <Name>{name}</Name>
    </Item>
  );
};

FriendListItem.propTypes = {
  item: PropTypes.shape({
      isOnline: PropTypes.bool.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
};



export default FriendListItem;

const Item = styled.li`
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 25px;
  border-radius: 5px;
  height: 100px;
  width: 350px;
  box-shadow: 0px 5px 9px 0px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 0px 5px 9px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 5px 9px 0px rgba(0, 0, 0, 0.75);
`;
const Status = styled.span`
  margin-left: 20px;
  height: 25px;
  width: 25px;
  border-radius: 50%;
  background-color: ${pops => (pops.isOnline ? 'tomato' : 'green')};
`;

const Avatar = styled.img`
  width: 48px;
`;
const Name = styled.p`
  font-size: 32px;
  font-weight: 500;
`;
