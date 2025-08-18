import React from "react";
import GitHubSvg from "../other/GitHubSvg.tsx";


const Footer: React.FC = () => {
    return (
        <footer className="mt-auto">
            <a
                href="https://github.com/H3rHex"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity duration-300 flex items-center justify-center"
            >
              <GitHubSvg/>
            </a>
        </footer>
    );
};

export default Footer;