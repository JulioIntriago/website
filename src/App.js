import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';  // Ajusta la ruta según tu estructura de carpetas
import Footer from './components/Footer';  // Ajusta la ruta según tu estructura de carpetas
import Home from './pages/Home';  // Ajusta la ruta según tu estructura de carpetas
import HomeBased from './pages/HomeBased';  // Ajusta la ruta según tu estructura de carpetas
import SchoolBased from './pages/SchoolBased';  // Ajusta la ruta según tu estructura de carpetas
import ParentTraining from './pages/ParentTraining';  // Ajusta la ruta según tu estructura de carpetas
import OurProcess from './pages/OurProcess';  // Ajusta la ruta según tu estructura de carpetas
import Contact from './pages/Contact';  // Ajusta la ruta según tu estructura de carpetas
import 'aos/dist/aos.css'; // Importar los estilos de AOS
import AOS from 'aos'; // Importar AOS
import './App.css'; // Asegúrate de que la ruta es correcta

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1200, // Duración de la animación en milisegundos
    });
  }, []);

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home-based" element={<HomeBased />} />
          <Route path="/school-based" element={<SchoolBased />} />
          <Route path="/parent-training" element={<ParentTraining />} />
          <Route path="/our-process" element={<OurProcess />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
