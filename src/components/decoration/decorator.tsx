import React, { useId } from 'react';

interface propTypes{
    children: React.ReactNode;
    clickable?: boolean;
    gap?: number;
    inText?:boolean;
    fitContent?:boolean
}

function Decorator({ children, clickable, gap, fitContent = true}: propTypes) {
    const uniqueMaskId = useId(); 
    const paddingGap = gap ? `${gap}rem` : "1rem";

    return (
        <div className={`relative ${(fitContent)? "w-fit h-fit" : ""} ${clickable ? "hover:cursor-pointer" : ""} group`}>
            
            <svg 
                className="absolute inset-0 w-full h-full pointer-events-none overflow-visible"
                xmlns="http://www.w3.org/2000/svg"
            >
                <defs>
                    <mask id={uniqueMaskId}>
                        <rect width="100%" height="100%" y="0%" x="0%" fill="white"/>
                        <rect width="110%" height="50%" y="25%" x="0%" fill="black"/>
                        <rect width="50%" height="100%" y="0%" x="25%" fill="black"/>
                    </mask>
                </defs>
                <rect x="0" y="0" width="100%" height="100%" fill="transparent" strokeWidth="8px" mask={`url(#${uniqueMaskId})`} className="stroke-cl-gray-6 group-hover:stroke-cl-gray-3 duration-200"/>
            </svg>

            <div style={{ padding: paddingGap }} className="ease-out duration-200 hover:text-cl-accent-light">
                {children}
            </div>

        </div>

      
    );
}

export default Decorator;
