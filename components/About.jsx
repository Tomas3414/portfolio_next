import Image from "next/image";
import SectionTitle from "./SectionTitle";

const About = () => {
  return (
    <section id='about' className='wrapper section-padding'>
      <SectionTitle title='About me' />

      {/* ABOUT */}
      <div className='about-content mt-20 relative'>
        <div className='about-image w-full lg:w-[40%] overflow-hidden'>
          <Image
            src='https://res.cloudinary.com/drgxflcsb/image/upload/v1676030149/Personal%20Portfolio/masud-image1_rejzqv.jpg'
            alt='Masud Rana Shawon'
            width={500}
            height={500}
            className='w-full h-full object-cover'
          />
        </div>
        {/* DETAILS */}
        <div className='about-details w-full lg:w-[63%] lg:absolute right-0 top-[5rem]'>
          <h2>
            <span>Hi there,</span> <span></span>I&apos;m Masud Rana Shawon - a
            passionate and innovative web developer.
          </h2>
          <p>
            Welcome to my personal portfolio! I have a deep love for JavaScript,
            and I am constantly immersing myself in learning and exploring its
            intricacies. It is a language that fascinates me with its
            versatility and power to create dynamic and interactive web
            applications. I am passionate about leveraging MERN Stack
            development to build innovative solutions and push the boundaries of
            what can be achieved. With an insatiable curiosity, I continuously
            seek to expand my knowledge and expertise in MERN Stack development,
            staying up-to-date with the latest developments and best practices.
            By harnessing the full potential of this remarkable language, I aim
            to create impactful projects that make a meaningful difference and
            contribute to the advancement of technology.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
