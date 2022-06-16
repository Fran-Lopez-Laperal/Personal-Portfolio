// import { Routes, Route } from 'react-router'
import './App.css';
// import AppliesList from './components/AppliesList/AppliesList';
// import Apply from './components/NewApply/newApply';
// import Curriculum from './components/Curriculum/Curriculum';
import NavBar from './components/NavBar/NavBar';
import Home from './Pages/Home/Home';
import EmailSend from './components/EmailSend/EmailSend';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import MyProyects from './components/MyProyects/MyProyects';


function App() {
  return (
    <div className="App">
      <ScrollToTop />
      <NavBar />
      <Home
        id='home' />
          <MyProyects
        id='proyects'
      />
      <EmailSend
        id='email'
      />
    
    </div>
  );
}

export default App;
