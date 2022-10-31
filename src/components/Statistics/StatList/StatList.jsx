import PropTypes from 'prop-types';
import {List} from 'components/Statistics/StatList/StatList.styled';
import {StatItems} from 'components/Statistics/StatItems/StatItems';

export const StatList = ({statsData}) => {
    return(
        <List>
          {statsData.map(({id, label, percentage}) => (
            <StatItems
            key={id}
            label={label}
            percentage={percentage}
          />
          ))}
        </List>
    );
}

StatList.propTypes = {
  statsData: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
}