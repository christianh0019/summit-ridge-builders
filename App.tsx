import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { CustomHomes } from './pages/services/CustomHomes';
import { LuxuryRemodels } from './pages/services/LuxuryRemodels';
import { DesignBuild } from './pages/services/DesignBuild';
import { Additions } from './pages/services/Additions';
import { ScrollToTop } from './components/ScrollToTop'; // Need to create this or mock behavior 

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen font-sans text-secondary">
        <Header />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services/custom-homes" element={<CustomHomes />} />
            <Route path="/services/luxury-remodels" element={<LuxuryRemodels />} />
            <Route path="/services/design-build" element={<DesignBuild />} />
            <Route path="/services/additions" element={<Additions />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;