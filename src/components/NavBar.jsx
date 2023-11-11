/* eslint-disable react/no-unescaped-entities */
import { useLocation } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import Logo from "../assets/logo5.png";

export const NavBar = () => {
  const { pathname } = useLocation();
  if (pathname === "/") {
    return null;
  }
  return (
    <nav className='w-full'>
      <section className='flex justify-between items-center py-10 '>
        <div className='w-40 ml-8 transition-all hover:scale-110 duration-700'>
          <img className='w-40' src={Logo} alt='Logo' />
        </div>
        <div
          className='text-center space-x-28 mr-12
         text-2xl  text-main opacity-60 duration-500 hover:opacity-100'
        >
          <span className='cursor-pointer duration-700 hover:text-secondary'>Products</span>
          <span className='cursor-pointer duration-700 hover:text-secondary'>About Us</span>
          <span className='cursor-pointer duration-700 hover:text-secondary'>FAQ'S</span>
        </div>
        <div className='text-main opacity-60 hover:opacity-100 text-4xl text-center mr-8 mb-4 cursor-pointer duration-700 hover:text-secondary'>
          <FiShoppingCart />
        </div>
      </section>
    </nav>
  );
};
