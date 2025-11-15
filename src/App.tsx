import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { AlumniDirectory } from './components/AlumniDirectory';
import { Events } from './components/Events';
import { JobBoard } from './components/JobBoard';
import { News } from './components/News';
import { Dashboard } from './components/Dashboard';
import { Footer } from './components/Footer';
import { Login } from './components/Login';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
    setShowLogin(false);
    setActiveSection('dashboard');
  };

  const handleShowLogin = () => {
    setShowLogin(true);
  };

  const handleCloseLogin = () => {
    setShowLogin(false);
  };

  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 }
  };

  const pageTransition = {
    type: "tween",
    ease: "easeInOut",
    duration: 0.3
  };

  const renderActiveSection = () => {
    if (isLoggedIn && activeSection === 'dashboard') {
      return (
        <motion.div
          key="dashboard"
          variants={pageVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={pageTransition}
        >
          <Dashboard />
        </motion.div>
      );
    }

    const sectionComponents = {
      home: <Hero />,
      directory: <AlumniDirectory />,
      events: <Events />,
      jobs: <JobBoard />,
      news: <News />,
    };

    const Component = sectionComponents[activeSection] || sectionComponents.home;

    return (
      <motion.div
        key={activeSection}
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={pageTransition}
      >
        {Component}
      </motion.div>
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation 
        activeSection={activeSection} 
        setActiveSection={setActiveSection}
        isLoggedIn={isLoggedIn}
        setIsLoggedIn={setIsLoggedIn}
        onShowLogin={handleShowLogin}
      />
      <main className="pt-16">
        <AnimatePresence mode="wait">
          {renderActiveSection()}
        </AnimatePresence>
      </main>
      <Footer />
      
      <AnimatePresence>
        {showLogin && (
          <Login 
            onClose={handleCloseLogin}
            onLogin={handleLogin}
          />
        )}
      </AnimatePresence>
    </div>
  );
}