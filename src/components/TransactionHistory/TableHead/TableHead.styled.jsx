import styled from "styled-components";

export const Head = styled.thead`
    font-weight: bold;
    color: black;
`;

export const Row = styled.tr`
    font-weight: bold;
    color: black;

    &:hover, &:focus {
        transition-property: transform;
        transition-duration: .5s;
        transform: scale(1.05);
    }
`;

export const HeadData = styled.th`
    font-weight: bold;
    color: white;
    background-color: #25aedb;
    padding: 15px 0;
    font-size: 15px;
    text-transform: uppercase;

    &:nth-child(2) {
        border-left: 1px solid white;
        border-right: 1px solid white;
    }
`;