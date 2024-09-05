import React, { useEffect, useRef, useState } from 'react';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import HeroComponents from './components/hero/HeroComponents';
import Loader from './components/loader/Loader';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import { ToastContainer } from 'react-toastify';
import { motion, useScroll, useSpring } from 'framer-motion';
import Lenis from 'lenis';
import { LocomotiveScrollProvider } from 'react-locomotive-scroll';
import Works from './components/works/Works';

function App() {
  const { scrollYProgress } = useScroll();
  const mainRef = useRef(null);
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const lenis = new Lenis()

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  }, [])


  return (
    <LocomotiveScrollProvider options={{smooth: true,}} containerRef={mainRef}>
      <div className='main' ref={mainRef}>
        <motion.div className="progress-bar" style={{ scaleX }} />
        <div className="main-container">
          <Navbar />
          <div className="container">
            <HeroComponents />
            <Works />
          </div>
        </div>
        <Footer />
      </div>
      <ToastContainer />
    </LocomotiveScrollProvider>
  );
}

export default App;
