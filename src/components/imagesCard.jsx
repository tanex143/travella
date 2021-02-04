import React, { useState } from 'react';
import { Modal } from 'antd';

const ImagesCard = ({ image }) => {
  const tags = image.tags.split(',');
  const [visible, setVisible] = useState(false);
  const [imageTarget, setImageTarget] = useState('');

  const showModal = (e) => {
    setVisible(true);
    setImageTarget(image.webformatURL);
  };

  return (
    <>
      <div className='max-w-sm rounded overflow-hidden shadow-lg'>
        <img
          alt=''
          src={image.webformatURL}
          className='w-full cursor-pointer'
          onClick={(e) => showModal(image.id)}
        />
        <div className='px-6 py-4'>
          <div className='font-bold text-blue-500 md:text-xl mb-2 sm:text-sm'>
            Photo by {image.user}
          </div>
          <ul>
            <li>
              <strong>Views: </strong>
              {image.views}
            </li>
            <li>
              <strong>Downloads: </strong>
              {image.downloads}
            </li>
            <li>
              <strong>People Visted: </strong>
              {image.likes}
            </li>
          </ul>
        </div>
        <div className='px-6 py-4'>
          {tags.map((tag, index) => (
            <span
              key={index}
              className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2'
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>

      <Modal
        className='ant-modal-body'
        visible={visible}
        onCancel={() => setVisible(false)}
        footer={null}
        closable={false}
      >
        <img src={imageTarget} alt='' className='w-full' />
      </Modal>
    </>
  );
};

export default ImagesCard;
