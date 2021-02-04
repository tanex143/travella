import React from 'react';
import AboutCarousel from './aboutCarousel';

const About = () => {
  return (
    <section id='about'>
      <div className='bg-gradient-to-r from-blue-500 relative z-10'>
        <div className='container mx-auto pt-10'>
          <div className='max-w-md mx-auto mb-2'>
            <h1 className='text-center font-bold md:text-5xl text-4xl'>
              About Us
            </h1>
            <h1 className='text-center text-xl tracking-widest'>
              Travella Group of Companies
            </h1>
          </div>
          <div className='grid lg:grid-cols-2 grid-cols-1'>
            <div className='font-semibold font-lg mt-5 max-w-sm lg:max-w-md md:max-w-lg mx-auto'>
              <h1 className='text-3xl'>What We Do</h1>
              <p className='mb-3'>
                Travella Group of Companies is a company that helps you to
                travel around the world with hustle free. We set the destination
                to our valued customer and contact our business partners to
                cater them and have a tour guide to the area that has many
                beauty spots and a good sightseeing and relaxing of your mind.
              </p>
              <p className='mb-5'>
                We believe that traveling around the world shouldn’t be hard:
                it’s actually something everyone should be able to do at least
                once in their lives. Whether you choose to spend a few years or
                just a couple months traveling this beautiful planet, it’s
                important to see what’s out there. It’s up to you to make the
                dream come true and take the first step. Launch{' '}
                <span className='font-bold text-blue-800 cursor-pointer'>
                  Travella
                </span>{' '}
                to piece together and price your ideal route. Not sure where to
                start? You can always call one of our travel consultants and get
                some complimentary advice!
              </p>
            </div>
            <AboutCarousel />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
