import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import { LoadingProvider } from './context/LoadingContext';
import Home from './pages/Home';
import Download from './pages/Download';
import Validate from './components/Validate';
import ResetPassword from './components/ResetPassword';
import Support from './components/Support';
import Privacy from './components/Privacy';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/main.scss';

function App() {
  return (
    <LoadingProvider>
      <LanguageProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/validate" element={<Validate />} />
            <Route path="/reset-password" element={<ResetPassword />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/support" element={<Support />} />
            <Route path="/download" element={<Download />} />
          </Routes>
        </Router>
      </LanguageProvider>
    </LoadingProvider>
  );
}

export default App;
