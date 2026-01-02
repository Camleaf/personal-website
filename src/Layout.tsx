import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import Home from "./pages/Home.tsx";
import Background from "./components/background/Background.tsx"
import "./layout.css";

function Layout() {


  return (
    <>
        <Background />
        <div 
            // Add line below back once snake animation is done
            //className="head-wrapper"
            >

            <Router>
                <Routes>
                    <Route path="/*" element={<Home/>}/>
                </Routes>
            </Router>

        </div>
    </>
  );
}

export default Layout;
