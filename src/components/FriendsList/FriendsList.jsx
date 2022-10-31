import PropTypes from 'prop-types';
import {List} from  'components/FriendsList/FriendsList.styled';
import {Items} from 'components/FriendsList/ListItems/ListItems';

export const FriendsList = ({allFriends}) => {
    return(
        <List>
            {allFriends.map(({avatar, name, isOnline, id}) => (
                <Items
                key={id}
                avatar={avatar}
                name={name}
                isOnline={isOnline}
                />
            ))}
        </List>
    );
}

FriendsList.propTypes = {
  allFriends: PropTypes.arrayOf(
    PropTypes.exact({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
}