import React from "react";
import {v4 as uuidv4} from 'uuid';
import { Tag } from "./tag";

export default {
    title: 'Components/Tag',
    component: Tag,
};
  
const tags = ['React', 'CSS', 'Sanity'];

export const DownloadTagExampleLight = () => {
    return(
        <div className="flex gap-4">
            {(tags && tags.length > 0) &&
                tags.map((tag) => {
                    return(
                        <Tag>{tag}</Tag>
                    )
                })
            }
        </div>
    )
}

export const DownloadTagExampleDark = () => {
    return(
        <div className="flex gap-4 dark bg-black p-10">
            {(tags && tags.length > 0) &&
                tags.map((tag) => {
                    let id = uuidv4();
                    return(
                        <Tag key={id}>{tag}</Tag>
                    )
                })
            }
        </div>
    )
  }
