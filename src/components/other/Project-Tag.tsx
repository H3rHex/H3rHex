import React from "react";
import TextP from "../common/text/TextP.tsx";

interface TagProps {
    text: string;
    className?: string;
}

const Tag: React.FC<TagProps> = ({ text, className }) => {
    return (
        <li>
            <TextP
                className={`
                inline-block px-3 py-1 
                text-xs sm:text-sm font-medium 
                bg-gray-200 dark:bg-gray-600 
                text-gray-800 dark:text-gray-200 
                rounded-full shadow-sm 
                ${className || ""}
            `}
            >
                {text}
            </TextP>
        </li>

    );
};

export default Tag;
