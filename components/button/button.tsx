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

    const base = `drop-shadow-lg button group bg-transparent px-5 py-2`;

    const typography = `text-brandBlue dark:text-brandGold text-sm tracking-wide uppercase font-bold`;
    
    const border = `ring-1 ring-brandBlue dark:ring-brandGold rounded-[10px]`;

    const animationHover = `transition-all duration-300 ease-in-out hover:bg-brandBlue hover:text-white hover:dark:bg-brandGold hover:dark:text-darkGray`;
    
    return (
        <div className="flex gap-3">
            <Link href={href}  className={cx(base, typography, border, animationHover)} target={icon === 'new-window' ? '_blank' : '_self'}>
                <div className="flex items-center gap-x-3">
                {label}
                {icon === 'download' &&
                    <div className="h-[16px]">
                        <DownloadIcon />
                    </div>
                }
                {icon === 'new-window' &&
                    <div className="h-[16px]">
                       <NewWindowIcon />
                    </div>
                }
                </div>
            </Link>
        </div>
    )
}