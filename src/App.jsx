import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Greeting1 from './pages/Greeting1';
import Greeting2 from './pages/Greeting2';
import Greeting3 from './pages/Greeting3';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main className="content">
          <Routes>
            <Route path="/" element={<Greeting1 />} />
            <Route path="/greeting2" element={<Greeting2 />} />
            <Route path="/greeting3" element={<Greeting3 />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
