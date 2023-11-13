/* eslint-disable react/no-unescaped-entities */
import { useLocation } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import { Link } from "react-scroll";
import Logo from "../assets/logo5.png";
import "animate.css";
import { useNavigateTo } from "../hooks/useNavigateTo";
import { useProductsStore } from "../hooks";

export const NavBar = () => {
  const { cart } = useProductsStore();
  const { handleNavigate } = useNavigateTo();
  const { pathname } = useLocation();
  if (pathname === "/") return null;

  const handleClick = (to) => handleNavigate(to);

  return (
    <nav className='w-full animate__animated animate__delay-0.7s animate__slower	 animate__fadeIn lg:block hidden'>
      <section className='flex justify-between items-center py-10 '>
        <div
          onClick={() => handleClick("/")}
          className='w-40 ml-8 transition-all hover:scale-110 duration-700 cursor-pointer'
        >
          <img className='w-20 lg:w-40' src={Logo} alt='Logo' />
        </div>
        <div
          className='text-center space-x-28 mr-40
         text-2xl  text-main opacity-60 duration-500 hover:opacity-100  lg:block hidden'
        >
          {pathname != "/home" ? (
            <span onClick={() => handleClick("/home")} className='cursor-pointer duration-700 hover:text-secondary'>
              Products
            </span>
          ) : (
            <Link to='products' spy={true} smooth={true} offset={0} duration={1000}>
              <span className='cursor-pointer duration-700 hover:text-secondary'>Products</span>
            </Link>
          )}

          <span onClick={() => handleClick("/about")} className='cursor-pointer duration-700 hover:text-secondary'>
            About Us
          </span>
          <span onClick={() => handleClick("/faqs")} className='cursor-pointer duration-700 hover:text-secondary'>
            FAQ'S
          </span>
        </div>
        <div className='text-main opacity-60 hover:opacity-100 text-4xl text-center mr-8 mb-4 cursor-pointer duration-700 hover:text-secondary  lg:block hidden'>
          <FiShoppingCart onClick={() => handleClick("/cart")} />{" "}
          {!cart.length ? (
            ""
          ) : (
            <span className='absolute rounded-full text-secondary border-secondary border-2 text-sm object-cover w-6 h-6 right-20 top-10'>
              {cart.length}
            </span>
          )}
        </div>
      </section>
    </nav>
  );
};
