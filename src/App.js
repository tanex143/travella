import React, { Component } from 'react';
import './App.css';
import NavBar from './components/navBar';
import Home from './components/home';
import Gallery from './components/gallery';
import About from './components/about';
import ContactUs from './components/contactUs';
import Footer from './components/footer';
import ScrollToTop from './components/scrollToTop';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <main id='home-section'>
          <NavBar />
          <Home />
          <Gallery />
          <About />
          <ContactUs />
          <Footer />
          <ScrollToTop />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
