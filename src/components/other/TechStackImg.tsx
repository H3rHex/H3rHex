import React from "react";
import {useInView} from "../../hooks/useInView.tsx";


interface TechStackImgProps {
    src: string;
    alt: string;
}

const TechStackImg: React.FC<TechStackImgProps> = ({ src, alt }) => {
    const { ref, isVisible } = useInView<HTMLImageElement>();

    return (
        <img
            ref={ref}
            src={src}
            alt={alt}
            className={`
                rounded-lg
                shadow-xl shadow-gray-400 dark:shadow-lg dark:shadow-blue-950
                transition-all duration-700
                ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
            `}
        />
    );
};

export default TechStackImg;
