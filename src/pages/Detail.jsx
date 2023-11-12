import { useEffect, useState } from "react";
import { useNavigateTo, useProductsStore } from "../hooks";
import "animate.css";
import { Shoe1 } from "../assets/shoes";
import { BsFillArrowLeftSquareFill } from "react-icons/bs";
const activeShoe = {
  id: 6,
  name: "Jordan Stadium 90",
  image: Shoe1,
  price: 60,
  sizes: [
    {
      size: "UK 6",
      stock: 1,
    },
    {
      size: "UK 7",
      stock: 0,
    },
    {
      size: "UK 8",
      stock: 1,
    },
    {
      size: "UK 9",
      stock: 1,
    },
    {
      size: "UK 10",
      stock: 0,
    },
    {
      size: "UK 11",
      stock: 1,
    },
  ],
  description:
    "Inspired by the original AJ1, this mid-top edition maintains the iconic look you love while choice colours and crisp leather give it a distinct identity",
};

export const Detail = () => {
  const [selectedSize, setSelectedSize] = useState(null);
  const { startCleaningActiveShoe, startAddingItemToCart } = useProductsStore();
  const handleSizeClick = (size) => {
    size !== selectedSize ? setSelectedSize(size) : setSelectedSize(null);
  };
  const [backing, setBacking] = useState(false);
  const animateBack = "animate__fadeOutLeft animate__animated animate__delay-0.5s animate__slow";
  const animateIn = "animate__fadeInLeft animate__animated animate__delay-0.5s animate__slow";
  const { handleNavigate } = useNavigateTo();
  const handleBack = () => {
    setBacking(true);
    setTimeout(() => {
      handleNavigate(-1);
    }, 1200);
  };
  // useEffect(() => {
  //   if (activeShoe === null) handleNavigate("/home");
  //   return () => {
  //     startCleaningActiveShoe();
  //   };
  // }, []);
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <div className='lg:min-h-[500px] w-5/6 m-auto'>
      <BsFillArrowLeftSquareFill
        onClick={handleBack}
        className={
          backing
            ? `${animateBack} absolute text-main/40 text-6xl top-40 left-20 duration-500 hover:scale-110 hover:text-secondary hover:opacity-100`
            : `${animateIn} absolute text-main/40 text-6xl top-40 left-20 duration-500 hover:scale-110 hover:text-secondary hover:opacity-100`
        }
      />
      <div
        className={
          backing ? `${animateBack} flex space-x-72 mt-32   mb-20` : `${animateIn} flex space-x-72 mt-32  mb-20`
        }
      >
        <div className='my-6 mx-auto'>
          <img className='w-44 lg:w-full' src={activeShoe.image} alt='Shoe' />
        </div>
        <div className='flex flex-col justify-center m-auto  space-y-6 text-main/60 font-monaSans'>
          <h1 className='lg:text-5xl'>{activeShoe.name}</h1>
          <span className='lg:w-5/6'>{activeShoe.description}</span>
          <span>Select Size</span>
          <div className='lg:flex space-x-8'>
            {activeShoe.sizes.map(({ size, stock }) => (
              <span
                key={size}
                className={
                  stock
                    ? selectedSize === size
                      ? "text-secondary bg-main/40 cursor-pointer duration-700 animate-pulse border border-main rounded-lg"
                      : "text-main cursor-pointer "
                    : "text-gray-600 "
                }
                onClick={() => handleSizeClick(size)}
              >
                {size}
              </span>
            ))}
          </div>
          <span className='text-5xl'>
            <span className='text-4xl'>$</span>
            {activeShoe.price}
          </span>
          {selectedSize && (
            <div
              onClick={() => {
                startAddingItemToCart(activeShoe, selectedSize);
                setSelectedSize(false);
              }}
              className='lg:relative text-left bg-gray-700 lg:bg-gray-700/40 cursor-pointer group duration-500 hover:bg-slate-300 flex border-solid border-2 rounded-xl border-primary w-3/6 h-12 min-h-12'
            >
              <span className='text-secondary text-left text-2xl group-hover:text-gray-800 animate-pulse duration-500 font-bold m-auto '>
                Add to cart
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
