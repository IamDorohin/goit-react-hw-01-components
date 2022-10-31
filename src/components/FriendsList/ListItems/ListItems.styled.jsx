import styled from "styled-components";

export const Friend = styled.li`
    display: flex;
    align-items: center;
    justify-content: start;
    margin-bottom: 10px;
    padding-left: 50px;
    padding-bottom: 20px;
    padding-top: 20px;
    width: 450px;
    border-radius: 10px;
    background-color: #fff;

    &:hover, &:focus {
        transition-property: transform;
        transition-duration: .5s;
        transform: scale(1.05);
    }   
`;

export const FriendStatus = styled.span`
    width: 20px;
    height: 20px;
    margin-right: 45px;
    border-radius: 50%;
    background-color: ${({status}) => {
        return status ? 'green' : 'red';
    }};
`;

export const FriendAvatar = styled.img`
    display: block;
    width: 48px;
    height: 48px;
    padding: 10px;
    margin-right: 70px;
    background-color: #103645;
    border-radius: 10px;
`;

export const FriendName = styled.p`
    margin: 0; 
    font-size: 20px;
    font-weight: bold;
    color: black;
`;

