import React from "react";
import { SectionWrapper } from "../../components/sectionWrapper";
import { Heading } from "../../components/typography/heading";
import { Text } from "../../components/typography/text";
import { TextContent } from "../../components/typography/textContent";
import { Awards, AwardsProps } from "./awards";

interface WorkProps {
    /**
     * Title
     */
    title?: string,
    /**
     * Subtitle
     */
    subtitle?: string,
    /**
     * Content
     */
    content?: string,
    /**
     * Clients
     */
    clients?: string,
    /**
     * Awards
     */
    awards?: AwardsProps
}

export const Work = ({
    title,
    subtitle,
    content,
    clients,
    awards
}:WorkProps) => {
    return (
        <SectionWrapper>
            <div className="grid grid-cols-12 gap-5">
                <div className="col-span-12 md:col-span-8 lg:col-span-7 flex flex-col gap-y-5">
                    {title &&
                        <Heading hTag={'4'}>{title}</Heading>
                    }
                    {subtitle &&
                        <Text size={'strapline'} weight={'bold'}>{subtitle}</Text>
                    }
                    {content &&
                        <TextContent>
                            {content}
                        </TextContent>
                    }
                    {clients && 
                    <div className="flex items-center gap-2">
                        <Text size={'lead'} weight={'bold'}>Notable Clients:</Text><Text weight={'normal'}>{clients}</Text>
                    </div>

                    }
                </div>
                <div className="col-span-12 md:col-span-4 lg:col-start-9 lg:col-span-4">
                    <Awards 
                        title={awards.title}
                        subtitle={awards.subtitle}
                        awards={awards.awards}
                    />
                </div>
            </div>
        </SectionWrapper>
    )
}