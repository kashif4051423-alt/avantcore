import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, CheckCircle, Users, Briefcase, Target, X } from 'lucide-react';

const processSteps = [
  {
    title: 'Application',
    img: '/career/application.png',
    desc: 'Scroll through the current openings below and submit your application for the position with the required skills set.',
    icon: CheckCircle
  },
  {
    title: 'Screening',
    img: '/career/screening.png',
    desc: 'Our Recruitment team will review your application. The expert recruiters at Khaleef will screen your resume and find the best fit for you.',
    icon: Users
  },
  {
    title: 'Assessment',
    img: '/career/assesment.png',
    desc: 'We use multiple assessment techniques to understand your fit to the role and to our culture, values and ways of working.',
    icon: Target
  },
  {
    title: 'Offer',
    img: '/career/offer.png',
    desc: 'Once the Assessment process will complete for all "qualified" candidates, our recruitment team will review their insights with the Hiring Manager and choose their preferred candidate.',
    icon: Briefcase
  }
];

const jobs = [
  {
    id: 'graphic-designer',
    title: 'Graphic Designer',
    location: 'Lahore',
    desc: 'Create compelling visual content and design materials for marketing, branding, and digital platforms. You\'ll design social media creatives, website UI assets, and maintain brand consistency across all platforms.'
  },
  {
    id: 'hr-executive',
    title: 'HR Executive',
    location: 'Lahore',
    desc: 'Join our HR team managing recruitment, onboarding, employee records, and HR policy implementation. You\'ll support performance management and drive employee engagement activities to foster a positive workplace culture.'
  },
  {
    id: 'frontend-developer',
    title: 'Frontend Developer',
    location: 'Lahore',
    desc: 'Build responsive web applications using React.js and modern web technologies. You\'ll develop reusable UI components, integrate APIs, and optimize performance to deliver exceptional user experiences.'
  },
  {
    id: 'mobile-app-developer',
    title: 'Mobile App Developer',
    location: 'Lahore',
    desc: 'Develop high-performance Android and iOS applications using Flutter or React Native. You\'ll build scalable mobile solutions, integrate backend services, and optimize performance across platforms.'
  },
  {
    id: 'game-developer',
    title: 'Game Developer',
    location: 'Lahore',
    desc: 'Create engaging games using Unity or Unreal Engine. You\'ll implement gameplay mechanics, optimize performance, and collaborate with designers and artists to deliver interactive gaming experiences.'
  },
  {
    id: 'summer-internship-2026',
    title: 'Summer Internship Program 2026',
    location: 'Lahore',
    desc: 'Gain hands-on industry experience through our 8-12 week internship program. Perfect for final-year students and fresh graduates to work on real projects, learn best practices, and get mentorship from experienced professionals.'
  },
  {
    id: 'graduate-trainee-program',
    title: 'Graduate Trainee Program',
    location: 'Lahore',
    desc: 'Launch your career with our structured trainee program. Fresh graduates and early-career professionals work on real projects, participate in training, and develop skills under mentorship from industry experts.'
  },
  {
    id: 'senior-fullstack-engineer',
    title: 'Senior Software Engineer -Full stack',
    location: 'Lahore',
    desc: 'Avantcore Technologies seeks a talented Full Stack Developer responsible for crafting and implementing cutting-edge web applications. Your role involves integrating components and writing robust client/server-side solutions. If you are skilled in web frameworks and thrive in dynamic environments, apply now to shape the future of web development with us.'
  },
  {
    id: 'gis-specialist',
    title: 'Geographic Information System (GIS)',
    location: 'Lahore',
    desc: 'Avantcore Technologies is currently seeking a GIS Integration Specialist to spearhead the seamless integration of GIS technology across diverse systems. In this pivotal role, you will be instrumental in harmonizing spatial data with existing workflows, ensuring a smooth and efficient implementation process. If you possess a strong aptitude for GIS implementation and excel in the management of spatial data, we invite you to join us in shaping the future of GIS integration.'
  },
  {
    id: 'nodejs-developer',
    title: 'Node.js Developer',
    location: 'Lahore',
    desc: 'Join Avantcore Technologies as a Node.js Developer, responsible for building robust server-side applications. Your role involves crafting efficient solutions and collaborating with cross-functional teams. If you are skilled in Node.js development and thrive in dynamic environments, apply now to drive innovation with us.'
  },
  {
    id: 'php-developer',
    title: 'PHP Developer',
    location: 'Lahore',
    desc: 'Avantcore Technologies is currently seeking a skilled PHP Developer to contribute to the development of dynamic and scalable web solutions. The successful candidate will be responsible for crafting efficient, high-quality code and collaborating closely with multidisciplinary teams. If you possess strong expertise in PHP development and are dedicated to driving innovation in the digital sphere, we invite you to apply and become a valuable part of our team.'
  }
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const fadeLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0 },
};

const fadeRight = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0 },
};

const Career = () => {
  const navigate = useNavigate();
  const jobsRef = React.useRef<HTMLDivElement>(null);
  const [selectedJob, setSelectedJob] = useState<any>(null);

  const scrollToJobs = () => {
    jobsRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  // Job details database
  const jobsDatabase: Record<string, any> = {
    'graphic-designer': {
      title: 'Graphic Designer',
      department: 'Design & Creative',
      experience: '1-3 years',
      location: 'Lahore, Pakistan',
      deadline: '31 December 2026',
      responsibilities: [
        'Create marketing and branding materials',
        'Design social media creatives and content',
        'Design website and application UI assets',
        'Collaborate with development and marketing teams',
        'Maintain brand consistency across all platforms'
      ],
      requirements: [
        'Proficiency in Adobe Photoshop and Illustrator',
        'Experience with Figma or similar design tools',
        'Strong creative thinking and visual design skills',
        'Knowledge of branding and visual identity'
      ]
    },
    'hr-executive': {
      title: 'HR Executive',
      department: 'Human Resources',
      experience: '1-3 years',
      location: 'Lahore, Pakistan',
      deadline: '31 December 2026',
      responsibilities: [
        'Manage recruitment and onboarding processes',
        'Maintain and organize employee records',
        'Implement HR policies and procedures',
        'Support performance management activities',
        'Organize employee engagement activities and events'
      ],
      requirements: [
        'Strong communication and interpersonal skills',
        'Experience in recruitment and hiring',
        'Knowledge of HR administration and compliance',
        'Proficiency in Microsoft Office Suite'
      ]
    },
    'frontend-developer': {
      title: 'Frontend Developer',
      department: 'Software Development',
      experience: '1-3 years',
      location: 'Lahore, Pakistan',
      deadline: '31 December 2026',
      responsibilities: [
        'Develop responsive web applications',
        'Build reusable and maintainable UI components',
        'Integrate REST APIs and backend services',
        'Optimize application performance and load times',
        'Maintain code quality through testing and best practices'
      ],
      requirements: [
        'Strong proficiency in React.js',
        'Solid JavaScript and TypeScript knowledge',
        'Experience with HTML5 and CSS3',
        'Familiarity with Tailwind CSS or similar frameworks'
      ]
    },
    'mobile-app-developer': {
      title: 'Mobile App Developer',
      department: 'Software Development',
      experience: '1-3 years',
      location: 'Lahore, Pakistan',
      deadline: '31 December 2026',
      responsibilities: [
        'Build Android and iOS applications',
        'Develop scalable and maintainable mobile solutions',
        'Integrate APIs and backend services',
        'Optimize app performance and user experience',
        'Publish and maintain applications on app stores'
      ],
      requirements: [
        'Proficiency in Flutter or React Native',
        'Experience with REST APIs integration',
        'Knowledge of Firebase or similar backend services',
        'Understanding of mobile UI/UX principles'
      ]
    },
    'game-developer': {
      title: 'Game Developer',
      department: 'Software Development',
      experience: '1-3 years',
      location: 'Lahore, Pakistan',
      deadline: '31 December 2026',
      responsibilities: [
        'Develop interactive and engaging games',
        'Implement gameplay mechanics and features',
        'Optimize game performance across platforms',
        'Collaborate with designers and artists',
        'Debug and troubleshoot game issues'
      ],
      requirements: [
        'Proficiency in Unity or Unreal Engine',
        'Strong C# or C++ programming skills',
        'Understanding of game physics and mechanics',
        'Problem-solving and creative thinking abilities'
      ]
    },
    'summer-internship-2026': {
      title: 'Summer Internship Program 2026',
      department: 'Multiple Departments',
      experience: '0 years',
      location: 'Lahore, Pakistan',
      deadline: '31 December 2026',
      responsibilities: [
        'Work on real client and internal projects',
        'Collaborate with mentors and team members',
        'Learn industry best practices and tools',
        'Participate in training and knowledge sessions',
        'Maintain professional standards and deliverables'
      ],
      requirements: [
        'Final-year student or fresh graduate',
        'Background in CS, Software Engineering, IT, Business, or Design',
        'Strong communication and teamwork skills',
        'Willingness to learn and adapt'
      ]
    },
    'graduate-trainee-program': {
      title: 'Graduate Trainee Program',
      department: 'Technology & Business',
      experience: '0-1 years',
      location: 'Lahore, Pakistan',
      deadline: '31 October 2026',
      responsibilities: [
        'Participate in structured training programs',
        'Work on real client projects',
        'Learn industry best practices and methodologies',
        'Collaborate with senior professionals and mentors',
        'Contribute to team deliverables'
      ],
      requirements: [
        'Fresh graduate or up to 1 year experience',
        'Bachelor\'s degree in CS, Software Engineering, IT, Business Administration, or Computer Engineering',
        'Strong foundation in chosen field',
        'Excellent communication and interpersonal skills'
      ]
    },
    'senior-fullstack-engineer': {
      title: 'Senior Software Engineer - Full Stack',
      department: 'Engineering',
      experience: '3-5 years',
      location: 'Lahore, Pakistan',
      deadline: '31 December 2026',
      responsibilities: [
        'Design and implement robust full-stack web applications',
        'Lead architectural decisions and code reviews',
        'Collaborate with product and design teams',
        'Mentor junior developers and contribute to team growth',
        'Optimize application performance and scalability'
      ],
      requirements: [
        'Strong proficiency in modern web frameworks',
        'Experience with cloud platforms (AWS, GCP, Azure)',
        'Solid understanding of databases and data modeling',
        'Experience with microservices architecture'
      ]
    },
    'gis-specialist': {
      title: 'Geographic Information System (GIS) Specialist',
      department: 'Solutions',
      experience: '2-4 years',
      location: 'Lahore, Pakistan',
      deadline: '31 December 2026',
      responsibilities: [
        'Lead GIS implementation projects for clients',
        'Design and develop custom GIS solutions',
        'Manage spatial databases and data integration',
        'Create maps and geographic visualizations',
        'Provide technical support and training'
      ],
      requirements: [
        'Proficiency in ArcGIS, QGIS, or similar platforms',
        'Experience with spatial databases',
        'Knowledge of geospatial data formats and standards',
        'Strong analytical and problem-solving skills'
      ]
    },
    'nodejs-developer': {
      title: 'Node.js Developer',
      department: 'Engineering',
      experience: '2-3 years',
      location: 'Lahore, Pakistan',
      deadline: '31 December 2026',
      responsibilities: [
        'Develop and maintain Node.js applications',
        'Design RESTful and GraphQL APIs',
        'Optimize database queries and server performance',
        'Implement authentication and security measures',
        'Collaborate with frontend developers and DevOps teams'
      ],
      requirements: [
        'Strong JavaScript/TypeScript skills',
        'Experience with Express.js or similar frameworks',
        'Knowledge of RESTful and GraphQL API design',
        'Experience with MongoDB or PostgreSQL'
      ]
    },
    'php-developer': {
      title: 'PHP Developer',
      department: 'Engineering',
      experience: '2-4 years',
      location: 'Lahore, Pakistan',
      deadline: '31 December 2026',
      responsibilities: [
        'Develop and maintain PHP applications',
        'Build database-driven web solutions',
        'Write clean and efficient code',
        'Optimize web application performance',
        'Implement security best practices'
      ],
      requirements: [
        'Proficiency in PHP 7+ and object-oriented programming',
        'Experience with Laravel or similar frameworks',
        'MySQL or PostgreSQL database knowledge',
        'Understanding of web security principles'
      ]
    }
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white">
      {/* Hero Section */}
      <motion.section
        className="relative py-32 px-4 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute inset-0">
          <motion.div 
            className="absolute top-10 right-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 10, repeat: Infinity }}
          ></motion.div>
        </div>
        
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.2 } } }}
              className="text-white space-y-6"
            >
              <motion.div variants={fadeUp}>
                <div className="text-sm font-semibold tracking-widest text-blue-300 uppercase mb-2">Career Opportunity</div>
              </motion.div>
              
              <motion.h1 className="text-5xl md:text-6xl font-bold leading-tight" variants={fadeUp}>
                Grow <span className="text-orange-400">With Us</span>
              </motion.h1>

              <motion.h2 className="text-2xl font-semibold text-blue-100" variants={fadeUp}>
                Join our extremely talented team
              </motion.h2>

              <motion.p className="text-base md:text-lg text-blue-100 leading-relaxed" variants={fadeUp}>
                At Avantcore Technology, we believe in fostering growth – not just for our company, but for every individual who joins our journey. When you choose to partner with us, you're not just investing in a product or service; you're joining a community committed to collective advancement and personal development.
              </motion.p>

              <motion.p className="text-sm text-blue-200 leading-relaxed" variants={fadeUp}>
                In the ever-evolving landscape of technology, staying ahead requires a commitment to continuous learning. At Avantcore Technology, we embrace a culture of curiosity and innovation, encouraging our team members to explore new ideas, technologies, and approaches.
              </motion.p>

              <motion.p className="font-semibold text-orange-300 text-lg" variants={fadeUp}>
                Find out what you're capable of at Avantcore Technologies
              </motion.p>

              <motion.button
                variants={fadeUp}
                whileHover={{ x: 5 }}
                onClick={scrollToJobs}
                className="inline-flex items-center gap-2 px-8 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Explore Careers <ArrowRight size={20} />
              </motion.button>
            </motion.div>

            {/* Right Image */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeRight}
              transition={{ duration: 0.8 }}
              className="flex justify-center md:justify-end"
            >
              <div className="relative group">
                <div className="absolute -inset-2 bg-gradient-to-r from-orange-500 to-blue-600 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-500"></div>
                <img 
                  src="/career/career.jpg" 
                  alt="Grow With Us" 
                  className="relative max-w-sm rounded-2xl shadow-2xl border border-white/20 w-full h-auto"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Process Steps Section */}
      <section className="py-24 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <div className="text-sm font-semibold tracking-widest text-orange-400 uppercase mb-3">Our Process</div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Recruitment Journey</h2>
            <div className="w-20 h-1 mx-auto bg-gradient-to-r from-blue-400 to-orange-500 rounded-full mb-6"></div>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">We've streamlined our hiring process to find the best talent and provide an excellent candidate experience</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {processSteps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.title}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="relative bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-700 hover:shadow-2xl hover:border-orange-500/50 transition-all duration-300 group"
                >
                  {/* Step Number */}
                  <div className="absolute top-0 left-6 transform -translate-y-1/2">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-orange-500 text-white font-bold text-lg shadow-lg">
                      {idx + 1}
                    </div>
                  </div>

                  {/* Icon */}
                  <motion.div 
                    className="mt-6 mb-4 flex justify-center"
                    whileHover={{ scale: 1.2, rotate: 10 }}
                  >
                    <Icon className="w-10 h-10 text-orange-500" />
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-3 text-center tracking-widest uppercase">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-gray-300 text-center leading-relaxed mb-4">
                    {step.desc}
                  </p>

                  {/* Divider */}
                  <div className="h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent my-4"></div>

                  {/* Image Preview */}
                  <div className="overflow-hidden rounded-lg bg-gray-700">
                    <img 
                      src={step.img} 
                      alt={step.title}
                      className="w-full h-20 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>

                  {/* Connection line for desktop */}
                  {idx < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-8 w-8 h-1 bg-gradient-to-r from-orange-400 to-transparent transform -translate-y-1/2"></div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Professional Divider */}
      <motion.div 
        className="h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent my-12"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 1 }}
        style={{ originX: 0.5 }}
      ></motion.div>

      {/* Open Vacancies Section */}
      <section className="py-24 bg-gradient-to-b from-gray-800 to-gray-900" ref={jobsRef}>
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            transition={{ duration: 0.7 }}
            className="mb-16"
          >
            <div className="text-sm font-semibold tracking-widest text-orange-400 uppercase mb-3">Current Openings</div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Open Vacancies</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-orange-500 rounded-full"></div>
          </motion.div>

          <div className="space-y-6">
            {jobs.map((job, idx) => (
              <motion.div
                key={job.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeUp}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                whileHover={{ x: 8 }}
                className="group relative bg-gray-800 rounded-xl p-8 shadow-lg border border-gray-700 hover:shadow-2xl hover:border-orange-500/50 transition-all duration-300 overflow-hidden"
              >
                {/* Background accent */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-orange-500/10 to-blue-600/10 rounded-full group-hover:scale-150 transition-transform duration-300" aria-hidden="true"></div>

                <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center gap-3 mb-3">
                      <h3 className="text-xl md:text-2xl font-bold text-white">{job.title}</h3>
                      <motion.span 
                        whileHover={{ scale: 1.1 }}
                        className="inline-block px-3 py-1 bg-blue-900/50 text-blue-300 font-semibold text-sm rounded-full w-fit border border-blue-700/50"
                      >
                        {job.location}
                      </motion.span>
                    </div>

                    <p className="text-gray-300 leading-relaxed text-base mb-4">
                      {job.desc}
                    </p>

                    <div className="flex items-center gap-2 text-orange-400 font-semibold text-sm">
                      <CheckCircle size={16} /> Apply before deadline
                    </div>
                  </div>

                  <div className="flex-shrink-0 flex gap-3">
                    <motion.button
                      whileHover={{ scale: 1.08 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setSelectedJob(job.id)}
                      className="bg-gradient-to-r from-blue-600 to-orange-500 hover:from-blue-700 hover:to-orange-600 text-white font-bold px-6 py-3 rounded-lg shadow-lg transition-all duration-300 transform inline-flex items-center gap-2 whitespace-nowrap"
                    >
                      View Details <ArrowRight size={16} />
                    </motion.button>

                    <motion.button
                      whileHover={{ scale: 1.08 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => navigate(`/career/${job.id}`)}
                      className="flex-shrink-0 bg-gradient-to-r from-blue-600 to-orange-500 hover:from-blue-700 hover:to-orange-600 text-white font-bold px-8 py-3 rounded-lg shadow-lg transition-all duration-300 transform inline-flex items-center gap-2 whitespace-nowrap"
                    >
                      Apply Now <ArrowRight size={18} />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* General Application CTA */}
      <motion.section
        className="py-24 bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 mb-32 relative overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <div className="absolute inset-0">
          <motion.div 
            className="absolute bottom-0 left-1/2 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -translate-x-1/2"
            animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 8, repeat: Infinity }}
          ></motion.div>
        </div>

        <div className="container mx-auto px-4 max-w-3xl text-center relative z-10">
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">Think You've Got What It Takes?</h3>
          <p className="text-lg text-gray-300 mb-6">If you're thinking of working with us, we'd love to hear from you!</p>
          <p className="text-base text-gray-400 mb-8 leading-relaxed">If there isn't a position that fits you just yet, simply join our talent company and upload your CV. Our recruiters always have their eye on our talent register, so if something comes up that matches your profile, we'll be in touch!</p>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-10 py-4 bg-gradient-to-r from-blue-600 to-orange-500 hover:from-blue-700 hover:to-orange-600 text-white font-bold rounded-lg shadow-lg transition-all duration-300"
          >
            Submit Application <ArrowRight size={20} />
          </motion.button>
        </div>
      </motion.section>

      {/* Job Details Modal */}
      <AnimatePresence>
        {selectedJob && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedJob(null)}
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            >
              {/* Modal Header */}
              <div className="sticky top-0 bg-gradient-to-r from-blue-600 to-orange-500 text-white p-6 flex justify-between items-start">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold">{jobsDatabase[selectedJob]?.title}</h2>
                  <p className="text-blue-100 mt-1">{jobsDatabase[selectedJob]?.department}</p>
                </div>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedJob(null)}
                  className="text-white hover:bg-white/20 p-2 rounded-lg transition"
                >
                  <X size={24} />
                </motion.button>
              </div>

              {/* Modal Content */}
              <div className="p-6 space-y-6 bg-gray-800">
                {/* Key Info */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-blue-900/50 p-4 rounded-lg border border-blue-700/50">
                    <p className="text-sm text-blue-300 font-semibold mb-1">Experience Required</p>
                    <p className="text-lg font-bold text-white">{jobsDatabase[selectedJob]?.experience}</p>
                  </div>
                  <div className="bg-blue-900/50 p-4 rounded-lg border border-blue-700/50">
                    <p className="text-sm text-blue-300 font-semibold mb-1">Location</p>
                    <p className="text-lg font-bold text-white">{jobsDatabase[selectedJob]?.location}</p>
                  </div>
                  <div className="bg-blue-900/50 p-4 rounded-lg border border-blue-700/50">
                    <p className="text-sm text-blue-300 font-semibold mb-1">Department</p>
                    <p className="text-lg font-bold text-white">{jobsDatabase[selectedJob]?.department}</p>
                  </div>
                  <div className="bg-blue-900/50 p-4 rounded-lg border border-blue-700/50">
                    <p className="text-sm text-blue-300 font-semibold mb-1">Application Deadline</p>
                    <p className="text-lg font-bold text-white">{jobsDatabase[selectedJob]?.deadline}</p>
                  </div>
                </div>

                {/* Responsibilities */}
                <div>
                  <h3 className="text-xl font-bold text-white mb-3">Responsibilities</h3>
                  <ul className="space-y-2">
                    {jobsDatabase[selectedJob]?.responsibilities?.map((resp: string, idx: number) => (
                      <li key={idx} className="flex gap-3 items-start">
                        <CheckCircle className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300">{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Requirements */}
                <div>
                  <h3 className="text-xl font-bold text-white mb-3">Requirements</h3>
                  <ul className="space-y-2">
                    {jobsDatabase[selectedJob]?.requirements?.map((req: string, idx: number) => (
                      <li key={idx} className="flex gap-3 items-start">
                        <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300">{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-4 border-t border-gray-700">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedJob(null)}
                    className="flex-1 px-6 py-3 bg-gray-200 hover:bg-gray-300 text-gray-900 font-bold rounded-lg transition"
                  >
                    Close
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => {
                      setSelectedJob(null);
                      navigate(`/career/${selectedJob}`);
                    }}
                    className="flex-1 px-6 py-3 bg-gradient-to-r from-blue-600 to-orange-500 hover:from-blue-700 hover:to-orange-600 text-white font-bold rounded-lg transition inline-flex items-center justify-center gap-2"
                  >
                    Apply Now <ArrowRight size={18} />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Career;