import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import HomePage from './pages/HomePage/HomePage';
import Contact from './pages/Contact/Contact';
import Confirmation from './pages/Confirmation/Confirmation';
import ThankYou from './pages/ThankYou/ThankYou';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main> {/* Wrap the Routes in a main tag */}
          <Routes>
            <Route path="/" element={<HomePage />} /> 
            <Route path="/contact" element={<Contact />} /> 
            <Route path="/confirm" element={<Confirmation />} />
            <Route path="/thankyou" element={<ThankYou />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
