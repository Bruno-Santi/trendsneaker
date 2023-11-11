import sneakerList from "../mocks/sneakerList";
import { SneakerCard } from "./index";

export const SneakerContainer = () => {
  return (
    <section className='grid grid-cols-1 lg:grid-cols-3  lg:mx-60 my-6 '>
      {sneakerList.map((sneaker) => {
        return (
          <div key={sneaker.id} className='place-self-center m-auto'>
            <SneakerCard key={sneaker.id} {...sneaker} />
          </div>
        );
      })}
    </section>
  );
};
