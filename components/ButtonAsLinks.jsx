import Link from "next/link";

const ButtonAsLink = ({ href, target, placeholder }) => {
  return (
    <Link
      href={href}
      target={target}
      className='inline-block bg-accent px-5 py-3 rounded-full text-light hover:bg-dark hover:shadow-lg duration-500 whitespace-nowrap'
    >
      {placeholder}
    </Link>
  );
};

export default ButtonAsLink;
