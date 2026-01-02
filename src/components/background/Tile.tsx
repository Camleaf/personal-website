import "./Background.css"

// The scattered tiles across the background which are filled
function Tile(props:{colour:string,sidelength:string,x:number,y:number}) {
    
  // tileDimension will be dynamically generated eventually
  const tileDimension = {
     "--color": props.colour,
     "--sidelength": props.sidelength,
     "--x": props.x,
     "--y": props.y,
  } as React.CSSProperties;

  return (
    <>
        <div className="bg-tile" style={tileDimension}/>
    </>
  );
}

export default Tile;
