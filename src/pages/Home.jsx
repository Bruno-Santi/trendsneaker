import { FirstSection, OurBenefits, Products } from "../components";
import { ReverseReveal } from "../components/ui";

export const Home = () => {
  return (
    <div>
      <ReverseReveal>
        <FirstSection />
        <OurBenefits />
      </ReverseReveal>
      <Products />
    </div>
  );
};
