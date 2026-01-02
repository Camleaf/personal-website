import type { tileWrapper } from "./Background.tile";

export type point = {
    x:number, // x and y are in the relative points defined earlier
    y:number
}


const searchFilled = (filled:tileWrapper[], query:point):boolean => {
    filled.forEach((element:tileWrapper) => {
        if (element.x == query.x && element.y == query.y){
            return true;
        }
    })

    return false;
}

const makeKey = (p:point):string => `${p.x},${p.y}`;

const bfs = (filled:tileWrapper[],start:point,end:point):point[] => {
    // use the bfs alg to find the best path
    // Ok so this works. Could use a few optimizations.
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

        if (curNode.x == end.x && curNode.y == end.y) {
            endNode = curNode;
            break;
        }



        for (let index = 0;index<moveVectors.length;index++) {
            const newVector:point = {x:moveVectors[index].x+curNode.x,y:moveVectors[index].y+curNode.y};
            
            if (searchFilled(filled,newVector)) continue;

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
        bestPath.unshift(parseNode)
        parseNode = parseNode.parent;
    }


    return bestPath;
}



export const definePath = (filled:tileWrapper[], start:point, end:point) => {
    const rawBestPath:point[] = bfs(filled,start,end);
    console.log(rawBestPath);
}
