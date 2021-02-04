import React from 'react';
import { Button, Input } from 'antd';
import {
  AntDesignOutlined,
  FacebookFilled,
  InstagramFilled,
  YoutubeFilled,
  TwitterCircleFilled,
} from '@ant-design/icons';

const ContactUs = () => {
  return (
    <section id='contact'>
      <div className='bg-gray-300 relative z-10 py-8'>
        <div className='grid md:grid-cols-2 grid-cols-1 container mx-auto sm:max-w-lg md:max-w-3xl lg:max-w-4xl xl:max-w-5xl max-w-sm'>
          <div>
            <h1 className='text-4xl text-blue-500'>Inquiry</h1>
            <h1 className='text-md text-black'>
              Hard to choose where to go next?
            </h1>
            <h1 className='text-md text-black'>
              Message us for recommendations and more details.
            </h1>
            <form>
              <Input type='primary' placeholder='Name' className='h-10 mb-3' />
              <Input placeholder='Email' className='h-10 mb-3' />
              <Input.TextArea
                placeholder='Message...'
                rows={5}
                className='mb-3'
              />
              <Button type='primary' className='w-full mb-3'>
                Submit
              </Button>
            </form>
          </div>
          <div className='text-center align-middle py-24'>
            <h1 className='text-5xl font-extrabold tracking-widest mb-3 font-perma-marker md:ml-10 lg:ml-10 xl:ml-0'>
              Travella <AntDesignOutlined className='align-middle -mt-5' />
            </h1>
            <div className='flex rounded-lg justify-center md:ml-10 lg:ml-10 xl:ml-0'>
              <FacebookFilled className='text-3xl text-blue-400 hover:text-black cursor-pointer mx-3' />
              <InstagramFilled className='text-3xl text-blue-400 hover:text-black cursor-pointer mx-3' />
              <YoutubeFilled className='text-3xl text-blue-400 hover:text-black cursor-pointer mx-3' />
              <TwitterCircleFilled className='text-3xl text-blue-400 hover:text-black cursor-pointer mx-3' />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
