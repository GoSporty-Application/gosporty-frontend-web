import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import LoginPage from './pages/home/login_page';
import Home from './pages/home/home';
import AddField from './pages/home/add_field';
import AddEstablishment from './pages/home/add_establishment';
import EditField from './pages/home/edit_field';
import Field from './pages/home/field';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { FieldProvider } from './context/FieldContext';
import AddEstablishmentCard from './components/container/add_establishment_card';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <FieldProvider>
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/fields/:id' element={<Field />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/addEstablishment' element={<AddEstablishment />} />
          <Route path='/addField/:id' element={<AddField />} />
          <Route path='/editField/:id' element={<EditField />} />
        </Routes>
      </FieldProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);