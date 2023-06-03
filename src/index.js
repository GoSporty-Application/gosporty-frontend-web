import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import LoginPage from './pages/home/login_page';
import Home from './pages/home/home';
import AddField from './pages/home/add_field';
import EditField from './pages/home/edit_field';
import { data } from './assets/exampledata';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { FieldProvider } from './context/FieldContext';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <FieldProvider>
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/addField' element={<AddField />} />
          <Route path='/editField/:id' element={<EditField />} />
        </Routes>
      </FieldProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);