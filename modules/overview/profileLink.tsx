import React from "react";
import Link, {LinkProps} from "next/link";
import { externalLinkProps } from "../../components/externalLink/externalLink";

export interface profileLinkProps {
    /**
     * Pre label (i.e. 'WWW', 'EM', 'GIT' etc)
     */
    preLabel: string
    /**
     * Label (i.e. 'peteraiello.dev')
     */
    label: string,
    /**
     * The link itself (i.e. https://linkedin.com/in/peteraiello)
     */
    customLink: externalLinkProps
}

export const ProfileLink = ({
    preLabel,
    label,
    customLink,
}:profileLinkProps) => {
    return (
        <li className="w-full lg:w-1/2">
            <strong>{preLabel + ': '}</strong><a href={customLink?.href} target={customLink?.target} className="transition-all ease-in-out duration-150 opacity-100 text-brandBlue border-brandBlue dark:text-brandGold dark:border-brandGold border-b hover:opacity-90">{label}</a>
        </li>
    )

}
