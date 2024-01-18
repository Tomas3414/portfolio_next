import { BsFillSuitHeartFill } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className='footer'>
      <p
        data-aos='fade'
        data-aos-duration='1000'
        data-aos-delay='500'
        data-aos-easing='ease-in-out'
        data-aos-anchor-placement='top center'
        data-aos-anchor='.submit'
        className='py-6 bg-dark/80 text-light/90 text-center rounded-tl-3xl rounded-tr-3xl flex justify-center items-center gap-1 whitespace-nowrap text-[0.6rem] sm:text-base'
      >
        <span>Developed with</span>
        <span className='text-rose-500'>
          <BsFillSuitHeartFill />
        </span>
        <span>by Masud Rana Shawon &copy; {new Date().getFullYear()}</span>
      </p>
    </footer>
  );
};

export default Footer;
