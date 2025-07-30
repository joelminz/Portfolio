import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Projects from './Components/Projects';
import Gallery from './Components/Gallery';
import Education from './Components/Education';
import Hobby from './Components/Hobby';
import ScrollToHashElement from './ScrollToHashElement';

function App() {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <Router>
      <Navbar />
      <ScrollToHashElement />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/education" element={<Education />} />
        <Route path="/hobby" element={<Hobby />} />
      </Routes>
    </Router>
  );
}

export default App;
