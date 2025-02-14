import React from "react";
import { Tag, TagProps } from "./tag";
import { v4 as uuidv4} from 'uuid';
import { Heading } from "../typography/heading";

interface TagsProps {
    /**
     * Tags
     */
    tags?: string[]
    /**
     * Title
     */
    title?: string,
} 

export const Tags = ({
    tags,
    title,
}:TagsProps) => {
    return  (
        <>
            {(tags && tags.length > 0) &&
                title &&
                        <div className="flex items-center">
                            <Heading hTag={'3'} fontStyle={'san-serif'} fontSize={'text-xl'} classes="font-bold">
                                {title}
                            </Heading>                    
                        </div>
                }
                <div className='flex gap-inherit flex-wrap gap-3'>
                                                       
                    {tags.map((tag, index) => {
                        let id = uuidv4();
                        return(
                            <Tag key={id} index={index}>{tag}</Tag>
                        )
                    })}
                </div>
            
        </>
    )

}