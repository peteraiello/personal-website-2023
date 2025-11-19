import React from "react";
import { v4 as uuidv4} from 'uuid';

type selectFilterType = {label: string, value: string};

interface SelectFilterProps {
    /**
     * Name
     */
    name?: string,
    /**
     * Id
     */
    id?: string,
    /**
     * An array of options
     */
    filterOptions?: string[],
    setSelectedFilter?: any,
    selectedFilter?: string,
}

export const SelectFilter = ({
    filterOptions,
    setSelectedFilter,
    selectedFilter
}:SelectFilterProps) => {

    const newOptions: selectFilterType[] = filterOptions?.map((option) => {
        return {
            label: option, 
            value: option?.toLocaleLowerCase().replace(" ", "-"),
        }
    })

    const changeHandler = (event) => {
        event.preventDefault();
        setSelectedFilter(event?.currentTarget?.value);
    }

    return (
        <select name={"skills"} id={"skills-select"} className="select-filter bg-transparent px-4 py-2 dark:text-white border dark:border-white w-full"
            onChange={(event) => changeHandler(event)} 
        >
            {(Boolean(newOptions) && newOptions?.length > 0) &&
                newOptions?.map((option) => {
                    let id = uuidv4();                                                                      
                    return (
                        <option value={option?.value} key={id} selected={ selectedFilter === option?.value ? true : false}>
                            {option?.label}
                        </option>
                    )
                })
            }
        </select>
    )
}