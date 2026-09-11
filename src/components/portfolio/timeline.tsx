
import { Link } from 'react-router-dom';
import ProjectHero from './projectHero';
import Decorator from '../decoration/decorator';
import "./portfolio.css";
import { useState, useEffect } from 'react';
import type { projectHeroProps } from './projectHero';

type jsonData = projectHeroProps[];


function Timeline(){
    
    const [data, setData] = useState<jsonData>([]);
    useEffect(() => {
        
        fetch('/portfolio/data.json') // Adjust the path if your file is in a subfolder
          .then(response => {
            if (!response.ok) {
              throw new Error('file no exist');
            }
            return response.json();
          })
          .then(data => setData(data))
          .catch(error => console.error('err on fetch:', error));
      }, []);
    return (
       <>
       
                  
       </>

    );

}



export default Timeline; 
