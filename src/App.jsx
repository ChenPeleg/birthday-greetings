import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Greeting1 from './pages/Greeting1';
import Greeting2 from './pages/Greeting2';
import Greeting3 from './pages/Greeting3';
import { GreetingProvider } from './context/GreetingProvider';

function App() {
  return (
    <GreetingProvider>
      <Router>
        <div className="relative w-full m-0 p-0">
          <Navbar />
          <main>
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
