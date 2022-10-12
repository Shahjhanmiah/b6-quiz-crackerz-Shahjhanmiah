import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { LineChart, Line, XAxis, YAxis, Tooltip } from 'recharts'

const Quic = () => {
    const book = useLoaderData()
    const bookData = book.data
    console.log(bookData);
    return (
        <div>
            <h1>Total Number of Quizzes</h1>
            <div>

                <LineChart width={400} height={400} data={bookData}>
                    <Line type="monotone" dataKey="total" stroke="#82ca9d" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                </LineChart>
            </div>

        </div>
    );
};

export default Quic;