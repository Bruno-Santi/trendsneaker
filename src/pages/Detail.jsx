import { useEffect, useState } from "react";
import { useProductsStore } from "../hooks";
import "animate.css";
import { Shoe1 } from "../assets/shoes";
import { BsFillArrowLeftSquareFill } from "react-icons/bs";
import { useArrowBack } from "../hooks/useArrowBack";
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
  const { backing, animateBackArrow, animateInArrow, animateBack, animateIn, handleBack } = useArrowBack();
  const { startCleaningActiveShoe, startAddingItemToCart } = useProductsStore();
  const handleSizeClick = (size) => (size !== selectedSize ? setSelectedSize(size) : setSelectedSize(null));

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
    <div className='lg:min-h-[500px] w-full'>
      <BsFillArrowLeftSquareFill
        onClick={handleBack}
        className={backing ? `${animateBackArrow}` : `${animateInArrow}`}
      />
      <div
        className={
          backing
            ? `${animateBack} flex w-full p-10 mt-32 mx-auto  flex-col mb-20`
            : `${animateIn} flex flex-col  mt-32 w-full p-10 mx-auto  mb-20`
        }
      >
        <img className='w-full mx-auto lg:w-96 mb-10' src={activeShoe.image} alt='Shoe' />

        <div className='flex flex-col mx-auto space-y-6 text-main/60 font-monaSans'>
          <h1 className=' text-3xl lg:text-5xl'>{activeShoe.name}</h1>
          <span className='lg:w-5/6'>{activeShoe.description}</span>
          <span className='text-secondary  text-xl ml-2'>Select Size</span>
          <div className='lg:flex flex my-auto w-2/6'>
            {activeShoe.sizes.map(({ size, stock }) => (
              <span
                key={size}
                className={
                  stock
                    ? selectedSize === size
                      ? "text-secondary bg-main/40 my-auto mx-auto cursor-pointer w-full duration-700 p-2 animate-pulse border border-main rounded-lg"
                      : "text-main w-full my-auto mx-auto cursor-pointer p-2"
                    : "text-gray-600 w-full my-auto mx-auto p-2 "
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
              className='lg:relative  text-left bg-gray-700 lg:bg-gray-700/40 cursor-pointer group duration-500 hover:bg-slate-300 flex border-solid border-2 rounded-xl border-primary w-full lg:w-2/6 h-12 min-h-12'
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
