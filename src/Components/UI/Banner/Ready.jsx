import React from 'react';

const Ready = () => {
    return (
        <div className='mt-28 bg-linear-to-r from-[#4F39F6] to-[#9514FA] py-6 px-6 md:py-12 md:px-12 lg:py-28 lg:px-48 text-center'>
            <h2 className='text-white font-extrabold text-3xl md:text-5xl mb-4'>Ready to Transform Your Workflow?</h2>
            <p className='text-[#FFF]/80 mb-10 max-w-lg mx-auto'>Join thousands of professionals who are already using Digitools to work smarter.Start your free trial today.</p>
            <div>
                <div className='btn bg-white py-5 rounded-3xl'><button className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent'>Explore Product</button></div>
                <button className='btn btn-outline border-white ml-4 py-5 rounded-3xl text-white'>View Pricing</button>
            </div>
            <p className='text-[#FFF]/80 mt-4'>14-day free trial • No credit card required • Cancel anytime</p>
        </div>
    );
};

export default Ready;