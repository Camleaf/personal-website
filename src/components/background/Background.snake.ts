import type { tileWrapper, tileDimensionData } from "./Background.tile";


const snakesTrialCount:number = 4;

export type point = {
    x:number, // x and y are in the relative points defined earlier
    y:number
}

const searchFilled = (filled:tileWrapper[], query:point):boolean => {
    for (let index:number = 0; index<filled.length; index++){
        const element: tileWrapper = filled[index];
        if (element.x === query.x && element.y === query.y){
            return true;
        }

    }
    return false;
}

const makeKey = (p:point):string => `${p.x},${p.y}`;

const bfs = (filled:tileWrapper[],dimensionData:tileDimensionData, start:point,end:point):point[] => {
    // use the bfs alg to find the best path
    // Ok so this works. Could use a few optimizations
    // Checking with filled isn't working
    type node = {
        x:number,
        y:number,
        dist:number,
        parent:node|null,
    }
    
    const startNode = {x:start.x,y:start.y,dist:0,parent:null};
    const q:node[] = [startNode];
    const visited = new Map<string,node>();
    visited.set(makeKey(start),startNode);

    const moveVectors:point[] = [
        {x:0,y:1},
        {x:0,y:-1},
        {x:1,y:0},
        {x:-1,y:0}
    ];
    let endNode:node|null = null;

    while (q.length != 0) { 
        const curNode:node|undefined = q.shift();
        if (curNode == undefined) continue;

        if (curNode.x === end.x && curNode.y === end.y) {
            endNode = curNode;
            break;
        }



        for (let index = 0;index<moveVectors.length;index++) {
            const newVector:point = {x:moveVectors[index].x+curNode.x,y:moveVectors[index].y+curNode.y};
            
            if (searchFilled(filled,newVector)) continue;
            if (newVector.x<0 || newVector.y<0 || newVector.x >= dimensionData.maxFitX || newVector.y >= dimensionData.maxFitY) continue;

            const neighNode = visited.get(makeKey(newVector));
    
            if (neighNode == undefined){
                // If no neighnode
                visited.set(makeKey(newVector),{x:newVector.x,y:newVector.y,dist:curNode.dist+1,parent:curNode});
                q.push({x:newVector.x,y:newVector.y,dist:curNode.dist+1,parent:curNode})
            } else if (neighNode.dist > curNode.dist+1) {
                // If the current distance is smaller than the found distance
                visited.set(makeKey(newVector),{x:newVector.x,y:newVector.y,dist:curNode.dist+1,parent:curNode});
                q.push({x:newVector.x,y:newVector.y,dist:curNode.dist+1,parent:curNode})
            }
        }
    }
    
    if (!endNode){
        return [];
    }

    let parseNode:node|null = endNode;
    const bestPath:point[] = [];
    while (parseNode != null){
        bestPath.unshift({x:parseNode.x, y:parseNode.y})
        parseNode = parseNode.parent;
    }


    return bestPath;
}



const definePath = (filled:tileWrapper[], dimensionData:tileDimensionData,start:point, end:point) => {
    const rawBestPath:point[] = bfs(filled,dimensionData,start,end);
    let pathString = "";
    
    // This builds an svg path at a 1px per block resolution
    for (let index:number = 0;index<rawBestPath.length;index++){
        let pt:point = rawBestPath[index];

        if (index == 0){
            // move to 1 to left of start position | draw line to start pos. Just so that line appears to go offscreen
            pathString += `M${pt.x-0.5} ${pt.y+0.5}`;
            pathString += `L${pt.x+0.5} ${pt.y+0.5}`;
            continue;
        }

        pathString += `L${pt.x+0.5} ${pt.y+0.5}`;
        
        if (index == rawBestPath.length-1){ // On last index move to right 1 for same reason as 0 above
            pathString += `L${pt.x+1.5} ${pt.y+0.5}`;
        }
    }
    return pathString;
}




export const buildSnakePaths = (filled:tileWrapper[], dimensionData:tileDimensionData) => {
    // Maximum y is dimensionData.y-1, maximum x is dimensionData.x-1
    //Start with just statically building 4 paths Likely going to need to optimize the pathbuilder before I release the site but it works for testing
    let paths:string[] = [];
    for (let index:number = 0;index<snakesTrialCount;index++){
        // First get valid starting and ending position
        let start:point = {
            x:0,
            y:Math.floor(Math.random()*dimensionData.maxFitY)
        }
        let end:point = {
            x:dimensionData.maxFitX-1,
            y:Math.floor(Math.random()*dimensionData.maxFitY)
        }
        const tempPath = definePath(filled,dimensionData,start,end);
        if (tempPath.length) {// will trigger on length >0. Will toss incomplete paths
            paths.push(tempPath)
        }
    }    
    return paths;
}
