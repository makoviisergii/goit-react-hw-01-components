import styled from 'styled-components';
import StatisticsList from './StatisticsList';
import PropTypes from 'prop-types';

const Statistics = props => {
  return (
    <StatisticsListBox>
      {props.title && <StatisticsTitle>{props.title}</StatisticsTitle>}
      <StatisticsList stat={props.stat} />
    </StatisticsListBox>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stat: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired
  ),
};

export default Statistics;

const StatisticsTitle = styled.h2`
  height: 100px;
  color: gray;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  font-weight: 700;
  text-transform: uppercase;
`;

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
`;
