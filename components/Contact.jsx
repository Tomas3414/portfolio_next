import SectionTitle from "./SectionTitle";

const Contact = () => {
  return (
    <section id='contact' className='wrapper section-padding'>
      <SectionTitle title='Contact me' />

      <div className='mt-20 grid lg:grid-cols-2 gap-10'>
        <div className='contact-details'>
          <span className='text-accent font-medium tracking-wider'>
            Get in touch!
          </span>
          <h2 className='text-4xl font-bold leading-normal'>
            Unlocking the Next Level of Possibilities ! Let&apos;s Connect.
          </h2>
          <address className='not-italic space-y-5 mt-5'>
            <div className='mail'>
              <h4 className='text-xl font-bold'>Mail</h4>
              <a
                href='mailto:masudranashawon1@gmail.com'
                className='text-dark/80 lowercase text-lg'
              >
                masudranashawon1@gmail.com
              </a>
            </div>
            <div className='address'>
              <h4 className='text-xl font-bold'>Address</h4>
              <p className='text-dark/80 text-lg'>Dhaka, Bangladesh</p>
            </div>
          </address>
        </div>
        <div className='contact-form bg-accent p-10 rounded-2xl'>
          <form className='flex flex-col'>
            <input
              type='text'
              name='name'
              placeholder='Name'
              className='bg-transparent outline-none border-b border-light/40 text-light placeholder:text-light text-xl pb-5'
            />
            <input
              type='text'
              name='name'
              placeholder='Email'
              className='bg-transparent'
            />
            <textarea
              name='message'
              cols='30'
              rows='10'
              className='bg-transparent'
              placeholder='Message'
            ></textarea>
            <button type='submit'>Send me message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
