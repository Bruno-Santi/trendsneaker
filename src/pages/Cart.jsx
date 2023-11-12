import { useProductsStore } from "../hooks";
import { FiTrash2 } from "react-icons/fi";
import { toast } from "react-toastify";
export const Cart = () => {
  const { cart, deleteItemCart } = useProductsStore();

  if (!cart.length)
    return (
      <div className='flex m-auto'>
        <h1 className='text-2xl m-auto py-60 text-main/50 font-bold'>Your Cart is empty</h1>
      </div>
    );
  return (
    <section className='flex flex-col animate__animated animate__delay-0.7s animate__slower	 animate__fadeIn w-full'>
      <div className='m-auto  text-main text-4xl'>
        {cart.map((item) => (
          <div key={item.id} className='flex justify-between w-full space-x-20 my-12 border p-4 rounded-xl'>
            <img className='w-20 ' src={item.image} />
            <span className='text-xl my-auto'>{item.name}</span>
            <span className='text-xl my-auto'>{item.sizes[0]}</span>
            <span className='text-xl my-auto'>${item.price}</span>
            <FiTrash2
              onClick={() => deleteItemCart(item)}
              className='my-auto text-red-400 text-2xl cursor-pointer duration-700 hover:text-red-900'
            />
          </div>
        ))}

        <div className='text-xl my-4'>Total: ${cart.reduce((total, item) => total + item.price, 0)}</div>
      </div>
    </section>
  );
};
