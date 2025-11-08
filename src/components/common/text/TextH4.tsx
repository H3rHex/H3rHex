import React, { type ReactNode } from "react";

type TextProps = React.HTMLProps<HTMLParagraphElement> & {
    children?: ReactNode;
};

const TextH3: React.FC<TextProps> = ({children, ...props}) => {
    const combinedClassName = `text-base text-shadow-md text-shadow-xs text-shadow-gray-500 dark:text-shadow-none  text-black dark:text-white font-roboto ${props.className || ''}`;

    return (
        <h4{...props}
           className={combinedClassName}
        >
            {children}
        </h4>
    );
}

export default TextH3;