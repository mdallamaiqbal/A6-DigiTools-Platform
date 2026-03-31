import React from 'react';
import logo from '../../assets/logo.png'
import { GrCart } from 'react-icons/gr';
const Navbar = () => {
    return (
    <div className=' lg:container  mx-auto shadow-sm rounded-lg'>
        <div className="navbar flex md:flex-col md:items-center lg:flex-row   gap-4 lg:gap-0 max-w-7xl mx-auto">
      <div className="navbar-start md:justify-center">
        <div>
          <img src={logo} alt="" />
        </div>
      </div>
      <div className="navbar-center hidden md:flex justify-center">
        <ul className="menu menu-horizontal gap-5 px-1 text-lg font-semibold ">
          <li>
            <a>Products</a>
          </li>
          <li>
            <a>Features</a>
          </li>
          <li>
            <a>Pricing</a>
          </li>
          <li>
            <a>Testimonials</a>
          </li>
          <li>
            <a>FAQ</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end md:justify-center  gap-5 font-semibold">
        <p><GrCart /></p>
        <p>Login</p>
        <a className="btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full text-white">Get Started</a>
      </div>
    </div>
    </div>
    );
};

export default Navbar;