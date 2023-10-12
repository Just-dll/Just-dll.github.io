import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import About from '../pages/about';
import NotFound from '../pages/notFound';

export default function MyRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="*" element={<NotFound />} />
        
      </Routes>
    </Router>
  );
}
