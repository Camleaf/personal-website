import {
    Routes,
    Route,
    useLocation,
} from "react-router-dom";
import { useState, useEffect } from 'react';
import PageLabel from "./components/layout/pageLabel.tsx";
import Home from "./pages/home/Home.tsx";
import Background from "./components/background/Background.tsx";
import Nav from "./components/navbar/Nav.tsx";
import Construction from "./components/layout/construction.tsx";
import { colours } from "./components/background/Background.tile.ts";
import "./layout.css";

function Layout() {
    
    const location = useLocation();
    const [highlightColour, setHighlightColour] = useState<string>(
        colours[Math.floor(Math.random()*colours.length)]
    );

    useEffect(()=>{
        setHighlightColour(colours[Math.floor(Math.random()*colours.length)]);
    },[location]);


    return (
        <>
            
            <Background />
            <div 
                // Add line below back once snake animation is done
                className="term-wrapper">  
                <Nav />
                <div className="term-content-wrapper" style={{"--colour":highlightColour} as React.CSSProperties}>
                    <PageLabel/>
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/*" element={<Construction/>}/>
                    </Routes>
                </div>
                <div className="navbar-occupied-spacer" />
            
            </div>
        </>
    );
}

export default Layout;
