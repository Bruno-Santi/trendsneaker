import { FirstSection, OurBenefits, Products } from "../components";
import { ReverseReveal } from "../components/ui";
import "animate.css";
export const Home = () => {
  return (
    <div className='animate__animated animate__delay-0.7s animate__slower	 animate__fadeIn'>
      <ReverseReveal>
        <FirstSection />
        <OurBenefits />
      </ReverseReveal>
      <Products />
    </div>
  );
};
