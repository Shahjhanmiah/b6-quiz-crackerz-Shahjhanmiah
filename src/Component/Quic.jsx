import React, { useEffect, useState } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, RsiveContainer, ResponsiveContainer } from 'recharts';
import axios from 'axios';


const Quic = () => {
    const [answer,setQuiz]= useState([]);
    useEffect(()=>{
        axios.get('https://openapi.programming-hero.com/api/quiz')
        .then(data=>{
            const answerLoaded = data.data;
            console.log(answer);
            const quizData= answerLoaded.map(quiz=>{
                const singleQuiz={
                    name:quiz.name,
                    

                }
                return singleQuiz;
                
            })
            console.log(quizData);
            setQuiz(quizData)
        })
        
    },[])
    return (
        
        <BarChart width={150} height={40} data={answer}>
          <Bar dataKey="quiz" fill="#8884d8" />
        </BarChart>
  
    );
};

export default Quic;