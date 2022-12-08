import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Particle from './components/Particle';
import Home from './pages/Home';
import Blogs from './pages/Blogs';


function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/blogs' element={<Blogs />}/>
      </Routes>
      <Particle />
    </Router>
  );
}

export default App;
