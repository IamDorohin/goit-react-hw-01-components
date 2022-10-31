import styled from "styled-components";

export const TableBody = styled.table`
    width: 500px;
    border: 1px solid black;
    border-collapse: collapse;
    text-align: center;
    border-radius: 10px;
    overflow: hidden;
    outline-style: solid;
    outline-width: 1px;
    background-color: #fff;
    
    &:hover, &:focus {
        transition-property: transform;
        transition-duration: .5s;
        transform: scale(1.05);
    }
`;