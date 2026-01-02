import { useEffect, useState } from 'react';
import "./Background.css";
import type { tileWrapper, tileDimensionData} from "./Background.tile"
import { getTileDimensions, makeBgTiles } from "./Background.tile"
import Tile from "./Tile";
import Snake from "./Snake.tsx"

function Background() {
    const [bgTiles, setBgTiles] = useState<tileWrapper[]>([]);
    const [loaded, setLoaded] = useState<boolean>(false);

    // Initialize backgrund objects
    useEffect(()=>{
        // Initialize tiles
        const dimensionData: tileDimensionData = getTileDimensions(window.innerWidth, window.innerHeight)
        setBgTiles(makeBgTiles(dimensionData));
        
        window.addEventListener('resize',()=>{
            const dimensionData: tileDimensionData = getTileDimensions(window.innerWidth, window.innerHeight)
            setBgTiles(makeBgTiles(dimensionData));
     
        });
        setLoaded(true);
    },[])


    return (
        <>
            <div className="bg-wrapper -z-99">
            {(loaded) ? <Snake filled={bgTiles}/> : <></>}
            </div>
            <div className="bg-wrapper">
                {bgTiles.map((data,index)=> (
                    <div key={index}>
                        <Tile 
                            colour={data.colour}
                            sidelength={data.sidelength}
                            x = {data.x}
                            y = {data.y}
                        />
                    </div>
                ))}          
            </div>
        </>
    );
}

export default Background;
