import { data } from "@/data/projects";
import SectionTitle from "./SectionTitle";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div
      id='projects'
      className='flex flex-col xl:space-y-28 space-y-12 w-full 2xl:px-72 lg:px-24 md:px-16 sm:px-16 py-32 px-4'
    >
      <SectionTitle title='Projects' />

      {/* PROJECTS */}
      <div className='flex flex-col mt-20'>
        <div className='flex flex-col gap-10 md:gap-20 items-center justify-center'>
          {data.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
