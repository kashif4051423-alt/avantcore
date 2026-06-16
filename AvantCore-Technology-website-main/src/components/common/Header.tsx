import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isPortfolioDropdownOpen, setIsPortfolioDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'PORTFOLIO', path: '/portfolio', dropdown: true },
    { name: 'ABOUT US', path: '/about' },
    { name: 'CAREER', path: '/career' },
    { name: 'NEWS & EVENTS', path: '/news' }
  ];

  return (
    <header className={`w-full z-50 fixed top-0 left-0 transition-all duration-300 bg-black shadow-none border-b border-blue-100 ${isScrolled ? 'backdrop-blur-md bg-black/90' : ''}`}> 
      <div className={`container mx-auto px-4 flex items-center justify-between transition-all duration-300 ${isScrolled ? 'h-14 py-1' : 'h-20 py-3'}`}>
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2 select-none transition-all duration-300">
          <img
            src="/logo-avantcore99-10-768x154.webp"
            alt="Avantcore Technologies Logo"
            className={`object-contain transition-all duration-300 ${isScrolled ? 'h-8' : 'h-12'}`}
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-10 bg-transparent px-8 py-2">
          {/* Portfolio Dropdown */}
          <div className="relative" onMouseEnter={() => setIsPortfolioDropdownOpen(true)} onMouseLeave={() => setIsPortfolioDropdownOpen(false)}>
            <button className={`flex items-center space-x-1 font-bold tracking-wide text-white text-lg transition-colors duration-200 hover:text-blue-300 ${location.pathname.startsWith('/portfolio') ? 'text-blue-300' : ''}`}>PORTFOLIO <ChevronDown className="w-4 h-4" /></button>
            <AnimatePresence>
              {isPortfolioDropdownOpen && (
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }} className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-gray-100 py-2">
                  <Link to="/products" className="block px-4 py-2 text-gray-700 hover:text-blue-600 transition">Products</Link>
                  <Link to="/services" className="block px-4 py-2 text-gray-700 hover:text-blue-600 transition">Services</Link>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <Link to="/about" className="font-bold tracking-wide text-white text-lg hover:text-blue-300 transition">ABOUT US</Link>
          <Link to="/career" className="font-bold tracking-wide text-white text-lg hover:text-blue-300 transition">CAREER</Link>
          <Link to="/news" className="font-bold tracking-wide text-white text-lg hover:text-blue-300 transition">NEWS & EVENTS</Link>
          {/* Book a Call Button */}
          <a
            href="https://wa.me/447429682461"
            target="_blank"
            rel="noopener noreferrer"
            className={`ml-8 bg-blue-600 hover:bg-blue-700 text-white font-bold transition-all duration-300 shadow-md
              ${isScrolled ? 'px-5 py-2 text-base rounded-lg' : 'px-8 py-3 text-lg rounded-lg'}`}
          >
            BOOK A CALL
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden p-2 text-blue-800 focus:outline-none"
        >
          {isMobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            className="fixed top-0 right-0 w-72 h-full bg-blue-900 shadow-2xl z-50 flex flex-col p-6 gap-4 lg:hidden"
          >
            <button onClick={() => setIsMobileMenuOpen(false)} className="self-end mb-4 text-white"><X className="w-7 h-7" /></button>
            <div className="flex flex-col gap-4">
              <div className="relative">
                <button onClick={() => setIsPortfolioDropdownOpen(!isPortfolioDropdownOpen)} className="flex items-center space-x-1 font-bold tracking-wide text-white text-lg w-full text-left">PORTFOLIO <ChevronDown className="w-4 h-4" /></button>
                {isPortfolioDropdownOpen && (
                  <div className="mt-2 ml-4 bg-blue-900 rounded-lg shadow border border-gray-100 py-2">
                    <Link to="/products" className="block px-4 py-2 text-white hover:text-blue-300 transition">Products</Link>
                    <Link to="/services" className="block px-4 py-2 text-white hover:text-blue-300 transition">Services</Link>
                  </div>
                )}
              </div>
              <Link to="/about" className="font-bold tracking-wide text-white text-lg hover:text-blue-300 transition">ABOUT US</Link>
              <Link to="/career" className="font-bold tracking-wide text-white text-lg hover:text-blue-300 transition">CAREER</Link>
              <Link to="/news" className="font-bold tracking-wide text-white text-lg hover:text-blue-300 transition">NEWS & EVENTS</Link>
              <a
                href="https://wa.me/447429682461"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-3 rounded-lg text-lg transition-all duration-300 shadow-md w-full text-center"
              >
                BOOK A CALL
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
