import classnames from 'classnames';
import React, { useEffect, useState } from 'react';
import { setConstantValue } from 'typescript';

type Props = {
    emoji: string,
    title: string,
    isSelected: boolean,
    onSelect: (value: string) => void;
    onDeselect: (value: string) => void;
}

export const Cell = ({
    emoji,
    title,
    isSelected,
    onSelect,
    onDeselect
}: Props) => {

    const [isAnimating, setIsAnimating] = useState(false);

    const classes = classnames('h-16 w-16 flex flex-col justify-center items-center hover:bg-slate-300 hover:dark:bg-slate-100 hover:rounded-full hover:border-slate-500 hover:cursor-pointer',
    {
        'bg-green-600 rounded-full': isSelected,
        'animate-ping': isAnimating
    });

    const onClick = () => {
        setIsAnimating(true);
        isSelected ? onDeselect(emoji) : onSelect(emoji);
    };

    useEffect(() => {
        if (isAnimating) {
            const interval = setInterval(() => {
                setIsAnimating(false);
            }, 600);

            return () => clearInterval(interval);
        }
    }, [isAnimating]);

    return (
        <a 
            className={classes}
            onClick={e => onClick()}>
            <span className="text-4xl pb-1" title={title}>
                {emoji}
            </span>
        </a>
    )
}