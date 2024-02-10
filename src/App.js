import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// import ScrollToTop from './components/molecules/ScrollToTop'
// import Header from './components/molecules/Header'
// import Footer from './components/molecules/Footer'
import Top from './components/molecules/Top'

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path={`/`} element={<Top />} />
      </Routes>
    </Router>
  );
}

export default App;
