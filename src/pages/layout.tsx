import { useState, useEffect, useRef, Ref } from "react";
import {
    Routes,
    Route,
    useLocation,
} from "react-router-dom";
import Landing from "./landing";
import Portfolio from "./portfolio";
import { AnimatePresence } from "motion/react";

function Layout() {

    const location = useLocation();

    useEffect(() => {
        document.body.style.overflow = 'hidden';
        setTimeout(function(){
            window.scrollTo(0, 0)
            setTimeout(() => {
                document.body.style.overflow = '';
            }, 1500);
        }, 1000)
    }, []);





    return (
        <>    
            <div className="gap-16 w-screen h-screen flex items-center align-middle justify-center">
                <AnimatePresence mode="wait" initial={false}>        
                <Routes location={location} key={location.pathname}>
                    <Route index element={<Landing/>}/>
                    <Route path="portfolio" element={<Portfolio/>}/>

                </Routes>
                </AnimatePresence>
            </div>
        </>
    );
    }

    export default Layout;
