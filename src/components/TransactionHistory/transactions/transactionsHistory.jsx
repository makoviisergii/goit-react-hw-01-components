import styled from 'styled-components';
import Table from '../table/table';
import Thead from '../thead/thead'
import Tbody from '../tbody/Tbody';
import transactions from '../../TransactionHistory/transactions.json';

const TransactionHistory = () => {
  return (
    <TableBox>
      <Table>
        <Thead />
        <Tbody items={transactions} />
      </Table>
    </TableBox>

  );
};

const TableBox = styled.div`
  width: 350px;
 border-radius: 5px;
  box-shadow: 0px 5px 9px 0px rgb(0 0 0 / 75%);
-webkit-box-shadow: 0px 5px 9px 0px rgb(0 0 0 / 75%); 
 overflow: hidden;
 margin-bottom: 20px;
`

export default TransactionHistory;
