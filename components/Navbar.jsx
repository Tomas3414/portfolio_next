"use client";

import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import clsx from "clsx";
import ButtonAsLink from "./ButtonAsLinks";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaCode } from "react-icons/fa";

const Navbar = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const handleClick = useCallback(() => {
    setIsMobileNavOpen(!isMobileNavOpen);
  }, [isMobileNavOpen, setIsMobileNavOpen]);

  const handleClickTwo = useCallback(() => {
    if (isMobileNavOpen) {
      setIsMobileNavOpen(false);
    } else {
      return;
    }
  }, [isMobileNavOpen, setIsMobileNavOpen]);

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <header
        className='hidden md:flex h-24 justify-between items-center border-b border-black/10 bg-white/60 backdrop-blur-xl shadow-lg fixed top-0 left-0 right-0 z-[100] font-medium rounded-bl-3xl rounded-br-3xl'
        data-aos='slide-down'
        data-aos-delay='700'
        data-aos-duration='1500'
        data-aos-easing='ease-in-out'
      >
        {/* INNER HEADER */}
        <div className='wrapper flex justify-between items-center'>
          {/* LOGO */}
          <div className='left'>
            <div
              className='logo flex items-center gap-2'
              data-aos='fade'
              data-aos-delay='1200'
              data-aos-duration='1500'
              data-aos-easing='ease-in-out'
            >
              <span className='text-2xl text-accent animate-bounce'>
                <FaCode />
              </span>
              <Link href='/' className='line-flow'>
                Masud Rana Shawon
              </Link>
            </div>
          </div>

          {/* MIDDLE NAV */}
          <nav
            className='flex gap-5'
            data-aos='fade'
            data-aos-delay='1000'
            data-aos-duration='1500'
            data-aos-easing='ease-in-out'
          >
            <li className='list-none'>
              <Link href='/' className='line-flow'>
                Home
              </Link>
            </li>
            <li className='list-none'>
              <Link href='/#about' className='line-flow'>
                About
              </Link>
            </li>
            <li className='list-none'>
              <Link href='/#projects' className='line-flow'>
                Projects
              </Link>
            </li>
            <li className='list-none'>
              <Link href='/#skills' className='line-flow'>
                Skills
              </Link>
            </li>
            <li className='list-none'>
              <Link href='/#contact' className='line-flow'>
                Contact
              </Link>
            </li>
          </nav>

          {/* RIGHT NAV */}
          <div className='right'>
            <div
              data-aos='fade'
              data-aos-delay='1500'
              data-aos-duration='1500'
              data-aos-easing='ease-in-out'
            >
              <ButtonAsLink
                href='https://drive.google.com/file/d/1v1bK2o8jI-ogJtaCIy1w5aUqpCObgHA5/view'
                placeholder='View Resume'
                target='_blank'
              />
            </div>
          </div>
        </div>
      </header>

      {/* MOBILE NAVIGATION */}
      <header
        className='md:hidden flex h-24 justify-between items-center border-b border-dark/10 bg-light/60 backdrop-blur-xl shadow-xl fixed top-0 left-0 right-0 z-[100]'
        data-aos='slide-down'
        data-aos-duration='1500'
        data-aos-easing='ease-in-out'
      >
        {/* INNER HEADER */}
        <div className='wrapper flex justify-between items-center'>
          {/* LOGO */}
          <div onClick={handleClickTwo} className='left'>
            <div
              data-aos='fade'
              data-aos-delay='1000'
              data-aos-duration='1500'
              data-aos-easing='ease-in-out'
              className='logo flex items-center gap-2 font-semibold'
            >
              <span className='text-2xl text-accent animate-bounce'>
                <FaCode />
              </span>
              <Link href='/' className='line-flow'>
                Masud Rana Shawon
              </Link>
            </div>
          </div>

          {/* TOGGLE BUTTON */}
          <div className='overflow-hidden'>
            <div
              data-aos='fade'
              data-aos-delay='1200'
              data-aos-duration='1500'
              data-aos-easing='ease-in-out'
            >
              <div
                onClick={handleClick}
                className={clsx(
                  isMobileNavOpen
                    ? "right flex flex-col gap-4 cursor-pointer"
                    : "right flex flex-col gap-2 cursor-pointer"
                )}
              >
                <span
                  className={clsx(
                    "bg-dark w-7 h-[2px] rounded-full origin-left duration-500",
                    isMobileNavOpen ? "rotate-[45deg]" : "rotate-[0deg]"
                  )}
                ></span>
                <span
                  className={clsx(
                    "bg-dark h-[2px] rounded-full duration-500 origin-left",
                    isMobileNavOpen
                      ? "w-7 rotate-[-45deg]"
                      : "w-5 rotate-[0deg]"
                  )}
                ></span>
                <span
                  className={clsx(
                    "bg-dark w-3 h-[2px] rounded-full duration-500",
                    isMobileNavOpen ? "translate-x-[100vw]" : "translate-x-0"
                  )}
                ></span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* FIXED NAV MODAL */}
      <div
        onClick={handleClick}
        className={clsx(
          "fixed bg-accent top-0 left-0 origin-top-right right-0 bottom-0 h-screen w-screen z-[99] duration-700",
          isMobileNavOpen
            ? "translate-y-0 rounded-bl-none rounded-br-none"
            : "translate-y-[-100vh] rounded-bl-full rounded-br-full"
        )}
      >
        <div className='w-screen h-full flex justify-center items-center'>
          <div
            className={clsx(
              "fixed bg-light top-0 left-0 right-0 bottom-0 h-screen w-screen z-[99] duration-1000 flex justify-center items-center",
              isMobileNavOpen
                ? "translate-y-0 rounded-bl-[200px] rounded-br-[200px]"
                : "translate-y-[-100vh] rounded-bl-full rounded-br-full"
            )}
          >
            <nav className='moile-menu flex flex-col gap-5 text-4xl'>
              <li className='list-none'>
                <Link href='/' className='hover:text-accent duration-500'>
                  Home
                </Link>
              </li>
              <li className='list-none block'>
                <Link href='/#about' className='hover:text-accent duration-500'>
                  About
                </Link>
              </li>
              <li className='list-none'>
                <Link
                  href='/#projects'
                  className='hover:text-accent duration-500'
                >
                  Projects
                </Link>
              </li>
              <li className='list-none'>
                <Link
                  href='/#skills'
                  className='hover:text-accent duration-500'
                >
                  Skills
                </Link>
              </li>
              <li className='list-none'>
                <Link
                  href='/#contact'
                  className='hover:text-accent duration-500'
                >
                  Contact
                </Link>
              </li>
              <li className='list-none'>
                <Link
                  href='https://drive.google.com/file/d/1v1bK2o8jI-ogJtaCIy1w5aUqpCObgHA5/view'
                  target='_blank'
                  className='hover:text-accent duration-500'
                >
                  Resume
                </Link>
              </li>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
