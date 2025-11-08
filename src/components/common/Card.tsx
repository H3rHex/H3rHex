import React from 'react';
import {useInView} from "../../hooks/useInView.tsx";

type props = {
    children?: React.ReactNode;
    className?: string;
};

const Card: React.FC<props> = ({ children, className}) => {
    const { ref, isVisible } = useInView<HTMLImageElement>({loop:false});

    return (
        <article
            ref={ref}
            className={`
                z-1
                flex flex-col justify-center items-center
                w-full p-3 lg:p-10
                liquid-glass
                transition-all duration-500 ease-in-out
                hover:scale-[102%]
                 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
                ${className || ''}
        `}>
            {children}
        </article>
    );
};

export default Card;