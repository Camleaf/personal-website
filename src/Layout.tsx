import {
    Routes,
    Route,
} from "react-router-dom";
import Home from "./pages/Home.tsx";
import Background from "./components/background/Background.tsx";
import Nav from "./components/navbar/Nav.tsx";
import "./layout.css";

function Layout() {
    return (
        <>
            
            <Background />
            <div 
                // Add line below back once snake animation is done
                className="term-wrapper">
                <Nav />
                <Routes>
                    <Route path="/*" element={<Home/>}/>
                </Routes>

            </div>
        </>
    );
}

export default Layout;
