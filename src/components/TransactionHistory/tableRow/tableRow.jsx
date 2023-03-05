import styled from 'styled-components';

function TableRow(props) {
  const { item, number } = props;
  const { type, amount, currency } = item;
  return (
    <TrBox number={number}>
      <TdBox>{type}</TdBox>
      <TdBox>{amount}</TdBox>
      <TdBox>{currency}</TdBox>
    </TrBox>
  );
}

export default TableRow;

const TdBox = styled.td`
  padding: 8px 0;
  text-align: center;
  border: 1px solid #ecf1f4;
`;
const TrBox = styled.tr`
  background-color: ${props =>
    props.number % 2 !== 0 ? 'lightgray' : 'white'};
`;
