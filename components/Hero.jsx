"use client";

import { TbMathGreater } from "react-icons/tb";
import { SiExpress, SiLeetcode, SiNodedotjs } from "react-icons/si";
import {
  BiLogoFacebook,
  BiLogoGithub,
  BiLogoTwitter,
  BiLogoLinkedin,
  BiLogoReact,
  BiLogoMongodb,
} from "react-icons/bi";
import Link from "next/link";
import Image from "next/image";
import ButtonAsLink from "./ButtonAsLinks";

const Hero = () => {
  return (
    <section className='hero-section section-padding 2xl:h-[calc(100vh-6rem)] relative h-auto lg:h-screen bg-gradient-to-tl to-teal-50 from-dark/5'>
      <div className='wrapper grid grid-cols-1 lg:grid-cols-2 gap-10 justify-center items-center'>
        {/*HERO CONTENT */}
        <div className='hero-left flex flex-col gap-1 lg:gap-2 justify-between'>
          <div className='overflow-hidden'>
            <p
              data-aos='slide-up'
              data-aos-duration='500'
              data-aos-easing='ease-in-out'
              data-aos-mirror='true'
              data-aos-once='false'
              className='flex items-center text-[1.5rem]'
            >
              <span className='text-dark/40'>
                <TbMathGreater />
              </span>
              <span>Hello</span>
              <span className='animate-pulse inline-block text-dark/80 font-semibold -mb-3'>
                —
              </span>
            </p>
          </div>
          <div className='overflow-hidden'>
            <h3
              data-aos='slide-up'
              data-aos-delay='300'
              data-aos-duration='500'
              data-aos-mirror='true'
              data-aos-once='false'
              data-aos-easing='ease-in-out'
              className='text-[1.8rem] md:text-[2.5rem] lg:text-[2.6rem] xl:text-[2.8rem] 2xl:text-[3rem] font-semibold'
            >
              I&apos;m Masud Rana Shawon
              <span className='text-accent font-bold'>.</span>
            </h3>
          </div>
          <div className='overflow-hidden'>
            <h1
              data-aos='slide-up'
              data-aos-delay='600'
              data-aos-duration='500'
              data-aos-mirror='true'
              data-aos-once='false'
              data-aos-easing='ease-in-out'
              className='text-[1.4rem] md:text-[1.8rem] lg:text-[1.8rem] xl:text-[1.9rem] 2xl:text-[2.2rem] font-semibold text-accent'
            >
              Creative full stack web developer
            </h1>
          </div>
          <div className='overflow-hidden'>
            <p
              data-aos='slide-down'
              data-aos-delay='800'
              data-aos-duration='400'
              data-aos-mirror='true'
              data-aos-once='false'
              data-aos-easing='ease-in-out'
              className='text-lg tracking-wide'
            >
              Passionate MERN developer based in Bangladesh, pushing boundaries
              with impactful projects, embracing new technologies, and solving
              problems with logic. Committed to honest innovation and positive
              societal impact.
            </p>
          </div>
          <div>
            <div
              data-aos='flip-up'
              data-aos-delay='1000'
              data-aos-duration='500'
              data-aos-mirror='true'
              data-aos-once='false'
              data-aos-easing='ease-out-cubic'
              className='my-2'
            >
              <ButtonAsLink
                href='#contact'
                target='_self'
                placeholder="Lest's Talk"
              />
            </div>
          </div>

          {/* SOCIALS */}
          <div className='space-y-2'>
            <div className='overflow-hidden'>
              <span
                data-aos='slide-right'
                data-aos-delay='1700'
                data-aos-duration='1000'
                data-aos-mirror='true'
                data-aos-once='false'
                data-aos-easing='ease-out-cubic'
                data-aos-anchor='.hero-section'
                className='bg-dark/10 h-[2px] w-1/2 block mt-5'
              ></span>
            </div>
            <h4
              data-aos='fade-up'
              data-aos-delay='2000'
              data-aos-duration='500'
              data-aos-mirror='true'
              data-aos-once='false'
              data-aos-easing='ease-out-cubic'
              data-aos-anchor='.hero-section'
              className='mb-5'
            >
              Stay Connected Thrive Together
            </h4>
            <div className='social flex gap-5 text-2xl overflow-hidden'>
              <div
                data-aos='zoom-in'
                data-aos-delay='2500'
                data-aos-duration='1000'
                data-aos-mirror='true'
                data-aos-once='false'
                data-aos-easing='ease-out-cubic'
                data-aos-anchor='.hero-section'
                className='github'
              >
                <Link
                  href='https://github.com/masudranashawon'
                  target='_blank'
                  className='text-3xl hover:text-accent duration-500'
                >
                  <BiLogoGithub />
                </Link>
              </div>
              <div
                data-aos='zoom-in'
                data-aos-delay='2600'
                data-aos-duration='1000'
                data-aos-mirror='true'
                data-aos-once='false'
                data-aos-easing='ease-out-cubic'
                data-aos-anchor='.hero-section'
                className='leetcode'
              >
                <Link
                  href='https://leetcode.com/masudranashawon'
                  target='_blank'
                  className='text-3xl hover:text-dark duration-500'
                >
                  <SiLeetcode />
                </Link>
              </div>
              <div
                data-aos='zoom-in'
                data-aos-delay='2700'
                data-aos-duration='1000'
                data-aos-mirror='true'
                data-aos-once='false'
                data-aos-easing='ease-out-cubic'
                data-aos-anchor='.hero-section'
                className='linkedin'
              >
                <Link
                  href='https://www.linkedin.com/in/masudranashawon1'
                  target='_blank'
                  className='text-3xl hover:text-accent duration-500'
                >
                  <BiLogoLinkedin />
                </Link>
              </div>
              <div
                data-aos='zoom-in'
                data-aos-delay='2800'
                data-aos-duration='1000'
                data-aos-mirror='true'
                data-aos-once='false'
                data-aos-easing='ease-out-cubic'
                data-aos-anchor='.hero-section'
                className='twitter'
              >
                <Link
                  href='https://twitter.com/MasudRanaShawo1'
                  target='_blank'
                  className='text-3xl hover:text-accent duration-500'
                >
                  <BiLogoTwitter />
                </Link>
              </div>
              <div
                data-aos='zoom-in'
                data-aos-delay='3000'
                data-aos-duration='1000'
                data-aos-mirror='true'
                data-aos-once='false'
                data-aos-easing='ease-out-cubic'
                data-aos-anchor='.hero-section'
                className='facebook'
              >
                <Link
                  href='https://www.facebook.com/masudranashawon786'
                  target='_blank'
                  className='text-3xl hover:text-accent duration-500'
                >
                  <BiLogoFacebook />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* HERO IMAGE */}
        <div className='hero-right hidden lg:flex items-center justify-center content-center'>
          <div className='hero-image-sec rounded-full w-3/4 h-3/4 relative'>
            <div className='overflow-hidden rounded-full'>
              <div
                data-aos='fade-in'
                data-aos-delay='1300'
                data-aos-duration='1000'
                data-aos-mirror='true'
                data-aos-once='false'
                data-aos-easing='ease-in-out'
                className='overflow-hidden rounded-full border border-dark'
              >
                <Image
                  src='https://res.cloudinary.com/drgxflcsb/image/upload/v1676030149/Personal%20Portfolio/masud-image2_xhvc03.jpg'
                  alt='Masud Rana Shawon'
                  width={500}
                  height={500}
                  priority
                  className='w-full h-full object-cover'
                />
              </div>
            </div>

            {/* SKILLS CARD */}
            <div className='absolute top-0 left-0 right-0 bottom-0 w-full h-full rounded-full'>
              <div
                data-aos='flip-left'
                data-aos-delay='1500'
                data-aos-duration='1000'
                data-aos-mirror='true'
                data-aos-once='false'
                data-aos-easing='ease-out-cubic'
                className='w-24 h-24 rounded-2xl border border-dark/30 absolute left-4 top-4 bg-light/80 backdrop-blur-xl shadow-lg text-6xl flex justify-center items-center text-sky-400'
              >
                <span>
                  <BiLogoReact />
                </span>
              </div>

              <div
                data-aos='zoom-in'
                data-aos-delay='1700'
                data-aos-duration='1000'
                data-aos-mirror='true'
                data-aos-once='false'
                data-aos-easing='ease-in-out'
                className='w-20 h-20 rounded-2xl border border-light/30 absolute right-4 top-4 bg-dark/80 backdrop-blur-xl shadow-lg text-5xl flex justify-center items-center text-white'
              >
                <span>
                  <SiExpress />
                </span>
              </div>

              <div
                data-aos='flip-left'
                data-aos-delay='1500'
                data-aos-duration='1000'
                data-aos-mirror='true'
                data-aos-once='false'
                data-aos-easing='ease-out-cubic'
                data-aos-anchor='.hero-section'
                className='w-24 h-28 rounded-2xl border border-dark/30 absolute right-4 bottom-4 bg-light/80 backdrop-blur-xl shadow-lg text-7xl flex justify-center items-center text-green-600'
              >
                <span>
                  <BiLogoMongodb />
                </span>
              </div>

              <div
                data-aos='zoom-in'
                data-aos-delay='1700'
                data-aos-duration='1000'
                data-aos-mirror='true'
                data-aos-once='false'
                data-aos-easing='ease-in-out'
                data-aos-anchor='.hero-section'
                className='w-28 h-20 rounded-2xl border border-light/30 absolute left-4 bottom-4 bg-dark/80 backdrop-blur-xl shadow-lg text-5xl flex justify-center items-center text-green-700'
              >
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
