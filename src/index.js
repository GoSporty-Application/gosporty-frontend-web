import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import LoginPage from './pages/home/login_page';
import Home from './pages/home/home';
import AddField from './pages/home/add_field';
import { data } from './assets/exampledata';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/addField' element={<AddField />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
