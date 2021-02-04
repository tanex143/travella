import React from 'react';
import { BackTop } from 'antd';
import { ArrowUpOutlined } from '@ant-design/icons';

const ScrollToTop = () => {
  return (
    <BackTop>
      <div className='bg-blue-400 hover:bg-blue-600 font-semibold rounded py-3 text-center'>
        <ArrowUpOutlined className='text-3xl' />
      </div>
    </BackTop>
  );
};

export default ScrollToTop;
