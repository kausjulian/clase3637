import './App.css';
import  CanchasProvider  from './store/appContext';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home/Home';
import Cancha from './components/Cancha/Cancha';
import Contacto from './components/Contacto';
import Footer from './components/Footer';


function App() {
  return (
    <CanchasProvider>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/Contacto" element={<Contacto/>}/>
          <Route path="/:id" element={<Cancha/>}/>
        </Routes>
        <Footer/>
      </Router>
    </CanchasProvider>
  );
}

export default App;
