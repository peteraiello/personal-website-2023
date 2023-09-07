import {format} from 'date-fns';

export const getTheDate = (date) => {

    function formatDateWithOrdinalSuffix(date) {
        return format(date, "do MMMM yyyy");
    }

    const myDate = new Date(date);

    const formattedDate = formatDateWithOrdinalSuffix(myDate)

    return formattedDate;

}