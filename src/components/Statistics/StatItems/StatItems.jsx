import {Items, Label, Percentage} from 'components/Statistics/StatItems/StatItems.styled';

export const StatItems = ({label, percentage}) => {
    return(
        <Items>
            <Label>
                {label}
            </Label>
            <Percentage>
                {percentage}%
            </Percentage>
        </Items>
    );
}
