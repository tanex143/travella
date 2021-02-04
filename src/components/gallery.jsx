import { Empty } from 'antd';
import React, { useState, useEffect } from 'react';
import ImagesCard from './imagesCard';
import ImagesSearch from './imagesSearch';

const Gallery = () => {
  const API_KEY = '18729292-56b561a9f64cd02623ba99fca';
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchItem, setSearchItem] = useState('islands and mountains');

  useEffect(() => {
    fetch(
      `https://pixabay.com/api/?key=${API_KEY}&q=${searchItem}&image_type=photo&pretty=true`
    )
      .then((res) => res.json())
      .then((data) => {
        setImages(data.hits);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, [searchItem]);

  return (
    <>
      <section
        id='gallery'
        className='bg-gray-200 z-10 py-10 relative lg:mt-40 md:mt-20 mt-10'
      >
        <div className='max-w-md mx-auto font-bold lg:text-5xl text-4xl mb-2'>
          <h1 className='text-center'>Photo Gallery</h1>
        </div>
        <div className='max-w-lg mx-auto font-semibold lg:text-2xl md:text-xl text-lg'>
          <p className='text-center text-blue-500'>
            Check the beautiful spots to see where to go first and next
            destination.
          </p>
        </div>
        <ImagesSearch searchText={(text) => setSearchItem(text)} />

        <div className='container mx-auto'>
          {!isLoading && images.length === 0 && (
            <Empty />
            // <h1 className='text-6xl text-center mx-auto mt-32'>
            //   No Images Found
            // </h1>
          )}

          {isLoading ? (
            <h1 className='text-6xl text-center mx-auto mt-32'>
              Loading . . .
            </h1>
          ) : (
            <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 justify-items-center'>
              {images.map((image) => (
                <ImagesCard key={image.id} image={image} />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Gallery;
