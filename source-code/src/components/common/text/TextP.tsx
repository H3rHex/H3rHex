import React, { type ReactNode } from "react";

type TextProps = React.HTMLProps<HTMLParagraphElement> & {
    children?: ReactNode;
};

const TextP: React.FC<TextProps> = ({children, ...props}) => {
    const combinedClassName = `${props.className || ''}`;

    return (
        <p {...props}
           className={combinedClassName}
        >
            {children}
        </p>
    );
}

export default TextP;