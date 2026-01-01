import "./Background.css"

// The scattered tiles across the background which are filled
function Tile() {
    
  // tileDimension will be dynamically generated eventually
  const tileDimension = {
     "--color": "blue",
     "--x": "1",
     "--y": "3",
  } as React.CSSProperties;

  return (
    <>
        <div className="bg-block" style={tileDimension}/>
    </>
  );
}

export default Tile;
