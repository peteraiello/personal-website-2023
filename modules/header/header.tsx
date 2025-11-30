import React, { useState, useRef, useEffect }  from "react";
import Link from "next/link";
import { ThemeToggleButton } from "../../components/button/theme-toggle";
import { MobileNav } from "../../components/icons/mobile-nav";
import { v4 as uuidv4} from 'uuid';
import cx from "classnames";
import { AnimatedElement } from "../../components/AnimatedElement/animated-element";


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

    const [mobMenuOpen, setMobMenuOpen] = useState(false);

    const handleScroll = () => {
        if(scrollY > 100) {
            setHeaderScrolled(true);
        } else {
            setHeaderScrolled(false);
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        }

    },[]);


    return (
            <header ref={headerRef} className={`absolute md:fixed ${headerScrolled === true ? 'dark:bg-darkGray bg-white bg-opacity-90 ' : ' bg-transparent'} z-[100]  w-full transition-all duration-300 text-darkGray dark:text-white`}>
                <div className="wrapper max-w-[1200px] px-5">
                    <div className="py-5 flex gap-10 items-center justify-between md:justify-normal">
                        <Link href={'/'} className={`focus:rounded-full transition-all duration-300 ${headerScrolled ? 'w-[50px] h-[50px]' : 'w-[88px] h-[88px]' }`}>
                            <span className="opacity-0 absolute font-0 ">Return to homepage</span>
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
                            {(items && items.length > 0) &&
                                <ul className="hidden md:flex mr-10 gap-10 font-open font-medium">
                                    {items?.map((item) => {
                                        let id = uuidv4();                                                                      
                                        return (
                                            <li key={id} className="lowercase">
                                                <Link href={item?.href}>{item?.label}</Link>
                                            </li>
                                        )
                                    })}
                                </ul>
                            }
                            <div className="flex items-center gap-sm">                            
                                <div className="hidden md:block">
                                    <ThemeToggleButton />
                                </div>
                                <button onClick={() => setMobMenuOpen(!mobMenuOpen)} className="w-12 h-12 block md:hidden">
                                    <MobileNav />     
                                </button>
                            </div>
                        </div>                    
                    </div>                                 
                </div>
                    
                <p>mob menu open {mobMenuOpen?.toString()}</p>
                    <div>
                     <div className={cx(
                        "bg-black grid overflow-hidden transition-all duration-200",
                        mobMenuOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                        // "grid bg-black transition-all overflow-hidden duration-300 ease-in-out",
                        //     mobMenuOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"

                    )}> 
                        <div>
                            {(items && items?.length > 0) &&
                                <ul className="text-center">
                                    {items?.map((item, index) => {
                                        let id = uuidv4();                                                                      
                                        return (
                                                <li className="text-white  pb-5" key={id}> 
                                                    <Link href={item?.href}>
                                                        {item?.label}
                                                    </Link>
                                                </li>
                                        )
                                    })}
                                </ul>        
                            }  
                        </div>     
                    </div>
                 </div>
            </header>
    )
}
