import styled from 'styled-components';

export const Items = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: calc(100% / 5);
    height: 80px;
    /* border-radius: 10px; */
    background-color: ${getRandomHexColor};
    
    &:first-child  {
        border-bottom-left-radius: 10px;
    }

    &:last-child {
        border-bottom-right-radius: 10px;
    }
`;

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
}

export const Label = styled.span`
    margin-bottom: 10px;
    color: white;
`;

export const Percentage = styled.span`
    color: white;
`;