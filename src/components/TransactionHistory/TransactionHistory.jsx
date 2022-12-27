import PropTypes from 'prop-types';
import {
  TransactionTable,
  Heading,
  TableRow,
  Data,
} from './TransactionHistory.styled';

export function TransactionHistory({ items }) {
  return (
    <TransactionTable>
      <thead>
        <tr>
          <Heading>Type</Heading>
          <Heading>Amount</Heading>
          <Heading>Currency</Heading>
        </tr>
      </thead>

      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <TableRow key={id}>
            <Data>{type}</Data>
            <Data>{amount}</Data>
            <Data>{currency}</Data>
          </TableRow>
        ))}
      </tbody>
    </TransactionTable>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
