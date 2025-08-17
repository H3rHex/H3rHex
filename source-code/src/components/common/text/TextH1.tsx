import React, { type ReactNode } from "react";

type TextProps = React.HTMLProps<HTMLParagraphElement> & {
    children?: ReactNode;
};

const TextH1: React.FC<TextProps> = ({children, ...props}) => {
    const combinedClassName = `font-bold text-2xl text-shadow-md text-shadow-xs text-shadow-gray-500 dark:text-shadow-none  text-black dark:text-white font-roboto ${props.className || ''}`;

    return (
        <h1 {...props}
           className={combinedClassName}
        >
            {children}
        </h1>
    );
}

export default TextH1;