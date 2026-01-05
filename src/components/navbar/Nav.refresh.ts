import { getRem } from "../background/Background.tile.ts";

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
    const maxFitX = Math.ceil(remWidth / sidelength);

    return {
        maxFitX:maxFitX,
        maxFitY:maxFitY
    }      
}



