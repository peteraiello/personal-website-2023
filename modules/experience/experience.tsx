import React from "react";
import { Text } from "../../components/typography/text";
import { Heading } from "../../components/typography/heading";
import { SectionWrapper } from "../../components/sectionWrapper";
import { TextContent } from "../../components/typography/textContent";
import { AnimatedElement } from "../../components/AnimatedElement/animated-element";
import {v4 as uuidv4} from 'uuid';

interface workItem {
    /**
     * title (name of the agency)
     */
    title?: string,
    /**
     * Position 
     */
    position?: string,
    /**
     * Date (when did you work there)
     */
    date?: string,
    /**
     * Description (responsibilities)
     */
    description?: string,
}

interface ExperienceProps {
    /**
     * Section Id
     */
    id?: string,
    /**
     * Title
     */
    title?: string,
    /**
     * All work experiences
     */
    experiences?: workItem[]
}

export const Experience = ({
    id,
    title,
    experiences
}:ExperienceProps) => {
    return(
        <SectionWrapper id={id}>
            <div className="grid grid-cols-12">
                {title &&
                    <div className="col-span-12">
                        <div className="flex flex-col gap-6 md:gap-8 lg:gap-[60px]">
                            <Heading hTag={'4'}>
                                {title}
                            </Heading>

                            {(experiences && experiences.length > 0) &&
                                <div className="flex flex-col gap-5 md:gap-8 lg:gap-10">
                                    {experiences.map((experience, index) => {
                                        let id = uuidv4();
                                        return(
                                            <AnimatedElement index={index} key={id}>
                                                <div className="grid grid-cols-12">
                                                    <div className="col-span-12 lg:col-span-4 flex flex-col gap-[10px]">
                                                        {experience.title &&
                                                            <Text weight={'bold'} size={'strapline'}>{experience.title}</Text>
                                                        }
                                                        {experience.position &&
                                                            <Text weight={'bold'} size={'strapline'}>{experience.position}</Text>
                                                        }
                                                        {experience.date &&
                                                            <Text weight={'bold'} size={'strapline'}>{experience.date}</Text>
                                                        }
                                                    </div>
                                                    <div className="col-span-12 lg:col-span-8">
                                                        <TextContent>{experience.description}</TextContent>
                                                    </div>
                                                </div>
                                            </AnimatedElement>
                                        )
                                    })}
                                </div>
                            }
                        </div>
                    </div>
                }
            </div>
        </SectionWrapper>
    )
}