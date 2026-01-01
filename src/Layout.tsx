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
        <div className="head-wrapper">

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
