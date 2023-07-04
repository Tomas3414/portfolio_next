import Link from "next/link";

const ButtonAsLink = ({ href, target, placeholder }) => {
  return (
    <Link
      href={href}
      target={target}
      className='bg-dark p-5 rounded-full text-light hover:bg-accent duration-300'
    >
      {placeholder}
    </Link>
  );
};

export default ButtonAsLink;
