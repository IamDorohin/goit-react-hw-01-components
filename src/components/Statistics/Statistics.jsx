import data from '../../data.json';
import {StatsTitle} from 'components/Statistics/StatsTitle/StatsTitle';
import {StatList} from 'components/Statistics/StatList/StatList';
import {StatsContainer} from 'components/Statistics/Statistics.styled';

export const StatsSection = () => {
    return(
        <StatsContainer>
            <StatsTitle text="Upload stats"/>
            <StatList statsData={data} />
        </StatsContainer>
    );
};
