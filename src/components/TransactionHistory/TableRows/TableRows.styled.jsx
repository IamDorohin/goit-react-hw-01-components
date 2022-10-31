import styled from "styled-components";

export const TableRow = styled.tr`
    &:nth-child(2n)  {
        background-color: #cdd0d1;
    }

    &:hover, &:focus {
        transition-property: transform;
        transition-duration: .5s;
        transform: scale(1.05);
    }
`;

export const TableData = styled.td`
    padding: 15px 0;
    color: black;
    border: 1px solid #bfc5c7;

    &:nth-child(1) {
    text-transform: capitalize;
    }
`;