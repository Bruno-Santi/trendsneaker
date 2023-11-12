import { useLocation } from "react-router-dom";
import Logo from "../../assets/Logo5.png";
import { HiMenu } from "react-icons/hi";
import { RxCross1 } from "react-icons/Rx";
import { useModal, useNavigateTo } from "../../hooks";
import { Link } from "react-scroll";
export const NavBarResponsive = () => {
  const { modal, toggleModal } = useModal();
  const { handleNavigate } = useNavigateTo();
  const { pathname } = useLocation();

  const handleClick = (to) => {
    handleNavigate(to);
    toggleModal();
  };
  if (pathname === "/") {
    return null;
  }
  return (
    <div className='lg:hidden navBarSticky'>
      <div className='h-20  flex justify-between'>
        <div className='h-fit w-32 my-auto pl-4 ml-4 '>
          <img src={Logo} />
        </div>
        <div onClick={toggleModal} className='my-auto ml-2 text-main text-6xl '>
          {modal ? (
            <RxCross1 className='w-10 h-10 text-secondary mr-6 animate__animated animate__delay-0.7s animate__slower	 animate__fadeIn' />
          ) : (
            <HiMenu className='w-10 h-10 mr-6 animate__animated animate__delay-0.7s animate__slower	 animate__fadeIn' />
          )}
        </div>
      </div>
      <div>
        <div className=''>
          <div
            className={
              modal
                ? "lg:hidden opacity-90 h-fit navBar top-20 animate__animated animate__delay-0.7s animate__fast animate__fadeInDown"
                : "lg:hidden opacity-90 h-fit navBar top-20 animate__animated animate__delay-0.7s animate__fast animate__fadeOutUp hidden"
            }
          >
            <div className=' '>
              <ul className='text-main  text-center  font-monaSans bg-gray-700/70 w-full flex-col  py-6  text-2xl space-y-6  '>
                {pathname !== "/home" ? (
                  <li onClick={() => handleClick("/home")} className=''>
                    Products
                  </li>
                ) : (
                  <Link to='products' spy={true} smooth={true} offset={0} duration={1000}>
                    <li onClick={toggleModal} className=''>
                      Products
                    </li>
                  </Link>
                )}

                <li onClick={() => handleClick("/about")}>About Us</li>
                <li onClick={() => handleClick("/faqs")}>FAQ'S</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
