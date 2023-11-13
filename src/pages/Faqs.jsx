import { BsFillArrowLeftSquareFill } from "react-icons/bs";
import { useArrowBack } from "../hooks/useArrowBack";
import { Accordion, AccordionItem as Item } from "@szhsin/react-accordion";
import chevron from "../assets/chevron-down.png";
const AccordionItem = ({ header, ...rest }) => (
  <Item
    {...rest}
    header={({ state: { isEnter } }) => (
      <>
        {header}
        <img
          className={`ml-auto w-6 bg-secondary transition-transform duration-200 ease-out ${isEnter && "rotate-180"}`}
          src={chevron}
          alt='Chevron'
        />
      </>
    )}
    className='border-b'
    buttonProps={{
      className: ({ isEnter }) =>
        `flex w-full p-4 text-left text-main  hover:bg-gray-700 ${isEnter && "bg-secondary text-black"}`,
    }}
    contentProps={{
      className: "transition-height duration-200 ease-out",
    }}
    panelProps={{ className: "p-4" }}
  />
);
export const Faqs = () => {
  const { animateIn, animateBack, handleBack, animateBackArrow, animateInArrow, backing } = useArrowBack();
  return (
    <div>
      <BsFillArrowLeftSquareFill
        onClick={handleBack}
        className={backing ? `${animateBackArrow} ` : `${animateInArrow}`}
      />
      <div
        className={
          backing
            ? `${animateBack} mx-auto mt-40 w-3/4 lg:w-3/4 my-4 border-t text-main`
            : `${animateIn} mx-auto mt-40 w-3/4 lg:w-3/4 my-4 border-t text-main`
        }
      >
        <Accordion transition transitionTimeout={200}>
          <AccordionItem header='What is Lorem Ipsum?' initialEntered>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.
          </AccordionItem>

          <AccordionItem header='Where does it come from?'>
            Quisque eget luctus mi, vehicula mollis lorem. Proin fringilla vel erat quis sodales. Nam ex enim, eleifend
            venenatis lectus vitae.
          </AccordionItem>

          <AccordionItem header='Why do we use it?'>
            Suspendisse massa risus, pretium id interdum in, dictum sit amet ante. Fusce vulputate purus sed tempus
            feugiat.
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};
