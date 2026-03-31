import React from 'react';

const Count = () => {
    return (
        <div className='lg:container mx-auto lg:px-48 py-14 bg-linear-to-r from-[#4F39F6] to-[#9514FA]'>
          <div className='grid grid-cols-1 md:grid-cols-3 relative'>
            <div className='flex flex-col items-center justify-center'>
            <h3 className='font-extrabold text-6xl text-[#FFF]'>50K+</h3>
            <p className='text-2xl text-[#FFF] font-medium mt-4'>Active Users</p>
           </div>
            <div className='hidden md:block absolute top-0 bottom-0 left-1/3 w-0.5 bg-[#FFF]'></div>
            <div className='flex flex-col items-center justify-center'>
            <h3 className='font-extrabold text-6xl text-[#FFF]'>200+</h3>
            <p className='text-2xl text-[#FFF] font-medium mt-4'>Premium Tools</p>
           </div>
             <div className=' hidden md:block absolute top-0 bottom-0 left-2/3 w-0.5 bg-[#FFF]'></div>
            <div className='flex flex-col items-center justify-center'>
            <h3 className='font-extrabold text-6xl text-[#FFF]'>4.9</h3>
            <p className='text-2xl text-[#FFF] font-medium mt-4'>Rating</p>
           </div>
          </div>
        </div>
    );
};

export default Count;