import React from "react";
import {useTranslation} from "react-i18next";
import {useScreenSize} from "../../hooks/useScreenSize.tsx";

// Components
import LanguageSelector from "../other/LanguageSelector.tsx";
import ThemeSwitcher from "../other/ThemeSwitcher.tsx";
import {BsHouseFill, BsRocketTakeoffFill} from "react-icons/bs";


interface Props {
    stateWebMode: string,
    setStateWebMode: React.Dispatch<React.SetStateAction<string>>
}

const Header:React.FC<Props> = ({stateWebMode, setStateWebMode}) => {
    const {t} = useTranslation();
    const {width} = useScreenSize();

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
                    className="text-shadow-xs text-shadow-gray-500 dark:text-shadow-none  ransition-transform duration-200 hover:scale-110 hover:dark:text-purple-300"
                    href="#/"
                >
                    {width > 768 ? t("page-home") : <BsHouseFill/>}
                </a>
                <a
                    className="text-shadow-xs text-shadow-gray-500 dark:text-shadow-none  transition-transform duration-200 hover:scale-110 hover:dark:text-purple-300"
                    href="#/projects"
                >
                    {width > 768 ? t("page-projects") : <BsRocketTakeoffFill/>}
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