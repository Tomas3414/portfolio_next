import clsx from "clsx";
import Image from "next/image";
import toast from "react-hot-toast";

const Notify = ({ t }) => {
  return (
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
            <p className='text-sm font-medium text-dark'>Masud Rana Shawon</p>
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
  );
};

export default Notify;
