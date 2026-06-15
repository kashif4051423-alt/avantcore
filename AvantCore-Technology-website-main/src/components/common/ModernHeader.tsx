import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
import Button from '../ui/Button';

const ModernHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Services', href: '/services', hasDropdown: true },
    { label: 'Industries', href: '/industries', hasDropdown: true },
    { label: 'Products', href: '/products', hasDropdown: false },
    { label: 'About', href: '/about', hasDropdown: false },
    { label: 'Insights', href: '/insights', hasDropdown: true },
  ];

  const serviceCategories = [
    { title: 'AI Transformation', items: ['GenAI', 'Predictive AI', 'ML Operations'] },
    { title: 'Digital Services', items: ['Digital Consulting', 'Digital Commerce', 'Business Apps'] },
    { title: 'Data & Analytics', items: ['Data Modernization', 'Advanced Analytics', 'Connected Intelligence'] },
    { title: 'Cloud Services', items: ['Cloud Migration', 'Cloud Development', 'Managed Services'] },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white shadow-lg'
            : 'bg-white border-b border-gray-200'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 h-16 md:h-20 flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="flex-shrink-0 font-bold text-2xl text-blue-900 hover:text-blue-700 transition"
          >
            AvantCore
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <div key={item.label} className="relative group">
                <button className="px-3 py-2 text-gray-700 hover:text-blue-600 font-medium flex items-center gap-1 transition">
                  {item.label}
                  {item.hasDropdown && <ChevronDown size={16} />}
                </button>

                {/* Desktop Mega Menu */}
                {item.hasDropdown && item.label === 'Services' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute left-0 top-full pt-0 hidden group-hover:block w-screen"
                  >
                    <div className="bg-white border-t-2 border-blue-500 shadow-xl p-8">
                      <div className="max-w-7xl mx-auto grid grid-cols-4 gap-8">
                        {serviceCategories.map((category) => (
                          <div key={category.title}>
                            <h3 className="font-semibold text-blue-900 mb-3">
                              {category.title}
                            </h3>
                            <ul className="space-y-2">
                              {category.items.map((item) => (
                                <li key={item}>
                                  <a
                                    href="#"
                                    className="text-gray-600 hover:text-orange-500 transition text-sm"
                                  >
                                    {item}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>
            ))}
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <Button variant="secondary" size="md">
              Contact
            </Button>
            <Button variant="primary" size="md">
              Get in Touch
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition"
          >
            {mobileMenuOpen ? (
              <X size={24} className="text-blue-900" />
            ) : (
              <Menu size={24} className="text-blue-900" />
            )}
          </button>
        </nav>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="fixed top-16 left-0 right-0 bg-white border-b border-gray-200 lg:hidden z-40"
          >
            <div className="max-w-7xl mx-auto px-4 py-4">
              {navItems.map((item) => (
                <div key={item.label}>
                  <button
                    onClick={() =>
                      setActiveDropdown(
                        activeDropdown === item.label ? null : item.label
                      )
                    }
                    className="w-full text-left px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg font-medium flex items-center justify-between transition"
                  >
                    {item.label}
                    {item.hasDropdown && (
                      <ChevronDown
                        size={16}
                        className={`transition-transform ${
                          activeDropdown === item.label ? 'rotate-180' : ''
                        }`}
                      />
                    )}
                  </button>

                  {/* Mobile Dropdown */}
                  <AnimatePresence>
                    {item.hasDropdown &&
                      activeDropdown === item.label && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="bg-gray-50 rounded-lg overflow-hidden"
                        >
                          <div className="px-4 py-2">
                            {serviceCategories.map((category) => (
                              <div key={category.title} className="py-2">
                                <p className="text-xs uppercase font-semibold text-gray-500 px-2">
                                  {category.title}
                                </p>
                                {category.items.map((subitem) => (
                                  <a
                                    key={subitem}
                                    href="#"
                                    className="block px-4 py-2 text-gray-600 hover:text-orange-500 transition text-sm rounded hover:bg-gray-200"
                                  >
                                    {subitem}
                                  </a>
                                ))}
                              </div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                  </AnimatePresence>
                </div>
              ))}

              <div className="flex flex-col gap-3 mt-4 pt-4 border-t">
                <Button variant="secondary" fullWidth>
                  Contact
                </Button>
                <Button variant="primary" fullWidth>
                  Get in Touch
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Spacer for fixed header */}
      <div className="h-16 md:h-20" />
    </>
  );
};

export default ModernHeader;
