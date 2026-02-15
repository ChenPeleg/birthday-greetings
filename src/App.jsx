import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Greeting1 from './pages/Greeting1';
import Greeting2 from './pages/Greeting2';
import Greeting3 from './pages/Greeting3';
import { GreetingProvider } from './context/GreetingProvider';
import './App.css';

function App() {
  return (
    <GreetingProvider>
      <Router basename={import.meta.env.BASE_URL}>
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
    </GreetingProvider>
  );
}

export default App;
