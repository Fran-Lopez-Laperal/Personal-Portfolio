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
import Footer from './components/Footer/Footer';
import EmailSend from './components/EmailSend/EmailSend';

function App() {
  return (
    <div className="App">
      <NavBar />
      <div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cv' element={<Curriculum />} />
          <Route path='/about-me' element={<AbouteMe />} />
          <Route path='/academic-data' element={<AcademicData />} />
          <Route path='/my-proyects' element={<MyPoyects />} />
          <Route path='/about-me' element={<AbouteMe />} />
          <Route path='/applies-list' element={<AppliesList />} />
          <Route path='/new-applies' element={<Apply />} />
          <Route path='/email' element={<EmailSend/>}/>
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
