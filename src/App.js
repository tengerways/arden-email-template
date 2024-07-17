// src/App.js
import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/scss/style.scss';
import Login from './pages/login';
import Dashboard from './pages/dashboard';
import Sidebar from './components/sidebar';
import ManageEmails from './pages/manage-emails';
import CreateEmail from './pages/create-email';
import ViewEmail from './pages/view-email';

function App() {
  const location = useLocation();
  const isLoginPage = location.pathname === '/';

  return (
    <div className="App">
      {isLoginPage ? (
        <Routes>
          <Route path="/" element={<Login />} />
        </Routes>
      ) : (
        <>
          <Sidebar />
          <div className='main-content'>
            <Routes>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path='/create-email' element={<CreateEmail />} />
              <Route path='/manage-emails' element={<ManageEmails />} />
              <Route path='/view-email' element={<ViewEmail />} />
            </Routes>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
