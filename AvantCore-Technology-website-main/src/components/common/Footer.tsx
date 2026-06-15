import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Linkedin, Globe, Check } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="relative bg-[#06142E] text-white pt-32 pb-8">
      {/* CTA Card */}
      <div className="absolute left-1/2 -top-16 transform -translate-x-1/2 w-full max-w-3xl z-10 px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(37, 124, 255, 0.3)' }}
          transition={{ type: 'spring', stiffness: 300 }}
          className="bg-[#257CFF] rounded-tl-2xl rounded-br-2xl rounded-tr-xl rounded-bl-xl shadow-2xl px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6 relative overflow-hidden group"
          style={{
            background: 'linear-gradient(135deg, #257CFF 0%, #1e5fd9 100%)',
            perspective: '1000px',
            transformStyle: 'preserve-3d',
          }}
        >
          {/* 3D Background Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          
          <div className="flex-1 text-center md:text-left relative z-10">
            <h2 className="text-xl md:text-2xl font-bold mb-1 text-white drop-shadow-lg">Would you like to start a project with us?</h2>
            <p className="text-white/90 text-sm md:text-base max-w-xl mx-auto md:mx-0 drop-shadow">
              Let's embark on your digital transformation journey together.
            </p>
          </div>
          <motion.a 
            href="https://wa.me/923214444146"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center justify-center bg-white text-[#257CFF] font-bold px-6 py-3 rounded-lg shadow-lg text-sm md:text-base hover:bg-gray-100 transition whitespace-nowrap relative z-10 cursor-pointer transform hover:shadow-2xl"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12c0 1.96.52 3.83 1.45 5.44L2.05 22l4.72-1.35C9.23 21.42 10.58 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm0 18c-1.21 0-2.38-.3-3.4-.83l-.24-.14-2.51.72.73-2.48-.15-.24c-.6-1.01-.93-2.18-.93-3.39 0-4.41 3.59-8 8-8s8 3.59 8 8-3.59 8-8 8zm4.31-5.78c-.24-.12-1.42-.7-1.64-.78-.22-.08-.38-.12-.54.12-.16.24-.63.78-.77.94-.14.16-.28.18-.52.06-.24-.12-1.01-.37-1.92-1.19-.71-.63-1.19-1.41-1.33-1.65-.14-.24-.02-.37.1-.49.1-.1.24-.26.36-.39.12-.13.16-.22.24-.37.08-.15.04-.28-.02-.39-.06-.11-.54-1.3-.74-1.78-.19-.46-.38-.4-.54-.41-.14-.01-.3-.01-.46-.01-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2.01 0 1.19.86 2.33 1.02 2.49.16.16 2.21 3.38 5.35 4.73.75.32 1.33.52 1.79.66.75.23 1.43.2 1.97.12.6-.09 1.84-.75 2.1-1.47.26-.72.26-1.34.18-1.47-.08-.13-.24-.2-.5-.32z"/>
            </svg>
          </motion.a>
        </motion.div>
      </div>

      {/* Main Footer Grid */}
      <div className="container mx-auto px-4 mt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Our Mission */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Our Mission</h3>
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              We strive to empower businesses with cutting-edge tools and strategies, driving them towards unparalleled success in the digital landscape. Through relentless innovation and a commitment to excellence, we aim to shape the future of technology.
            </p>
            <div className="flex space-x-3">
              <a href="https://www.linkedin.com/company/avantcore/" target="_blank" rel="noopener noreferrer" className="bg-[#257CFF] hover:bg-blue-700 text-white rounded p-2 transition"><Linkedin className="w-5 h-5" /></a>
              <a href="https://www.facebook.com/share/1D8UoyVNHh/" target="_blank" rel="noopener noreferrer" className="bg-[#257CFF] hover:bg-blue-700 text-white rounded p-2 transition"><Facebook className="w-5 h-5" /></a>
              <a href="https://wa.me/923214444146" target="_blank" rel="noopener noreferrer" className="bg-[#257CFF] hover:bg-blue-700 text-white rounded p-2 transition">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12c0 1.96.52 3.83 1.45 5.44L2.05 22l4.72-1.35C9.23 21.42 10.58 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm0 18c-1.21 0-2.38-.3-3.4-.83l-.24-.14-2.51.72.73-2.48-.15-.24c-.6-1.01-.93-2.18-.93-3.39 0-4.41 3.59-8 8-8s8 3.59 8 8-3.59 8-8 8zm4.31-5.78c-.24-.12-1.42-.7-1.64-.78-.22-.08-.38-.12-.54.12-.16.24-.63.78-.77.94-.14.16-.28.18-.52.06-.24-.12-1.01-.37-1.92-1.19-.71-.63-1.19-1.41-1.33-1.65-.14-.24-.02-.37.1-.49.1-.1.24-.26.36-.39.12-.13.16-.22.24-.37.08-.15.04-.28-.02-.39-.06-.11-.54-1.3-.74-1.78-.19-.46-.38-.4-.54-.41-.14-.01-.3-.01-.46-.01-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2.01 0 1.19.86 2.33 1.02 2.49.16.16 2.21 3.38 5.35 4.73.75.32 1.33.52 1.79.66.75.23 1.43.2 1.97.12.6-.09 1.84-.75 2.1-1.47.26-.72.26-1.34.18-1.47-.08-.13-.24-.2-.5-.32z"/>
                </svg>
              </a>
              <a href="https://cloudbillingmanager.com/" target="_blank" rel="noopener noreferrer" className="bg-[#257CFF] hover:bg-blue-700 text-white rounded p-2 transition"><Globe className="w-5 h-5" /></a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Services</h3>
            <ul className="space-y-2 text-white/90">
              <li className="flex items-center gap-2"><Check size={18} className="text-green-400 flex-shrink-0" />Data Management And Analytics</li>
              <li className="flex items-center gap-2"><Check size={18} className="text-green-400 flex-shrink-0" />Custom Software Development</li>
              <li className="flex items-center gap-2"><Check size={18} className="text-green-400 flex-shrink-0" />Application Integration Training</li>
              <li className="flex items-center gap-2"><Check size={18} className="text-green-400 flex-shrink-0" />Cloud Solutions</li>
              <li className="flex items-center gap-2"><Check size={18} className="text-green-400 flex-shrink-0" />GIS Integration And Solutions Solutions</li>
              <li className="flex items-center gap-2"><Check size={18} className="text-green-400 flex-shrink-0" />Training And Support</li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2 text-white/90">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/products">Products</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
              <li><Link to="/news">News & Events</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/company">Company</Link></li>
              <li><Link to="/leadership">Leadership</Link></li>
              <li><Link to="/career">Career</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Contact</h3>
            <div className="flex items-start space-x-3 mb-3">
              <MapPin className="w-5 h-5 text-[#257CFF] mt-1" />
              <div className="text-sm text-white/90">
                93-CCA,1st Floor, Commercial Sector DD,<br />DHA Phase 4, Lahore.
              </div>
            </div>
            <div className="flex items-start space-x-3 mb-3">
              <MapPin className="w-5 h-5 text-[#257CFF] mt-1" />
              <div className="text-sm text-white/90">
                Orega 4 Longwalk, Stockley Park,<br />Uxbridge UB11 1FE, London.
              </div>
            </div>
            <div className="flex items-start space-x-3 mb-3">
              <Phone className="w-5 h-5 text-[#257CFF] mt-1" />
              <div className="text-sm text-white/90">+44 7429 688461</div>
            </div>
            <div className="flex items-start space-x-3 mb-3">
              <Phone className="w-5 h-5 text-[#257CFF] mt-1" />
              <div className="text-sm text-white/90">+92 3214444146</div>
            </div>
            <div className="flex items-start space-x-3">
              <Mail className="w-5 h-5 text-[#257CFF] mt-1" />
              <div className="text-sm text-white/90">info@avantcoretech.com</div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#1A2236] mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            Copyright © 2024 AVANTCORE
          </div>
          <div className="flex space-x-6">
            <a href="https://avantcoretech.com" className="text-gray-400 hover:text-[#257CFF] text-sm transition-colors duration-200">About</a>
            <a href="/contact" className="text-gray-400 hover:text-[#257CFF] text-sm transition-colors duration-200">Contact</a>
            <a href="/services" className="text-gray-400 hover:text-[#257CFF] text-sm transition-colors duration-200">Services</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
