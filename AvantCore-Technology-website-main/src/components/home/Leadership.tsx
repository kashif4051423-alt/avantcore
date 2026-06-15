
import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Mail, Phone, User } from 'lucide-react';

const Leadership = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="text-orange-500">Leadership</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Meet the visionary leaders driving innovation and excellence at Avantcore Technologies.
          </p>
        </motion.div>

        {/* Leadership Card */}
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-2xl shadow-xl overflow-hidden"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              {/* Image Section */}
              <div className="bg-gradient-to-br from-blue-800 to-blue-900 p-12 flex items-center justify-center">
                <div className="w-64 h-64 bg-gray-300 rounded-full flex items-center justify-center text-gray-600">
                  <div className="text-center">
                    <User size={80} className="mb-2 mx-auto" />
                    <div className="text-sm">Executive Photo</div>
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-12">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <h3 className="text-3xl font-bold text-blue-800 mb-2">
                    Ahmed Shahzad Cheema
                  </h3>
                  <div className="text-xl text-orange-500 font-semibold mb-6">
                    Founder & Chief Executive Officer
                  </div>

                  <div className="space-y-4 text-gray-600 leading-relaxed">
                    <p>
                      Ahmed Shahzad Cheema is the founder and driving force behind Avantcore Technologies. 
                      As the company promoter since its inception, he has been instrumental in establishing 
                      the organization's vision and strategic direction.
                    </p>
                    
                    <p>
                      With extensive experience in technology leadership, Ahmed serves as a member of various 
                      National and International Boards, bringing global insights and expertise to the organization. 
                      His commitment to innovation and excellence has positioned Avantcore as a leading provider 
                      of enterprise technology solutions.
                    </p>

                    <p>
                      Under his leadership, Avantcore has successfully delivered cutting-edge solutions across 
                      multiple industries and geographic regions, establishing a reputation for quality, 
                      reliability, and customer satisfaction.
                    </p>
                  </div>

                  {/* Contact Links */}
                  <div className="flex space-x-4 mt-8">
                    <a
                      href="#"
                      className="flex items-center justify-center w-12 h-12 bg-blue-100 hover:bg-blue-200 text-blue-600 rounded-full transition-colors duration-200"
                      title="LinkedIn Profile"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a
                      href="mailto:ahmed@avantcoretech.com"
                      className="flex items-center justify-center w-12 h-12 bg-orange-100 hover:bg-orange-200 text-orange-600 rounded-full transition-colors duration-200"
                      title="Send Email"
                    >
                      <Mail className="w-5 h-5" />
                    </a>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Company Values */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <div className="text-center">
            <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-2xl font-bold">V</span>
            </div>
            <h4 className="text-xl font-bold text-blue-800 mb-3">Vision</h4>
            <p className="text-gray-600">
              To be the global leader in innovative technology solutions that transform businesses.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-2xl font-bold">M</span>
            </div>
            <h4 className="text-xl font-bold text-blue-800 mb-3">Mission</h4>
            <p className="text-gray-600">
              Delivering excellence through cutting-edge technology and exceptional customer service.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-2xl font-bold">E</span>
            </div>
            <h4 className="text-xl font-bold text-blue-800 mb-3">Excellence</h4>
            <p className="text-gray-600">
              Committed to the highest standards of quality and innovation in everything we do.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Leadership;
