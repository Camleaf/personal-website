import { useState, useEffect, useRef, Ref } from "react";
import { IconContext } from "react-icons";
import { FaArrowDown } from "react-icons/fa";
import {
    Routes,
    Route,
} from "react-router-dom";
import Main from "./main";


function Layout() {
    const [marginTop, setMarginTop] = useState(0);
    const [width, setWidth] = useState(0)
    const scrollRef:Ref<HTMLDivElement> = useRef<HTMLDivElement>(null);


    useEffect(() => {
        setWidth(window.innerWidth)
        setWidth(window.innerWidth + (window.innerWidth>=1024 ? 0 : 12*parseFloat(getComputedStyle(document.documentElement).fontSize)))
        window.addEventListener("resize", function(){
            setMarginTop(window.innerHeight*1.1);
            setWidth(window.innerWidth + (window.innerWidth>=1024 ? 0 : 12*parseFloat(getComputedStyle(document.documentElement).fontSize)))
        });
        document.body.style.overflow = 'hidden';
        setTimeout(function(){
            setMarginTop(window.innerHeight*1.1);
            window.scrollTo(0, 0)
            setTimeout(() => {
                document.body.style.overflow = '';
            }, 1500);
        }, 1000)
    }, []);





    return (
        <>
        {/* Mechmania logo load + intial screen */}
            <div className="w-screen h-screen fixed top-0 left-0 loaded z-[100] animate-loaded pointer-events-none">{/*<Load/>*/}</div>
            <div className="z-[10]">
            {/*<Nav scrollRef={scrollRef} marginTop={marginTop}/>*/}
            </div>
            
            <div className={`fixed w-full h-full top-0 left-0 flex flex-row items-center align-middle justify-center z-[-1] pointer-events-none`}> 
            {/*<Initial/>*/}
            </div>

            {/* Initial screen cover, email, + navbar & router */}
            <div style={{ width: width+'px',marginTop: `${marginTop}px` }} className="gap-16 flex flex-col min-h-[120vh] items-center bg-white" ref={scrollRef}>
               
                <div className="gap-16 flex flex-col items-center justify-start w-full max-h-fit bg-white lg:px-32 box-border z-[0] relative top-0">
                
                    <div
                        style={{
                            borderColor: "#444",
                            marginBottom:`1rem`

                        }}
                        className="z-50 relative bg-white box-content rounded-[4rem] border-[8px] border-solid h-0 -left-[10vw] w-[120vw]"
                    />                    
                    {/*
                    <div style={{marginBottom:`4rem`}}>
                        <Line dir down/>
                    </div>
                    */}

                    <div className="animate-bounce pt-4 cursor-pointer">
                        <IconContext.Provider value={{ color: "#999", size: "4rem" }}>
                            <FaArrowDown/>
                        </IconContext.Provider>
                    </div>

                    <Routes>
                        <Route path="/" element={<Main/>}/>
                    </Routes>


 
                </div>
                
                {/*<Footer scrollRef={scrollRef} marginTop={marginTop}></Footer>*/}
                
            </div>
        </>
    );
    }

    export default Layout;
