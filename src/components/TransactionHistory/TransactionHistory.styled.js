import styled from 'styled-components';

const TransactionTable = styled.table`
  margin: 0 auto;
  width: 912px;

  border-collapse: collapse;
  border-radius: 5px;
  overflow: hidden;

  color: #676c70;
  background-color: #ffffff;

  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
    1px 4px 6px rgba(0, 0, 0, 0.16);
`;

const Heading = styled.th`
  padding: 16px;
  width: 304px;
  text-align: center;
  text-transform: uppercase;

  color: #ffffff;
  background-color: #00bcd5;
  border-right: 1px solid #ffffff;
  :first-child {
    border-left: 1px solid #00bcd5;
  }
  :last-child {
    border-color: #00bcd5;
  }
`;

const TableRow = styled.tr`
  :nth-child(even) {
    background-color: #ecf1f4;
  }
`;

const Data = styled.td`
  padding: 16px;
  width: 304px;

  text-align: center;
  border-right: 1px solid #e0e5eb;
  :first-child {
    padding-left: 105px;
    text-align: left;
    text-transform: capitalize;
    border-left: 1px solid #e0e5eb;
  }

  border-bottom: 1px solid #e0e5eb;
`;

export { TransactionTable, Heading, TableRow, Data };
