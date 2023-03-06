import styled from 'styled-components';
import Table from '../Table/Table';
import Thead from '../Thead/Thead';
import Tbody from '../Tbody/Tbody';
import PropTypes from 'prop-types';

const TransactionHistory = ({ transactions }) => {
  return (
    <TableBox>
      <Table>
        <Thead />
        <Tbody items={transactions} />
      </Table>
    </TableBox>
  );
};

TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};

export default TransactionHistory;

const TableBox = styled.div`
  width: 350px;
  border-radius: 5px;
  box-shadow: 0px 5px 9px 0px rgb(0 0 0 / 75%);
  -webkit-box-shadow: 0px 5px 9px 0px rgb(0 0 0 / 75%);
  overflow: hidden;
  margin-bottom: 20px;
`;
