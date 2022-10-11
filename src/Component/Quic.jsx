import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Quic = () => {
    const [quiz,setQuiz]= useState([]);
    useEffect(()=>{
        axios.get('https://openapi.programming-hero.com/api/quiz')
        .then(data=>console.log(data))
        
    },[])
    return (
        <div>
            
            
        </div>
    );
};

export default Quic;