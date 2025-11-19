import React from 'react';
import { SelectFilter } from './SelectFilter';
import { filterStoriesData } from './FilterStoriesData';

export default {
    title: 'Components/Filter',
    component: SelectFilter, 
};

export const Example = () => {
    return (
        <SelectFilter 
            filterOptions={filterStoriesData}
        />
    )
} 


export const DarkTheme = () => {
    return (
        <div className='dark bg-black p-10'>
            <SelectFilter 
                filterOptions={filterStoriesData}
            />
        </div>
    )
} 