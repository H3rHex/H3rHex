import React from "react";
import {useTranslation} from "react-i18next";
import LanguageSelector from "./LanguageSelector.tsx";
import ThemeSwitcher from "../other/ThemeSwitcher.tsx";

interface Props {
    stateWebMode: string,
    setStateWebMode: React.Dispatch<React.SetStateAction<string>>
}

const Header:React.FC<Props> = ({stateWebMode, setStateWebMode}) => {
    const {t} = useTranslation();
    return (
        <header className="
            flex flex-row items-center justify-center gap-10 
            w-full p-10
            bg-gray-200 dark:bg-gray-800
            shadow-lg shadow-gray-200 dark:shadow-gray-800
            text-black dark:text-white
            transition-all duration-200
            "
        >
            <nav className="
                flex items-center gap-10
                font-semibold text-lg tracking-tighter
                "
            >
                <a
                    className="transition-transform duration-200 hover:scale-105"
                    href="/">{t("page-home")}
                </a>
                <a
                    className="transition-transform duration-200 hover:scale-105"
                    href="/projects">{t("page-projects")}
                </a>
            </nav>
            <LanguageSelector/>
            <ThemeSwitcher
                stateWebMode={stateWebMode}
                setStateWebMode={setStateWebMode}
            />
        </header>
    );
};

export default Header;