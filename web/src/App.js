import { Routes, Route } from 'react-router'
import './App.css';
import Apply from './components/Apply´s/Applys';
import Curriculum from './components/Curriculum/Curriculum';
import NavBar from './components/NavBar/NavBar';
import Home from './Pages/Home/Home';

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className='routes'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cv' element={<Curriculum/>} />
        <Route path='/applys' element={<Apply/>} />
      </Routes>
      </div>
    </div>
  );
}

export default App;
