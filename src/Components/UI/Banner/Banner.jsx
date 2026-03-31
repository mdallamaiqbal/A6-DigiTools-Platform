import React from 'react';
import banner from '../../../assets/banner.png'
import { IoPlayOutline } from 'react-icons/io5';
import dot from '../../../assets/dot.png'
const Banner = () => {
    return (
   <div className='container mx-auto'>
  <div className="hero  my-20">
  <div className="hero-content flex-col lg:flex-row-reverse gap-10">
    <img
      src={banner}
      className="max-w-sm rounded-lg"
    />
    <div>
      <div className='btn rounded-3xl bg-[#E1E7FF] mb-2'>
        <img src={dot} alt="" />
        <button className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent rounded-3xl'>New: AI-Powered Tools Available</button>
      </div>
      <h1 className="text-5xl font-extrabold max-w-xl leading-16">Supercharge Your Digital Workflow</h1>
      <p className="py-6 max-w-md text-[#627382]">
       Access premium AI tools, design assets, templates, and productivity software—all in one place. Start creating faster today. Explore Products
      </p>
      <button className="btn rounded-3xl text-white bg-linear-to-r from-[#4F39F6] to-[#9514FA] ">Explore Products</button>
      <button className='btn ml-2 font-bold rounded-3xl bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent border border-[#9514FA]'>
       <IoPlayOutline className='text-[#4F39F6]' /> Watch Demo</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;