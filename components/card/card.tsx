import React from "react";
import { Text } from "../typography/text";
import { TextContent } from "../typography/textContent";
import { AnimatedElement } from "../AnimatedElement/animated-element";

export interface CardProps {
    /**
     * Title
     */
    title?: string,
    /**
     * Content 
     */
    content?: string,
    /**
     * Index (the order the element appears)
     */
    index?: Number
}

export const Card = ({
    title,
    content,
    index
}:CardProps) => {
    return (
        <div className="w-full md:w-1/3">
            <AnimatedElement index={index}>
                <div className="rounded-xl ring-1 ring-darkGray dark:ring-white p-5 lg:p-10">
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
            </AnimatedElement>
        </div>
    )
}