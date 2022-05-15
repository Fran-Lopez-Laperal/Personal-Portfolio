import { Routes, Route } from 'react-router'
import './App.css';
import AppliesList from './components/AppliesList/AppliesList';
import Apply from './components/NewApply/newApply';
import Curriculum from './components/Curriculum/Curriculum';
import NavBar from './components/NavBar/NavBar';
import Home from './Pages/Home/Home';
import AbouteMe from './components/AbouteMe/AbouteMe';
import MyPoyects from './components/MyProyects/MyProyects';
import AcademicData from './components/AcademicData/AcademicData';

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className='routes'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cv' element={<Curriculum />} />
          <Route path='/about-me' element={<AbouteMe/>}/>
          <Route path='/academic-data' element={<AcademicData/>}/>
          <Route path='/my-proyects' element={<MyPoyects/>}/>
          <Route path='/about-me' element={<AbouteMe/>}/>
          <Route path='/applies-list' element={<AppliesList/>} />
          <Route path='/new-applies' element={<Apply />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
