import React from "react";
import { Tag, TagProps } from "./tag";
import { v4 as uuidv4} from 'uuid';

interface TagsProps {
    /**
     * Tags
     */
    tags?: string[]
}

export const Tags = ({
    tags
}:TagsProps) => {
    return  (
        <>
            {(tags && tags.length > 0) &&
                <div className='flex gap-3 flex-wrap md:gap-5'>
                    {tags.map((tag) => {
                        let id = uuidv4();
                        return(
                            <Tag key={id}>{tag}</Tag>
                        )
                    })}
                </div>
            }
        </>
    )

}