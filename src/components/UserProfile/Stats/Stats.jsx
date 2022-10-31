import PropTypes from 'prop-types';
import {StatsList, StatsItems, StatsType, StatsResult} from 'components/UserProfile/Stats/Stats.styled';

export const Statistics = ({followers, views, likes}) => {
    return(
        <StatsList>
            <StatsItems>
                <StatsType>
                    Followers
                </StatsType>
                <StatsResult>
                    {followers}
                </StatsResult>
            </StatsItems>
            <StatsItems>
                <StatsType>
                    Views
                </StatsType>
                <StatsResult>
                    {views}
                </StatsResult>
            </StatsItems>
            <StatsItems>
                <StatsType>
                    Likes
                </StatsType>
                <StatsResult>
                    {likes}
                </StatsResult>
            </StatsItems>
        </StatsList>
    );
};

Statistics.propTypes = {
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
}