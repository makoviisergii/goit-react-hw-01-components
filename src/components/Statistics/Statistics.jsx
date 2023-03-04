import styled from 'styled-components';
import StatisticsList from './StatisticsList';

const Statistics = () => {
    return (
        <StatisticsListBox>
            <StatisticsTaitle>Upload starts</StatisticsTaitle>
            <StatisticsList/>
        </StatisticsListBox>  
    
    )
}
const StatisticsTaitle = styled.div`
    height: 100px;
    color: gray;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    font-weight: 700;
    text-transform:uppercase
`
 
const StatisticsListBox = styled.div`
    margin: 0px;
    margin-top: 15px;
    padding: 0px;
    display: block;
    width: 350px;
    border-radius: 5px;
    overflow: hidden;
    background-color: #fff;
    box-shadow: 0px 5px 9px 0px rgb(0 0 0 / 75%);
    -webkit-box-shadow: 0px 5px 9px 0px rgb(0 0 0 / 75%); 
`
export default Statistics;

