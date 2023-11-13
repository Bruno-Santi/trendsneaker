import { useProductsStore } from "../hooks";

import { SneakerCard } from "./index";

export const SneakerContainer = () => {
  const { shoes, isLoading } = useProductsStore();
  if (isLoading) <div>Cargando</div>;
  return (
    <section className='grid grid-cols-1 lg:grid-cols-3  lg:mx-60 my-6 '>
      {shoes?.map((sneaker) => {
        return (
          <div key={sneaker.id} className='place-self-center m-auto'>
            <SneakerCard key={sneaker.id} {...sneaker} />
          </div>
        );
      })}
    </section>
  );
};
