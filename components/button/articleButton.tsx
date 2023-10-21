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
    href?: string
}

export const ArticleButton = ({
    label,
    href,
}: buttonProps) => {

    const base = `button group bg-transparent `;

    const typography = `text-darkGray dark:text-white text-[16px] lg:text-[24px] tracking-normal uppercase font-bold`;
    
    const border = `ring-0 rounded-0`;

    const animationHover = `transition-all duration-150 ease-in-out hover:text-white`;
    
    return (
        <div className="flex gap-3">
            <Link href={href}  className={cx(base, typography, border, animationHover)}>
                <div className="flex items-center gap-x-3">
                     {label}
                </div>
            </Link>
        </div>
    )
}