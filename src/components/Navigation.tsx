import { PropsWithChildren } from "react"

export const Navigation = ({
    children
}: PropsWithChildren) => {
    return (
        <div className="px-2">
            {children}
        </div>
    )
}