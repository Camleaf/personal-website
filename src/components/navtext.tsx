
import { useLocation, Link } from "react-router-dom";
import Decorator from "./decoration/decorator";


const pageInfo:{text:string,path:string, external:boolean}[] = [
    {text:"home",path:"/",external:false},
    {text:"projects",path:"/portfolio",external:false},
    {text:"experience",path:"/experience",external:false},
    {text:"resume",path:"/resume.pdf",external:false},
];


function Navtext(){
    const location = useLocation();

    return (
        <>
            {pageInfo.map((info,index)=>{
                if (info.external){ // If not a shallow route
                    return (
                        <a href={info.path} target="_blank">
                            <Decorator>
                                <p className="text-3xl">{info.text}</p>
                            </Decorator>
                        </a>
                    );
                }
                return ((location.pathname!=info.path) ? // If a shallow route
                    <Link to={info.path} key={index}>
                        <Decorator>
                            <p className="text-3xl">{info.text}</p>
                        </Decorator>
                    </Link>
                    :<div key={index}></div>
                )
                
                
            })}

        </>
    );
}


export default Navtext;
