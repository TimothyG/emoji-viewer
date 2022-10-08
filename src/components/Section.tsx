import { PropsWithChildren } from "react"
import { getSectionName } from "../lib/navigation"

type Props = {
    title: string
    itemCount: number
    index: number
}

export const Section = ({
    title,
    itemCount,
    index,
    children
}: Props & PropsWithChildren) => {

    if (itemCount === 0) {
        return null;
    }

    return (
        <div className="section-wrapper" id={getSectionName(index)}>
            <h2 className="text-left text-sm m-3 text-slate-700 dark:text-slate-500">{title}</h2>
            <div className="flex flex-wrap">
                {children}
            </div>
        </div>
    );
}