import { Button } from "./ui/button";
import { motion } from 'motion/react';
import { LogIn, LogOut, User, GraduationCap } from "lucide-react";

interface NavigationProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
  isLoggedIn: boolean;
  setIsLoggedIn: (status: boolean) => void;
  onShowLogin: () => void;
}

export function Navigation({ activeSection, setActiveSection, isLoggedIn, setIsLoggedIn, onShowLogin }: NavigationProps) {
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'directory', label: 'Alumni Directory' },
    { id: 'events', label: 'Events' },
    { id: 'jobs', label: 'Job Board' },
    { id: 'news', label: 'News' },
  ];

  if (isLoggedIn) {
    navItems.push({ id: 'dashboard', label: 'Dashboard' });
  }

  return (
    <motion.nav 
      className="fixed top-0 left-0 right-0 bg-background/95 backdrop-blur-sm border-b border-border z-50"
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <motion.div 
            className="flex items-center space-x-2 cursor-pointer"
            onClick={() => setActiveSection('home')}
            whileHover={{ scale: 1.02 }}
            transition={{ type: "tween", duration: 0.2, ease: "easeOut" }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "tween", duration: 0.2 }}
            >
              <GraduationCap className="h-7 w-7 text-primary" />
            </motion.div>
            <h1 className="text-xl font-display font-semibold">AlumniConnect</h1>
          </motion.div>
          
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.button
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                className={`px-3 py-2 rounded-md transition-colors relative ${
                  activeSection === item.id
                    ? 'text-primary-foreground'
                    : 'text-foreground hover:bg-accent'
                }`}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                {activeSection === item.id && (
                  <motion.div
                    className="absolute inset-0 bg-primary rounded-md"
                    layoutId="activeTab"
                    initial={false}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 30
                    }}
                  />
                )}
                <span className="relative z-10">{item.label}</span>
              </motion.button>
            ))}
          </div>

          <motion.div 
            className="flex items-center space-x-4"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            {isLoggedIn ? (
              <div className="flex items-center space-x-2">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Button variant="outline" size="sm" className="flex items-center space-x-1">
                    <User className="h-4 w-4" />
                    <span>Profile</span>
                  </Button>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => setIsLoggedIn(false)}
                    className="flex items-center space-x-1"
                  >
                    <LogOut className="h-4 w-4" />
                    <span>Logout</span>
                  </Button>
                </motion.div>
              </div>
            ) : (
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Button 
                  onClick={onShowLogin}
                  className="flex items-center space-x-1"
                >
                  <LogIn className="h-4 w-4" />
                  <span>Login</span>
                </Button>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </motion.nav>
  );
}