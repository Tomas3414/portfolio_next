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
          <h2 className='lg:text-4xl text-3xl font-bold leading-normal'>
            Unlocking the Next Level of Possibilities ! Let&apos;s Connect.
          </h2>

          <address className='not-italic space-y-8 mt-10'>
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
              <h4 className='text-xl font-bold space-y-2'>Talks via mail!</h4>
              <Link
                href='mailto:masudranashawon1@gmail.com'
                target='_blank'
                className='text-dark/80 lowercase text-lg line-flow'
              >
                masudranashawon1@gmail.com
              </Link>
            </div>

            <div className='address'>
              <h4 className='text-xl font-bold space-y-2'>Address</h4>
              <Link
                href='https://maps.app.goo.gl/WCRRkontEbpGqQqR8'
                target='_blank'
                className='text-dark/80 text-lg line-flow'
              >
                Dhaka, Bangladesh
              </Link>
            </div>
          </address>
        </div>

        {/* CONTACT FORM */}
        <div className='contact-form bg-gradient-to-tl to-teal-600 from-teal-400 p-10 rounded-2xl shadow-md'>
          <form className='flex flex-col pt-10 gap-10' autoComplete='off'>
            <div className='form-control w-full'>
              <input
                type='text'
                name='fullname'
                placeholder='FULL NAME'
                required
                className='w-full bg-transparent outline-none border-b border-light/40 text-light placeholder:text-light/80 text-xl pb-4 capitalize focus-within:border-light duration-500'
              />
            </div>
            <div className='form-control w-full'>
              <input
                type='email'
                name='email'
                placeholder='EMAIL ADDRESS'
                required
                className='w-full bg-transparent outline-none border-b border-light/40 text-light placeholder:text-light/80 text-xl pb-4 focus-within:border-light duration-500'
              />
            </div>
            <div className='form-control w-full'>
              <textarea
                name='message'
                rows='4'
                placeholder='MESSAGE'
                required
                className='w-full bg-transparent outline-none border-b border-light/40 text-light placeholder:text-light/80 text-xl pb-4 resize-none focus-within:border-light duration-500'
              ></textarea>
            </div>
            <div className='flex items-center justify-center'>
              <button
                type='submit'
                className='px-5 py-3 rounded-full text-light text-xl lg:text-2xl whitespace-nowrap bg-dark/70 hover:bg-dark/80 hover:shadow-lg duration-500 uppercase'
              >
                Share Your Words
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
