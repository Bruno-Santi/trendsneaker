import { useLocation } from "react-router-dom";
import { FooterList, Reveal } from "./ui";
import { featuresList, companyList, termsList } from "../mocks/footerList";
import { AiFillInstagram, AiOutlineTwitter, AiFillFacebook } from "react-icons/ai";
import Logo from "../assets/Logo5.png";
export const Footer = () => {
  const { pathname } = useLocation();
  if (pathname === "/") return null;
  return (
    <div className='lg:relative bottom-0 left-0 w-full p-4'>
      <section className='lg:flex grid grid-cols-1 mt-20 h-fit lg:justify-evenly m-auto text-center w-full '>
        <div className='flex-col flex text-left w-[200px] mx-auto mt-10 space-y-3 font-poppins font-bold text-main'>
          <img className='w-40' src={Logo}></img>
          <span className='text-md  '>Call: +123 456 789</span>
          <span className='text-md  '>
            Preasent nulla massa, hendrerit vestibulum gravida in, feugiat auctor felis.
          </span>
          <span className='text-md '>Email: johndoe@mail.com</span>
          <div className='flex space-x-8 text-4xl'>
            <AiFillFacebook className='cursor-pointer duration-700 hover:text-secondary' />
            <AiFillInstagram className='cursor-pointer duration-700 hover:text-secondary' />
            <AiOutlineTwitter className='cursor-pointer duration-700 hover:text-secondary' />
          </div>
        </div>
        <div className='flex lg:space-x-48 space-x-4 mx-auto '>
          <FooterList {...featuresList} />
          <FooterList {...companyList} />
          <FooterList {...termsList} />
        </div>
      </section>
    </div>
  );
};
