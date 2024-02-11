import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// import ScrollToTop from './components/molecules/ScrollToTop'
// import Header from './components/molecules/Header'
// import Footer from './components/molecules/Footer'
import Top from './components/molecules/Top'
import Tsumugu from './components/molecules/Tsumugu'
import Edit from './components/molecules/Edit'
import Story from './components/molecules/Story'
import Stories from './components/molecules/Stories'

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path={`/`} element={<Top />} />
        <Route path={'/Tsumugu'} element={<Tsumugu />} />
        <Route path={'/Edit'} element={<Edit />} />
        <Route path={'/Story'} element={<Story />} />
        <Route path={'/Stories'} element={<Stories />} />
      </Routes>
    </Router>
  );
}

export default App;
