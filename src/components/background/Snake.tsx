import "./Background.css"
// The scattered tiles across the background which are filled
function Snake() {
    // I need to create the paths in the base background and then dynamically send them in here
  // gotta build that dynamically generated snake
   // Some starting ideas are precalculating an svg path and getting a line to follow i
    // have the snakes just straight-up take the path and configure style options from there 

    return (
        <>
            <svg viewBox="0 0 500 200" width="500">

              {/* Moving highlight */}
              <path
                d="M0 100 Q250 10 480 100"
                fill="none"
                stroke="orange"
                strokeWidth="6"
                className="snake-highlight"
              />
            </svg>
        </>
    );
}

export default Snake;
