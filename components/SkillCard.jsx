const SkillCard = ({ skill }) => {
  return (
    <div
      data-aos='zoom-in'
      data-aos-duration='1000'
      data-aos-easing='ease-out-cubic'
      className='flex flex-col items-center justify-center bg-white shadow-lg rounded-lg p-5 hover:scale-110 duration-500 relative group text-accent cursor-pointer gap-2'
    >
      <div className='md:text-6xl text-3xl text-accent'>{skill.icon}</div>
      <h2 className='md:text-lg text-xs font-semibold text-dark/80 mt-2 whitespace-nowrap'>
        {skill.name}
      </h2>
      <div className='absolute inset-0 bg-accent text-white motion-safe:transition-[clip-path] motion-safe:duration-500 ease-in-out [clip-path:circle(0%_at_100%_0%)] group-hover:[clip-path:circle(140%_at_100%_0%)] flex flex-col items-center justify-center p-5 rounded-lg gap-2'>
        <div className='md:text-6xl text-3xl text-light'>{skill.icon}</div>
        <h2 className='md:text-lg text-xs font-semibold text-dark/90 mt-2 whitespace-nowrap'>
          {skill.name}
        </h2>
      </div>
    </div>
  );
};

export default SkillCard;
