import Image from "next/image";
import SectionTitle from "./SectionTitle";

const About = () => {
  return (
    <section id='about' className='wrapper section-padding'>
      <SectionTitle title='About me' />

      {/* ABOUT */}
      <div className='about-content grid grid-cols-1 lg:grid-cols-2 lg:text-left justify-center items-center gap-10 mt-20 overflow-hidden'>
        {/* ABOUT IMAGE */}
        <div className='about-left relative lg:p-10 lg:mb-10'>
          <div
            data-aos='fade-right'
            data-aos-delay='1000'
            data-aos-duration='1000'
            data-aos-easing='ease-in-out'
            className='w-full h-auto overflow-hidden rounded-3xl'
          >
            <Image
              src='https://res.cloudinary.com/drgxflcsb/image/upload/v1676030149/Personal%20Portfolio/masud-image1_rejzqv.jpg'
              alt='Masud Rana Shawon'
              width={500}
              height={500}
              className='w-full h-full object-cover hover:scale-[1.1] duration-[2000ms]'
            />
          </div>
          {/* ABOUT ROLE */}
          <div
            data-aos='zoom-in'
            data-aos-duration='1000'
            data-aos-delay='1000'
            data-aos-easing='ease-in-out'
            className='role m-10 hidden lg:block w-1/3 h-1/3 absolute -bottom-20 -right-20 rounded-full bg-light'
          >
            <div className='absolute z-10 w-1/3 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
              <Image
                src='https://res.cloudinary.com/drgxflcsb/image/upload/v1691770982/nextjs-portfolio/working-emoji_mveu7a.png'
                alt='emoji'
                width={500}
                height={500}
                className='w-full h-full'
              />
            </div>
            <div className='animate-text w-full h-full'>
              <Image
                src='https://res.cloudinary.com/drgxflcsb/image/upload/v1691770961/nextjs-portfolio/rounded-text_ijbmqb.png'
                alt='text'
                width={500}
                height={500}
                className='w-full h-full object-cover'
              />
            </div>
          </div>
        </div>

        {/* ABOUT TEXT DETAILS*/}
        <div className='about-right space-y-5 lg:p-10'>
          {/* SHORT INTRO */}
          <div className='overflow-hidden'>
            <h2
              data-aos='slide-down'
              data-aos-duration='1000'
              data-aos-delay='1000'
              data-aos-easing='ease-in-out'
              className='text-[1.1rem] md:text-[1.2rem] lg:text-[1.4rem] xl:text-[1.9rem] 2xl:text-[2.2rem] font-medium leading-snug'
            >
              I&apos;m a<span className='text-accent'> passionate </span>
              and <span className='text-accent'>innovative</span> web developer
              with a strong focus on
              <span className='text-accent'> mern stack</span>.
            </h2>
          </div>
          {/* DISCRIPTIVE INFORMATION */}
          <div className='overflow-hidden'>
            <p
              data-aos='slide-left'
              data-aos-delay='1500'
              data-aos-duration='1000'
              data-aos-easing='ease-in-out'
              className='text-[1rem] xl:text-2xl tracking-wide leading-[1.5]'
            >
              Welcome to my portfolio! I&apos;m deeply passionate about
              JavaScript and its ability to create dynamic web applications. I
              thrive on MERN stack development, constantly learning and pushing
              boundaries to build innovative solutions. My insatiable curiosity
              drives me to stay updated with the latest developments, aiming to
              create impactful projects that contribute to technological
              advancement.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
