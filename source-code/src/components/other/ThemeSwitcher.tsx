import React from 'react';
import { BsLightbulb, BsLightbulbFill } from 'react-icons/bs';

interface Props {
    stateWebMode: string;
    setStateWebMode: React.Dispatch<React.SetStateAction<string>>;
}

const ThemeSwitcher: React.FC<Props> = ({ stateWebMode, setStateWebMode }) => {
    const handleClick = () => {
        setStateWebMode(stateWebMode === 'dark' ? 'light' : 'dark');
    };

    return (
        <button
            onClick={handleClick}
            className="
        text-2xl transition-all duration-300 transform
        focus:outline-none
      "
        >
            {stateWebMode === 'dark' ? (
                <BsLightbulb className="rotate-180 text-gray-300 hover:text-gray-400 active:translate-y-1" />
            ) : (
                <BsLightbulbFill className="rotate-180 text-yellow-300 hover:text-yellow-400 active:translate-y-1" />
            )}
        </button>
    );
};

export default ThemeSwitcher;