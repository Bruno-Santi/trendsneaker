import { useProductsStore } from "../hooks";
// eslint-disable-next-line react/prop-types

export const SneakerCard = ({ id, name, image, price, description }) => {
  const shoe = { id, name, image, price, description };
  const { startSettingActiveShoe } = useProductsStore();
  return (
    <section
      key={id}
      className='flex mt-6  bg-gradient-to-r from-gray-200/10 via-gray-400/10 to-gray-600/10 flex-col m-auto h-[420px] w-[350px] rounded-xl duration-700 hover:drop-shadow-md hover:shadow-[2px_11px_39px_-16px_rgba(255,183,0,0.30)]'
    >
      <div className=''>
        <div className='blur-lg bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops)) w-full h-full]'></div>
        <img
          src={image}
          className='object-contain relative pt-16 m-auto w-3/4 hover:-rotate-[10deg] duration-700'
        ></img>
      </div>
      <div className='flex justify-evenly mt-6'>
        <span className='text-main text-3xl w-2/4 font-monaSans'>{name}</span>
        <span className='text-main text-3xl font-bold font-monaSans '>${price}</span>
      </div>
      <div className='lg:flex m-auto bg-gray-700 lg:bg-gray-700/40 cursor-pointer  group duration-500 hover:bg-slate-300 flex lg:bottom-2 border-solid border-2 rounded-xl border-primary w-2/6 h-12'>
        <span
          onClick={() => startSettingActiveShoe(shoe)}
          className='text-secondary text-center text-2xl group-hover:text-gray-800 animate-pulse duration-500 font-bold m-auto '
        >
          Buy now
        </span>
      </div>
    </section>
  );
};
