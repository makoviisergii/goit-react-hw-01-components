import styled from 'styled-components';
import PropTypes from 'prop-types';


const Table = ({ children }) => {
  return <TableContainer>{children}</TableContainer>;
};

Table.propTypes = {
  children: PropTypes.array.isRequired
}

export default Table;

const TableContainer = styled.table`
  color: gray;
  width: 350px;
  border-collapse: collapse;
`;
