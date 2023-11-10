import { FaExchangeAlt, FaShippingFast, FaStamp, FaShieldAlt } from "react-icons/fa";

export const OurBenefits = () => {
  return (
    <section className=' w-full grid bg-main/30 h-fit lg:h-20'>
      <div className='lg:flex grid grid-cols-3  m-auto justify-self-center content-center gap-4 w-full place-content-center lg:justify-evenly items-center py-4'>
        <span
          className='
        
        
        duration-500 hover:text-secondary
        flex items-center justify-self-center col-start-2 col-end-2  text-xl lg:text-xl text-white opacity-100'
        >
          <FaShieldAlt className='mx-2' />
          Safe payments
        </span>

        <span className='duration-500 hover:text-secondary flex items-center text-xl col-start-2 col-end-2 justify-self-center text-left lg:text-xl lg:flex text-white opacity-100'>
          {" "}
          <FaShippingFast className='mx-2' />
          Fast delivery
        </span>

        <span className='duration-500 hover:text-secondary flex items-center text-xl justify-self-center col-start-2 col-end-2  lg:text-xl text-white opacity-100'>
          <FaStamp className='mx-2' />
          Quality guarantee
        </span>

        <span className='duration-500 hover:text-secondary flex items-center text-xl col-start-2 col-end-2  justify-self-center lg:text-xl text-white opacity-100'>
          {" "}
          <FaExchangeAlt className='mx-2' />
          Easy Returns
        </span>
      </div>
    </section>
  );
};
