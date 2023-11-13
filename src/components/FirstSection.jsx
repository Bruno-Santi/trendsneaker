import Shoe from "../assets/shoe1.png";
import { BsFillArrowRightSquareFill, BsFillArrowLeftSquareFill } from "react-icons/bs";

export const FirstSection = () => {
  return (
    <div className='group'>
      <h1 className='font-monaSans text-5xl mt-10 ml-4  text-main/60 flex m-auto justify-center'>
        Coming <span className='duration-700 text-secondary/70 group-hover:text-secondary/100'>Soon</span>
        <span className='duration-700 group-hover:animate-pulse'> 🔥</span>
      </h1>
      <section className='p-32 flex flex-col items-center m-auto w-full justify-center firstSection'>
        <div className='relative flex items-center w-screen lg:w-full'>
          <BsFillArrowLeftSquareFill className='text-main ml-4 text-6xl cursor-pointer lg:text-6xl opacity-30 duration-500 hover:scale-110 hover:text-secondary hover:opacity-100' />
          <div className='relative m-auto'>
            <div className='rounded-full bg-gradient-to-b from-gray-400 via-gray-600 to-blue-800 absolute inset-1 m-auto blur-[40px] w-80 h-80 lg:w-72 lg:h-72 opacity-50'></div>
            <img className='-rotate-[14deg] w-3/4 lg:w-full m-auto group-hover:rotate-0 duration-700' src={Shoe} />
          </div>
          <BsFillArrowRightSquareFill className='text-main mr-4 text-6xl cursor-pointer lg:text-6xl opacity-30 duration-500 hover:scale-110 hover:text-secondary hover:opacity-100' />
        </div>
        <h1 className='pt-16 lg:pt-20 font-monaSans text-main font-extrabold text-4xl lg:w-full w-fit text-center lg:text-5xl'>
          Air Force Mid 1
        </h1>
      </section>
    </div>
  );
};
