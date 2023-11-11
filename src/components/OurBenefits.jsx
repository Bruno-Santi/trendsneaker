import { FaExchangeAlt, FaShippingFast, FaStamp, FaShieldAlt } from "react-icons/fa";
import Marquee from "react-fast-marquee";
export const OurBenefits = () => {
  return (
    <section className='w-full grid bg-main/30 h-fit lg:h-20'>
      <Marquee speed={100}>
        <div className='flex  m-auto justify-self-center content-center gap-4 w-full place-content-center lg:justify-evenly items-center py-4'>
          <span className=' flex text-main text-3xl mx-40'>
            <FaShieldAlt className='mx-2' />
            Safe payments
          </span>

          <span className=' flex text-main text-3xl mx-40'>
            <FaShippingFast className='mx-2 my-1' />
            Fast delivery
          </span>

          <span className=' flex text-main text-3xl mx-40'>
            <FaStamp className='mx-2' />
            Quality guarantee
          </span>

          <span className=' flex text-main text-3xl mx-40'>
            <FaExchangeAlt className='mx-2' />
            Easy Returns
          </span>
        </div>
      </Marquee>
    </section>
  );
};
