import { useNavigate } from "react-router-dom"

function Decorator(props:any) {
    return (
        <>  
            <div className="flex items-center align-middle justify-center w-fit h-fit svg-border">
                {props.children}
            </div>
        </>
    );
}

export default Decorator; 
