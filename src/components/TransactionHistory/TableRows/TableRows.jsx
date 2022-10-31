import {TableRow, TableData} from 'components/TransactionHistory/TableRows/TableRows.styled';

export const TableRows = ({type, amount, currency}) => {
    return(
        <TableRow>
            <TableData>{type}</TableData>
            <TableData>{amount}</TableData>
            <TableData>{currency}</TableData>
        </TableRow>
    );
}