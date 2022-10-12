import React from 'react';

const Blog = () => {
    return (
        <div>
            <div className='bg-green-200 p-8 my-5 rouded-lg'>
                <h3 className='text-2xl font-semibold md-5'>
                    <h1 className='text-blue-600'>What is reat route propose?</h1>
                    <p>The package react-router is the core library that is used as a peer dependency for the other two packages listed above. The react-router-dom is the package that is used in React apps for routing. The last package in the list, react-router-native has bindings to be used in developing React Native applications.</p>

                </h3>
                <h3 className='text-2xl font-semibold md-5 bg-green-200 p-8 my-5'>
                    <h1 className='text-green-600'>How dose Context Api who</h1>
                    <p>The defaultValue argument is only used when a component does not have a matching Provider above it in the tree. This default value can be helpful for testing components in isolation without wrapping them. Note: passing undefined as a Provider value does not cause consuming components to use defaultValue.

                    </p>


                    <h3 className='text-2xl font-semibold md-5 bg-green-200 p-8 my-5'></h3>
                    <h1>What is use ref</h1>
                    <p>The useRef Hook allows you to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly.</p>

                </h3>

            </div>
        </div>
    );
};

export default Blog;

