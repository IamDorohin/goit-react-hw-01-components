import {Friend, FriendStatus, FriendAvatar, FriendName} from 'components/FriendsList/ListItems/ListItems.styled';

export const Items = ({avatar, name, isOnline}) => {
    return(
        <Friend>
            <FriendStatus status={isOnline}></FriendStatus>
            <FriendAvatar src={avatar} alt={name} />
            <FriendName>{name}</FriendName>
        </Friend>
    );
}