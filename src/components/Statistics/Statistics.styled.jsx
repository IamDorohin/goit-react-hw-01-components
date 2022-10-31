import styled from 'styled-components';

export const StatsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 20px;
    width: 500px;
    background-color: #fff;
    border-radius: 10px;

&:hover, &:focus {
    transition-property: transform;
    transition-duration: .5s;
    transform: scale(1.05);
}
`;