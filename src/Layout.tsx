import {
    Routes,
    Route,
} from "react-router-dom";
import "./layout.css";
import Home from "./pages/home/Home.tsx";

function Layout() {
    


    return (
        <>
            
            <Routes>
                <Route path="/*" element={<Home/>}/>
            </Routes>

        </>
    );
}

export default Layout;
