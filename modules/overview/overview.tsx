import React from "react";
import Image from "next/image";
import Profile from '../../public/images/overview/profile.png';
import {Heading} from '../../components/typography/heading';
import { Text } from "../../components/typography/text";
import { SectionWrapper } from "../../components/sectionWrapper";
import { ProfileLink, profileLinkProps } from "./profileLink";
import { v4 as uuidv4} from 'uuid';
import { Button, buttonProps } from "../../components/button/button";
import { TextContent } from "../../components/typography/textContent";
import { Card, CardProps } from "../../components/card/card";

interface OverviewProps {
    /**
     * Name
     */
    name?: string,
    /**
     * Job title
     */
    jobTitle?: string,
    /**
     * Profile desc
     */
    profileDesc?: string,
    /**
     * Profile links
     */
    links?: profileLinkProps[],
    /**
     * Resume link
     */
    resumeLink?: buttonProps,
    /**
     * Cards
     */
    cards?: CardProps[],
     /**
     * Section Id
     */
     id?: string,
}

export const Overview = ({
    name, 
    jobTitle,
    profileDesc,
    links,
    resumeLink,
    cards,
    id
}:OverviewProps) => {
    return (
        <SectionWrapper id={id}>
            <div className="grid gap-y-5 grid-cols-12">
                <div className="col-span-12 md:col-span-6 lg:col-span-8">
                    <div className="flex flex-col gap-5">
                        {name &&
                            <Heading hTag="3">{name}</Heading>
                        }
                        {jobTitle && 
                            <Text size={'strapline'} weight={'bold'}>{jobTitle}</Text>
                        }
                        {links &&
                            <ul className="list-none flex flex-wrap gap-y-5">
                                {links?.map((link) => {
                                    let id = uuidv4();
                                    return(
                                        <ProfileLink 
                                            preLabel={link?.preLabel}
                                            label={link?.label}
                                            customLink={{href: link?.customLink?.href, target: link?.customLink?.target}}
                                            key={id}
                                        />
                                    )
                                })}
                            </ul>
                        }
                        {profileDesc && 
                            <TextContent>
                                {profileDesc}
                            </TextContent>
                        }
                        {resumeLink &&
                            <div className="lg:mt-5">
                                <Button 
                                    label={resumeLink?.label}
                                    href={resumeLink?.href}
                                    icon={resumeLink?.icon}
                                />
                            </div>
                        }
                    </div>
                </div>
                <div className="col-span-12 md:col-span-6 lg:col-span-4">
                    <div className="flex justify-center md:justify-end w-full">
                        <div className="rounded-full overflow-hidden w-[300px] h-[300px] relative">
                            
                            <Image 
                                src={Profile.src}
                                alt={'profile'}
                                fill={true}
                                style={{objectFit: "cover"}}	
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col md:flex-row gap-5 mt-sm md:mt-md lg:mt-lg">
                {(cards && cards.length > 0) && 
                    cards?.map((card) => {
                        let id = uuidv4();
                        return(
                            <Card { ...card } key={id} />
                        )
                    })
                }
            </div>    
        </SectionWrapper>
    )
}