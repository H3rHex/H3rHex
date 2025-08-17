import React from 'react';
import {useInView} from "../../hooks/useInView.tsx";

type props = {
    children?: React.ReactNode;
    className?: string;
};

const Card: React.FC<props> = ({ children, className }) => {
    const { ref, isVisible } = useInView<HTMLImageElement>({loop:false});

    return (
        <div
            ref={ref}
            className={`
            flex flex-col justify-start items-center
            w-full p-3 lg:p-10
            bg-gray-200 dark:bg-gray-700
            border-2 border-gray-300 dark:border-gray-800 rounded-2xl
            shadow-xl shadow-gray-400 dark:shadow-none
            transition-all duration-500 ease-in-out
            hover:scale-[102%]
             ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
            ${className || ''}
        `}>
            {children}
        </div>
    );
};

export default Card;