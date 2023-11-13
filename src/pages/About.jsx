import { useArrowBack } from "../hooks/useArrowBack";
import { BsFillArrowLeftSquareFill } from "react-icons/bs";
export const About = () => {
  const { animateIn, animateBack, handleBack, animateBackArrow, animateInArrow, backing } = useArrowBack();
  return (
    <div className={backing ? `${animateBack} flex` : `${animateIn} flex`}>
      <BsFillArrowLeftSquareFill
        onClick={handleBack}
        className={backing ? `${animateBackArrow}` : `${animateInArrow}`}
      />
      <div className='mt-20 m-auto w-3/6 text-main text-xl '>
        <h1 className='text-6xl font-bold mb-16'>Lorem ipsum dolor</h1>
        <span>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis voluptate rem eaque commodi mollitia?
          Voluptates animi assumenda eos illo quis! Praesentium consectetur qui eveniet facilis veritatis iste enim,
          labore expedita?
        </span>
      </div>
    </div>
  );
};
