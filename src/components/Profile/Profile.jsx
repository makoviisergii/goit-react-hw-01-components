import styled from 'styled-components';
import user from './user.json';
import Description from './Description';
import Statslist from './StatsList';

const Profile = () => {

    return (
        <ProfileBox>
            <Description data={user}/>
            <Statslist data={user}/>
        </ProfileBox>
         )
}

const ProfileBox = styled.div`
    margin: 0px;
    padding: 0px;
    display: block;
    width: 350px;
    border-radius: 5px;
    background-color: #fff;
    box-shadow: 0px 5px 9px 0px rgb(0 0 0 / 75%);
    -webkit-box-shadow: 0px 5px 9px 0px rgb(0 0 0 / 75%); 

`
export default Profile ;