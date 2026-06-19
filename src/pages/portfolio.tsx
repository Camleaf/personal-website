import ProjectHero from "../components/portfolio/projectHero";
import "../index.css";

function Portfolio() {


        
    



    return (
        <> 
            <div className="w-screen h-screen flex items-center align-top flex-col gap-4 mt-[40vh]">
                <h1>My Portfolio</h1>
                <ProjectHero name={"mechmania"} github="https://github.com/mech-mania"/>
                <ProjectHero name={"frc"}/>

            </div>
        </>
    );
}

export default Portfolio;
