// Todo make a script which given screen width and height and tile sidelength returns all coordinates and colours of background tiles,
// Make another script which takes those coordinates and colour objects and returns a list of TileObjects

// X and Y of tilewrapper are relative numbers to the number of tiles that can fit in a given row and column

const tileTrialSidelength:number = 3; // In REM
const tileFillPercent:number = 0.15; // 20% chance of any given tile being filled
export const colours:string[] = ["#9966CD","#4D86FB","#6EE194","#F26990","#F4A07A","#52CCCD","#FAEFAA"];

export type tileWrapper = {
    sidelength:string, // Sidelength is string because it is in REM
    colour: string,
    x : number,
    y : number 
}

export type tileDimensionData = {
    maxFitY:number,
    maxFitX:number,
    sidelength:string, // sideLength and yOffset are stored in terms of rem
    intsidelength:number,
}

export const getRem = ():number => parseFloat(getComputedStyle(document.documentElement).fontSize);


export const getTileDimensions = (width:number, height:number):tileDimensionData => {
    const remWidth:number = width / getRem();
    const remHeight:number = height / getRem();

    const maxFitY = Math.floor(remHeight / tileTrialSidelength);
    const maxFitX = Math.floor(remWidth / tileTrialSidelength);
        
    // Since trains will start from only the far right or far left, 
    // the top and bottom doesn't need to be perfectly aligned, and we can add an offset to make it look centred
    
    // first we calculate how many blocks we can fit with a sidelength of 3rem, then do a minor adjustment to make it look perfect by shifting the sidelength
    const sidelength = tileTrialSidelength + ((remWidth - (tileTrialSidelength * maxFitX))/maxFitX);
    
    return {
        maxFitX: maxFitX,
        maxFitY: maxFitY,
        sidelength: sidelength + 'rem',
        intsidelength: sidelength,
    };
}


export const makeBgTiles = (dimensionData: tileDimensionData):tileWrapper[] => {
    // We want to fill 20% of all tiles
    
    const tiles: tileWrapper[] = [];
    const colourSet:string[] = colours;
    for (let row = 0;row<dimensionData.maxFitY;row++){
        for (let col = 0;col<dimensionData.maxFitX;col++){
            if (!(Math.random()<tileFillPercent)) continue;
            // If not in the 20% chance continue, else add to tiles
            tiles.push({
                sidelength:dimensionData.sidelength,
                colour:colourSet[Math.floor(Math.random()*colourSet.length)],
                x:col,
                y:row
            });
        }
    }
    return tiles;
}



