import React, { type ReactNode } from "react";

type TextProps = React.HTMLProps<HTMLParagraphElement> & {
    children?: ReactNode;
};

const TextP: React.FC<TextProps> = ({children, ...props}) => {
    const combinedClassName = `text-sm md:text-md lg:text-lg text-shadow-xs text-shadow-gray-500 dark:text-shadow-none text-black dark:text-white ${props.className || ''}`;

    return (
        <p {...props}
           className={combinedClassName}
        >
            {children}
        </p>
    );
}

export default TextP;