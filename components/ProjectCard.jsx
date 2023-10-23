import { FiGithub, FiExternalLink } from "react-icons/fi";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";

const ProjectCard = ({ project }) => {
  const [scroll, setScroll] = useState(false);

  return (
    <div
      data-aos='fade-up'
      className='relative lg:grid lg:grid-cols-12 w-full lg:h-[30rem] p-5 lg:p-0 bg-white lg:bg-transparent rounded-lg lg:rounded-none space-y-5 lg:space-y-0 lg:items-center'
    >
      {/* Project image */}
      <div className='z-10 lg:py-4 lg:absolute lg:grid grid-cols-12 w-full h-full content-center'>
        <div
          className={clsx(
            !project.revarse
              ? "col-span-7 "
              : "xl:col-span-7 xl:col-start-6 col-start-5 col-span-8",
            "relative rounded w-full overflow-hidden h-[28rem] :hover:shadow-xl hover:border hover:border-accent/5 bg-dark/20 duration-300"
          )}
        >
          <Link href={project.liveLink} target='_blank'>
            <div
              className='absolute w-full h-full rounded bg-gradient-to-t from-transparent to-dark/70 transition-opacity opacity-60 hover:opacity-0 hover:cursor-pointer duration-300 z-[2]'
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

      {/* Project Details */}
      <div className='lg:absolute lg:left-0 lg:top-0 lg:py-4 lg:grid lg:grid-cols-12 w-full h-full content-center items-center'>
        <div
          className={clsx(
            !project.revarse
              ? "xl:col-span-6 xl:col-start-7 col-start-5 col-span-8 flex flex-col items-start lg:items-end space-y-3"
              : "col-span-6 flex flex-col items-start lg:items-start space-y-3"
          )}
        >
          <div
            className={clsx(
              !project.revarse ? "lg:items-end" : "lg:items-start",
              "flex flex-col space-y-1 z-10"
            )}
          >
            {!project.revarse ? (
              <h2 className='text-dark font-bold text-2xl leading-relaxed tracking-wider flex gap-2 items-center'>
                <span className='font-normal italic text-lg'>
                  ({project.completeDate})
                </span>
                <a
                  href={project.liveLink}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  {project.title}
                </a>
              </h2>
            ) : (
              <h2 className='text-dark font-bold text-2xl leading-relaxed tracking-wider flex gap-2 items-center'>
                <a
                  href={project.liveLink}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  {project.title}
                </a>
                <span className='font-normal italic text-lg'>
                  ({project.completeDate})
                </span>
              </h2>
            )}
            <span className='text-accent text-base'>{project.category}</span>
          </div>
          <div
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
              <span key={i} className='z-10 font-medium'>
                {tool}
              </span>
            ))}
          </div>
          <div className='z-10 flex space-x-5 font-semibold'>
            <a
              href={project.liveLink}
              target={"_blank"}
              rel='noreferrer'
              className='flex gap-1 items-center hover:text-accent duration-300 whitespace-nowrap'
            >
              <span>Live Demo</span>
              <FiExternalLink />
            </a>

            {project.fullStackLink && (
              <a
                href={project.fullStackLink}
                target={"_blank"}
                rel='noreferrer'
                className='flex gap-1 items-center hover:text-accent duration-300 whitespace-nowrap'
              >
                <span>Full-Stack</span>
                <FiGithub />
              </a>
            )}

            {project.frontEndLink && (
              <a
                href={project.frontEndLink}
                target={"_blank"}
                rel='noreferrer'
                className='flex gap-1 items-center hover:text-accent duration-300 whitespace-nowrap'
              >
                <span>Front-End</span>
                <FiGithub />
              </a>
            )}

            {project.backEndLink && (
              <a
                href={project.backEndLink}
                target={"_blank"}
                rel='noreferrer'
                className='flex gap-1 items-center hover:text-accent duration-300 whitespace-nowrap'
              >
                <span>Back-End</span>
                <FiGithub />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
