import { getRem, colours } from "../background/Background.tile.ts";

export type dimensionObject = {
    maxFitX:number,
    maxFitY:number,
}

// Generates the maximum amount of blocks of sidelength `sidelength` rem that can fit into width px and height px.
// This function is distinct from the getTileDimensions function in Background.tile.ts as that finds the sidelength as a part of it, and this has a sidelength passed into it. 
export const generateMaxFit = (width:number,height:number, sidelength:number):dimensionObject => {
    const remWidth:number = width / getRem();
    const remHeight:number = height / getRem();

    const maxFitY = Math.ceil(remHeight / sidelength);
    const maxFitX = Math.floor(remWidth / sidelength);

    return {
        maxFitX:maxFitX,
        maxFitY:maxFitY
    }      
}

export type pathData = {
    colour:string,
    path:string,
}

export const generateBackgroundPathData = (dimensions:dimensionObject):pathData[] => {
    
    const palette:string[] = colours;

    const pathBuilds = new Map<string,string>();

    for (let x = 0;x<dimensions.maxFitX;x++){
        for (let y = 0;y<dimensions.maxFitY;y++){
            const colour = palette[Math.floor(Math.random()*palette.length)];
            
            if (!pathBuilds.has(colour)) {
                pathBuilds.set(colour,'');
            }

            pathBuilds.set(
                colour,
                pathBuilds.get(colour) + `M${x-0.5} ${y-0.5}h1v1h-1Z`
            );
        };
    };
    
    let finalPaths:pathData[] = [];
    Array.from(pathBuilds.keys()).forEach((colour:string) => {
        finalPaths.push({
            colour:colour,
            path:pathBuilds.get(colour)||'',
        }) 
    }) 

    return finalPaths;
}



export const generateMaskingPathData = (dimensions:dimensionObject):string => {
    let path:string = `M0 0`;
    let invert:boolean = false;
    
    for (let x = 0;x<=Math.ceil(dimensions.maxFitX);x++){
        for (let y = 0;y<=dimensions.maxFitY;y++){
            path += `L${x} ${(invert) ? dimensions.maxFitY-y : y}`;
        }
        invert = (invert) ? false : true;
    }
    return path;
}

