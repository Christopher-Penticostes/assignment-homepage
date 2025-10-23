import { IoCloseOutline, IoMenuOutline } from "react-icons/io5";
import { useState, useEffect } from "react";
import Logo from "../assets/logo.webp";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleNav = () => setNav(!nav);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
  <>
    <div
      className={`flex justify-between items-center h-[75px] max-w-[1550px] mx-auto px-7 sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-stone-950/90 backdrop-blur-[20px] shadow-[0_0_4px_1px_rgba(0,0,0,0.10)]"
          : "bg-transparent"
      }`}
    >
      <div className="w-[33%] max-md:w-[80%]">
        <img src={Logo} className="h-[58px] invert brightness-0 max-md:h-[45px]" />
      </div>

      <ul className="hidden lg:flex w-[67%] items-center justify-end text-[15px] text-white">
        <li className="mx-[30px] cursor-pointer text-orange-500">Home</li>
        <li className="mx-[30px] cursor-pointer hover:text-orange-500">About Us</li>
        <li className="mx-[30px] cursor-pointer hover:text-orange-500">Listing</li>
        <li className="ml-5 cursor-pointer">
          <button className="bg-orange-500 font-medium rounded-full h-[37px] w-[124px]">
            LET'S MOVE
          </button>
        </li>
      </ul>

      <div onClick={handleNav} className="block lg:hidden cursor-pointer">
        {!nav ? (
          <IoMenuOutline size={25} className="text-white" />
        ) : (
          <IoCloseOutline size={25} className="text-white" />
        )}
      </div>
    </div>

    <div
      onClick={() => setNav(false)}
      className={`fixed inset-0 z-[100] lg:hidden transition-opacity duration-500 ${
        nav ? "bg-black/40 opacity-100 visible" : "bg-black/0 opacity-0 invisible"
      }`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`fixed top-0 left-0 w-[65%] h-full bg-[#18181b]/40 backdrop-blur-[10px] shadow-[0_0_60px_15px_rgba(0,0,0,0.50)] transform transition-transform duration-500 ease-in-out ${
          nav ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="px-7 pt-6">
          <img src={Logo} className="h-[58px] invert brightness-0" />
        </div>
        <ul className="pt-8 pb-10 text-white">
          <li className="px-7 py-5 text-orange-500">Home</li>
          <li className="px-7 py-5">About Us</li>
          <li className="px-7 py-5">Listing</li>
          <li className="px-7 py-5">Let's Move</li>
        </ul>
      </div>
    </div>
  </>
);
};

export default Navbar;
