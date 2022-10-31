import PropTypes from 'prop-types';
import {Title} from 'components/Statistics/StatsTitle/StatsTitle.styled';

export const StatsTitle = ({text}) => {
    return(
        <Title>
            {text}
        </Title>
    );
}

StatsTitle.propTypes = {
    text: PropTypes.string.isRequired,
}