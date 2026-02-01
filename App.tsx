import React from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';

const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen font-sans text-secondary">
      <Header />
      <div className="flex-grow">
        <Home />
      </div>
      <Footer />
    </div>
  );
};

export default App;