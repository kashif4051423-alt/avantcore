import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';

interface NavItem {
  label: string;
  href: string;
  hasDropdown?: boolean;
  dropdownContent?: {
    columns: Array<{
      title: string;
      items: Array<{ label: string; href: string; icon?: string }>;
    }>;
    featured?: {
      title: string;
      image: string;
      description: string;
      link: string;
    };
  };
}

const ProfessionalHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isRegionMenuOpen, setIsRegionMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: NavItem[] = [
    {
      label: 'Services',
      href: '/services',
      hasDropdown: true,
      dropdownContent: {
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
        featured: {
          title: 'Why Data Standards Matter',
          image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=400&q=80',
          description: 'Understand the importance of data standards in modern enterprise architecture and digital transformation.',
          link: '/insights/data-standards',
        },
      },
    },
    {
      label: 'Industries',
      href: '/industries',
      hasDropdown: true,
      dropdownContent: {
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
        featured: {
          title: 'Banking Transformation Case Study',
          image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=400&q=80',
          description: 'How we helped a leading global bank modernize its developer ecosystem.',
          link: '/case-studies/banking-transformation',
        },
      },
    },
    { label: 'Products', href: '/products' },
    { label: 'About', href: '/about' },
    {
      label: 'Insights',
      href: '/insights',
      hasDropdown: true,
      dropdownContent: {
        columns: [
          {
            title: 'Insights',
            items: [
              { label: 'Case Studies', href: '/insights/case-studies' },
              { label: 'Blog', href: '/insights/blog' },
              { label: 'Whitepapers', href: '/insights/whitepapers' },
              { label: 'Newsroom', href: '/insights/newsroom' },
            ],
          },
        ],
        featured: {
          title: 'Latest Insights',
          image: 'https://images.unsplash.com/photo-1516321318423-f06f70a504f9?auto=format&fit=crop&w=400&q=80',
          description: 'Explore our latest research and insights on technology trends.',
          link: '/insights/latest',
        },
      },
    },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white shadow-md'
            : 'bg-white border-b border-gray-100'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 h-16 md:h-20 flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="flex-shrink-0 font-bold text-xl md:text-2xl text-blue-900"
          >
            AvantCore
          </Link>

          {/* Desktop Navigation - Centered */}
          <div className="hidden lg:flex items-center justify-center flex-1 gap-8 mx-8">
            {navItems.map((item) => (
              <div key={item.label} className="relative group">
                <Link
                  to={item.href}
                  className="text-gray-700 hover:text-blue-900 font-medium text-sm flex items-center gap-1 py-2 transition group"
                >
                  {item.label}
                  {item.hasDropdown && (
                    <ChevronDown
                      size={16}
                      className="group-hover:text-blue-900 transition"
                    />
                  )}
                </Link>

                {/* Desktop Mega Menu */}
                {item.hasDropdown && item.dropdownContent && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute left-0 top-full pt-0 hidden group-hover:block w-screen"
                  >
                    <div className="bg-white border-t-2 border-blue-900 shadow-lg p-8">
                      <div className="max-w-7xl mx-auto">
                        <div className="grid grid-cols-4 gap-8 items-start">
                          {/* Left: Featured Section with Image */}
                          {item.dropdownContent.featured && (
                            <div className="col-span-1">
                              <a
                                href={item.dropdownContent.featured.link}
                                className="group/featured block"
                              >
                                <div className="overflow-hidden rounded-lg mb-4 h-40">
                                  <motion.img
                                    whileHover={{ scale: 1.05 }}
                                    src={item.dropdownContent.featured.image}
                                    alt={item.dropdownContent.featured.title}
                                    className="w-full h-full object-cover"
                                  />
                                </div>
                                <h4 className="font-semibold text-gray-900 text-sm mb-2 group-hover/featured:text-blue-900 transition">
                                  {item.dropdownContent.featured.title}
                                </h4>
                                <p className="text-xs text-gray-600">
                                  {item.dropdownContent.featured.description}
                                </p>
                                <span className="text-xs text-blue-900 font-semibold mt-2 inline-block group-hover/featured:text-orange-500 transition">
                                  Learn More →
                                </span>
                              </a>
                            </div>
                          )}

                          {/* Right: Menu Items */}
                          <div className={item.dropdownContent.featured ? 'col-span-3' : 'col-span-4'}>
                            <div className="grid grid-cols-3 gap-8">
                              {item.dropdownContent.columns.map((column) => (
                                <div key={column.title}>
                                  <h3 className="font-semibold text-gray-900 text-sm uppercase tracking-wider mb-4">
                                    {column.title}
                                  </h3>
                                  <ul className="space-y-2">
                                    {column.items.map((subitem) => (
                                      <li key={subitem.label}>
                                        <a
                                          href={subitem.href}
                                          className="text-gray-600 hover:text-blue-900 transition text-sm font-medium"
                                        >
                                          {subitem.label}
                                        </a>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>
            ))}
          </div>

          {/* Desktop Right Items */}
          <div className="hidden lg:flex items-center gap-6 ml-auto">
            <Link
              to="/careers"
              className="text-gray-700 hover:text-blue-900 font-medium text-sm"
            >
              Careers
            </Link>
            <Link
              to="/contact"
              className="px-6 py-2 bg-blue-900 text-white rounded-lg hover:bg-blue-800 font-medium text-sm transition"
            >
              Get in Touch
            </Link>
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
                    {item.hasDropdown && activeDropdown === item.label && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="bg-gray-50 rounded-lg overflow-hidden"
                      >
                        {/* Featured Image Section */}
                        {item.dropdownContent?.featured && (
                          <a
                            href={item.dropdownContent.featured.link}
                            className="block px-4 py-3 border-b border-gray-200 hover:bg-gray-100 transition"
                          >
                            <img
                              src={item.dropdownContent.featured.image}
                              alt={item.dropdownContent.featured.title}
                              className="w-full h-32 object-cover rounded-lg mb-2"
                            />
                            <p className="font-semibold text-gray-900 text-sm mb-1">
                              {item.dropdownContent.featured.title}
                            </p>
                            <p className="text-xs text-gray-600">
                              {item.dropdownContent.featured.description}
                            </p>
                          </a>
                        )}

                        {/* Menu Items */}
                        {item.dropdownContent?.columns.map((column) => (
                          <div key={column.title} className="py-2">
                            <p className="text-xs uppercase font-semibold text-gray-500 px-4 py-2">
                              {column.title}
                            </p>
                            {column.items.map((subitem) => (
                              <a
                                key={subitem.label}
                                href={subitem.href}
                                className="block px-6 py-2 text-gray-600 hover:text-blue-900 hover:bg-gray-100 transition text-sm font-medium"
                              >
                                {subitem.label}
                              </a>
                            ))}
                          </div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}

              <div className="flex flex-col gap-3 mt-4 pt-4 border-t">
                <Link
                  to="/careers"
                  className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg text-sm font-medium"
                >
                  Careers
                </Link>
                <Link
                  to="/contact"
                  className="px-4 py-2 bg-blue-900 text-white rounded-lg hover:bg-blue-800 text-sm font-medium text-center"
                >
                  Get in Touch
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Spacer */}
      <div className="h-16 md:h-20" />
    </>
  );
};

export default ProfessionalHeader;
