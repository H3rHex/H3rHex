import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

import Project from "../components/other/Project.tsx";

interface ProjectsResponse {
    projects: ProjectData[];
}

interface ProjectData {
    title: string;
    description: string;
    image: string;
    github: string;
    website: string;
    tags: string[] | null;
}

const Projects: React.FC = () => {
    const { t } = useTranslation();
    const [projects, setProjects] = useState<ProjectData[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("./JSON/projects.json");
                if (!response.ok) {
                    console.error("Error HTTP:", response.status);
                    return [];
                }

                const data: ProjectsResponse = await response.json();
                return data.projects;
            } catch (err) {
                console.error(err);
                return [];
            }
        };

        fetchData().then(setProjects);
    }, []);

    return (
        <section
            className="
                grid grid-cols-1 lg:grid-cols-2 gap-4
                p-10
            ">
            {projects.map((project, idx) => (
                <Project
                    key={idx} // 👈 si tienes un id mejor usarlo aquí
                    title={project.title}
                    description={t(project.description)}
                    github={project.github}
                    website={project.website}
                    tags={project.tags || []}
                    image={project.image}
                />
            ))}
        </section>
    );
};

export default Projects;
