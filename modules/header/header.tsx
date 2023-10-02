import React, { useState, useRef, useEffect }  from "react";
import Link from "next/link";
import {HeaderIcon} from './logo';
import { AIcon } from "./a-logo";
import { ThemeToggleButton } from "../../components/button/theme-toggle";

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

export const Header = ({items}:HeaderProps) => {

    const headerRef = useRef();

    const [headerScrolled, setHeaderScrolled] = useState(false);

    const handleScroll = () => {

        console.log(scrollY);

        if(scrollY > 100) {
            setHeaderScrolled(true);
        } else {
            setHeaderScrolled(false);
        }
    }


    useEffect(() => {

        console.log(headerRef.current)

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        }

    },[]);


    return (
            <header ref={headerRef} className={`absolute md:fixed ${headerScrolled === true ? 'dark:bg-darkGray bg-white bg-opacity-90 ' : ' bg-transparent'} z-[9999]  w-full transition-all duration-300 text-darkGray dark:text-white`}>
                <div className="wrapper max-w-[1200px] px-5">
                    <div className="py-5 flex gap-10 items-center justify-between md:justify-normal">
                        <Link href={'/'} className={`transition-all duration-300 ${headerScrolled ? 'h-[50px]' : 'h-[88px]' }`}>
                            <svg width="100%" height="100%" viewBox="0 0 380 380">
                                <g id="group_1" data-name="Group 1" transform="translate(0 -1)">
                                <g className="stroke-black dark:stroke-white" id="ellipse_1" data-name="ellipse" transform="translate(0 1)" fill="none" strokeWidth="10" >
                                    <circle cx="190" cy="190" r="190" stroke="none" />
                                    <circle cx="190" cy="190" r="185" fill="none" />
                                </g>
                                <path id="gator-sign" className={`gator-animated fill-black dark:fill-white`} data-name="gator-sign"
                                    d="M173.623,180.489,0,104.246V86.541L173.623,0V26.92L32.34,93.948l141.284,59.26Z"  />
                                </g>
                            </svg>
                        </Link>

                        <div className="flex items-center">
                            {
                                (items && items.length > 0) &&
                                <ul className="hidden md:flex mr-10 gap-10 font-open font-medium">
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
                </div>
            </header>
    )
}
