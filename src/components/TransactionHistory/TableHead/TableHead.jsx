import {Head, Row, HeadData} from 'components/TransactionHistory/TableHead/TableHead.styled';

export const TableHead = () => {
    return(
        <Head>
            <Row>
                <HeadData>Type</HeadData>
                <HeadData>Amount</HeadData>
                <HeadData>Currency</HeadData>
            </Row>
        </Head>
    );
}