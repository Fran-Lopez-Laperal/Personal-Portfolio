// import { Routes, Route } from 'react-router'
import './App.css';
// import AppliesList from './components/AppliesList/AppliesList';
// import Apply from './components/NewApply/newApply';
// import Curriculum from './components/Curriculum/Curriculum';
import NavBar from './components/NavBar/NavBar';
import Home from './Pages/Home/Home';
// import AbouteMe from './components/AbouteMe/AbouteMe';
// import MyPoyects from './components/MyProyects/MyProyects';
// import AcademicData from './components/AcademicData/AcademicData';
// import Footer from './components/Footer/Footer';
import EmailSend from './components/EmailSend/EmailSend';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import AppliesList from './components/AppliesList/AppliesList';


function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <EmailSend
        id='email'
      />
      <AppliesList
      title='List'
        id='list'
      />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
