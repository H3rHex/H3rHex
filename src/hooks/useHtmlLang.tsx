import { useEffect } from "react";
import i18next from "i18next";

export function useHtmlLang() {
    useEffect(() => {
        const updateLang = () => {
            document.documentElement.lang = i18next.language;
        };

        updateLang();
        i18next.on("langChange", updateLang);
        return () => {
            i18next.off("langChange", updateLang);
        }
    }, []);
}