import React from "react";
import {useTranslation} from "react-i18next";

const LanguageSelector: React.FC = () => {
    const {i18n} = useTranslation();

    const changeLanguage = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedLang = event.target.value;
        i18n.changeLanguage(selectedLang);
    };

    return (
        <div>
            <select
                id="language-select"
                value={i18n.language}
                onChange={changeLanguage}
            >
                <option value="es">ES</option>
                <option value="en">EN</option>
            </select>
        </div>
    );
}

export default LanguageSelector;