import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

const LanguageSelector: React.FC = () => {
    const { i18n } = useTranslation();

    const [lang, setLang] = useState<string>(
        localStorage.getItem("language") || "es"
    );

    useEffect(() => {
        i18n.changeLanguage(lang);
        localStorage.setItem("language", lang);
    }, [lang, i18n]);

    const changeLanguage = () => {
        const newLang = lang === "en" ? "es" : "en";
        setLang(newLang);
    };

    return (
        <div>
            <button
                className="select-none cursor-[var(--pointer-cursor)] p-1 w-10 rounded-lg  transition-all hover:scale-110 active: transform-y-2 text-black dark:text-white "
                onClick={changeLanguage}
            >
                {lang === "es" ? "ES" : "EN"}
            </button>
        </div>
    );
};

export default LanguageSelector;