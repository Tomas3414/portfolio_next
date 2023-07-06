import Image from "next/image";
import SectionTitle from "./SectionTitle";

const About = () => {
  return (
    <section id='about' className='wrapper section-padding'>
      <SectionTitle title='About me' />

      {/* ABOUT */}
      <div className='about-content mt-20 relative h-auto lg:h-[70rem] xl:h-[65rem] 2xl:h-[60rem] overflow-hidden'>
        <div
          data-aos='flip-right'
          data-aos-duration='1000'
          data-aos-delay='1500'
          data-aos-easing='ease-in-out'
          data-aos-mirror='true'
          data-aos-once='false'
          className='about-image w-full lg:w-[40%] overflow-hidden rounded-2xl'
        >
          <Image
            src='https://res.cloudinary.com/drgxflcsb/image/upload/v1676030149/Personal%20Portfolio/masud-image1_rejzqv.jpg'
            alt='Masud Rana Shawon'
            width={500}
            height={500}
            className='w-full h-full object-cover hover:scale-[1.1] duration-[2000ms]'
          />
        </div>

        {/* DETAILS */}
        <div className='overflow-hidden'>
          <div
            data-aos='slide-left'
            data-aos-duration='1000'
            data-aos-delay='1800'
            data-aos-easing='ease-in-out'
            data-aos-mirror='true'
            data-aos-once='false'
            className='about-details w-full lg:w-[63%] lg:absolute right-0 top-[10rem] radial backdrop-blur-xl p-10 rounded-2xl space-y-5'
          >
            {/* SHORT INTRO */}
            <h2
              data-aos='flip-down'
              data-aos-duration='1000'
              data-aos-delay='1000'
              data-aos-easing='ease-in-out'
              data-aos-mirror='true'
              data-aos-once='false'
              className='text-[1rem] md:text-[1.8rem]  lg:text-[2.1rem] xl:text-[2.6rem] font-bold leading-snug'
            >
              <span className='block mb-5'>Hello,</span> My name is Masud Rana
              Shawon i&apos;m a<span className='text-accent'> passionate </span>
              and <span className='text-accent'>innovative</span> web developer
              with a strong focus on
              <span className='text-accent'> mern stack</span>.
            </h2>
            {/* DISCRIPTIVE INFORMATION */}
            <p
              data-aos='slide-up'
              data-aos-duration='1000'
              data-aos-easing='ease-in-out'
              data-aos-mirror='true'
              data-aos-once='false'
              className='text-[1.5rem] leading-[1.2]'
            >
              Welcome to my personal portfolio! I have a deep love for
              JavaScript, and I am constantly immersing myself in learning and
              exploring its intricacies. It is a language that fascinates me
              with its versatility and power to create dynamic and interactive
              web applications. I am passionate about leveraging MERN Stack
              development to build innovative solutions and push the boundaries
              of what can be achieved. With an insatiable curiosity, I
              continuously seek to expand my knowledge and expertise in MERN
              Stack development, staying up-to-date with the latest developments
              and best practices. By harnessing the full potential of this
              remarkable language, I aim to create impactful projects that make
              a meaningful difference and contribute to the advancement of
              technology.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
