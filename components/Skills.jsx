import { useState } from "react";
import { data } from "@/data/skills";
import SectionTitle from "./SectionTitle";
import SkillCard from "./SkillCard";
import clsx from "clsx";

const Skills = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div className='wrapper section-padding' id='skills'>
      <SectionTitle title='My Skills' />

      {/* SKILLS TABS */}
      <div className='flex justify-center mt-20 overflow-hidden'>
        {data.map((tab, index) => (
          <button
            data-aos='fade-down'
            data-aos-duration='1000'
            data-aos-delay='1000'
            data-aos-easing='ease-in-out'
            key={index}
            className={clsx(
              index === activeTab
                ? "bg-accent text-white"
                : "bg-white text-dark/90",
              index === 0 && "rounded-bl-2xl",
              index === data.length - 1 && "rounded-tr-2xl",
              "flex h-[2.8rem] w-[5.8rem] sm:h-[3rem] sm:w-[10rem] items-center justify-center whitespace-nowrap border px-6 py-3 text-center text-sm sm:text-lg font-semibold tracking-widest"
            )}
            onClick={() => handleTabClick(index)}
          >
            {tab.name}
          </button>
        ))}
      </div>

      {/* ACTIVE TAB */}
      <div className='lg:px-14 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-5 mt-10'>
        {data[activeTab].content.map((skill, i) => (
          <SkillCard key={i} skill={skill} />
        ))}
      </div>
    </div>
  );
};

export default Skills;
