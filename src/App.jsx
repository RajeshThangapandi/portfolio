import { BrowserRouter } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { About, Contact, Experience, Gallery, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";


const App = () => {

  const [scrolled, setScrolled] = useState(false);
  const [scrollValue, setScrollValue] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const scrollVhValue = (scrollTop / windowHeight) * 100;
      setScrollValue(scrollVhValue)
      
      // console.log(scrollVhValue)
      setScrolled(scrollTop > 100);


    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);



  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern h-full bg-contain  lg:bg-none bg-no-repeat bg-right-bottom '>
          <Navbar scrolled={scrolled}/>
          <Hero scrollValue={scrollValue}/>
        </div>
        <About />
        <Experience />
        <Works />
        <Gallery />
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
