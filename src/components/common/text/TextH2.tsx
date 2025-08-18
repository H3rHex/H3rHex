import React, { type ReactNode } from "react";

type TextProps = React.HTMLProps<HTMLParagraphElement> & {
    children?: ReactNode;
};

const TextH2: React.FC<TextProps> = ({children, ...props}) => {
    const combinedClassName = `font-semibold text-xl text-shadow-md text-shadow-xs text-shadow-gray-500 dark:text-shadow-none  text-black dark:text-white font-roboto ${props.className || ''}`;

    return (
        <h2 {...props}
           className={combinedClassName}
        >
            {children}
        </h2>
    );
}

export default TextH2;