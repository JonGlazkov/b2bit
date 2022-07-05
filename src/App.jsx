import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import Routes from './routes'
import { Toaster } from 'react-hot-toast';

import './App.scss'
import { AuthProvider } from './Auth/AuthContext';

function App() {


  return (
    <Router>
      <AuthProvider>
        <Toaster />
        <Routes />
      </AuthProvider>
    </Router>
  );
}

export default App;
