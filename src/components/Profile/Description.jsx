import styled from 'styled-components';
import PropTypes from 'prop-types';

const Description = ({ userdata }) => {
  const { avatar, username, tag, location } = userdata;
  return (
    <DescriptionBox>
      <Avatar src={avatar} alt="User avatar" />
      <Name>{username}</Name>
      <Tag>@{tag}</Tag>
      <Location>{location}</Location>
    </DescriptionBox>
  );
};

Description.propTypes = {
  userdata: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
  }).isRequired,
};


export default Description;

const Location = styled.p`
  margin: 0px;
  font-size: 24px;
  color: gray;
`;
const Tag = styled.p`
  font-size: 24px;
  color: gray;
`;
const Name = styled.p`
  margin: 0px;
  font-size: 28px;
  font-weight: 500;
`;

const DescriptionBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 30px;
`;
const Avatar = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin: 25px 0;
`;
