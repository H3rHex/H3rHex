import React from "react";
import Card from "../common/Card.tsx";
import TextH3 from "../common/text/TextH3.tsx";
import TextP from "../common/text/TextP.tsx";
import ProjectTag from "./Project-Tag.tsx";

interface ProjectData {
    title: string;
    description: string;
    github: string;
    website?: string;
    image?: string;
    tags?: string[] | null;
}

const Project: React.FC<ProjectData> = ({ title, description, github, website, image, tags }) => {
    return (
        <Card
            aria-label={`Proyecto: ${title}`}
            className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg overflow-hidden">
            {image && (
                <figure className="relative w-full max-w-3/4 aspect-[9/9] overflow-hidden flex items-center justify-center rounded-lg mb-4 bg-black/10">
                    <img
                        src={image}
                        alt={title}
                        className="w-full h-full object-fill"
                        loading={"lazy"}
                    />
                </figure>
            )}

            <header>
                <TextH3 className="text-center text-base sm:text-lg md:text-xl font-semibold mb-2">
                    {title}
                </TextH3>
            </header>

            <TextP className="text-center text-xs sm:text-sm md:text-base text-gray-700 dark:text-gray-300 mb-3">
                {description}
            </TextP>

            {tags && tags.length > 0 && (
                <ul className="flex flex-wrap justify-center gap-2 mb-3">
                    {tags.map((tag, index) => (
                        <ProjectTag key={index} text={tag} />
                    ))}
                </ul>
            )}

            <nav className="flex justify-center items-center gap-3">
                <ul>
                    <li>
                        <a
                            href={github}
                            target="_blank"
                            className="px-3 py-1.5 text-xs sm:text-sm bg-gray-800 dark:bg-gray-600 text-white rounded-md shadow-md hover:bg-black/80 transition-colors"
                            rel="noopener noreferrer"
                            aria-label={`Ver código fuente de ${title} en GitHub`}
                        >
                            GitHub
                        </a>
                    </li>
                    {website && (
                        <li>
                            <a
                                href={website}
                                target="_blank"
                                className="px-3 py-1.5 text-xs sm:text-sm bg-blue-600 text-white rounded-md shadow-md hover:bg-blue-700 transition-colors"
                            >
                                Live Demo
                            </a>
                        </li>
                     )}
                </ul>

            </nav>
        </Card>
    );
};

export default Project;
