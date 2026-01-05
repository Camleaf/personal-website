import { colours } from "../background/Background.tile.ts";
import { type NavigateFunction } from "react-router-dom";

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


export const switchPage = (name:string, navigate:NavigateFunction) => {
        if (name === "Home") {
            navigate('/');
        } else {
            navigate(name.toLowerCase());    
        }
    }

