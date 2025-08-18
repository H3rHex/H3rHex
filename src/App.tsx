import {useEffect, useState} from 'react'
import {Routes, Route } from "react-router-dom";
import {useHtmlLang} from "./hooks/useHtmlLang.tsx";

// Static components
import Header from "./components/common/Header.tsx";

// Page Imports
import Home from "./pages/Home.tsx";
import Projects from "./pages/Projects.tsx";
import Footer from "./components/common/Footer.tsx";

function App() {
    useHtmlLang();
    const [webMode, setWebMode] = useState<string>(localStorage.getItem("theme") || "dark");

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', webMode);
        localStorage.setItem("theme", webMode?.toString());
    },[webMode]);

    return (
        <>
                <Header
                    stateWebMode={webMode}
                    setStateWebMode={setWebMode}
                />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/projects" element={<Projects />} />
                </Routes>
                <Footer />
        </>
      );
}

export default App
