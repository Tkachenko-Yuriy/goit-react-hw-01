import PropTypes from "prop-types";
import {
  TransactionTable,
  TableHead,
  TableHeaderTitle,
  Tablebody,
  TableRow,
  TableData,
} from "./TransactionHistory.styled";

export default function TransactionHistory({ items }) {
  return (
    <TransactionTable>
      <TableHead>
        <TableRow>
          <TableHeaderTitle>Type</TableHeaderTitle>
          <TableHeaderTitle>Amount</TableHeaderTitle>
          <TableHeaderTitle>Currency</TableHeaderTitle>
        </TableRow>
      </TableHead>
      <Tablebody>
        {items.map(({ id, type, amount, currency }) => (
          <TableRow key={id}>
            <TableData>{type}</TableData>
            <TableData>{amount}</TableData>
            <TableData>{currency}</TableData>
          </TableRow>
        ))}
      </Tablebody>
    </TransactionTable>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
