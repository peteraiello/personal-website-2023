import React from "react";
import Image from "next/image";
import LogoLight from '../../public/images/header/peter-aiello-brand-1.svg';
import Link from "next/link";
import {HeaderIcon} from './logo';

interface MenuItem {
    /**
     * Item
     */
    label?: string,
    /**
     * href
     */
    href?: string,
}

interface HeaderProps {
    /**
     * Menu Items
     */
    items?: MenuItem[]
}

export const Header = ({items}) => {
    return (
        <div className="bg-white dark:bg-darkGray">
            <div className="wrapper">
                <div className="py-5 flex justify-center md:justify-between items-center">
                    <div className="h-[84px] w-[237px] relative">
                        <HeaderIcon />
                    </div>
                    {
                        (items && items.length > 0) &&
                            <ul className="hidden md:flex gap-10 font-open font-medium text-darkGray dark:text-white">
                                {items?.map((item, index) => {
                                    return (
                                        <li key={index}><Link href={item?.href}>{item?.label}</Link></li>
                                    )
                                })}
                            </ul>
                    }
                </div>
            </div>
        </div>
    )
}
