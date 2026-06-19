import "./loader.css"
import Decorator from "../decoration/decorator"
import InlineDecorator from "../decoration/inlineDecorator"

function Loader() {

  return (
    <>
        <div className="w-full cont h-full flex flex-col lg:flex-row items-center">
                <div className="w-fit h-full lg:w-1/2 items-end justify-items-end">
                    <div className="w-fit h-fit overflow-hidden rounded-xl"> {/*Add animation here*/}
                        <img id="" className="w-[40rem] max-w-none mt-[-12rem]" src="/hero.png"/>
                    </div>    
                </div>
                <div className={"box-border w-fit h-full overflow-hidden lg:w-1/2 flex flex-row items-start justify-start"}/>
            </div>
    
    </>

  )
}

export default Loader
