import React from 'react';
import { AntDesignOutlined } from '@ant-design/icons';

const Footer = () => {
  return (
    <div className='bg-gray-900 relative z-10 py-5'>
      <div className='container mx-auto'>
        <h1 className='text-center text-white md:text-2xl text-lg mb-2 max-w-sm sm:max-w-none mx-auto'>
          Join the adventure newsletter to receive our best travel deals
        </h1>
        <div className='flex justify-evenly'>
          <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1'>
            <div>
              <h1 className='text-white md:text-2xl text-lg font-semibold'>
                About Us
              </h1>
              <h1 className='text-white cursor-pointer hover:text-blue-500'>
                How it works
              </h1>
              <h1 className='text-white cursor-pointer hover:text-blue-500'>
                Careers
              </h1>
              <h1 className='text-white cursor-pointer hover:text-blue-500'>
                Investors
              </h1>
            </div>
            <div>
              <h1 className='text-white md:text-2xl text-lg font-semibold sm:mt-0 mt-2'>
                Videos
              </h1>
              <h1 className='text-white cursor-pointer hover:text-blue-500'>
                Ambassadors
              </h1>
              <h1 className='text-white cursor-pointer hover:text-blue-500'>
                Agency
              </h1>
              <h1 className='text-white cursor-pointer hover:text-blue-500'>
                Influencer
              </h1>
            </div>
            <div className='md:mt-0 mt-3'>
              <h1 className='md:text-4xl text-3xl font-extrabold tracking-widest md:mb-3 text-white cursor-pointer font-perma-marker'>
                Travella <AntDesignOutlined className='align-middle -mt-5' />
              </h1>
              <h1 className='text-white md:text-md'>
                &copy; Alright Reserved October 2020
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
