import React from "react";
import Image from "next/image";
import Profile from '../../public/images/overview/profile.png';
import {Heading} from '../../components/typography/heading';
import { Text } from "../../components/typography/text";
import { SectionWrapper } from "../../components/sectionWrapper";
import { ProfileLink, profileLinkProps } from "./profileLink";
import {externalLinkProps} from "../../components/externalLink/externalLink";
import { v4 as uuidv4} from 'uuid';
import ReactMarkdown from 'react-markdown';
import { DownloadButton } from "../../components/button/downloadButton";


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
    resume?: string,
}

export const Overview = ({
    name, 
    jobTitle,
    profileDesc,
    links,
    resume,
}:OverviewProps) => {
    return (
    <SectionWrapper>
        <div className="grid gap-y-5 grid-cols-12 ">
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
                                        customLink={{href: '#', target: '_self'}}
                                        key={id}
                                    />
                                )
                            })}
                        </ul>
                    }
                    {profileDesc && 
                        <div className="prose dark:text-white prose-a:text-brandGold prose-a:font-normal">
                            <ReactMarkdown>{profileDesc}</ReactMarkdown>
                        </div>
                    }
                    <div className="mt-5">
                        <DownloadButton 
                            label={'Download Resume'}
                            downloadLink="/#"
                        />
                    </div>
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

    </SectionWrapper>

    )
}