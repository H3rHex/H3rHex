import React, {useState, useEffect} from "react";
import {useTranslation} from "react-i18next";

//Text
import TextH1 from "../components/common/text/TextH1.tsx";
import TextH2 from "../components/common/text/TextH2.tsx";
import TextH3 from "../components/common/text/TextH3.tsx";
import TextP from "../components/common/text/TextP.tsx";
import TypeWriter from "../components/common/text/TypeWriter.tsx";

//Other
import Card from "../components/common/Card.tsx";
import Splitter from "../components/common/Splitter.tsx";
import TechStackImg from "../components/other/TechStackImg.tsx";

interface TechItem {
    name: string;
    badge_url: string;
}

interface FrameworkStack {
    frontend: TechItem[];
    backend: TechItem[];
}

interface TechStackData {
    lang_stack: TechItem[];
    framework_stack: FrameworkStack;
    tools_platforms_stack: TechItem[];
}

interface TechStackResponse {
    techStack: TechStackData;
}

interface Study{
    title: string;
    description: string;
}

interface InterestStudiesData{
    studies: Study[];
    interests: string[];
}

const Home:React.FC = () => {
    const {t} = useTranslation();

    // LOAD TECH STACK DATA
    const [techStack, setTechStack] = useState<TechStackData | null>(null);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("./JSON/techStack.json");
                if (!response.ok) {
                    console.error("Error HTTP:", response.status);
                    return null;
                }

                const data: TechStackResponse = await response.json();
                return data.techStack;
            } catch (err) {
                console.error(err);
                return null;
            }
        };

        fetchData().then((stack) => {
            if (stack) setTechStack(stack);
        });
    }, []);

    // LOAD INTEREST-STUDIES DATA
    const [interestStudies, setInterestStudies] = useState<InterestStudiesData | null>(null);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("./JSON/interest-studies.json");
                if(!response.ok) {
                    console.error("Error HTTP:", response.status);
                    return null;
                }

                const data: InterestStudiesData = await response.json();
                return data;

            } catch (err){
                console.error(err);
                return null;
            }
        }
        fetchData().then((data => {
            if(data) setInterestStudies(data);
        }));
    }, [])

    const homePhrases: string[] = [
        t("home-phrase-0"),
        t("home-phrase-1"),
        t("home-phrase-2"),
        t("home-phrase-3"),
        t("home-phrase-4"),
        t("home-phrase-5"),
        t("home-phrase-6"),
        t("home-phrase-7")
    ];

    return (
        <main className="
            flex flex-col
            p-10
            z-10
            "
        >
            {/*WELCOME*/}
            <section className="flex flex-col">
                <TextH1
                    className={" mb-2 text-center"}
                >
                    {t("home-welcome-text")}
                </TextH1>

                <TypeWriter
                    loop={true}
                    text={homePhrases}
                />
            </section>

            <section className="flex flex-col justify-start items-center p-5">
                <div className="w-full max-w-[164px] h-auto mb-5">
                    <img className={"w-full h-auto object-cover rounded-full shadow-lg shadow-green-200 dark:shadow-purple-950 "} src={"./favicon.svg"} alt="favicon" />
                </div>
                <TextP className={"w-full lg:max-w-1/2 text-center p-5"}>{t("home-personal-phrase")}</TextP>
            </section>

            {/*ABOUT ME*/}
            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-auto w-full lg:max-w-7xl lg:px-4 mb-10">
                <Card>
                    <TextH2 className={"tracking-widest p-2 mb-4"}>
                        {t("home-about-me")}
                    </TextH2>
                    <TextP className={"p-2"}>
                        {t("home-about-me-content")}
                    </TextP>
                </Card>

                <Card>
                    <TextH2 className={"tracking-widest p-2 mb-4"}>
                        {t("home-interests")}
                    </TextH2>
                    <div>
                        {interestStudies != null && interestStudies.interests.map((content, index) => (
                            <TextP
                                className={"p-2"}
                                key={index}
                            >
                                {t(content)}
                            </TextP>
                        ))}
                    </div>
                </Card
                 >

                <Card
                    className={"flex flex-col gap-2"}
                >
                    <img
                        className="w-full h-auto max-w-[90%]"
                        src="https://github-readme-stats.vercel.app/api?username=h3rhex&title_color=ffffff&text_color=ffffff&bg_color=0d1117&border_color=9400D3&icon_color=ff005c"
                        alt="github-stats"
                    />

                    <img
                        className="w-full h-auto max-w-[90%]"
                        src="https://github-readme-stats.vercel.app/api/top-langs/?username=h3rhex&layout=compact&langs_count=10&title_color=ffffff&text_color=ffffff&bg_color=0d1117&border_color=9400D3&icon_color=ff005c"
                        alt="github-stats"
                    />
                </Card>
            </section>

            {/*TECH STACK*/}
            <section className="flex flex-col lg:p-5">
                <TextH2
                    className={"tracking-widest"}
                >
                    {t("home-technologies-section-title")}
                </TextH2>
                <Splitter />
                <div>
                    <TextH3>
                        {t("home-technologies-langs-scripts")}
                    </TextH3>

                    <div className="flex flex-col xl:flex-row flex-wrap gap-2 p-5 mx-auto max-w-7xl">
                        {techStack != null && techStack.lang_stack.map((item, i) => (
                            <div key={i}>
                                <TechStackImg src={item.badge_url} alt={item.name} />
                            </div>
                        ))}
                    </div>

                    <TextH3>
                        {t("home-technologies-frameworks-title")}
                    </TextH3>

                    <div className="flex flex-col flex-wrap gap-2 p-5 mx-auto mb-2 max-w-7xl">
                        <TextP className={"mb-2"}>
                            <strong>
                                Frontend:
                            </strong>
                        </TextP>
                        <div className="flex flex-col xl:flex-row flex-wrap gap-2 mb-2">
                            {techStack != null && techStack.framework_stack.frontend.map((item, i) => (
                                <div key={i}>
                                    <TechStackImg src={item.badge_url} alt={item.name} />
                                </div>
                            ))}
                        </div>

                        <TextP className={"mb-2"}>
                            <strong>
                                Backend:
                            </strong>
                        </TextP>
                        <div className="flex flex-col xl:flex-row flex-wrap gap-2 mb-2">
                            {techStack != null && techStack.framework_stack.backend.map((item, i) => (
                                <div key={i}>
                                    <TechStackImg src={item.badge_url} alt={item.name} />
                                </div>
                            ))}
                        </div>
                    </div>

                    <TextH3>
                        {t("home-technologies-tools_platforms-title")}
                    </TextH3>

                    <div className="flex flex-col xl:flex-row flex-wrap gap-2 p-5 mx-auto max-w-7xl">
                        {techStack != null && techStack.tools_platforms_stack.map((item, i) => (
                            <div key={i}>
                                <TechStackImg src={item.badge_url} alt={item.name} />
                            </div>
                        ))}
                    </div>

                </div>
            </section>

            <section className={"flex flex-col p-5"}>
                <TextH2
                    className={"tracking-widest"}
                >
                    {t("home-studies-title")}
                </TextH2>
                <Splitter />
                <div className={"flex flex-col gap-2"}>
                    {interestStudies != null && interestStudies.studies.map((study, i) => (
                        <div className={"flex flex-col gap-2 p-2"} key={i}>
                            <TextH3>{t(study.title)}</TextH3>
                            <TextP>{t(study.description)}</TextP>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
}

export default Home;