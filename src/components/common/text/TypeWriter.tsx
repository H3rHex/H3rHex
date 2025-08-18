import React, { useState, useEffect, useMemo } from "react";

interface TypeWriterOptions {
    speed?: number;          // ms entre letras
    delay?: number;          // ms antes de empezar
    loop?: boolean;          // repetir frases
    text: string | string[]; // frase(s)
}

const TypeWriter: React.FC<TypeWriterOptions> = ({
                                                     speed = 100,
                                                     delay = 500,
                                                     loop = false,
                                                     text
                                                 }) => {
    const texts = useMemo(() => Array.isArray(text) ? text : [text], [text]);
    const [index, setIndex] = useState(0); // índice de la frase
    const [subIndex, setSubIndex] = useState(0); // posición en la frase
    const [forward, setForward] = useState(true); // escribiendo o borrando
    const [blink, setBlink] = useState(true); // cursor parpadeante

    // Efecto para el cursor que parpadea
    useEffect(() => {
        const blinkInterval = setInterval(() => setBlink(prev => !prev), 500);
        return () => clearInterval(blinkInterval);
    }, []);

    // Efecto principal para escribir y borrar
    useEffect(() => {
        if (forward) {
            // Escribir
            if (subIndex < texts[index].length) {
                const timeout = setTimeout(() => setSubIndex(prev => prev + 1), speed);
                return () => clearTimeout(timeout);
            } else if (loop) {
                // Esperar y empezar a borrar
                const timeout = setTimeout(() => setForward(false), delay);
                return () => clearTimeout(timeout);
            }
        } else {
            // Borrar
            if (subIndex > 0) {
                const timeout = setTimeout(() => setSubIndex(prev => prev - 1), speed / 2);
                return () => clearTimeout(timeout);
            } else {
                // Pasar a la siguiente frase
                setForward(true);
                setIndex(prev => (prev + 1) % texts.length);
            }
        }
    }, [subIndex, forward, index, texts, speed, delay, loop]);

    return (
        <span className={"h-10 min-h-10 text-shadow-xs text-shadow-gray-500 dark:text-shadow-none  m-2 p-4 text-center text-black dark:text-white"}>
            {texts[index].substring(0, subIndex)}
            <span className={blink ? "visible" : "hidden"}>|</span>
        </span>
    );
};

export default TypeWriter;
