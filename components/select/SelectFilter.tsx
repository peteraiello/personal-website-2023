import React from "react";
import { v4 as uuidv4} from 'uuid';
import formatTag from "../../utils/formatTag";

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
    /**
     * Filter ID
     */
    filterId?: string,
    setSelectedFilter?: any,
    selectedFilter?: string,
}

export const SelectFilter = ({
    filterOptions,
    setSelectedFilter,
    selectedFilter,
    filterId
}:SelectFilterProps) => {    

    const newOptions: selectFilterType[] = filterOptions?.map((option) => {
        return {
            label: option, 
            value: formatTag(option)
        }
    })

    const changeHandler = (event) => {
        event.preventDefault();
        setSelectedFilter(event?.currentTarget?.value);
    }

    return (
        <div className="w-full md:w-1/5"> 
            <select 
                aria-label={filterId + "-select"}
                name={filterId} id={filterId} className="select-filter bg-transparent px-4 py-2 dark:text-white border border-darkGray dark:border-white w-full outline-none focus:ring-2 focus:ring-brandBlue focus:ring-opacity-50 dark:focus:ring-brandGold"
                onChange={(event) => changeHandler(event)} 
                value={selectedFilter }
            >
                {(Boolean(newOptions) && newOptions?.length > 0) &&
                    newOptions?.map((option) => {
                        let id = uuidv4();                                                                      
                        return (
                            <option value={option?.value} key={id}>
                                {option?.label}
                            </option>
                        )
                    })
                }
            </select>
        </div>
    )
}