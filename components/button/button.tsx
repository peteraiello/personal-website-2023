import React from "react";
import cx from "classnames";
import { DownloadIcon } from "../icons/download";
import { NewWindowIcon } from "../icons/new-window";
import Link from "next/link";

export type buttonIconType = 'download' | 'new-window' | 'none';

export interface buttonProps {
    /**
     * label
     */
    label?: string,
    /**
     * download link
     */
    href?: string,
    /**
     * icon
     */
    icon?: buttonIconType,
}

export const Button = ({
    label,
    href,
    icon,
}: buttonProps) => {

    const base = `button group bg-transparent px-5 py-2 lg:px-6 lg:py-2`;

    const typography = `text-brandBlue dark:text-brandGold text-[16px] lg:text-[24px] tracking-normal uppercase font-bold`;
    
    const border = `ring-2 ring-brandBlue dark:ring-brandGold rounded-[10px] lg:rounded-[20px]`;

    const animationHover = `transition-all duration-150 ease-in-out hover:bg-brandBlue hover:text-white hover:dark:bg-brandGold hover:dark:text-darkGray`;
    
    return (
        <div className="flex gap-3">
            <Link href={href}  className={cx(base, typography, border, animationHover)} target={icon === 'new-window' ? '_blank' : '_self'}>
                <div className="flex items-center gap-x-3">
                {label}
                {icon === 'download' &&
                    <div className="h-[16px] lg:h-[25px]">
                        <DownloadIcon />
                    </div>
                }
                {icon === 'new-window' &&
                    <div className="h-[16px] lg:h-[25px]">
                       <NewWindowIcon />
                    </div>
                }
                </div>
            </Link>
        </div>
    )
}