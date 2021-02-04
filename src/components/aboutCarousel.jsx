import React, { Component } from 'react';
import { Carousel } from 'antd';
import one from '../images/1.jpg';
import two from '../images/2.jpg';
import three from '../images/3.jpg';
import four from '../images/4.jpg';

class AboutCarousel extends Component {
  render() {
    return (
      <section className='my-8'>
        <div className='max-w-sm mx-auto max-h-screen mb-5'>
          <Carousel dotPosition='right' effect='fade' autoplay>
            <div>
              <h3>
                <img src={one} alt='img' className='rounded-lg' />
              </h3>
            </div>
            <div>
              <h3>
                <img src={two} alt='img' className='rounded-lg' />
              </h3>
            </div>
            <div>
              <h3>
                <img src={three} alt='img' className='rounded-lg' />
              </h3>
            </div>
            <div>
              <h3>
                <img src={four} alt='img' className='rounded-lg' />
              </h3>
            </div>
          </Carousel>
        </div>
      </section>
    );
  }
}

export default AboutCarousel;
