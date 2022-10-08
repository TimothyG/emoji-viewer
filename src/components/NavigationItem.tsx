import React, { AnchorHTMLAttributes } from "react";
import { getSectionName } from "../lib/navigation";

type Props = {
    label: string
    index: number
    badgeText?: string
}

export const ListItem = ({
    label,
    index,
    badgeText
}: Props) => {

    const scrollToIndex = () => {
        const sectionName = getSectionName(index);
        const section = document.querySelector('#' + sectionName);
        section?.scrollIntoView({ behavior: 'smooth', block: "start" });
    };

    return (
        <a 
            className="flex flex-row p-2 text-slate-900 dark:text-white hover:dark:text-slate-800 hover:bg-sky-100 rounded-lg hover:cursor-pointer"
            onClick={scrollToIndex}>
            <span className="flex-grow font-medium text-left">{label}</span>
            {badgeText && (<span className="font-light text-slate-500">{badgeText}</span>)}
        </a>
    )
}