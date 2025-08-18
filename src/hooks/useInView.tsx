import { useEffect, useRef, useState } from "react";

export function useInView<T extends HTMLElement>(options?: { threshold?: number; loop?: boolean }) {
    const ref = useRef<T | null>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (!ref.current) return;

        const observer = new IntersectionObserver(
            (entries) => {
                const entry = entries[0];

                if (options?.loop) {
                    // 👇 Always change
                    setIsVisible(entry.isIntersecting);
                } else {
                    // 👇 Only one time
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                        observer.disconnect();
                    }
                }
            },
            { threshold: options?.threshold ?? 0.1 }
        );

        observer.observe(ref.current);

        return () => {
            observer.disconnect();
        };
    }, [options?.loop, options?.threshold]);

    return { ref, isVisible };
}
