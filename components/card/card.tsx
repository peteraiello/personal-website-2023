import React from "react";
import { Text } from "../typography/text";
import { TextContent } from "../typography/textContent";

export interface CardProps {
    /**
     * Title
     */
    title?: string,
    /**
     * Content 
     */
    content?: string 
}

export const Card = ({
    title,
    content
}:CardProps) => {
    return (
        <div className="w-full md:w-1/3 rounded-xl ring-1 ring-darkGray dark:ring-white p-5 lg:p-10">
            <div className="flex flex-col gap-5">
                {title &&
                    <Text size={'strapline'} weight={'bold'}>
                        {title}
                    </Text>
                }
                {content &&
                    <TextContent>
                        {content}
                    </TextContent>
                }
            </div>
        </div>
    )
}