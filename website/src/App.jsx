import React from 'react';
import { Toaster } from 'sonner';
import Header from './components/header';
import Hero from './components/hero';
import Gallery from './components/gallery';
import VenueSpaces from './components/venue';
import Services from './components/services';
import About from './components/about';
import Contact from './components/contact';
import Footer from './components/footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <VenueSpaces />
      <Gallery />
      <Services />
      <About />
      <Contact />
      <Footer />
      <Toaster 
        position="top-right"
        toastOptions={{
          style: {
            background: '#f59e0b',
            color: 'white',
            border: 'none',
          },
        }}
      />
    </div>
  );
}

export default App;
