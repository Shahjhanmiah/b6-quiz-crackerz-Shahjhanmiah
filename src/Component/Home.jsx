import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
      <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src="https://img.freepik.com/premium-vector/quiz-vector-pop-style-illustration-with-megaphone-yellow-background_194782-902.jpg?w=740" className="max-w-sm rounded-lg shadow-2xl" />
        <div>
          <h1 className="text-5xl font-bold">Box Office News!</h1>
          <p className="py-6">Ther is a readu in interview question ?? is I am ok in interview question</p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
    );
};

export default Home;