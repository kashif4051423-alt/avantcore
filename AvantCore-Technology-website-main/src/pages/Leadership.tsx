import React from 'react';
import { motion } from 'framer-motion';
import { LinkedinIcon } from 'lucide-react';
import Section from '@/components/ui/Section';
import { 
  containerAnimation, 
  childAnimation,
  scrollReveal,
} from '@/constants/animations';

const team = [
  {
    name: 'Ahmad Shahzad',
    title: 'Chairman',
    bio: 'Visionary leader with 25+ years of experience in technology and business development. Ahmad has led multiple ventures and strategic initiatives that shaped the tech industry landscape.',
    img: '/newsandevents/ahmad_shahzad.jpg',
    linkedin: 'https://www.linkedin.com/in/ahmad-shahzad-cheema-2a696011/',
    expertise: ['Strategic Vision', 'Business Development', 'Industry Leadership']
  },
  {
    name: 'Yamin Virk',
    title: 'Founder & CEO',
    bio: 'Innovative entrepreneur with a passion for digital transformation. Yamin founded AvantCore with the mission to deliver world-class technology solutions.',
    img: '/newsandevents/yamin_virk.jpg',
    linkedin: 'https://www.linkedin.com/in/yamin-virk-4b594a17/',
    expertise: ['Product Strategy', 'Innovation', 'Digital Transformation']
  },
  {
    name: 'Athar Butt',
    title: 'Business Development',
    bio: 'Strategic business leader focused on market expansion and client relationships. Athar manages key partnerships and drives business growth initiatives.',
    img: '/newsandevents/athar_butt.jpg',
    linkedin: 'https://www.linkedin.com/in/matharsaeed?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app&original_referer=',
    expertise: ['Client Relations', 'Market Expansion', 'Sales Strategy']
  },
  {
    name: 'Babar Azeem Khan',
    title: 'Senior Developer',
    bio: 'Technical architect with deep expertise in enterprise software development. Babar leads the development of our flagship ERP and HCM solutions.',
    img: '/newsandevents/babar.jpg',
    linkedin: 'https://www.linkedin.com/in/babar-azeem-a28b15176?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    expertise: ['Software Architecture', 'Enterprise Systems', 'Technical Leadership']
  },
  {
    name: 'Muhammad Dawood Ahmad',
    title: 'Senior Developer',
    bio: 'Full-stack developer and system architect. Dawood specializes in building scalable solutions and mentoring junior developers.',
    img: '/newsandevents/dawood.png',
    linkedin: 'https://www.linkedin.com/in/muhammad-dawood-ahmed-developer/',
    expertise: ['Full-Stack Development', 'System Design', 'Mentoring']
  }
];

const LinkedinIconComponent = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm15.5 10.28h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.39v4.58h-3v-9h2.89v1.23h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v4.72z" />
  </svg>
);

const LeadershipPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 0.8 }}
        className="relative bg-gradient-to-r from-blue-900 to-blue-800 text-white py-24 overflow-hidden"
      >
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Our Leadership
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Experienced leaders guiding AvantCore's mission to transform digital landscapes
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Leadership Intro */}
      <Section background="light" spacing="generous">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            Meet the Team
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Our leadership team brings together decades of combined experience in technology, business development, and digital innovation. Each member is dedicated to driving AvantCore's vision of delivering world-class solutions to clients globally.
          </p>
        </motion.div>
      </Section>

      {/* Leadership Cards */}
      <Section background="white" spacing="generous">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerAnimation}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto"
        >
          {team.map((member, index) => (
            <motion.div
              key={index}
              variants={childAnimation}
              whileHover={{ y: -8 }}
              className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all"
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-8">
                <div className="md:col-span-1">
                  <div className="overflow-hidden rounded-lg">
                    <motion.img
                      src={member.img}
                      alt={member.name}
                      className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>
                
                <div className="md:col-span-2 flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-1">
                      {member.name}
                    </h3>
                    <p className="text-blue-600 font-semibold mb-4">
                      {member.title}
                    </p>
                    
                    <p className="text-gray-700 text-sm leading-relaxed mb-6">
                      {member.bio}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {member.expertise.map((exp, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-blue-100 text-blue-700 text-xs rounded-full font-medium"
                        >
                          {exp}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors"
                  >
                    <LinkedinIconComponent className="w-5 h-5" />
                    <span className="text-sm font-medium">Connect on LinkedIn</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* Leadership Values - 2-Column Grid */}
      <Section background="light" spacing="generous">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center max-w-3xl mx-auto"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            What We Believe In
          </h2>
          <p className="text-lg text-gray-600">
            Core principles that guide our leadership decisions
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerAnimation}
          className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {[
            {
              title: 'Client Success',
              desc: 'We measure our success by the success of our clients. Their growth and achievements are our achievements.'
            },
            {
              title: 'Continuous Innovation',
              desc: 'We stay ahead of technology trends, constantly exploring new solutions and methodologies.'
            },
            {
              title: 'Talent Development',
              desc: 'We invest in our people, fostering a culture of learning and professional growth.'
            },
            {
              title: 'Integrity & Transparency',
              desc: 'We conduct business with honesty and openness, building trust with every stakeholder.'
            },
            {
              title: 'Excellence in Execution',
              desc: 'We take pride in delivering quality solutions that exceed expectations consistently.'
            },
            {
              title: 'Global Perspective',
              desc: 'We think globally while acting locally, understanding diverse markets and cultures.'
            }
          ].map((value, idx) => (
            <motion.div
              key={idx}
              variants={childAnimation}
              className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-all"
            >
              <h3 className="text-lg font-bold text-blue-900 mb-2">
                {value.title}
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                {value.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* CTA Section */}
      <Section background="white" spacing="generous">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            Join Our Talented Team
          </h2>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            We're always looking for passionate professionals who want to make an impact in the digital transformation space. Explore career opportunities with AvantCore Technologies.
          </p>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="inline-block"
          >
            <a
              href="/career"
              className="px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center gap-2"
            >
              Explore Careers
            </a>
          </motion.div>
        </motion.div>
      </Section>
    </div>
  );
};

export default LeadershipPage;

