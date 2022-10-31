import styled from 'styled-components';

export const StatsList = styled.ul`
display: flex;
align-items: center;
list-style: none;
padding: 0;
margin: 0;
border-radius: 10px;
`;

export const StatsItems = styled.li`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: calc(100% / 3);
height: 80px;
background-color: #cdd0d1;
border-top: 1px solid #103645;

&:nth-child(2) {
    border-left: 1px solid #103645;
    border-right: 1px solid #103645;
}

&:first-child {
    border-bottom-left-radius: 10px;
    }

&:last-child {
    border-bottom-right-radius: 10px;
}
`;

export const StatsType = styled.span`
margin-bottom: 15px;
`;

export const StatsResult = styled.span`
font-weight: bold;
`;