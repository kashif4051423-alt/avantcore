import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
import SearchBox from './SearchBox';

interface NavDropdown {
  title: string;
  items: Array<{ label: string; href: string }>;
}

interface NavItem {
  label: string;
  href: string;
  hasDropdown?: boolean;
  columns?: NavDropdown[];
  featuredImage?: string;
  featuredTitle?: string;
  featuredDescription?: string;
}

const EnhancedHeader = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [scrollY, setScrollY] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [hoveredDropdown, setHoveredDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (currentScrollY / docHeight) * 100 : 0;

      setScrollY(currentScrollY);
      setScrollProgress(progress);
      setIsScrolled(currentScrollY > 400);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: NavItem[] = [
    {
      label: 'Services',
      href: '/services',
      hasDropdown: true,
      columns: [
        {
          title: 'Digital',
          items: [
            { label: 'Digital Consulting & Strategy', href: '/services/digital-consulting' },
            { label: 'Digital Commerce', href: '/services/digital-commerce' },
            { label: 'Business Applications', href: '/services/business-apps' },
          ],
        },
        {
          title: 'Data & Analytics',
          items: [
            { label: 'Data Modernization', href: '/services/data-modernization' },
            { label: 'Advanced Analytics', href: '/services/advanced-analytics' },
            { label: 'Connected Intelligence', href: '/services/connected-intelligence' },
            { label: 'Data Management', href: '/services/data-management' },
            { label: 'Generative AI', href: '/services/generative-ai' },
          ],
        },
        {
          title: 'Cloud',
          items: [
            { label: 'Cloud Operations & Migration', href: '/services/cloud-migration' },
            { label: 'Cloud Development & Integration', href: '/services/cloud-development' },
            { label: 'Managed Services', href: '/services/managed-services' },
          ],
        },
        {
          title: 'More Services',
          items: [
            { label: 'Digital Infrastructure Services', href: '/services/infrastructure' },
            { label: 'Security', href: '/services/security' },
            { label: 'Emerging Technologies', href: '/services/emerging-tech' },
            { label: 'Business Process Services', href: '/services/bps' },
          ],
        },
      ],
      featuredImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=400&q=80',
      featuredTitle: 'Why Data Standards Matter',
      featuredDescription: 'Understand the importance of data standards in modern enterprise architecture.',
    },
    {
      label: 'Industries',
      href: '/industries',
      hasDropdown: true,
      columns: [
        {
          title: 'Industries We Serve',
          items: [
            { label: 'Banking & Financial Services', href: '/industries/banking' },
            { label: 'Retail & CPG', href: '/industries/retail' },
            { label: 'Healthcare', href: '/industries/healthcare' },
            { label: 'Telecommunications', href: '/industries/telecom' },
            { label: 'Public Sector', href: '/industries/public-sector' },
            { label: 'Energy & Utilities', href: '/industries/energy' },
          ],
        },
      ],
      featuredImage: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=400&q=80',
      featuredTitle: 'Industry Expertise',
      featuredDescription: 'Tailored solutions for diverse industry sectors and business needs.',
    },
    {
      label: 'Products',
      href: '/products',
      hasDropdown: false,
    },
    {
      label: 'About',
      href: '/about',
      hasDropdown: false,
    },
  ];

  return (
    <>
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-blue-600 to-blue-500 z-50"
        style={{ width: `${scrollProgress}%` }}
        initial={{ width: '0%' }}
        animate={{ width: `${scrollProgress}%` }}
        transition={{ duration: 0.1 }}
      />

      {/* Dual-State Navbar */}
      <motion.header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled
            ? 'bg-white shadow-md border-b border-gray-100'
            : 'bg-transparent border-b border-white/10'
        }`}
      >
        <nav className="w-full px-4 md:px-6 lg:px-8 py-2">
          <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
            {/* Logo */}
            <button
              onClick={() => {
                if (location.pathname === '/') {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                } else {
                  navigate('/');
                  setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 100);
                }
              }}
              className="flex items-center flex-shrink-0 hover:opacity-85 transition pr-4 md:pr-6 lg:pr-8 cursor-pointer bg-transparent border-none p-0 focus:outline-none focus:ring-0"
              title="Back to Home"
              aria-label="AvantCore Technologies Home"
              style={{ outline: 'none', boxShadow: 'none', WebkitTapHighlightColor: 'transparent' }}
            >
              <img
                src="/logo-avantcore-clean.svg"
                alt="AvantCore Technologies"
                className="object-contain h-8 md:h-9 transition-all duration-300"
              />
            </button>

            {/* Desktop Navigation - Left */}
            <div className="hidden lg:flex items-center gap-5 flex-1">
              {navItems.slice(0, 3).map((item) => (
                <div
                  key={item.label}
                  className="relative group"
                  onMouseEnter={() => item.hasDropdown && setHoveredDropdown(item.label)}
                  onMouseLeave={() => setHoveredDropdown(null)}
                >
                  <Link
                    to={item.href}
                    className={`px-1 py-1.5 font-medium text-sm flex items-center gap-1 transition-all duration-300 ${
                      isScrolled
                        ? 'text-gray-800 hover:text-blue-600'
                        : 'text-gray-100 hover:text-white'
                    }`}
                  >
                    {item.label}
                    {item.hasDropdown && (
                      <ChevronDown
                        size={16}
                        className={`transition-transform ${
                          hoveredDropdown === item.label ? 'rotate-180' : ''
                        }`}
                      />
                    )}
                  </Link>

                  {/* Mega Menu */}
                  {item.hasDropdown && item.columns && (
                    <AnimatePresence>
                      {hoveredDropdown === item.label && (
                        <>
                          <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 z-30"
                            style={{ top: '64px' }}
                            onClick={() => setHoveredDropdown(null)}
                          />
                          <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.22, ease: 'easeOut' }}
                            className="fixed top-16 z-40 w-screen left-0 right-0"
                            style={{ display: 'flex', justifyContent: 'center', pointerEvents: 'auto' }}
                          >
                            <div 
                              className="bg-white shadow-2xl border-b border-gray-200 rounded-lg"
                              style={{ width: 'calc(100% - 60px)', maxWidth: '1400px', display: 'flex', justifyContent: 'center' }}
                            >
                              <div 
                                style={{
                                  width: '100%',
                                  display: 'grid',
                                  gridTemplateColumns: item.featuredImage ? '380px 1fr' : '1fr',
                                  gap: '60px',
                                  padding: '40px 48px',
                                  placeItems: 'start',
                                }}
                              >
                                {item.featuredImage && (
                                  <Link to={item.href} onClick={() => { setHoveredDropdown(null); }} className="block">
                                    <motion.div
                                      whileHover={{ y: -4 }}
                                      transition={{ duration: 0.25 }}
                                      className="bg-gradient-to-br from-gray-50/50 to-white rounded-lg overflow-hidden border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-300 cursor-pointer h-full flex flex-col group"
                                    >
                                      <div className="relative overflow-hidden">
                                        <motion.img
                                          whileHover={{ scale: 1.08 }}
                                          transition={{ duration: 0.35 }}
                                          src={item.featuredImage}
                                          alt={item.featuredTitle}
                                          className="w-full h-48 object-cover"
                                        />
                                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                                      </div>
                                      <div className="p-5 flex flex-col flex-grow">
                                        <h4 className="font-bold text-gray-900 text-sm leading-tight mb-2 group-hover:text-blue-900 transition-colors duration-200 line-clamp-2">
                                          {item.featuredTitle}
                                        </h4>
                                        <p className="text-xs text-gray-600 leading-relaxed flex-grow mb-4 line-clamp-2">
                                          {item.featuredDescription}
                                        </p>
                                        <motion.div
                                          whileHover={{ x: 3 }}
                                          transition={{ duration: 0.2 }}
                                          className="inline-flex items-center gap-1.5 text-orange-600 font-semibold text-xs group-hover:text-orange-700 transition-colors duration-200"
                                        >
                                          Learn More <span>→</span>
                                        </motion.div>
                                      </div>
                                    </motion.div>
                                  </Link>
                                )}

                                <div
                                  style={{
                                    display: 'grid',
                                    gridTemplateColumns: `repeat(${Math.min(item.columns.length, 3)}, 1fr)`,
                                    gap: '48px',
                                    width: '100%',
                                  }}
                                >
                                  {item.columns.map((column) => (
                                    <div key={column.title}>
                                      <div className="pb-3 mb-5 border-b-2 border-orange-500">
                                        <h3 className="font-bold text-gray-900 text-xs uppercase tracking-widest text-blue-900">
                                          {column.title}
                                        </h3>
                                      </div>
                                      <ul className="space-y-3">
                                        {column.items.map((subitem) => (
                                          <li key={subitem.label} className="group/item">
                                            <Link to={subitem.href} onClick={() => { setHoveredDropdown(null); setMobileMenuOpen(false); }}>
                                              <motion.div
                                                whileHover={{ x: 3 }}
                                                transition={{ duration: 0.18 }}
                                                className="flex items-center gap-2 text-gray-700 group-hover/item:text-blue-900 transition-colors duration-200 text-sm font-medium"
                                              >
                                                <span>{subitem.label}</span>
                                                <motion.span className="text-orange-500 opacity-0 group-hover/item:opacity-100 transition-opacity duration-200 text-sm" whileHover={{ x: 1 }}>
                                                  →
                                                </motion.span>
                                              </motion.div>
                                            </Link>
                                          </li>
                                        ))}
                                      </ul>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </motion.div>
                        </>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              ))}
            </div>

            {/* Right Navigation */}
            <div className="hidden lg:flex items-center gap-4">
              <Link to="/career" className={`font-medium text-sm transition-all duration-300 ${isScrolled ? 'text-gray-800 hover:text-blue-600' : 'text-gray-100 hover:text-white'}`}>
                Career
              </Link>
              <Link to="/news-events" className={`font-medium text-sm transition-all duration-300 ${isScrolled ? 'text-gray-800 hover:text-blue-600' : 'text-gray-100 hover:text-white'}`}>
                News & Events
              </Link>
              <SearchBox isNavScrolled={isScrolled} />
              <Link to="/contact" className="px-5 py-2 font-medium text-sm rounded-lg transition-all duration-300 shadow-lg bg-yellow-400 text-gray-900 hover:bg-yellow-500">
                Get in Touch
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`lg:hidden p-2 rounded-lg transition-all ${isScrolled ? 'text-gray-800 hover:bg-gray-100' : 'text-gray-100 hover:bg-white/15'}`}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className={`fixed top-16 left-0 right-0 z-30 overflow-y-auto max-h-[calc(100vh-64px)] lg:hidden ${
              isScrolled ? 'bg-white border-b border-gray-200' : 'bg-gray-900/95 backdrop-blur-sm'
            }`}
          >
            <div className="max-w-7xl mx-auto px-4 py-4 space-y-2">
              {navItems.map((item) => (
                <div key={item.label}>
                  {item.hasDropdown ? (
                    <>
                      <button
                        onClick={() => setActiveDropdown(activeDropdown === item.label ? null : item.label)}
                        className={`w-full text-left px-4 py-3 rounded-lg font-medium flex items-center justify-between transition ${
                          isScrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-gray-100 hover:bg-white/10'
                        }`}
                      >
                        {item.label}
                        <ChevronDown size={16} className={`transition-transform ${activeDropdown === item.label ? 'rotate-180' : ''}`} />
                      </button>
                      <AnimatePresence>
                        {activeDropdown === item.label && item.columns && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className={`rounded-lg overflow-hidden ml-2 mt-1 ${isScrolled ? 'bg-gray-50' : 'bg-white/10'}`}
                          >
                            {item.columns.map((column) => (
                              <div key={column.title} className="py-2">
                                <p className={`text-xs uppercase font-semibold px-4 py-2 ${isScrolled ? 'text-gray-500' : 'text-gray-400'}`}>
                                  {column.title}
                                </p>
                                {column.items.map((subitem) => (
                                  <Link
                                    key={subitem.label}
                                    to={subitem.href}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className={`block px-6 py-2 transition text-sm font-medium ${
                                      isScrolled ? 'text-gray-600 hover:text-blue-900 hover:bg-gray-200' : 'text-gray-300 hover:text-white hover:bg-white/10'
                                    }`}
                                  >
                                    {subitem.label}
                                  </Link>
                                ))}
                              </div>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link
                      to={item.href}
                      className={`block px-4 py-3 rounded-lg font-medium transition ${
                        isScrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-gray-100 hover:bg-white/10'
                      }`}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default EnhancedHeader;
