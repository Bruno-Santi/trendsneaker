export const FooterList = ({ title, items }) => {
  return (
    <div className='flex-col text-xs lg:text-lg flex space-y-2 text-left text-main font-poppins font-normal my-20'>
      <span className='mb-6 font-bold cursor-pointer duration-700 hover:text-secondary'>{title}</span>
      {items.map((item) => {
        return (
          <span className='cursor-pointer duration-700 hover:text-secondary' key={item}>
            {item}
          </span>
        );
      })}
    </div>
  );
};
