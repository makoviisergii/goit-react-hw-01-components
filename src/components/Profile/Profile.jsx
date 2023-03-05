import styled from 'styled-components';
import Description from './Description';
import Statslist from './StatsList';
import PropTypes from 'prop-types';

const Profile = ({ user }) => {
  const { avatar, username, tag, location, stats } = user;
  return (
    <ProfileBox>
      <Description userdata={{ avatar, username, tag, location }} />
      <Statslist stats={stats} />
    </ProfileBox>
  );
};

Profile.propTypes = {
  user: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    stats: PropTypes.shape({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
};

export default Profile;

const ProfileBox = styled.div`
  margin: 0px;
  padding: 0px;
  display: block;
  width: 350px;
  border-radius: 5px;
  background-color: #fff;
  box-shadow: 0px 5px 9px 0px rgb(0 0 0 / 75%);
  -webkit-box-shadow: 0px 5px 9px 0px rgb(0 0 0 / 75%);
`;
