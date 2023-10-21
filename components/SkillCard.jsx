const SkillCard = ({ skill }) => {
  return (
    <div
      key={skill.name}
      className='flex flex-col items-center justify-center bg-white shadow-lg rounded-lg p-4 hover:scale-110 duration-300 relative group text-accent cursor-pointer'
    >
      <div className='text-6xl text-accent'>{skill.icon}</div>
      <h2 className='text-xl font-medium text-gray-700 mt-2'>{skill.name}</h2>
      <div className='absolute inset-0 py-6 px-12 bg-accent text-white motion-safe:transition-[clip-path] motion-safe:duration-500 ease-in-out [clip-path:circle(0%_at_100%_0%)] group-hover:[clip-path:circle(140%_at_100%_0%)] flex flex-col items-center justify-center p-4 rounded-lg'>
        <div className='text-6xl text-light'>{skill.icon}</div>
        <h2 className='text-xl font-medium text-gray-700 mt-2'>{skill.name}</h2>
      </div>
    </div>
  );
};

export default SkillCard;
