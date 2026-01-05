import { colours } from "../background/Background.tile.ts";
import { type NavigateFunction, type Location } from "react-router-dom";

export type page = {
    name:string,
    colour:string
}

export const pages:page[] = [
    {name:"Home", colour:colours[0]},
    {name:"About", colour:colours[1]}, 
    {name:"Projects", colour:colours[2]}, 
    {name:"Resume", colour:colours[3]},
];


let animationRunning = false;
let switchName = "Home";
export const switchPage = (name:string, navigate:NavigateFunction, location:Location) => {
        
        switchName = name;
        
        // Location checking is after switchname in case the user clicks back
        if ("/" + name.toLowerCase() == location.pathname) return;
    

        const el = document.getElementById("refresh-mask-path")


        if (!el || animationRunning) return;



        el.style.animation = "maskMove 1000ms steps(var(--length))";
        setTimeout(()=>{ // So that the animation can't be triggered again while running
            animationRunning = false;
            el.style.animation = "";
        },780); // The animation time is 1000ms, but 780ms is when it the visible part finishes, so can be restarted

        animationRunning = true;


        // The page switch happens halfway through the animation, when it is fully covered
        setTimeout(()=>{
            if (switchName === "Home") {
                navigate('/');
            } else {
                navigate(switchName.toLowerCase());    
            }
        },500);
}

