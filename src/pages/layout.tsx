import { useState, useEffect, useRef, Ref } from "react";
import {
    Routes,
    Route,
} from "react-router-dom";


function Layout() {




    return (
        <>
        {/*    
        <div className="w-screen h-screen fixed top-0 left-0 loaded z-[100] animate-loaded pointer-events-none"><Load/></div>
            <div className="z-[10]">
                <Nav /> 
            </div>
            
            <div className={`fixed w-full h-full top-0 left-0 flex flex-row items-center align-middle justify-center z-[-1] pointer-events-none`}> 
                <Initial/>
            </div>

            */}
            {/* Initial screen cover, email, + navbar & router */}
            <div className="gap-16 flex flex-col min-h-[120vh] items-center bg-black">
               
                <div className="gap-16 flex flex-col items-center justify-start w-full max-h-fit bg-black lg:px-32 box-border z-[0] relative top-0">
                
                    <div className="text-4xl">
                        polololo
                    </div>

                    <Routes>
                    </Routes>


 
                </div>
                
                
            </div>
        </>
    );
    }

    export default Layout;
