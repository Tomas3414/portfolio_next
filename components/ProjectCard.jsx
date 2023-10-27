import { FiGithub, FiExternalLink } from "react-icons/fi";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";

const ProjectCard = ({ project }) => {
  const [scroll, setScroll] = useState(false);

  return (
    <div className='relative lg:grid lg:grid-cols-12 w-full lg:h-[30rem] p-5 lg:p-0 bg-white lg:bg-transparent rounded-lg lg:rounded-none space-y-5 lg:space-y-0 lg:items-center'>
      {/* PROJECT IMAGE */}
      <div className='z-10 lg:py-4 lg:absolute lg:grid grid-cols-12 w-full h-full content-center overflow-hidden'>
        <div
          data-aos='fade-right'
          data-aos-delay='500'
          data-aos-duration='1000'
          data-aos-easing='ease-in-out'
          className={clsx(
            !project.revarse
              ? "col-span-7"
              : "xl:col-span-7 xl:col-start-6 col-start-5 col-span-8",
            "relative rounded w-full overflow-hidden h-[28rem] :hover:shadow-xl hover:border hover:border-accent/5 bg-dark/20 duration-500"
          )}
        >
          <Link href={project.liveLink} target='_blank'>
            <div
              className='absolute w-full h-full rounded bg-gradient-to-t from-transparent to-dark/70 transition-opacity opacity-60 hover:opacity-0 hover:cursor-pointer duration-500 z-[2]'
              onMouseEnter={() => setScroll(true)}
              onMouseLeave={() => setScroll(false)}
            ></div>
          </Link>
          <Image
            src={project.image}
            alt={project.title}
            width={1920}
            height={project.height}
            priority
            className='w-full h-auto'
            style={{
              transform: scroll
                ? `translateY(${project.scrollY})`
                : "translateY(0%)",
              transition: "transform 10s ease-in-out",
            }}
          />
        </div>
      </div>

      {/* PROJECT DETAILS */}
      <div className='project-details lg:absolute lg:left-0 lg:top-0 lg:py-4 lg:grid lg:grid-cols-12 w-full h-full content-center items-center overflow-hidden'>
        <div
          className={clsx(
            !project.revarse
              ? "xl:col-span-6 xl:col-start-7 col-start-5 col-span-8  lg:items-end"
              : "col-span-6 lg:items-start ",
            "flex flex-col items-start space-y-3"
          )}
        >
          <div
            className={clsx(
              !project.revarse ? "lg:items-end" : "lg:items-start",
              "flex flex-col space-y-1 z-10"
            )}
          >
            {!project.revarse ? (
              <div className='overflow-hidden'>
                <h2
                  data-aos='slide-down'
                  data-aos-delay='500'
                  data-aos-duration='1000'
                  data-aos-easing='ease-in-out'
                  className='text-dark font-bold text-2xl leading-relaxed tracking-wider flex gap-2 items-center'
                >
                  <span className='font-normal italic text-lg'>
                    ({project.completeDate})
                  </span>
                  <Link href={project.liveLink} target='_blank'>
                    {project.title}
                  </Link>
                </h2>
              </div>
            ) : (
              <div className='overflow-hidden'>
                <h2
                  data-aos='slide-down'
                  data-aos-delay='500'
                  data-aos-duration='1000'
                  data-aos-easing='ease-in-out'
                  className='text-dark font-bold text-2xl leading-relaxed tracking-wider flex gap-2 items-center'
                >
                  <Link href={project.liveLink} target='_blank'>
                    {project.title}
                  </Link>
                  <span className='font-normal italic text-lg'>
                    ({project.completeDate})
                  </span>
                </h2>
              </div>
            )}
            <div className='w-full overflow-hidden'>
              <span
                data-aos='slide-up'
                data-aos-delay='800'
                data-aos-duration='1000'
                data-aos-easing='ease-in-out'
                className='text-accent text-base block'
              >
                {project.category}
              </span>
            </div>
          </div>

          <div
            data-aos='fade-left'
            data-aos-delay='1200'
            data-aos-duration='1000'
            data-aos-easing='ease-in-out'
            className={clsx(
              !project.revarse ? "bg-gradient-to-tr" : "bg-gradient-to-bl",
              "to-teal-700 from-teal-600 w-full rounded-md p-3 lg:p-6 z-10"
            )}
          >
            <p
              className={clsx(
                !project.revarse ? "lg:text-right" : "lg:text-left",
                "text-light text-left text-lg leading-relaxed"
              )}
            >
              {project.description}
            </p>
          </div>
          <div
            className={clsx(
              !project.revarse ? "lg:justify-end" : "lg:justify-start",
              "flex gap-3 flex-wrap w-[85%] text-dark/60 lg:text-gray-400 text-sm leading-3"
            )}
          >
            {project.tools.map((tool, i) => (
              <span
                data-aos='zoom-out'
                data-aos-delay='1600'
                data-aos-duration='1000'
                data-aos-easing='ease-out-cubic'
                data-aos-anchor-placement='top center'
                className='z-10 font-medium inline-block'
                key={i}
              >
                {tool}
              </span>
            ))}
          </div>

          <div className='z-10 flex space-x-5 font-semibold'>
            <div className='overflow-hidden'>
              <Link
                data-aos='slide-up'
                data-aos-delay='1800'
                data-aos-duration='1000'
                data-aos-easing='ease-in-out'
                data-aos-anchor-placement='top center'
                href={project.liveLink}
                target={"_blank"}
                className='flex gap-1 items-center hover:text-accent duration-500 whitespace-nowrap'
              >
                <span>Live Demo</span>
                <FiExternalLink />
              </Link>
            </div>

            {project.fullStackLink && (
              <div className='overflow-hidden'>
                <Link
                  data-aos='slide-up'
                  data-aos-delay='2000'
                  data-aos-duration='1000'
                  data-aos-easing='ease-in-out'
                  data-aos-anchor-placement='top center'
                  href={project.fullStackLink}
                  target={"_blank"}
                  className='flex gap-1 items-center hover:text-accent duration-500 whitespace-nowrap'
                >
                  <span>Full-Stack</span>
                  <FiGithub />
                </Link>
              </div>
            )}

            {project.frontEndLink && (
              <div className='overflow-hidden'>
                <Link
                  data-aos='slide-up'
                  data-aos-delay='2200'
                  data-aos-duration='1000'
                  data-aos-easing='ease-in-out'
                  data-aos-anchor-placement='top center'
                  href={project.frontEndLink}
                  target={"_blank"}
                  className='flex gap-1 items-center hover:text-accent duration-500 whitespace-nowrap'
                >
                  <span>Front-End</span>
                  <FiGithub />
                </Link>
              </div>
            )}

            {project.backEndLink && (
              <div className='overflow-hidden'>
                <Link
                  data-aos='slide-up'
                  data-aos-delay='2400'
                  data-aos-duration='1000'
                  data-aos-easing='ease-in-out'
                  data-aos-anchor-placement='top center'
                  href={project.backEndLink}
                  target={"_blank"}
                  className='flex gap-1 items-center hover:text-accent duration-500 whitespace-nowrap'
                >
                  <span>Back-End</span>
                  <FiGithub />
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
