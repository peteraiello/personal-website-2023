import React from "react";
import Link from "next/link";
import {HeaderIcon} from './logo';
import { ThemeToggleButton } from "./theme-toggle";


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
            <header className="transition-all duration-300 text-darkGray dark:text-white">
                <div className="wrapper max-w-[1200px] px-5">
                    <div className="py-5 flex justify-center md:justify-between items-center">
                        <div className="h-[84px] w-[237px] relative">
                            <HeaderIcon />
                        </div>
                        {
                            (items && items.length > 0) &&
                                <ul className="hidden md:flex gap-10 font-open font-medium">
                                    {items?.map((item, index) => {
                                        return (
                                            <li key={index}><Link href={item?.href}>{item?.label}</Link></li>
                                        )
                                    })}
                                </ul>
                        }
                        <ThemeToggleButton />
                    </div>
                </div>
            </header>
    )
}
