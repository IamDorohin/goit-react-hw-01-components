import PropTypes from 'prop-types';
import { Statistics } from 'components/UserProfile/Stats/Stats';
import { Description } from 'components/UserProfile/Description/Description';
import { Profile } from 'components/UserProfile/UserProfile.styled';

export const UserProfile = ({ currentUser }) => {
  return (
    <Profile>
      <Description
        avatar={currentUser.avatar}
        name={currentUser.username}
        tag={currentUser.tag}
        location={currentUser.location}
      />
      <Statistics
        followers={currentUser.stats.followers}
        views={currentUser.stats.views}
        likes={currentUser.stats.likes}
      />
    </Profile>
  );
};

UserProfile.propTypes = {
  currentUser: PropTypes.exact({
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.exact({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    }),
  }),
};
