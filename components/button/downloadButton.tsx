import React from "react";
import cx from "classnames";

export interface downloadButtonProps {
    /**
     * label
     */
    label?: string,
    /**
     * download link
     */
    downloadLink?: string,
}

export const DownloadButton = ({
    label,
    downloadLink
}: downloadButtonProps) => {

    const base = `group bg-transparent px-5 py-2 lg:px-10 lg:py-3`;

    const typography = `text-brandBlue dark:text-brandGold text-[16px] lg:text-[24px] tracking-normal uppercase font-bold`;
    
    const border = `ring-2 ring-brandBlue dark:ring-brandGold rounded-[10px] lg:rounded-[20px]`;

    const animationHover = `transition-all duration-150 ease-in-out hover:bg-brandBlue hover:text-white hover:dark:bg-brandGold hover:dark:text-darkGray`;

    return (
        <div className="flex gap-3">
            <a href={downloadLink} className={cx(base, typography, border, animationHover)}>
                <div className="flex items-center gap-x-3">
                {label}
                {/* this is the svg */}
                <div className="h-[16px] lg:h-[25px]">
                <svg width="100%" height="100%" viewBox="0 0 64 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path 
                    className="fill-brandBlue dark:fill-brandGold group-hover:fill-white group-hover:dark:fill-darkGray"
                    d="M59.5125 26.2439C65.4958 20.2372 65.4958 10.5096 59.5125 4.5029C54.2176 -0.812743 45.8728 -1.50378 39.7836 2.86568L39.6141 2.98262C38.0892 4.07765 37.7397 6.2039 38.8305 7.72417C39.9212 9.24445 42.0392 9.60591 43.5536 8.51089L43.723 8.39394C47.1224 5.95938 51.7713 6.34211 54.7153 9.30823C58.0511 12.6571 58.0511 18.079 54.7153 21.4279L42.8335 33.3774C39.4976 36.7263 34.0968 36.7263 30.761 33.3774C27.8064 30.4113 27.4252 25.7442 29.8503 22.3422L29.9667 22.1721C31.0575 20.6412 30.6974 18.5149 29.1831 17.4305C27.6687 16.3461 25.5402 16.697 24.46 18.2172L24.3435 18.3873C19.9805 24.4897 20.6688 32.8671 25.9638 38.1828C31.9471 44.1895 41.6368 44.1895 47.6201 38.1828L59.5125 26.2439ZM4.48747 23.7561C-1.49582 29.7628 -1.49582 39.4904 4.48747 45.4971C9.78241 50.8127 18.1272 51.5038 24.2164 47.1343L24.3859 47.0174C25.9108 45.9224 26.2603 43.7961 25.1695 42.2758C24.0788 40.7556 21.9608 40.3941 20.4464 41.4891L20.277 41.6061C16.8776 44.0406 12.2287 43.6579 9.28469 40.6918C5.94887 37.3323 5.94887 31.9103 9.28469 28.5615L21.1665 16.6226C24.5024 13.2737 29.9032 13.2737 33.239 16.6226C36.1936 19.5887 36.5748 24.2558 34.1497 27.6685L34.0333 27.8386C32.9425 29.3695 33.3026 31.4957 34.8169 32.5801C36.3313 33.6645 38.4598 33.3137 39.54 31.7934L39.6565 31.6233C44.0195 25.5103 43.3312 17.1329 38.0362 11.8172C32.0529 5.81054 22.3632 5.81054 16.3799 11.8172L4.48747 23.7561Z" 
                />
                </svg>
                </div>
                {/* svg end */}
                </div>
            </a>
        </div>
    )
}