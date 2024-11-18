import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Main from './components/Main';
import Flower from './components/Flower';
import './App.css';

function App() {
  return (
    <div className='mainPageContainer'>
      <Router>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/flower' element={<Flower />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
