import styled from "styled-components";
import data from './data.json';

const StatisticsList = () => {
    
    return (
        <StatslistBox>
            {data.map((item) => {
                let { id, label, percentage } = item
               return <List value={id} key={id}>
                    <Label>{label}</Label>
                    <Numbers>{percentage}%</Numbers>
                </List>
            }
            )}
        </StatslistBox>
        ) 
}     

const List = styled.li`
 background-color:${(props) => {
 let color;
switch (props.value) {
  case "id-1":
    color = "#4fc4f7";
    break;
  case "id-2":
     color = "#a43cf4";
    break;
    case "id-3":
     color = "#e54c66";
    break;
    case "id-4":
     color = "#20b8c5";
    break;
    default:
     color = "#812fc0";
}
return color ;
 } };
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`


const Label = styled.label`
font-size: 20px;
padding: 0px;
margin: 15px 0;
color: white;
`
const Numbers = styled.span`
color: white;
font-size: 24px;
font-weight: 500;
margin-bottom: 20px ;
`
const StatslistBox = styled.ul`
list-style: none;
margin: 0;
padding: 0;
border-top: 1px solid lightgray;
display: flex;
justify-content: space-between;
`

export default StatisticsList;