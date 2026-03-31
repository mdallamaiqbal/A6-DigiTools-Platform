import React from 'react';
import UserPic from '../../../assets/user.png'
import Package from '../../../assets/package.png'
import Rocket from '../../../assets/rocket.png'
import Pricing from './PricingSection/Pricing';
import Ready from './Ready';
const Section = () => {
    return (
        <div className=' lg:container mx-auto'>
            <div className='bg-[#F9FAFC] px-8 py-5 xl:px-48 xl:py-28 space-y-4 my-5 md:my-14 lg:my-24'>
              <h2 className='font-extrabold text-5xl text-center'>Get Started in 3 Steps</h2>
              <p className='text-[#627382] text-center'>Start using premium digital tools in minutes, not hours.</p>
              <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                <div className='bg-[#FFF] pt-5  pb-10 lg:pb-20 px-6 rounded-3xl text-center '>
                   <div className='flex justify-end'>
                   <h4 className='flex justify-center items-center bg-linear-to-r 
                   from-[#4F39F6] to-[#9514FA] text-white w-10 h-10 rounded-full'>01</h4>
                   </div>
                   <div className='space-y-4'>
                      <div className='bg-[#F3E8FE] rounded-full w-24 h-24 mx-auto flex justify-center items-center'>
                         <img src={UserPic} alt="" />
                      </div>
                      <h3 className='font-bold text-2xl'>Create Account</h3>
                      <p className='text-[#627382]'>Sign up for free in seconds. No credit card required to get started.</p>
                   </div>
                </div>
                <div className='bg-[#FFF] pt-5 pb-10 lg:pb-20 px-6 rounded-3xl text-center '>
                   <div className='flex justify-end'>
                   <h4 className='flex justify-center items-center bg-linear-to-r 
                   from-[#4F39F6] to-[#9514FA] text-white w-10 h-10 rounded-full'>02</h4>
                   </div>
                   <div className='space-y-4'>
                      <div className='bg-[#F3E8FE] rounded-full w-24 h-24 mx-auto flex justify-center items-center'>
                         <img src={Package} alt="" />
                      </div>
                      <h3 className='font-bold text-2xl'>Choose Products</h3>
                      <p className='text-[#627382]'>Browse our catalog and select the tools that fit your needs.</p>
                   </div>
                </div>
                <div className='bg-[#FFF] pt-5 pb-10 lg:pb-20 px-6 rounded-3xl text-center '>
                   <div className='flex justify-end'>
                   <h4 className='flex justify-center items-center bg-linear-to-r 
                   from-[#4F39F6] to-[#9514FA] text-white w-10 h-10 rounded-full'>03</h4>
                   </div>
                   <div className='space-y-4'>
                      <div className='bg-[#F3E8FE] rounded-full w-24 h-24 mx-auto flex justify-center items-center'>
                         <img src={Rocket} alt="" />
                      </div>
                      <h3 className='font-bold text-2xl'>Start Creating</h3>
                      <p className='text-[#627382]'>Download and start using your premium tools immediately.</p>
                   </div>
                </div>
              </div>
            </div>
         <Pricing/>
         <Ready/>
        </div>
    );
};

export default Section;