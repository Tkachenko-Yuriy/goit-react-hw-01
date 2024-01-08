import styled from "@emotion/styled";

export const TransactionTable = styled.table`
  width: 100%;
  font-size: 16px;
  border-collapse: collapse;
  border: 1px solid #969696;
  background-color: #f9f9f9;
`;

export const TableHead = styled.thead`
  border: 1px solid #969696;
  background-color: #585858;
`;

export const TableRow = styled.tr`
  border: 1px solid #ffffff;
  :nth-of-type(2n + 2) {
    background-color: grey;
  }
`;

export const TableHeaderTitle = styled.th`
  border: 1px solid #ccc;
  text-align: center;
  padding: 5px;
`;

export const TableData = styled.td`
  border: 1px solid #ccc;
  text-align: center;
  padding: 3px;
`;

export const Tablebody = styled.tbody`
  border: 1px solid #ccc;
  text-align: left;
`;
