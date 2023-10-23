import { data } from "@/data/projects";
import SectionTitle from "./SectionTitle";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div id='projects' className='wrapper flex flex-col section-padding w-full'>
      <SectionTitle title='Projects' />

      {/* PROJECTS */}
      <div className='flex flex-col mt-20 lg:px-10'>
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
