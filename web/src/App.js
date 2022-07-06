// import { Routes, Route } from 'react-router'
import './App.css';
// import AppliesList from './components/AppliesList/AppliesList';
// import Apply from './components/NewApply/newApply';
// import Curriculum from './components/Curriculum/Curriculum';
import NavBar from './components/NavBar/NavBar';
import Home from './Pages/Home/Home';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import Footer from './components/Footer/Footer';
import { Routes, Route } from 'react-router';
import React from "react";
import WhoIAm from './components/WhoIAm/WhoIAm';


function App() {
  return (
    <div className="App">
      <ScrollToTop />
      <NavBar />
      <div>
        <Routes>
          <Route path="/sobre-mi" element={<WhoIAm />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
