import PropTypes from 'prop-types';
import {TableBody} from 'components/TransactionHistory/TransactionHistory.styled';
import {TableHead} from 'components/TransactionHistory/TableHead/TableHead';
import {TableRows} from 'components/TransactionHistory/TableRows/TableRows';

export const TransactionsHistory = ({transactions}) => {
    return(
        <TableBody>
            <TableHead />
            <tbody>
            {transactions.map(({id, type, amount, currency}) => (
                <TableRows 
                key={id}
                type={type}
                amount={amount}
                currency={currency}
                />
            ))}
            </tbody>
        </TableBody>
    );
}

TransactionsHistory.propTypes = {
    transactions: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
            currency: PropTypes.string.isRequired,
        })
    ),
}