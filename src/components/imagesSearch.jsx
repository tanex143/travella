import React, { useState } from 'react';
import { Button, Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

const ImagesSearch = ({ searchText }) => {
  const [text, setText] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    searchText(text);
  };
  return (
    <div className='max-w-sm rounded overflow-hidden my-10 mx-auto'>
      <form className='w-full max-w-sm' onSubmit={onSubmit}>
        <div className='flex items-center py-2'>
          <Input
            type='primary'
            placeholder='Search...'
            size='large'
            className='px-2'
            prefix={<SearchOutlined className='text-blue-500' />}
            onChange={(e) => setText(e.target.value)}
          />
          <Button
            type='primary'
            size='large'
            htmlType='submit'
            className='border-l-0'
          >
            Search
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ImagesSearch;
