import { useState } from "react";
import CountUp from "react-countup";
import { FaGithubAlt, FaUserGraduate } from "react-icons/fa";
import { HiRocketLaunch } from "react-icons/hi2";
import { SiLeetcode } from "react-icons/si";
import VisibilitySensor from "react-visibility-sensor";

const Achievments = () => {
  const [experience, setExperience] = useState(0);
  const [projects, setProjects] = useState(0);
  const [githubContributions, setGithubContributions] = useState(0);
  const [leetcode, setLeetcode] = useState(0);

  const handleVisibilityChange = (isVisible) => {
    if (isVisible) {
      setExperience(1);
      setLeetcode(43);
      setProjects(12);
      setGithubContributions(381);
    } else {
      setExperience(0);
      setProjects(0);
      setGithubContributions(0);
      setLeetcode(0);
    }
  };

  return (
    <section className="achievments text-white">
      <div
        data-aos="zoom-in"
        data-aos-duration="1000"
        data-aos-easing="ease-out-cubic"
        className="wrapper bg-accent section-padding rounded-3xl"
      >
        {/* WHEN SECTION IS VISIBLE */}
        <VisibilitySensor onChange={handleVisibilityChange}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 place-items-start md:place-items-center md:place-content-evenly">
            {/* Experience */}
            <div className="experience">
              <div className="flex gap-2">
                <div className="text-4xl lg:text-6xl font-bold">
                  <FaUserGraduate />
                </div>
                <div className="space-y-2">
                  <span className="text-4xl lg:text-6xl font-bold flex gap-2 items-end">
                    <CountUp start={0} end={experience} duration={3} />+
                    <span className="text-2xl font-normal">Year</span>
                  </span>
                  <p>Professional Experience</p>
                </div>
              </div>
            </div>

            {/* Successful Projects */}
            <div className="projects">
              <div className="flex gap-2">
                <div className="text-4xl lg:text-6xl font-bold">
                  <HiRocketLaunch />
                </div>
                <div className="space-y-2">
                  <span className="text-4xl lg:text-6xl font-bold">
                    <CountUp start={0} end={projects} duration={3} />+
                  </span>
                  <p className="text-center">Successful Projects</p>
                </div>
              </div>
            </div>

            {/* Github Contributions */}
            <div className="git-contrib">
              <div className="flex gap-2">
                <div className="text-4xl lg:text-6xl font-bold">
                  <FaGithubAlt />
                </div>
                <div className="space-y-2">
                  <span className="text-4xl lg:text-6xl font-bold">
                    <CountUp start={0} end={githubContributions} duration={3} />
                    +
                  </span>
                  <p className="text-center">Github Contributions</p>
                </div>
              </div>
            </div>

            {/* Leetcode Contributions */}
            <div className="leetcode lg:col-span-3 xl:col-span-1">
              <div className="flex gap-2">
                <div className="text-4xl lg:text-6xl font-bold">
                  <SiLeetcode />
                </div>
                <div className="space-y-2">
                  <span className="text-4xl lg:text-6xl font-bold flex gap-2 items-end">
                    <CountUp start={0} end={leetcode} duration={3} />
                    <span className="text-2xl font-normal">Leedcode</span>
                  </span>
                  <p>problems solved</p>
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
