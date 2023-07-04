"use client";

import Link from "next/link";
import ButtonAsLink from "./ButtonAsLinks";
import {
  BiLogoFacebook,
  BiLogoGithub,
  BiLogoTwitter,
  BiLogoLinkedin,
  BiLogoReact,
  BiLogoMongodb,
} from "react-icons/bi";
import { SiExpress, SiNodedotjs } from "react-icons/si";
import Image from "next/image";

const Hero = () => {
  return (
    <section className='section-padding 2xl:h-[calc(100vh-6rem)] relative h-auto lg:h-screen bg-gradient-to-tl to-teal-50 from-dark/5'>
      <div className='wrapper grid grid-cols-1 lg:grid-cols-2 gap-10 justify-center items-center'>
        {/*HERO CONTENT */}
        <div className='hero-left flex flex-col gap-1 lg:gap-2 justify-between'>
          <span className='block text-[1.5rem]'>Hello,</span>
          <h3 className='text-[2rem] md:text-[2.5rem] lg:text-[2.6rem] xl:text-[2.8rem] 2xl:text-[3rem] font-semibold'>
            I&apos;m Masud Rana Shawon
          </h3>
          <h1 className='text-[1.4rem] md:text-[1.8rem] lg:text-[1.8rem] xl:text-[1.9rem] 2xl:text-[2.2rem] font-semibold text-accent'>
            Creative full stack web developer.
          </h1>
          <p className='text-lg tracking-wide'>
            Passionate MERN developer based in Bangladesh, pushing boundaries
            with impactful projects, embracing new technologies, and solving
            problems with logic. Committed to honest innovation and positive
            societal impact.
          </p>
          <div>
            <ButtonAsLink
              href='#contact'
              target='_self'
              placeholder="Lest's Talk"
            />
          </div>

          {/* SOCIALS */}
          <div className='space-y-2'>
            <span className='bg-dark/10 h-[2px] w-1/2 block mt-5'></span>
            <h4 className='mb-5'>Stay Connected Thrive Together</h4>
            <div className='social flex gap-5 text-2xl'>
              <div className='facebook'>
                <Link
                  href='https://www.facebook.com/masudranashawon786'
                  target='_blank'
                  className='text-3xl hover:text-accent duration-500'
                >
                  <BiLogoFacebook />
                </Link>
              </div>
              <div className='github'>
                <Link
                  href='https://github.com/masudranashawon'
                  target='_blank'
                  className='text-3xl hover:text-accent duration-500'
                >
                  <BiLogoGithub />
                </Link>
              </div>
              <div className='linkedin'>
                <Link
                  href='https://www.linkedin.com/in/masudranashawon1'
                  target='_blank'
                  className='text-3xl hover:text-accent duration-500'
                >
                  <BiLogoLinkedin />
                </Link>
              </div>
              <div className='twitter'>
                <Link
                  href='https://twitter.com/MasudRanaShawo1'
                  target='_blank'
                  className='text-3xl hover:text-accent duration-500'
                >
                  <BiLogoTwitter />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* HERO IMAGE */}
        <div className='hero-right hidden lg:flex items-center justify-center content-center'>
          <div className='hero-image-sec rounded-full w-3/4 h-3/4 relative'>
            <div className='overflow-hidden rounded-full border border-dark'>
              <Image
                src='https://res.cloudinary.com/drgxflcsb/image/upload/v1676030149/Personal%20Portfolio/masud-image2_xhvc03.jpg'
                alt='Masud Rana Shawon'
                width={500}
                height={500}
                priority
                className='w-full h-full object-cover'
              />
            </div>

            {/* SKILLS CARD */}
            <div className='absolute top-0 left-0 right-0 bottom-0 w-full h-full rounded-full'>
              <div className='w-24 h-24 rounded-2xl border border-dark/30 absolute left-4 top-4 bg-light/80 backdrop-blur-xl shadow-lg text-6xl flex justify-center items-center text-sky-400'>
                <span>
                  <BiLogoReact />
                </span>
              </div>

              <div className='w-20 h-20 rounded-2xl border border-light/30 absolute right-4 top-4 bg-dark/80 backdrop-blur-xl shadow-lg text-5xl flex justify-center items-center text-white'>
                <span>
                  <SiExpress />
                </span>
              </div>

              <div className='w-24 h-28 rounded-2xl border border-dark/30 absolute right-4 bottom-4 bg-light/80 backdrop-blur-xl shadow-lg text-7xl flex justify-center items-center text-green-600'>
                <span>
                  <BiLogoMongodb />
                </span>
              </div>

              <div className='w-28 h-20 rounded-2xl border border-light/30 absolute left-4 bottom-4 bg-dark/80 backdrop-blur-xl shadow-lg text-5xl flex justify-center items-center text-green-700'>
                <span>
                  <SiNodedotjs />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
