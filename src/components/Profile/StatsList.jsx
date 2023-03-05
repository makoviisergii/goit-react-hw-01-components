import styled from 'styled-components';

const Statslist = ({ stats }) => {
  const { followers, views, likes } = stats;
  return (
    <StatslistBox>
      <List>
        <Label>Followers</Label>
        <Numbers>{followers}</Numbers>
      </List>
      <List>
        <Label>Views</Label>
        <Numbers>{views}</Numbers>
      </List>
      <List>
        <Label>Likes</Label>
        <Numbers>{likes}</Numbers>
      </List>
    </StatslistBox>
  );
};

export default Statslist;

const List = styled.li`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid lightgray;
`;

const StatslistBox = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  border-top: 1px solid lightgray;
  display: flex;
  justify-content: space-between;
`;
const Label = styled.ul`
  font-size: 20px;
  padding: 0px;
  margin: 15px 0;
  color: gray;
`;
const Numbers = styled.span`
  font-size: 24px;
  font-weight: 500;
  margin-bottom: 20px;
`;
