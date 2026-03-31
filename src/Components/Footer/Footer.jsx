import React from 'react';
import { FaSquareInstagram, FaXTwitter } from 'react-icons/fa6';
import { ImFacebook2 } from 'react-icons/im';

const Footer = () => {
    return (
       
      <footer className="lg:container  mx-auto bg-zinc-950 border-t border-red-900/50 pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        {/* Logo & Description */}
         <div className='flex flex-col lg:flex-row gap-10'>
             <div>
            <div className="mb-6">
              <h2 className="text-3xl md:text-center lg:text-start font-bold tracking-tighter text-white">
                DigiTools
              </h2>
            </div>

            <p className="text-zinc-300  text-base max-w-sm md:mx-auto md:text-center lg:text-start">
              Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.
            </p>

           
          </div>
        <div className="grid grid-cols-1 md:grid-cols-4 lg:gap-10 ">
          

          {/* Quick Links */}
          <div className="">
            <h3 className="text-white font-semibold mb-6 text-xl">Product</h3>
            <ul className="space-y-4 text-zinc-300">
              <li>
                <a href="#">
                 Features
                </a>
              </li>
              <li>
                <a href="#">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#">
                  Templates
                </a>
              </li>
              <li>
                <a href="#">
                 Integrations
                </a>
              </li>
            </ul>
          </div>

          <div className="">
            <h3 className="text-white font-semibold mb-6 text-xl">Company</h3>
            <ul className="space-y-4 text-zinc-300">
              <li>
                <a href="#">
                  About
                </a>
              </li>
              <li>
                <a href="#">
                  Blog
                </a>
              </li>
              <li>
                <a href="#">
                  Careers
                </a>
              </li>
              <li>
                <a href="#">
                  Press
                </a>
              </li>
            </ul>
          </div>

          <div className="">
            <h3 className="text-white font-semibold mb-6 text-xl">Resources</h3>
            <ul className="space-y-4 text-zinc-300">
              <li>
                <a href="#">
                 Documentation
                </a>
              </li>
              <li>
                <a href="#">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#">
                 Community
                </a>
              </li>
              <li>
                <a href="#">
                 Contact
                </a>
              </li>
            </ul>
          </div>

          <div className=''>
           <h3 className="text-white font-semibold mb-6 text-xl">Social Links</h3>
           <ul className='flex gap-3'>
            <li className='bg-white w-10 h-10 text-2xl flex items-center justify-center  rounded-full'><FaSquareInstagram /></li>
            <li className='bg-white w-10 h-10 text-2xl flex items-center justify-center  rounded-full'><ImFacebook2 /></li>
            <li className='bg-white w-10 h-10 text-2xl flex items-center justify-center  rounded-full'><FaXTwitter /></li>
           </ul>
          </div>
        </div>
         </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-zinc-800 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-zinc-500">
          <div>© {new Date().getFullYear()} DigiTools, All rights reserved.</div>

          <div >
            <ul className="flex gap-6">
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
                <li>Cookies</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
    );
};

export default Footer;