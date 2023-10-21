import { useState } from "react";
import { data } from "@/data/skills";
import SectionTitle from "./SectionTitle";
import SkillCard from "./SkillCard";

const Skills = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div className='wrapper section-padding' id='skills'>
      <SectionTitle title='Skills' />

      {/* Render the tabs as buttons */}
      <div className='flex justify-center mt-20'>
        {data.map((tab, index) => (
          <button
            key={index}
            className={`px-4 py-2 mx-2 rounded-lg ${
              index === activeTab
                ? "bg-accent text-white"
                : "bg-white text-gray-700"
            }`}
            onClick={() => handleTabClick(index)}
          >
            {tab.name}
          </button>
        ))}
      </div>

      {/* Render the content of the active tab */}
      <div className='grid grid-cols-2 md:grid-cols-6 gap-4 mt-10'>
        {data[activeTab].content.map((skill, i) => (
          <SkillCard key={i} skill={skill} />
        ))}
      </div>
    </div>
  );
};

export default Skills;
