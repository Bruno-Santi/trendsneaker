export const Landing = () => {
  return (
    <div className=' brightness-60  bg-hero-pattern flex w-full  min-h-screen bg-cover bg-center bg-no-repeat'>
      <div className='flex flex-col  lg:ml-20 m-auto mt-20'>
        <h1 className='lg:text-8xl text-main text-7xl font-monaSans brightness-150 tracking-tight'>
          Runway <br></br>
          <span className='lg:relative lg:bottom-4'>Ready</span>
        </h1>
        <h1 className='lg:relative opacity-80 text-5xl lg:bottom-4 lg:text-7xl text-secondary brightness-150 tracking-tighter font-monaSans'>
          Nike Footwear
        </h1>
        <div className='lg:relative bg-gray-700 lg:bg-gray-700/40 cursor-pointer  group duration-500 hover:bg-slate-300 flex lg:bottom-2 border-solid border-2 rounded-xl border-primary w-2/6 h-12'>
          <span className='text-secondary text-center text-2xl group-hover:text-gray-800 animate-pulse duration-500 font-bold m-auto '>
            Enter
          </span>
        </div>
      </div>
    </div>
  );
};
