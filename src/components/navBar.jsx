import React, { useState } from 'react';
import {
  AntDesignOutlined,
  MenuOutlined,
  CloseOutlined,
} from '@ant-design/icons';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNav = (e) => {
    e.preventDefault();

    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav
        className={
          isOpen ? 'relative py-2 z-10 bg-blue-500' : 'relative py-2 z-10'
        }
      >
        <div className='container mx-auto flex justify-between'>
          <h1 className='md:text-3xl xl:text-4xl text-2xl font-extrabold tracking-widest font-perma-marker cursor-pointer lg:ml-4'>
            Travella <AntDesignOutlined className='align-middle -mt-1' />
          </h1>
          <div className='hidden lg:flex xl:text-2xl lg:text-xl md:text-lg mt-1 uppercase lg:mr-4'>
            <h1 className='mx-3 font-semibold cursor-pointer '>
              <a href='#home' className='hover:text-gray-200'>
                Home
              </a>
            </h1>
            <h1 className='mx-3 font-semibold cursor-pointer'>
              <a href='#gallery' className='hover:text-gray-200'>
                Gallery
              </a>
            </h1>
            <h1 className='mx-3 font-semibold cursor-pointer'>
              <a href='#about' className='hover:text-gray-200'>
                About
              </a>
            </h1>
            <h1 className='mx-3 font-semibold cursor-pointer'>
              <a href='#contact' className='hover:text-gray-200'>
                Contact Us
              </a>
            </h1>
          </div>
          <div
            className='top-0 mr-5 cursor-pointer lg:hidden text-2xl hover:text-gray-200'
            onClick={handleNav}
          >
            {isOpen ? <CloseOutlined /> : <MenuOutlined />}
          </div>
        </div>

        {/* medium screen */}
        <div
          className={
            isOpen
              ? 'transition duration-700 ease-in md:block w-full pb-3 xl:text-2xl lg:text-xl md:text-lg text-2xl mt-2 uppercase absolute bg-blue-500 z-20'
              : 'transition duration-700 ease-linear hidden'
          }
        >
          <h1 className='mx-3 font-extrabold cursor-pointer hover:text-gray-200 tracking-wider'>
            <a href='#home' className='hover:text-gray-200'>
              Home
            </a>
          </h1>
          <h1 className='mx-3 font-extrabold cursor-pointer hover:text-gray-200 tracking-wider'>
            <a href='#gallery' className='hover:text-gray-200'>
              Gallery
            </a>
          </h1>
          <h1 className='mx-3 font-extrabold cursor-pointer hover:text-gray-200 tracking-wider'>
            <a href='#about' className='hover:text-gray-200'>
              About
            </a>
          </h1>
          <h1 className='mx-3 font-extrabold cursor-pointer hover:text-gray-200 tracking-wider'>
            <a href='#contact' className='hover:text-gray-200'>
              Contact Us
            </a>
          </h1>
          <h1 className='mx-3 font-extrabold cursor-pointer hover:text-gray-200 tracking-wider text-green-400'>
            Sign Up
          </h1>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
