import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App.js';
import App2 from './App2.js';
import Autentification from './Autentification.js';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/App2.js" element={<App2 />} />
        <Route path="/Authentification.js" element={<Autentification />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
