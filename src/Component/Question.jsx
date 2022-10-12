import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import Answer from './Answer';
import Product from './Product';

const Question = () => {
    const quiz = useLoaderData();
    const quizData = quiz.data.questions;
    console.log(quizData);
    
   
    
    
    return (
        <div>
          
            {
               
               quizData.map(quiz=><Answer
                key={quiz.id}
                quiz={quiz}></Answer>)
            }
        
           
        </div>
    );
};

export default Question;
