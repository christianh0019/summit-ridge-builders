import React from 'react';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { CustomHomes } from './pages/services/CustomHomes';
import { LuxuryRemodels } from './pages/services/LuxuryRemodels';
import { DesignBuild } from './pages/services/DesignBuild';
import { Additions } from './pages/services/Additions';
import { Application } from './pages/Application';
import { Booking } from './pages/Booking';
import { ThankYou } from './pages/ThankYou';
import { ScrollToTop } from './components/ScrollToTop'; // Need to create this or mock behavior 

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen font-sans text-secondary">
        {/* We moved Header/Footer inside pages or created a Layout wrapper for main pages if needed. 
            However, for now, the Funnel pages use their own internal Layout. 
            The existing pages assume Header/Footer are at this level.
            We need to conditionally render Header/Footer or move them into a MainLayout.
            For simplicity in this step, we will keep Header/Footer here but know that Funnel pages might duplicate or need a refactor
            Wait, FunnelLayout has its own Header/Footer. 
            If we keep global Header/Footer here, they will show up on Funnel pages too. 
            We should wrap the "Main Site" routes in a MainLayout and leave Funnel routes outside it.
        */}

        <Routes>
          {/* Funnel Routes (No Global Header/Footer) */}
          <Route path="/application" element={<Application />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/thank-you" element={<ThankYou />} />

          {/* Main Site Routes (Global Header/Footer Wrapper) */}
          <Route element={
            <>
              <Header />
              <div className="flex-grow">
                <Outlet />
              </div>
              <Footer />
            </>
          }>
            <Route path="/" element={<Home />} />
            <Route path="/services/custom-homes" element={<CustomHomes />} />
            <Route path="/services/luxury-remodels" element={<LuxuryRemodels />} />
            <Route path="/services/design-build" element={<DesignBuild />} />
            <Route path="/services/additions" element={<Additions />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
};

export default App;