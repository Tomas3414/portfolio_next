"use client";

import Image from "next/image";

const SectionTitle = ({ title }) => {
  return (
    <div className='section-title overflow-hidden'>
      <div className='relative inline-block '>
        <h2
          data-aos='slide-down'
          data-aos-duration='1000'
          data-aos-easing='ease-in-out'
          data-aos-mirror='true'
          data-aos-once='false'
          className='text-[2.5rem] xs:text-[3rem] sm:text-[4rem] md:text-[5rem] lg:text-[6rem] xl:text-[7rem] 2xl:text-[8rem] font-semibold inline-block z-[1]'
        >
          {title}
        </h2>
        <span
          data-aos='zoom-in'
          data-aos-duration='1000'
          data-aos-delay='800'
          data-aos-easing='ease-in-out'
          data-aos-mirror='true'
          data-aos-once='false'
          className='absolute -right-4 -bottom-3 md:-bottom-1 lg:bottom-0  xl:-right-10 xl:-bottom-4  z-[-1] animate-pulse'
        >
          <Image
            src='https://res.cloudinary.com/drgxflcsb/image/upload/v1688574652/nextjs-portfolio/dotted-square_atqm2y.png'
            alt='Dotted Square Shape'
            width='100'
            height='100'
            priority
            className='opacity-30 w-[3rem] h-[3rem] md:w-[4rem] md:h-[4rem] xl:w-[6.5rem] xl:h-[6.5rem]'
          />
        </span>
      </div>
      <div
        data-aos='slide-right'
        data-aos-delay='500'
        data-aos-duration='1000'
        data-aos-easing='ease-in-out'
        data-aos-mirror='true'
        data-aos-once='false'
        className='w-1/4 h-2 bg-accent rounded-xl'
      ></div>
    </div>
  );
};

export default SectionTitle;
