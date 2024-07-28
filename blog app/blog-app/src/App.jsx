import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import About from './pages/about';
import Travel from './pages/travel';
import Home from './pages/home';
import Eat from './pages/eat';
import Relax from './pages/relax';
import ResponsiveAppBar from './components/ResponsiveAppBar';
import Article from './pages/Article';
import NewsDetail from './components/NewsDetail';

function App() {
  return (
    <Router>
      <ResponsiveAppBar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/travel" element={<Travel />} />
        <Route path="/eat" element={<Eat />} />
        <Route path="/relax" element={<Relax />} />
        <Route path="/eat/article" element={<Article />} />
        <Route path="/relax/news/:id" element={<NewsDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
