// src/App.js

import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomeBased from './pages/HomeBased';
import SchoolBased from './pages/SchoolBased';
import ParentTraining from './pages/ParentTraining';
import OurProcess from './pages/OurProcess';
import Contact from './pages/Contact';
import 'aos/dist/aos.css'; // Importa los estilos de AOS
import AOS from 'aos';

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Inicializa AOS con una duración de animación de 1000ms
  }, []);

  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomeBased />} />
          <Route path="/home-based" element={<HomeBased />} />
          <Route path="/school-based" element={<SchoolBased />} />
          <Route path="/parent-training" element={<ParentTraining />} />
          <Route path="/our-process" element={<OurProcess />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
