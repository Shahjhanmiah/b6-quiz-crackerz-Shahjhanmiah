import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from './Question';

const Opestion = () => {
    
   const opestion = useLoaderData()
    console.log(opestion)

    
    return (
        <div>
            {
               opestion.map(opestion=><Question
               key={opestion.id}
               opestion={opestion}></Question>) 
            }
            
        </div>
    );
};

export default Opestion;
