import "./Background.css"

// The scattered tiles across the background which are filled
function Tile(props:{colour:string,sidelength:string,x:number,y:number, posMode?:string}) {
    
  // tileDimension will be dynamically generated eventually
  const tileDimension = {
     "--color": props.colour,
     "--sidelength": props.sidelength,
     "--x": props.x,
     "--y": props.y,
     "--posMode": (props.posMode) ? props.posMode : "fixed",
  } as React.CSSProperties;

  return (
    <>
        <div className="bg-tile" style={tileDimension}/>
    </>
  );
}

export default Tile;
