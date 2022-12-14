import React from 'react';
import Question from './Question';
import './Answer.css';


const Answer = ({quiz,count}) => {
    const {options,question,id,correctAnswer,}= quiz;
    console.log(correctAnswer);
    const handleClick =(answer)=>{
        // console.log(correctAnswer,answer)
        if(correctAnswer===answer){
            alert('rigth')
        }else{
            alert('worng')
        }
     
    }
    
    return (
        <div>
           
           <div className='bg-green-200 p-8 my-5 rouded-lg'>
            <h3 className='text-2xl font-semibold md-5'>
            </h3>
            <h3 className='text-2xl font-semibold md-5 bg-green-200 p-8 my-5'>
                <div className='ques-container'>
                <h3>{question.replace( /(<([^>]+)>)/ig, '')}</h3>
                <p onClick={()=>handleClick(correctAnswer)} className='text-blue-500 icons'><i class="fa-solid fa-eye">
                  </i></p>
                </div>
               
                <p>{options}</p>
                <input onClick={()=>handleClick(options[0])}name="radio"type='radio'></input>
                <p>{options[0]}</p>
              
                <input onClick={()=>handleClick(options[1])}name="radio"type='radio'></input>
                <p>{options[1]}</p>
              
                <input onClick={()=>handleClick(options[2])}name="radio"type='radio'></input>
                <p>{options[2]}</p>
               
                <input onClick={()=>handleClick(options[3])}name="radio"type='radio'></input>
                <p>{options[3]}</p>
             
                <p>show answer:{correctAnswer}</p>
            </h3>
           
           
            
           </div>
           
            
        </div>
    );
};

export default Answer;
