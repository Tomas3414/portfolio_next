import { useState } from "react";
import { FaGithubAlt } from "react-icons/fa";
import { HiRocketLaunch } from "react-icons/hi2";
import { SiLeetcode } from "react-icons/si";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

const Achievments = () => {
  const [leetcode, setLeetcode] = useState(0);
  const [projects, setProjects] = useState(0);
  const [githubContributions, setGithubContributions] = useState(0);

  const handleVisibilityChange = (isVisible) => {
    if (isVisible) {
      setLeetcode(43);
      setProjects(12);
      setGithubContributions(381);
    } else {
      setLeetcode(0);
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
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 place-items-start md:place-items-center md:place-content-evenly'>
            {/* Experience */}
            <div className='leetcode'>
              <div className='flex gap-2'>
                <div className='text-4xl lg:text-6xl font-bold'>
                  <SiLeetcode />
                </div>
                <div className='space-y-2'>
                  <span className='text-4xl lg:text-6xl font-bold flex gap-2 items-end'>
                    <CountUp start={0} end={leetcode} duration={3} />
                    <span className='text-2xl font-normal'>Leedcode</span>
                  </span>
                  <p>problems solved</p>
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
            <div className='git-contrib md:col-span-2 lg:col-span-1'>
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
