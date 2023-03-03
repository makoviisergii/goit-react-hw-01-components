import styled from "styled-components";

const FriendListItem = (props) => {
    return (
<Item>
  <Status />
  < Avatar src={props.avatar} alt="User avatar"  />
  <Name></Name>
</Item>
    )
}

const Item = styled.li`
    display: flex;
    align-items: center;
    justify-content: start;
    outline: 1px solid tomato;
    border-radius: 5px;
    height: 100px;
    width: 350px;
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
    
`


export default FriendListItem;