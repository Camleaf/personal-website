
import ProjectHero from './projectHero';




function Timeline(){


    return (
       <>
            <div className="flex flex-col  gap-4">
                <ProjectHero name="mechmania"/>
                <ProjectHero name="frc"/>
                <ProjectHero name="mechmania"/>
                <ProjectHero name="frc"/>
            </div>
       </>

    );

}



export default Timeline; 
