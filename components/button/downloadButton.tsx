import React from "react";

interface downloadButtonProps {
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
    return (
        <div className="flex gap-3 group">
            <a href={downloadLink} className="dark:text-white text-[24px] tracking-normal uppercase font-bold border border-brandGold rounded-[20px] px-10 py-3">
                <div className="flex items-center gap-x-3">
                {label}
                {/* this is the svg */}
                <svg width="32" height="24" viewBox="0 0 32 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_d_42_2825)">
                    <path 
                        className="fill-darkGray dark:fill-white"
                        d="M29.0417 12.0713C31.7784 9.31251 31.7784 4.84474 29.0417 2.08595C26.6198 -0.35546 22.803 -0.672843 20.0178 1.33399L19.9403 1.3877C19.2428 1.89063 19.083 2.8672 19.5819 3.56544C20.0808 4.26368 21.0495 4.4297 21.7422 3.92677L21.8197 3.87306C23.3745 2.75489 25.5009 2.93067 26.8475 4.29298C28.3733 5.83106 28.3733 8.3213 26.8475 9.85938L21.4128 15.3477C19.887 16.8857 17.4167 16.8857 15.8909 15.3477C14.5395 13.9854 14.3651 11.8418 15.4744 10.2793L15.5276 10.2012C16.0266 9.49806 15.8619 8.52149 15.1692 8.02345C14.4766 7.5254 13.503 7.68653 13.0089 8.38477L12.9556 8.4629C10.96 11.2656 11.2748 15.1133 13.6967 17.5547C16.4334 20.3135 20.8655 20.3135 23.6022 17.5547L29.0417 12.0713ZM3.87358 10.9287C1.13687 13.6875 1.13687 18.1553 3.87358 20.9141C6.29546 23.3555 10.1123 23.6729 12.8975 21.666L12.975 21.6123C13.6725 21.1094 13.8323 20.1328 13.3334 19.4346C12.8345 18.7363 11.8658 18.5703 11.1731 19.0733L11.0956 19.127C9.54077 20.2451 7.41437 20.0693 6.0678 18.707C4.54202 17.1641 4.54202 14.6738 6.0678 13.1358L11.5025 7.65235C13.0283 6.11427 15.4986 6.11427 17.0244 7.65235C18.3758 9.01466 18.5501 11.1582 17.4409 12.7256L17.3876 12.8037C16.8887 13.5068 17.0534 14.4834 17.7461 14.9815C18.4387 15.4795 19.4123 15.3184 19.9064 14.6201L19.9597 14.542C21.9553 11.7344 21.6405 7.88673 19.2186 5.44532C16.4819 2.68653 12.0498 2.68653 9.31312 5.44532L3.87358 10.9287Z" 
                    />
                    </g>
                    <defs>
                    <filter id="filter0_d_42_2825" x="-2.17896" y="0.0178223" width="37.2732" height="30.9644" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dy="4"/>
                    <feGaussianBlur stdDeviation="2"/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_42_2825"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_42_2825" result="shape"/>
                    </filter>
                    </defs>
                </svg>
                {/* svg end */}
                </div>
            </a>
        </div>
    )
}