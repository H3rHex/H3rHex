import { useState, useEffect } from "react";

function getScreenSize() {
    const { innerWidth, innerHeight } = window;
    return {
        width: innerWidth,
        height: innerHeight,
    };
}

export function useScreenSize() {
    const [screenSize, setScreenSize] = useState(getScreenSize());

    useEffect(() => {
        function handleResize() {
            setScreenSize(getScreenSize());
        }

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return screenSize;
}