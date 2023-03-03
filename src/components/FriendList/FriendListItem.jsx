import styled from "styled-components";

const FriendListItem = ({data}) => {
    return (
<Item>
  <Status />
  < Avatar src={data.avatar} alt="User avatar"  />
  <Name>{data.name}</Name>
</Item>
    )
}

const Item = styled.li`
    background-color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: start;
    gap: 25px;
    border-radius: 5px;
    height: 100px;
    width: 350px;
    box-shadow: 0px 5px 9px 0px rgba(0,0,0,0.75);
-webkit-box-shadow: 0px 5px 9px 0px rgba(0,0,0,0.75);
-moz-box-shadow: 0px 5px 9px 0px rgba(0,0,0,0.75);
`
const Status = styled.span`
    margin-left: 20px;
    height: 30px;
    width: 30px;
    border-radius: 50%;
    background-color: green;
`
const Avatar = styled.img`
    width: 48px;
`
const Name = styled.p`
    font-size: 32px;
    font-weight: 500;
`


export default FriendListItem;