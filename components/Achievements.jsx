import { useState } from "react";
import { FaCalendarAlt, FaGithubAlt } from "react-icons/fa";
import { HiRocketLaunch } from "react-icons/hi2";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

const Achievments = () => {
  const [experience, setExperience] = useState(0);
  const [projects, setProjects] = useState(0);
  const [githubContributions, setGithubContributions] = useState(0);

  const handleVisibilityChange = (isVisible) => {
    if (isVisible) {
      setExperience(1.5);
      setProjects(12);
      setGithubContributions(381);
    } else {
      setExperience(0);
      setProjects(0);
      setGithubContributions(0);
    }
  };

  return (
    <section className='achievments text-white'>
      <div
        data-aos='zoom-in'
        data-aos-duration='1000'
        data-aos-easing='ease-out-cubic'
        className='wrapper bg-accent section-padding rounded-3xl'
      >
        {/* WHEN SECTION IS VISIBLE */}
        <VisibilitySensor onChange={handleVisibilityChange}>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8 place-items-center place-content-center'>
            {/* Experience */}
            <div className='experience'>
              <div className='flex gap-2'>
                <div className='text-4xl lg:text-6xl font-bold'>
                  <FaCalendarAlt />
                </div>
                <div className='space-y-2'>
                  <span className='text-4xl lg:text-6xl font-bold'>
                    <CountUp
                      start={0}
                      end={experience}
                      duration={3}
                      decimals={1}
                    />
                    +
                  </span>
                  <p className='text-center'>Years Experience</p>
                </div>
              </div>
            </div>

            {/* Successful Projects */}
            <div className='projects'>
              <div className='flex gap-2'>
                <div className='text-4xl lg:text-6xl font-bold'>
                  <HiRocketLaunch />
                </div>
                <div className='space-y-2'>
                  <span className='text-4xl lg:text-6xl font-bold'>
                    <CountUp start={0} end={projects} duration={3} />+
                  </span>
                  <p className='text-center'>Successful Projects</p>
                </div>
              </div>
            </div>

            {/* Github Contributions */}
            <div className='git-contrib'>
              <div className='flex gap-2'>
                <div className='text-4xl lg:text-6xl font-bold'>
                  <FaGithubAlt />
                </div>
                <div className='space-y-2'>
                  <span className='text-4xl lg:text-6xl font-bold'>
                    <CountUp start={0} end={githubContributions} duration={3} />
                    +
                  </span>
                  <p className='text-center'>Github Contributions</p>
                </div>
              </div>
            </div>
          </div>
        </VisibilitySensor>
      </div>
    </section>
  );
};

export default Achievments;
