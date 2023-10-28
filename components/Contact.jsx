"use client";

import { useRef, useState } from "react";
import { SiLeetcode } from "react-icons/si";
import {
  BiLogoFacebook,
  BiLogoGithub,
  BiLogoLinkedin,
  BiLogoTwitter,
} from "react-icons/bi";
import { toast } from "react-hot-toast";
import emailjs from "@emailjs/browser";
import Link from "next/link";
import SectionTitle from "./SectionTitle";
import Image from "next/image";
import clsx from "clsx";

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
  });

  const formRef = useRef(null);

  /* EMAILJS INTEGRATION */
  const sendEmail = (e) => {
    e.preventDefault();

    /* EMAIL JS */
    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_ID
      )
      .then(
        () => {
          toast.custom((t) => (
            <div
              className={clsx(
                t.visible ? "animate-enter" : "animate-leave",
                "max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-dark ring-opacity-5 normal-case"
              )}
            >
              <div className='flex-1 w-0 p-4'>
                <div className='flex items-start'>
                  <div className='flex-shrink-0 pt-0.5'>
                    <Image
                      className='h-10 w-10 rounded-full'
                      src='https://res.cloudinary.com/drgxflcsb/image/upload/v1676030150/Personal%20Portfolio/masud-image3_vxmpd0.jpg'
                      alt='Profile picture of Masud Rana Shawon'
                      width={160}
                      height={80}
                      property
                    />
                  </div>
                  <div className='ml-3 flex-1'>
                    <p className='text-sm font-medium text-dark'>
                      Masud Rana Shawon
                    </p>
                    <p className='mt-1 text-sm text-gray-500'>
                      I got the message and will get back to you soon thank you.
                    </p>
                  </div>
                </div>
              </div>
              <div className='flex border-l border-gray-200'>
                <button
                  onClick={() => toast.dismiss(t.id)}
                  className='w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-accent hover:text-accent/80 focus:outline-none focus:ring-2 focus:ring-accent/80'
                >
                  Close
                </button>
              </div>
            </div>
          ));

          /* FIELD RESET */
          setFormData({
            fullName: "",
            email: "",
            message: "",
          });
        },
        () => {
          toast.error("Your message could not be sent successfully.");
        }
      );
  };

  return (
    <section id='contact' className='w-[100%] section-padding overflow-hidden'>
      <div className='wrapper'>
        <SectionTitle title='Contact me' />

        {/* CONTACT DETAILS */}
        <div className='mt-20 grid lg:grid-cols-2 gap-10 overflow-hidden'>
          <div className='contact-details'>
            <div className='overflow-hidden'>
              <p
                data-aos='slide-down'
                data-aos-duration='1000'
                data-aos-delay='1000'
                data-aos-easing='ease-in-out'
                className='text-accent tracking-wider'
              >
                Get in touch
              </p>
            </div>
            <div className='overflow-hidden'>
              <h2
                data-aos='slide-down'
                data-aos-duration='1000'
                data-aos-delay='1200'
                data-aos-easing='ease-in-out'
                className='lg:text-4xl text-3xl font-bold leading-normal'
              >
                Unlocking the Next Level of Possibilities ! Let&apos;s Connect.
              </h2>
            </div>

            <address className='not-italic space-y-8 mt-10'>
              <div className='social-network space-y-2 overflow-hidden'>
                <h4
                  data-aos='slide-right'
                  data-aos-duration='1000'
                  data-aos-delay='1300'
                  data-aos-easing='ease-in-out'
                  className='text-xl font-bold'
                >
                  Social network
                </h4>

                {/* SOCIAL */}
                <div className='social-network flex gap-5 text-2xl text-accent overflow-hidden'>
                  <div
                    data-aos='zoom-in'
                    data-aos-delay='1900'
                    data-aos-duration='1000'
                    data-aos-easing='ease-out-cubic'
                    className='github'
                  >
                    <Link
                      href='https://github.com/masudranashawon'
                      target='_blank'
                      className='text-3xl hover:text-dark duration-500'
                    >
                      <BiLogoGithub />
                    </Link>
                  </div>
                  <div
                    data-aos='zoom-in'
                    data-aos-delay='2000'
                    data-aos-duration='1000'
                    data-aos-easing='ease-out-cubic'
                    className='leetcode'
                  >
                    <Link
                      href='https://leetcode.com/masudranashawon'
                      target='_blank'
                      className='text-3xl hover:text-dark duration-500'
                    >
                      <SiLeetcode />
                    </Link>
                  </div>
                  <div
                    data-aos='zoom-in'
                    data-aos-delay='2100'
                    data-aos-duration='1000'
                    data-aos-easing='ease-out-cubic'
                    className='linkedin'
                  >
                    <Link
                      href='https://www.linkedin.com/in/masudranashawon1'
                      target='_blank'
                      className='text-3xl hover:text-dark duration-500'
                    >
                      <BiLogoLinkedin />
                    </Link>
                  </div>
                  <div
                    data-aos='zoom-in'
                    data-aos-delay='2200'
                    data-aos-duration='1000'
                    data-aos-easing='ease-out-cubic'
                    className='twitter'
                  >
                    <Link
                      href='https://twitter.com/MasudRanaShawo1'
                      target='_blank'
                      className='text-3xl hover:text-dark duration-500'
                    >
                      <BiLogoTwitter />
                    </Link>
                  </div>
                  <div
                    data-aos='zoom-in'
                    data-aos-delay='2300'
                    data-aos-duration='1000'
                    data-aos-easing='ease-out-cubic'
                    className='facebook'
                  >
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

              <div className='mail overflow-hidden'>
                <h4
                  data-aos='slide-right'
                  data-aos-duration='1000'
                  data-aos-delay='1400'
                  data-aos-easing='ease-in-out'
                  className='text-xl font-bold space-y-2'
                >
                  Talks via mail!
                </h4>
                <div className='mail overflow-hidden'>
                  <Link
                    data-aos='slide-down'
                    data-aos-duration='1000'
                    data-aos-delay='2300'
                    data-aos-easing='ease-in-out'
                    data-aos-anchor-placement='top center'
                    href='mailto:masudranashawon1@gmail.com'
                    target='_blank'
                    className='email text-dark/80 lowercase text-lg line-flow inline-block'
                  >
                    masudranashawon1@gmail.com
                  </Link>
                </div>
              </div>

              <div className='address overflow-hidden'>
                <h4
                  data-aos='slide-right'
                  data-aos-duration='1000'
                  data-aos-delay='1500'
                  data-aos-easing='ease-in-out'
                  data-aos-anchor='.email'
                  className='text-xl font-bold space-y-2'
                >
                  Address
                </h4>
                <div className='overflow-hidden'>
                  <Link
                    data-aos='slide-down'
                    data-aos-duration='1000'
                    data-aos-delay='2400'
                    data-aos-easing='ease-in-out'
                    data-aos-anchor-placement='top center'
                    data-aos-anchor='.email'
                    href='https://maps.app.goo.gl/WCRRkontEbpGqQqR8'
                    target='_blank'
                    className='text-dark/80 text-lg line-flow inline-block'
                  >
                    Dhaka, Bangladesh
                  </Link>
                </div>
              </div>
            </address>
          </div>

          {/* CONTACT FORM */}
          <div className='overflow-hidden w-full'>
            <div
              data-aos='slide-left'
              data-aos-duration='1000'
              data-aos-delay='2500'
              data-aos-easing='ease-in-out'
              className='contact-form bg-gradient-to-tl to-teal-600 from-teal-400 p-10 rounded-2xl shadow-md'
            >
              <form
                ref={formRef}
                onSubmit={sendEmail}
                className='flex flex-col gap-10 mt-8'
                autoComplete='off'
              >
                <div className='form-control w-full'>
                  <input
                    type='text'
                    name='fullname'
                    placeholder='FULL NAME'
                    required
                    value={formData.fullName}
                    onChange={(e) =>
                      setFormData({ ...formData, fullName: e.target.value })
                    }
                    className='w-full bg-transparent outline-none border-b border-light/40 text-light placeholder:text-light/80 text-xl pb-4 capitalize focus-within:border-light duration-500'
                  />
                </div>
                <div className='form-control w-full'>
                  <input
                    type='email'
                    name='email'
                    placeholder='EMAIL ADDRESS'
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className='w-full bg-transparent outline-none border-b border-light/40 text-light placeholder:text-light/80 text-xl pb-4 focus-within:border-light duration-500'
                  />
                </div>
                <div className='form-control w-full'>
                  <textarea
                    name='message'
                    rows='4'
                    placeholder='MESSAGE'
                    required
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className='w-full bg-transparent outline-none border-b border-light/40 text-light placeholder:text-light/80 text-xl pb-4 resize-none focus-within:border-light duration-500'
                  ></textarea>
                </div>
                <div
                  data-aos='zoom-in'
                  data-aos-duration='1000'
                  data-aos-delay='2600'
                  data-aos-easing='ease-out-cubic'
                  data-aos-anchor-placement='top center'
                  className='flex items-center justify-center'
                >
                  <button
                    type='submit'
                    className='submit px-5 py-3 rounded-full text-light text-xl lg:text-2xl whitespace-nowrap bg-dark/70 hover:bg-dark/80 hover:shadow-lg duration-500 uppercase'
                  >
                    Share Your Words
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
