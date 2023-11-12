import { useEffect } from "react";
import { useNavigateTo, useProductsStore } from "../hooks";
import "animate.css";
import { Shoe1 } from "../assets/shoes";
const activeShoe = {
  id: 6,
  name: "Jordan Stadium 90",
  image: Shoe1,
  price: 60,
  talles: [
    {
      talle: 40,
      stock: 1,
    },
    {
      talle: 42,
      stock: 0,
    },
    {
      talle: 44,
      stock: 1,
    },
  ],
  description:
    "Inspired by the original AJ1, this mid-top edition maintains the iconic look you love while choice colours and crisp leather give it a distinct identity",
};

export const Detail = () => {
  const { startCleaningActiveShoe } = useProductsStore();

  const { handleNavigate } = useNavigateTo();
  // useEffect(() => {
  //   if (activeShoe === null) handleNavigate("/home");
  //   return () => {
  //     startCleaningActiveShoe();
  //   };
  // }, []);

  return (
    <div className='flex justify-center space-x-72 mt-32 animate__animated animate__delay-0.5s animate__slow animate__fadeInLeft mb-20'>
      <div className='my-auto'>
        <img className='' src={activeShoe.image} />
      </div>
      <div className='flex flex-col  w-[400px] space-y-6 text-main/60 font-monaSans'>
        <h1 className='text-5xl'>{activeShoe.name}</h1>
        <span className='w-5/6'>{activeShoe.description}</span>
        <span>Elegi un talle</span>
        <div className='flex space-x-8'>
          {activeShoe.talles.map(({ talle, stock }) => {
            return (
              <span key={talle} className={stock ? "text-main cursor-pointer" : "text-gray-600"}>
                {talle}
              </span>
            );
          })}
        </div>
        <span className='text-5xl'>
          <span className='text-4xl'>$</span>
          {activeShoe.price}
        </span>
        <div className='lg:flex text-left bg-gray-700 lg:bg-gray-700/40 cursor-pointer  group duration-500 hover:bg-slate-300 flex lg:bottom-2 border-solid border-2 rounded-xl border-primary w-3/6 h-12'>
          <span className='text-secondary text-left text-2xl group-hover:text-gray-800 animate-pulse duration-500 font-bold m-auto '>
            Add to cart
          </span>
        </div>
      </div>
    </div>
  );
};
