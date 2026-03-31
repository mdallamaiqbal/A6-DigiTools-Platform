import React from 'react';
import { IoCheckmark } from 'react-icons/io5';

const Pricing = () => {
    return (
        <div>
            <div className='text-center'>
             <h3 className='text-5xl font-bold mb-4'>Simple, Transparent Pricing</h3>
            <p className='text-[#627382] mb-8'>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4 lg:max-w-7xl mx-auto '>
                <div className='max-w-96 bg-[#F2F2F2] p-6 rounded-2xl transform hover:scale-105 transition ease-in-out duration-500'>
                   <h3 className='font-bold text-2xl'>Starter</h3>
                   <p className='text-[#627382]'>Perfect for getting started</p>
                   <h2 className='text-4xl font-bold my-6'>$0 <span className='text-[#627382] font-normal text-xl'>/Month</span></h2>
                   <ul className='text-[#627382]'>
                    <li className='flex items-center gap-2'><IoCheckmark className='text-green-400 text-2xl'/> Access to 10 free tools</li>
                    <li className='flex items-center gap-2'><IoCheckmark className='text-green-400 text-2xl'/> Basic templates</li>
                    <li className='flex items-center gap-2'><IoCheckmark className='text-green-400 text-2xl'/> Community support</li>
                    <li className='flex items-center gap-2'><IoCheckmark className='text-green-400 text-2xl'/> 1 project per month</li>
                   </ul>
                   <div className='btn w-full rounded-3xl mt-4 mb-8 bg-linear-to-r from-[#4F39F6] to-[#9514FA] py-4'><button className='text-base text-white'>Get Started Free</button></div>
                </div>
                <div className='max-w-96 bg-linear-to-r from-[#4F39F6] to-[#9514FA] p-6 rounded-2xl transform hover:scale-105 transition ease-in-out duration-500'>
                   <h3 className='font-bold text-[#FFF] text-2xl'>Pro</h3>
                   <p className='text-[#FFF]'>Best for professionals</p>
                   <h2 className='text-4xl text-[#FFF] font-bold my-6'>$29<span className='text-[#FFF] font-normal text-xl'>/Month</span></h2>
                   <ul className='text-[#FFF]'>
                    <li className='flex items-center gap-2'><IoCheckmark className='text-[#FFF] text-2xl'/> Access to all premium tools</li>
                    <li className='flex items-center gap-2'><IoCheckmark className='text-[#FFF] text-2xl'/> Unlimited templates</li>
                    <li className='flex items-center gap-2'><IoCheckmark className='text-[#FFF] text-2xl'/> Priority support</li>
                    <li className='flex items-center gap-2'><IoCheckmark className='text-[#FFF] text-2xl'/> Unlimited projects</li>
                    <li className='flex items-center gap-2'><IoCheckmark className='text-[#FFF] text-2xl'/> Cloud sync</li>
                    <li className='flex items-center gap-2'><IoCheckmark className='text-[#FFF] text-2xl'/> Advanced analytics</li>
                   </ul>
                  <div className='btn bg-white rounded-3xl mt-4 mb-8 w-full py-4'> <button className='text-base bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent  font-bold'>Start Pro Trial</button></div>
                </div>
                <div className='max-w-96 bg-[#F2F2F2] p-6 rounded-2xl transform hover:scale-105 transition ease-in-out duration-500'>
                   <h3 className='font-bold text-2xl'>Enterprise</h3>
                   <p className='text-[#627382]'>For teams and businesses</p>
                   <h2 className='text-4xl font-bold my-6'>$99 <span className='text-[#627382] font-normal text-xl'>/Month</span></h2>
                   <ul className='text-[#627382]'>
                    <li className='flex items-center gap-2'><IoCheckmark className='text-green-400 text-2xl'/> Everything in Pro</li>
                    <li className='flex items-center gap-2'><IoCheckmark className='text-green-400 text-2xl'/> Team collaboration</li>
                    <li className='flex items-center gap-2'><IoCheckmark className='text-green-400 text-2xl'/> Custom integrations</li>
                    <li className='flex items-center gap-2'><IoCheckmark className='text-green-400 text-2xl'/> Dedicated support</li>
                   </ul>
                   <div className='btn w-full rounded-3xl mt-4 mb-8 bg-linear-to-r from-[#4F39F6] to-[#9514FA] py-4'> <button className='text-base text-white '>Get Started Free</button></div>
                </div>
            </div>
        </div>
    );
};

export default Pricing;