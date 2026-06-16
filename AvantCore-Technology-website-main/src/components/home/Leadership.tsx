
import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Mail, Phone, User } from 'lucide-react';

const Leadership = () => {
  const teamMembers = [
    {
      name: "Ahmed Shahzad Cheema",
      title: "Founder & Chief Executive Officer",
      bio: "Ahmed Shahzad Cheema is the founder and driving force behind Avantcore Technologies. As the company promoter since its inception, he has been instrumental in establishing the organization's vision and strategic direction.\n\nWith extensive experience in technology leadership, Ahmed serves as a member of various National and International Boards, bringing global insights and expertise to the organization. His commitment to innovation and excellence has positioned Avantcore as a leading provider of enterprise technology solutions.\n\nUnder his leadership, Avantcore has successfully delivered cutting-edge solutions across multiple industries and geographic regions, establishing a reputation for quality, reliability, and customer satisfaction.",
      linkedIn: "#",
      email: "ahmed@avantcoretech.com",
    },
    {
      name: "Rana Rizwan Sarwar",
      title: "Senior Executive",
      bio: "Rana Rizwan Sarwar brings extensive expertise in technology strategy and business development to Avantcore Technologies. With a proven track record of driving innovation and delivering results across multiple sectors, Rana is instrumental in expanding our market presence and strengthening client relationships.\n\nHis strategic vision and technical acumen have contributed significantly to Avantcore's growth and success. Rana is dedicated to fostering a culture of excellence and continuous improvement, ensuring that our solutions meet the highest standards of quality and customer satisfaction.\n\nRana's commitment to innovation and his deep industry knowledge make him a valuable member of our leadership team.",
      linkedIn: "https://www.linkedin.com/in/rana-rizwan-sarwar-55092670",
      email: "",
    }
  ];

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
            Meet Our Professional <span className="text-orange-500">Team</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Experts dedicated to delivering exceptional results
          </p>
        </motion.div>

        {/* Leadership Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                {/* Image Section */}
                <div className="bg-gradient-to-br from-blue-800 to-blue-900 p-12 flex items-center justify-center">
                  <div className="w-48 h-48 bg-gray-300 rounded-full flex items-center justify-center text-gray-600">
                    <div className="text-center">
                      <User size={60} className="mb-2 mx-auto" />
                      <div className="text-xs">Executive Profile</div>
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-8 lg:p-10 flex flex-col justify-between">
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 + 0.2 }}
                  >
                    <h3 className="text-2xl lg:text-3xl font-bold text-blue-800 mb-2">
                      {member.name}
                    </h3>
                    <div className="text-lg text-orange-500 font-semibold mb-4">
                      {member.title}
                    </div>

                    <div className="space-y-3 text-gray-600 leading-relaxed text-sm lg:text-base">
                      {member.bio.split('\n\n').map((paragraph, i) => (
                        <p key={i}>{paragraph}</p>
                      ))}
                    </div>

                    {/* Contact Links */}
                    <div className="flex space-x-4 mt-6">
                      {member.linkedIn && (
                        <a
                          href={member.linkedIn}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center w-12 h-12 bg-blue-100 hover:bg-blue-200 text-blue-600 rounded-full transition-colors duration-200"
                          title="LinkedIn Profile"
                        >
                          <Linkedin className="w-5 h-5" />
                        </a>
                      )}
                      {member.email && (
                        <a
                          href={`mailto:${member.email}`}
                          className="flex items-center justify-center w-12 h-12 bg-orange-100 hover:bg-orange-200 text-orange-600 rounded-full transition-colors duration-200"
                          title="Send Email"
                        >
                          <Mail className="w-5 h-5" />
                        </a>
                      )}
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Company Values */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8"
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
