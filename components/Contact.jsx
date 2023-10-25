"use client";

import { SiLeetcode } from "react-icons/si";
import {
  BiLogoFacebook,
  BiLogoGithub,
  BiLogoLinkedin,
  BiLogoTwitter,
} from "react-icons/bi";
import Link from "next/link";
import SectionTitle from "./SectionTitle";

const Contact = () => {
  return (
    <section id='contact' className='wrapper section-padding'>
      <SectionTitle title='Contact me' />

      <div className='mt-20 grid lg:grid-cols-2 gap-10'>
        {/* CONTACT DETAILS */}
        <div className='contact-details'>
          <p className='text-accent tracking-wider'>Get in touch</p>
          <h2 className='text-4xl font-bold leading-normal'>
            Unlocking the Next Level of Possibilities ! Let&apos;s Connect.
          </h2>

          <address className='not-italic space-y-5 mt-5'>
            <div className='social-network space-y-2'>
              <h4 className='text-xl font-bold'>Social network</h4>

              {/* SOCIAL */}
              <div className='social-network flex gap-5 text-2xl text-accent'>
                <div className='github'>
                  <Link
                    href='https://github.com/masudranashawon'
                    target='_blank'
                    className='text-3xl hover:text-dark duration-500'
                  >
                    <BiLogoGithub />
                  </Link>
                </div>
                <div className='leetcode'>
                  <Link
                    href='https://leetcode.com/masudranashawon'
                    target='_blank'
                    className='text-3xl hover:text-dark duration-500'
                  >
                    <SiLeetcode />
                  </Link>
                </div>
                <div className='linkedin'>
                  <Link
                    href='https://www.linkedin.com/in/masudranashawon1'
                    target='_blank'
                    className='text-3xl hover:text-dark duration-500'
                  >
                    <BiLogoLinkedin />
                  </Link>
                </div>
                <div className='twitter'>
                  <Link
                    href='https://twitter.com/MasudRanaShawo1'
                    target='_blank'
                    className='text-3xl hover:text-dark duration-500'
                  >
                    <BiLogoTwitter />
                  </Link>
                </div>
                <div className='facebook'>
                  <Link
                    href='https://www.facebook.com/masudranashawon786'
                    target='_blank'
                    className='text-3xl hover:text-dark duration-500'
                  >
                    <BiLogoFacebook />
                  </Link>
                </div>
              </div>
            </div>

            <div className='mail'>
              <h4 className='text-xl font-bold'>Mail</h4>
              <Link
                href='mailto:masudranashawon1@gmail.com'
                className='text-dark/80 lowercase text-lg line-flow'
              >
                masudranashawon1@gmail.com
              </Link>
            </div>

            <div className='address'>
              <h4 className='text-xl font-bold'>Address</h4>
              <p className='text-dark/80 text-lg'>Dhaka, Bangladesh</p>
            </div>
          </address>
        </div>

        {/* CONTACT FORM */}
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
