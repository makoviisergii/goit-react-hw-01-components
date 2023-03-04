import styled from "styled-components";
import PropTypes from 'prop-types';

function TableRow(props) {
  const { item, number } = props;
  const { type, amount, currency } = item;
  console.log(props)
  return (
    <TrBox number={number}>
      
      <TdBox>{type}</TdBox>
      <TdBox>{amount}</TdBox>
      <TdBox>{currency}</TdBox>
    </TrBox>
  );
}

const TdBox = styled.td`
padding: 8px 0;
 text-align: center;
 border: 1px solid #ecf1f4;
`
const TrBox = styled.tr`
background-color:${(props) => props.number%2 === 0 ? "lightgray" : "white"  } ;
 `

TableRow.propTypes = {
    number: PropTypes.number.isRequired,
    data: PropTypes.shape({
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
}


export default TableRow;
