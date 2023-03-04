import styled  from "styled-components";

const Table = ({ children }) => {
  return <TableContainer>{children}</TableContainer>;
};


const TableContainer= styled.table`
color: gray;
 width: 350px;
 border-collapse: collapse;
 ` 
 export default Table;