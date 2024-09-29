import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Login';
import Signup from './Signup';
import LoginNew from './Login-New';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<LoginNew />} />
          <Route path="/login" element={<LoginNew />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
