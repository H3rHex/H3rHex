import React from "react";
import {useTranslation} from "react-i18next";
import LanguageSelector from "./LanguageSelector.tsx";

const Header:React.FC = () => {
    const {t} = useTranslation();
    return (
        <header>
            <LanguageSelector/>
        </header>
    );
};

export default Header;