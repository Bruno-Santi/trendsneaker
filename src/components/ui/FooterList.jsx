export const FooterList = ({ title, items }) => {
  return (
    <div className='flex-col text-xs lg:text-lg flex space-y-2 text-left text-main font-poppins font-normal my-20'>
      <span className='mb-6 font-bold'>{title}</span>
      {items.map((item) => {
        return <span key={item}>{item}</span>;
      })}
    </div>
  );
};
