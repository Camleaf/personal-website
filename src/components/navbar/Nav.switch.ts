import { colours } from "../background/Background.tile.ts";

export type page = {
    name:string,
    colour:string
}

export const pages:page[] = [
    {name:"About", colour:colours[0]},
    {name:"Resume", colour:colours[1]}, 
    {name:"Projects", colour:colours[2]}, 
    {name:"Contact", colour:colours[3]},
];

