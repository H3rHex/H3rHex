import {useEffect, useState} from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


// Static components
import Header from "./components/common/Header.tsx";

// Page Imports
import Home from "./pages/Home.tsx";
import Projects from "./pages/Projects.tsx";
import Footer from "./components/common/Footer.tsx";

function App() {
    const [webMode, setWebMode] = useState<string>("dark");

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', webMode);
    },[webMode]);

    return (
        <>
            <Router>
                <Header
                    stateWebMode={webMode}
                    setStateWebMode={setWebMode}
                />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/projects" element={<Projects />} />
                </Routes>
                <Footer />
            </Router>
        </>
      );
}

export default App
