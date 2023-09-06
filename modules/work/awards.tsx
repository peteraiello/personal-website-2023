import React from "react";
import { Heading } from "../../components/typography/heading";
import { Text } from "../../components/typography/text";
import { v4 as uuidv4} from 'uuid';


export interface AwardsProps {
    /**
     * Title (Awards & Regonition)
     */
    title?: string,
    /**
     * Subtitle 
     */
    subtitle?: string,
    /**
     * Awards 
     */
    awards?: string[]
}

export const Awards = ({
    title,
    subtitle,
    awards,   
}:AwardsProps) => {
    return (
        <div className="flex flex-col gap-y-10">
            {title &&
                <Heading hTag={'4'}>
                    {title}
                </Heading>
            }
            {subtitle &&
                <Text size={'body'} weight={'normal'}>{subtitle}</Text>
            }
            {(awards && awards.length > 0) &&
                <div className="flex flex-col gap-5 lg:gap-y-10">
                    {awards.map((award) => {
                        let id = uuidv4();
                        return(
                            <div className="flex items-center gap-x-5 lg:gap-x-10" key={id}>
                                <svg width="17" height="28" viewBox="0 0 17 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path className="fill-darkGray dark:fill-white " d="M15.4654 12.6758C16.2086 13.4082 16.2086 14.5977 15.4654 15.3301L4.05079 26.5801C3.30765 27.3125 2.10079 27.3125 1.35765 26.5801C0.614508 25.8477 0.614508 24.6582 1.35765 23.9258L11.4287 14L1.36359 4.07422C0.620453 3.3418 0.620453 2.15234 1.36359 1.41992C2.10673 0.6875 3.31359 0.6875 4.05673 1.41992L15.4714 12.6699L15.4654 12.6758Z"/>
                                </svg>
                                <Text size={'award'} weight={'semibold'}>
                                    {award}
                                </Text>
                            </div>
                        )
                    })}
                </div>
            }
        </div>
    )
}