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
    <section className='flex px-6 flex-col animate__animated animate__delay-0.7s animate__slower	 animate__fadeIn w-full'>
      <div className='m-auto w-full text-main text-4xl justify-center py-20'>
        {cart.map((item) => (
          <div
            key={item.id}
            className='flex flex-col lg:grid justify-center m-auto lg:w-2/6 lg:space-x-20 my-12 border p-4 rounded-xl'
          >
            <img className='w-2/4 lg:w-20 my-auto mx-auto' src={item.image} />
            <div className='flex lg:inline-flex space-x-6 mt-2 mx-auto my-auto'>
              <span className='text-sm lg:text-xl my-auto'>{item.name}</span>
              <span className='text-sm lg:text-xl my-auto'>{item.sizes[0]}</span>
              <span className='text-sm lg:text-xl my-auto'>${item.price}</span>
              <FiTrash2
                onClick={() => deleteItemCart(item)}
                className='my-auto text-red-400 text-2xl cursor-pointer duration-700 hover:text-red-900'
              />
            </div>
          </div>
        ))}

        <div className='text-xl  text-center'>Total: ${cart.reduce((total, item) => total + item.price, 0)}</div>
      </div>
    </section>
  );
};
