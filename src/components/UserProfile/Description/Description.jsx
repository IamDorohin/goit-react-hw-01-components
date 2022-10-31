import PropTypes from 'prop-types';
import {Container, UserPhoto, UserName, UserNickName, UserLocation} from 'components/UserProfile/Description/Description.styled';

export const Description = ({avatar, name, tag, location}) => {
    return(
        <Container>
            <UserPhoto src={avatar} alt={name}/>
            <UserName>{name}</UserName>
            <UserNickName>@{tag}</UserNickName>
            <UserLocation>{location}</UserLocation>
        </Container>
    );
};

Description.propTypes = {
    name: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
}