import { SneakerContainer } from "./index";
import { Reveal } from "./ui";

export const Products = () => {
  return (
    <Reveal>
      <section className='mt-10  flex flex-col m-auto w-full justify-center text-main font-3xl'>
        <div className='flex flex-col m-auto'>
          <span className='font-monaSans text-5xl lg:text-6xl'>Our </span>
          <span className='font-monaSans text-5xl lg:text-6xl text-secondary'>Sneakers</span>
        </div>
        <div>
          <SneakerContainer />
        </div>
      </section>
    </Reveal>
  );
};
