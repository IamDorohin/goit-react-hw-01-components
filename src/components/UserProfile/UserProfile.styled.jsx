import styled from 'styled-components';

export const Profile = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
padding-top: 50px;
margin-bottom: 20px;
width: 500px;
background-color: #ffffff;
border-radius: 10px;

&:hover, &:focus {
    transition-property: transform;
    transition-duration: .5s;
    transform: scale(1.05);
}
`;