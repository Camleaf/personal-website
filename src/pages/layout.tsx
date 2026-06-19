import { useState, useEffect, useRef, Ref } from "react";
import {
    Routes,
    Route,
} from "react-router-dom";
import Landing from "./landing";
import Portfolio from "./portfolio";

function Layout() {



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
               
                <Routes>
                    <Route index element={<div><Landing/></div>}/>
                    <Route path="portfolio" element={<Portfolio/>}/>

                </Routes>
            </div>
        </>
    );
    }

    export default Layout;
