import React, { useState } from 'react';
import { ProjectModal } from './projectModal';
import {data} from "./projectModalData";

export default {
  title: 'Modals/ProjectModal',
  component: ProjectModal,
  parameters: {
    layout: 'full-screen',
  },
};

export const Example = () => {

    const [showModalState, setShowModalState] = useState(true);

    const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        return setShowModalState(!showModalState)
    }

    return (
        <>
            <button onClick={() => setShowModalState(!showModalState)}>show modal</button>
            <p>{showModalState.toString()}</p>
            <ProjectModal
                onClick={clickHandler}
                showModal={showModalState}                
                title={data?.projectOne?.title}
                tags={data?.projectOne?.tags}
                content={data?.projectOne?.content}
                thumbnailImage={data?.projectOne?.thumbnail}
                buttonLink={data?.projectOne?.buttonLink}
            />
        </>
    )
}


export const Portrait = () => {
    return (
        <>
            <ProjectModal
                showModal={true}                
                title={data?.projectTwo?.title}
                tags={data?.projectTwo?.tags}
                content={data?.projectTwo?.content}
                thumbnailImage={data?.projectTwo?.thumbnail}
                buttonLink={data?.projectTwo?.buttonLink}
            />
        </>
    )
}
 
 