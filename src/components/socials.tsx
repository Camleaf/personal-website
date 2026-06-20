


interface propTypes{
    github?:string,
    instagram?:string,
    linkedin?:string,   
    email?:string
}


function Socials({github,instagram,linkedin,email}:propTypes){
    

    return (
        <>
            
            <div className="flex flex-row gap-4">
                 {/* github */}
                {github?
                <a href={github} target="_blank" className="align-middle ease-out hover:brightness-[300%] duration-200 cursor-pointer">
                    <img src="/icons/githubLogo.svg" className="w-8 h-8 hover:scale-110 ease-out duration-200"/>
                </a>
                :<></>}
                
                {/* linkedin */}
                {linkedin?
                <a href={linkedin} target="_blank" className="align-middle ease-out duration-200 hover:brightness-[300%] cursor-pointer">
                    <img src="/icons/linkedinLogo.svg" className="w-8 h-8 hover:scale-110 ease-out duration-200"/>
                </a>
                :<></>}

                {/* email */}
                {email?
                <a href={email} target="_blank" className="align-middle ease-out hover:brightness-[300%] duration-200 cursor-pointer "> 
                    <img src="/icons/emailLogo.svg" className="w-8 h-8 hover:scale-110 ease-out duration-200"/>
                </a>
                :<></>}

                {/* insta */}
                {instagram?
                <a href={instagram} target="_blank" className="align-middle ease-out hover:brightness-[300%] duration-200 cursor-pointer">
                    <img src="/icons/instagramLogo.svg" className="w-8 h-8 hover:scale-110 ease-out duration-200"/>
                </a>
                :<></>}

               

            </div>
        </>
    );
}


export default Socials;
