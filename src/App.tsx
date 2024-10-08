import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPageForm from './components/LandingPageForm';
import Questionnaire from './components/Questionnaire';

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <div className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<LandingPageForm />} />
            <Route path="/questionnaire" element={<Questionnaire />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;