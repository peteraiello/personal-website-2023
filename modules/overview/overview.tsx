import React from "react";
import Image from "next/image";
import Profile from '../../public/images/overview/profile.png';
import {Heading} from '../../components/typography/heading';
import { SectionWrapper } from "../../components/sectionWrapper";

export const Overview = () => {
    return (
    <SectionWrapper>
        <div className="grid grid-cols-12">
            <div className="col-span-12 md:col-span-6 lg:col-span-8">

                <Heading hTag="3">Peter Aiello</Heading>

                <p className="text-lead font-bold">Developer / Creative Coder / Writer / Designer</p>

                <p className="text-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac dictum mauris, ac dictum massa. Nullam consequat mi sed ipsum consectetur luctus. In sollicitudin vulputate viverra. Praesent ac ultricies turpis. Maecenas vehicula vestibulum velit posuere aliquam. Fusce pretium mi faucibus ex eleifend pretium. Donec et massa nec lacus fermentum finibus. Pellentesque id ligula feugiat diam pellentesque accumsan interdum non risus. Praesent varius magna purus. Nulla mollis purus ac nisl imperdiet porta. Duis vehicula consequat elit vitae hendrerit. Nunc in elit in lorem posuere viverra ut at lectus.</p>
                
            </div>
            <div className="col-span-4">
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

    </SectionWrapper>

    )
}