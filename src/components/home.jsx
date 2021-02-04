import React from 'react';
import { Button, Input } from 'antd';
import {
  SendOutlined,
  EyeInvisibleOutlined,
  EyeTwoTone,
} from '@ant-design/icons';

const Home = () => {
  return (
    <>
      <header
        id='home'
        className='container mx-auto relative lg:mt-20 md:mt-10 mt-8'
      >
        <div className='grid grid-cols-1 lg:grid-cols-2'>
          <div className='hidden xl:max-w-md lg:max-w-sm lg:ml-20 xl:ml-0 lg:block rounded overflow-hidden relative shadow-lg bg-blue-400 opacity-75 z-10'>
            <div className='container'>
              <p className='lg:text-xl text-2xl text-black font-bold text-center mt-3'>
                Don't get left behind
              </p>
              <p className='lg:text-xl text-2xl text-black font-bold text-center mt-1 uppercase mb-3'>
                Be a member now!
              </p>
            </div>
            <div className='lg:max-w-xs xl:max-w-sm mx-auto mb-3'>
              <Input placeholder='Name' className='rounded' />
            </div>
            <div className='mx-auto lg:max-w-xs xl:max-w-sm mb-3'>
              <Input type='email' placeholder='Email' className='rounded' />
            </div>
            <div className='lg:max-w-xs xl:max-w-sm mx-auto mb-3'>
              <Input.Password
                placeholder='Password'
                iconRender={(visible) =>
                  visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                }
                className='rounded'
              />
            </div>
            <div className='lg:max-w-xs xl:max-w-sm mx-auto mb-3'>
              <Input.Password
                placeholder='Confirm Password'
                iconRender={(visible) =>
                  visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                }
                className='rounded'
              />
            </div>
            <div className='text-center'>
              <Button type='primary' className='w-full xl:max-w-sm lg:max-w-xs'>
                Register
              </Button>
            </div>
            <div className='mx-auto max-w-sm mb-1'>
              <h1 className='text-md text-black font-semibold text-center'>
                Already registered?
              </h1>
            </div>
            <div className='text-center mb-5'>
              <Button type='primary' className='w-full xl:max-w-sm lg:max-w-xs'>
                Login
              </Button>
            </div>
          </div>
          <div className='text-white xl:max-w-xl lg:max-w-sm md:max-w-lg sm:max-w-sm max-w-xs mx-auto'>
            <p className='xl:text-5xl lg:text-4xl md:text-4xl sm:text-2xl text-lg uppercase'>
              <strong className='xl:text-6xl lg:text-5xl md:text-5xl sm:text-3xl text-2xl font-perma-marker'>
                Travel
              </strong>{' '}
              around the world now for a low cost and hustle free...
            </p>
            <button className='bg-blue-500 lg:py-3 lg:px-4 py-2 px-2 md:text-xs rounded cursor-pointer hover:bg-blue-600 hover:shadow-lg font-semibold focus:outline-none'>
              Get Started
              <SendOutlined className='ml-3 transform -rotate-45 align-middle -mt-2' />
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Home;
