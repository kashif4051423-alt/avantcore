import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Globe, Lightbulb, Shield, TrendingUp, Rocket, HeartHandshake, Star, Layers, Code2, Building2, ArrowRight } from 'lucide-react';
import Section from '@/components/ui/Section';
import Button from '@/components/ui/button';
import { 
  containerAnimation, 
  childAnimation,
  scrollRevealLeft,
  scrollRevealRight,
  scrollReveal,
} from '@/constants/animations';
import { useState, useRef } from 'react';

// 3D Team Card Component
const Team3DCard = ({ member, variants }: any) => {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLAnchorElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    
    setMousePos({ x, y });
  };

  const rotateX = isHovered ? (mousePos.y - 0.5) * 15 : 0;
  const rotateY = isHovered ? (mousePos.x - 0.5) * 15 : 0;

  return (
    <motion.a
      ref={cardRef}
      href={member.linkedin}
      target="_blank"
      rel="noopener noreferrer"
      variants={variants}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ y: -12, scale: 1.05 }}
      style={{
        perspective: '1200px',
      }}
      className="group h-full"
    >
      <motion.div
        animate={{
          rotateX: `${rotateX}deg`,
          rotateY: `${rotateY}deg`,
        }}
        transition={{ type: 'spring', stiffness: 400, damping: 60 }}
        style={{
          transformStyle: 'preserve-3d' as any,
          transformPerspective: '1200px',
        }}
        className="h-full bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-200 hover:shadow-2xl transition-all duration-300"
      >
        {/* Image Container */}
        <motion.div
          animate={{
            scale: isHovered ? 1.1 : 1,
          }}
          transition={{ duration: 0.4 }}
          className="relative overflow-hidden h-64 bg-gradient-to-b from-blue-50 to-blue-100"
        >
          <img
            src={member.img}
            alt={member.name}
            className="w-full h-full object-cover"
          />
          {/* Overlay gradient on hover */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 0.1 : 0 }}
            className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-blue-500"
          />
        </motion.div>

        {/* Content Container */}
        <motion.div
          animate={{
            y: isHovered ? -4 : 0,
          }}
          transition={{ duration: 0.3 }}
          className="p-6 text-center relative"
          style={{ transformStyle: 'preserve-3d' as any }}
        >
          <motion.div
            animate={{
              opacity: isHovered ? 1 : 0.8,
            }}
          >
            <h3 className="text-lg font-bold text-blue-900 mb-2">{member.name}</h3>
            <p className="text-sm text-blue-600 font-medium mb-4">{member.role}</p>
          </motion.div>

          {/* Animated button */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{
              opacity: isHovered ? 1 : 0,
              y: isHovered ? 0 : 10,
            }}
            transition={{ duration: 0.3 }}
            className="flex items-center justify-center gap-2 text-xs font-semibold text-blue-600 group-hover:text-blue-700"
          >
            <span>View LinkedIn Profile</span>
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </motion.div>
        </motion.div>

        {/* 3D Light effect */}
        <motion.div
          animate={{
            opacity: isHovered ? 0.3 : 0,
            x: mousePos.x * 100 - 50,
            y: mousePos.y * 100 - 50,
          }}
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(circle 100px at var(--x) var(--y), rgba(59, 130, 246, 0.2), transparent)',
            transformStyle: 'preserve-3d' as any,
          }}
        />
      </motion.div>
    </motion.a>
  );
};

const team = [
  {
    name: 'Ahmad Shahzad',
    img: '/newsandevents/ahmad_shahzad.jpg',
    role: 'Chairman',
    linkedin: 'https://www.linkedin.com/in/ahmad-shahzad-cheema-2a696011/'
  },
  {
    name: 'Yamin Virk',
    img: '/newsandevents/yamin_virk.jpg',
    role: 'Founder & CEO',
    linkedin: 'https://www.linkedin.com/in/yamin-virk-4b594a17/'
  },
  {
    name: 'Athar Butt',
    img: '/newsandevents/athar_butt.jpg',
    role: 'Business Development',
    linkedin: 'https://www.linkedin.com/in/matharsaeed?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app&original_referer='
  },
  {
    name: 'Babar Azeem Khan',
    img: '/newsandevents/babar.jpg',
    role: 'Senior Developer',
    linkedin: 'https://www.linkedin.com/in/babar-azeem-a28b15176?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
  },
  {
    name: 'Muhammad Dawood Ahmad',
    img: '/newsandevents/dawood.png',
    role: 'Senior Developer',
    linkedin: 'https://www.linkedin.com/in/muhammad-dawood-ahmed-developer/'
  }
];

const highlights = [
  { icon: <Award className="w-8 h-8 text-primary" />, title: 'Award-Winning', desc: 'Recognized for excellence in digital innovation.' },
  { icon: <Rocket className="w-8 h-8 text-accent" />, title: 'Growth Focused', desc: 'Empowering clients to scale and succeed.' },
  { icon: <Users className="w-8 h-8 text-primary" />, title: 'Expert Team', desc: 'Diverse professionals with deep expertise.' },
  { icon: <TrendingUp className="w-8 h-8 text-accent" />, title: 'Proven Results', desc: 'Delivering measurable business impact.' },
  { icon: <HeartHandshake className="w-8 h-8 text-primary" />, title: 'Trusted Partner', desc: 'Long-term relationships built on trust.' },
  { icon: <Star className="w-8 h-8 text-accent" />, title: 'Client Satisfaction', desc: '100+ happy clients worldwide.' },
  { icon: <Layers className="w-8 h-8 text-primary" />, title: 'Comprehensive Solutions', desc: 'End-to-end digital transformation.' },
  { icon: <Code2 className="w-8 h-8 text-accent" />, title: 'Tech Leadership', desc: 'Cutting-edge software and platforms.' },
  { icon: <Building2 className="w-8 h-8 text-primary" />, title: 'Global Presence', desc: 'Serving clients across 4 continents.' },
];

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm15.5 10.28h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.39v4.58h-3v-9h2.89v1.23h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v4.72z" />
  </svg>
);

const About = () => {
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
              About AvantCore
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Industry-leading digital and telecom specialist, passionate about creating dynamic and engaging digital experiences
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Company Story Section */}
      <Section background="white" spacing="generous">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center max-w-7xl mx-auto"
        >
          <motion.div
            variants={scrollRevealLeft}
            className="relative"
          >
            <div className="rounded-lg overflow-hidden shadow-lg">
              <motion.img
                src="/newsandevents/latest2.jpg"
                alt="AvantCore Company Story"
                className="w-full h-96 object-cover"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.5 }}
              />
            </div>
          </motion.div>

          <motion.div
            variants={scrollRevealRight}
            className="space-y-6"
          >
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Our Story
              </h2>
              <div className="h-1 w-20 bg-blue-600 mb-6"></div>
            </div>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              At Avantcore Technology, we're more than just a tech company – we're a collective driven by the belief that technology should empower and enhance the lives of every individual it touches. We thrive on the entrepreneurial spirit and are dedicated to bringing intelligent solutions to global challenges.
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              Our company is built upon the collective expertise and diverse experiences of our people. We invest in individuals, knowing that they are the architects of our future. We have built, invested and worked on multiple innovative and meaningful projects such as Cricket-infotainment platforms, gaming solutions, payment systems, healthcare apps and digital resources.
            </p>
            
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="inline-block"
            >
              <Button variant="primary" size="lg" className="mt-4">
                Learn More <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </Section>

      {/* Company Highlights */}
      <Section background="light" spacing="generous">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Why We Stand Out
          </h2>
          <p className="text-lg text-gray-600">
            Our commitment to excellence spans across all aspects of our operations
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerAnimation}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto"
        >
          {highlights.slice(0, 6).map((item, index) => (
            <motion.div
              key={index}
              variants={childAnimation}
              whileHover={{ y: -8 }}
              className="h-full"
            >
              <div className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                <div className="mb-4 flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-blue-100">
                    {item.icon}
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed flex-grow">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* Statistics Section */}
      <Section background="white" spacing="generous">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerAnimation}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6 max-w-7xl mx-auto"
        >
          {[
            { number: 10, label: 'Years of Excellence', suffix: '+' },
            { number: 500, label: 'Projects Delivered', suffix: '+' },
            { number: 300, label: 'Active Clients', suffix: '+' },
            { number: 4, label: 'Global Continents', suffix: '' }
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              variants={childAnimation}
              className="bg-white border border-gray-200 rounded-lg p-8 text-center hover:shadow-lg transition-all"
            >
              <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
                {stat.number}{stat.suffix}
              </div>
              <p className="text-gray-600 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* Team Section */}
      <Section background="light" spacing="generous">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Meet Our Professional Team
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Experts dedicated to delivering exceptional results
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerAnimation}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 max-w-7xl mx-auto"
        >
          {team.map((member, index) => (
            <Team3DCard key={index} member={member} variants={childAnimation} />
          ))}
        </motion.div>
      </Section>

      {/* Values Section */}
      <Section background="white" spacing="generous">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Core Values
          </h2>
          <p className="text-lg text-gray-600">
            These principles guide everything we do
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerAnimation}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto"
        >
          {[
            { title: 'Innovation', desc: 'We push boundaries and explore new possibilities to deliver cutting-edge solutions.' },
            { title: 'Integrity', desc: 'Transparency and honesty form the foundation of all our client relationships.' },
            { title: 'Excellence', desc: 'We are committed to delivering the highest quality in every project we undertake.' }
          ].map((value, idx) => (
            <motion.div
              key={idx}
              variants={childAnimation}
              whileHover={{ y: -4 }}
              className="text-center"
            >
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-8 hover:shadow-lg transition-all">
                <h3 className="text-2xl font-bold text-blue-900 mb-3">{value.title}</h3>
                <p className="text-gray-700 leading-relaxed">{value.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* CTA Section */}
      <Section background="light" spacing="generous">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center max-w-7xl mx-auto"
        >
          <motion.div
            variants={scrollRevealLeft}
            className="space-y-8"
          >
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Join Our Journey
              </h2>
              <div className="h-1 w-20 bg-blue-600 mb-6"></div>
            </div>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              We're always looking for talented individuals who share our passion for technology and innovation. Be part of a team that's reshaping the digital landscape.
            </p>
            
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button variant="primary" size="lg">
                Explore Careers
              </Button>
              <Button variant="secondary" size="lg">
                Contact Us
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            variants={scrollRevealRight}
            className="relative"
          >
            <div className="rounded-lg overflow-hidden shadow-lg">
              <motion.img
                src="/newsandevents/latest1.jpg"
                alt="Join Our Team"
                className="w-full h-96 object-cover"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.5 }}
              />
            </div>
          </motion.div>
        </motion.div>
      </Section>
    </div>
  );
};

export default About;

