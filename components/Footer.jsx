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
        className='py-6 bg-dark/80 text-light/80 text-center rounded-tl-3xl rounded-tr-3xl'
      >
        Developed with love <span className='text-rose-400'>&#10084;</span> by
        Masud Rana Shawon &copy; {new Date().getFullYear()}
      </p>
    </footer>
  );
};

export default Footer;
