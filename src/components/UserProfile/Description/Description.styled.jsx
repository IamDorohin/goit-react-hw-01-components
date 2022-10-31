import styled from 'styled-components';

export const Container = styled.div`
display: flex;
align-items: center;
flex-direction: column;
`;

export const UserPhoto = styled.img`
background-color: #103645;
width: 250px;
height: 250px;
border: 4px solid black;
border-radius: 50%;
margin-bottom: 20px;
`;

export const UserName = styled.p`
margin-top: 0;
margin-bottom: 20px;
font-weight: 700;
font-size: 30px;
`;

export const UserNickName = styled.p`
margin-top: 0;
margin-bottom: 20px;
font-size: 20px;
color: #83888a;
`;

export const UserLocation = styled.p`
margin-top: 0;
margin-bottom: 20px;
font-size: 20px;
color: #83888a;
`;