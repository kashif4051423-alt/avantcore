import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Briefcase, Clock, CheckCircle, Upload, Loader } from 'lucide-react';

// Extended job data with full details
const jobsDatabase: Record<string, any> = {
  'graphic-designer': {
    id: 'graphic-designer',
    title: 'Graphic Designer',
    department: 'Design & Creative',
    employmentType: 'Full-time',
    location: 'Lahore, Pakistan',
    experience: '1-3 years',
    deadline: '2026-12-31',
    shortDesc: 'Create compelling visual content and design materials for marketing and branding initiatives.',
    description: 'We\'re seeking a talented Graphic Designer to join our Design & Creative team. You\'ll be responsible for creating visually stunning marketing materials, social media creatives, and UI/UX assets. Work collaboratively with development and marketing teams to bring brand vision to life while maintaining consistency across all platforms.',
    responsibilities: [
      'Create marketing and branding materials',
      'Design social media creatives and content',
      'Design website and application UI assets',
      'Collaborate with development and marketing teams',
      'Maintain brand consistency across all platforms',
      'Develop design mockups and prototypes',
      'Incorporate feedback and iterate on designs'
    ],
    requirements: [
      '1-3 years of graphic design experience',
      'Proficiency in Adobe Photoshop and Illustrator',
      'Experience with Figma or similar design tools',
      'Strong creative thinking and visual design skills',
      'Knowledge of branding and visual identity',
      'Portfolio demonstrating design work',
      'Strong communication skills'
    ],
    skills: [
      'Adobe Photoshop',
      'Adobe Illustrator',
      'Figma',
      'Creative Thinking',
      'Branding & Visual Design',
      'UI/UX Design',
      'Adobe InDesign',
      'Design Theory'
    ],
    benefits: [
      'Competitive salary',
      'Creative work environment',
      'Professional development opportunities',
      'Flexible working hours',
      'Health insurance coverage',
      'Performance bonuses',
      'Creative freedom and autonomy'
    ]
  },
  'hr-executive': {
    id: 'hr-executive',
    title: 'HR Executive',
    department: 'Human Resources',
    employmentType: 'Full-time',
    location: 'Lahore, Pakistan',
    experience: '1-3 years',
    deadline: '2026-12-31',
    shortDesc: 'Support HR operations and contribute to employee engagement and development initiatives.',
    description: 'Join our HR team as an HR Executive. You\'ll be responsible for recruitment, onboarding, employee records management, and HR policy implementation. This role offers the opportunity to develop HR expertise while contributing to a positive workplace culture.',
    responsibilities: [
      'Manage recruitment and onboarding processes',
      'Maintain and organize employee records',
      'Implement HR policies and procedures',
      'Support performance management activities',
      'Organize employee engagement activities and events',
      'Assist with HR compliance and documentation',
      'Respond to employee inquiries and concerns'
    ],
    requirements: [
      '1-3 years of HR experience',
      'Strong communication and interpersonal skills',
      'Experience in recruitment and hiring',
      'Knowledge of HR administration and compliance',
      'Proficiency in Microsoft Office Suite',
      'Strong organizational and multitasking abilities',
      'Bachelor\'s degree in HR or related field'
    ],
    skills: [
      'Communication Skills',
      'Recruitment',
      'HR Administration',
      'Microsoft Office',
      'Organizational Skills',
      'Employee Relations',
      'Data Management',
      'Problem Solving'
    ],
    benefits: [
      'Competitive salary package',
      'Health and wellness benefits',
      'Professional HR certifications support',
      'Career growth opportunities',
      'Collaborative work environment',
      'Annual performance bonuses'
    ]
  },
  'frontend-developer': {
    id: 'frontend-developer',
    title: 'Frontend Developer',
    department: 'Software Development',
    employmentType: 'Full-time',
    location: 'Lahore, Pakistan',
    experience: '1-3 years',
    deadline: '2026-12-31',
    shortDesc: 'Build responsive and interactive web applications using modern frontend technologies.',
    description: 'We\'re looking for a Frontend Developer to create engaging user interfaces and responsive web applications. You\'ll work with React.js, JavaScript, and modern web technologies to build scalable solutions. Collaborate with backend developers and designers to deliver exceptional user experiences.',
    responsibilities: [
      'Develop responsive web applications',
      'Build reusable and maintainable UI components',
      'Integrate REST APIs and backend services',
      'Optimize application performance and load times',
      'Maintain code quality through testing and best practices',
      'Collaborate with designers and backend developers',
      'Participate in code reviews and knowledge sharing'
    ],
    requirements: [
      '1-3 years of frontend development experience',
      'Strong proficiency in React.js',
      'Solid JavaScript and TypeScript knowledge',
      'Experience with HTML5 and CSS3',
      'Familiarity with Tailwind CSS or similar frameworks',
      'Git version control experience',
      'Understanding of responsive design principles'
    ],
    skills: [
      'React.js',
      'JavaScript',
      'TypeScript',
      'HTML5',
      'CSS3',
      'Tailwind CSS',
      'Git',
      'REST APIs'
    ],
    benefits: [
      'Competitive salary',
      'Health insurance',
      'Professional development budget',
      'Remote work flexibility',
      'Performance bonuses',
      'Career advancement opportunities',
      'Modern development tools and environment'
    ]
  },
  'mobile-app-developer': {
    id: 'mobile-app-developer',
    title: 'Mobile App Developer',
    department: 'Software Development',
    employmentType: 'Full-time',
    location: 'Lahore, Pakistan',
    experience: '1-3 years',
    deadline: '2026-12-31',
    shortDesc: 'Build high-performance Android and iOS mobile applications for enterprise clients.',
    description: 'Join our mobile development team and create innovative mobile solutions using Flutter or React Native. You\'ll develop scalable applications, integrate with backend services, and optimize performance across platforms. Work on projects that impact millions of users.',
    responsibilities: [
      'Build Android and iOS applications',
      'Develop scalable and maintainable mobile solutions',
      'Integrate APIs and backend services',
      'Optimize app performance and user experience',
      'Publish and maintain applications on app stores',
      'Debug and troubleshoot mobile application issues',
      'Collaborate with UX/UI designers and backend teams'
    ],
    requirements: [
      '1-3 years of mobile app development experience',
      'Proficiency in Flutter or React Native',
      'Experience with REST APIs integration',
      'Knowledge of Firebase or similar backend services',
      'Understanding of mobile UI/UX principles',
      'Git version control experience',
      'Strong problem-solving skills'
    ],
    skills: [
      'Flutter or React Native',
      'REST APIs',
      'Firebase',
      'Mobile UI/UX',
      'Git',
      'Android/iOS Development',
      'JavaScript/Dart',
      'Database Integration'
    ],
    benefits: [
      'Competitive salary',
      'Health insurance coverage',
      'Professional development opportunities',
      'Remote work options',
      'Performance bonuses',
      'Career growth in mobile technology'
    ]
  },
  'game-developer': {
    id: 'game-developer',
    title: 'Game Developer',
    department: 'Software Development',
    employmentType: 'Full-time',
    location: 'Lahore, Pakistan',
    experience: '1-3 years',
    deadline: '2026-12-31',
    shortDesc: 'Create engaging and interactive gaming experiences using industry-leading game engines.',
    description: 'We\'re seeking a Game Developer to join our development team. You\'ll work with Unity or Unreal Engine to develop interactive games, implement gameplay mechanics, and optimize performance. This role offers the opportunity to work on creative projects while developing your gaming expertise.',
    responsibilities: [
      'Develop interactive and engaging games',
      'Implement gameplay mechanics and features',
      'Optimize game performance across platforms',
      'Collaborate with designers and artists',
      'Debug and troubleshoot game issues',
      'Maintain code quality and organization',
      'Participate in game testing and refinement'
    ],
    requirements: [
      '1-3 years of game development experience',
      'Proficiency in Unity or Unreal Engine',
      'Strong C# or C++ programming skills',
      'Understanding of game physics and mechanics',
      'Problem-solving and creative thinking abilities',
      'Git or version control experience',
      'Portfolio of game projects or demos'
    ],
    skills: [
      'Unity',
      'Unreal Engine',
      'C#',
      'Game Physics',
      'Problem Solving',
      'Game Design',
      'Performance Optimization',
      'Scripting'
    ],
    benefits: [
      'Competitive salary',
      'Creative work environment',
      'Access to latest gaming tools and hardware',
      'Performance bonuses',
      'Professional development budget',
      'Collaborative team atmosphere'
    ]
  },
  'summer-internship-2026': {
    id: 'summer-internship-2026',
    title: 'Summer Internship Program 2026',
    department: 'Multiple Departments',
    employmentType: 'Internship',
    location: 'Lahore, Pakistan',
    experience: '0 years',
    deadline: '2026-12-31',
    shortDesc: 'Gain hands-on industry experience through our structured summer internship program.',
    description: 'Join Avantcore Technologies for our Summer Internship Program 2026. This 8-12 week program offers final-year students and fresh graduates the opportunity to work on real projects, learn industry best practices, and develop professional skills under the mentorship of experienced professionals.',
    responsibilities: [
      'Work on real client and internal projects',
      'Collaborate with mentors and team members',
      'Learn industry best practices and tools',
      'Contribute to project development and improvement',
      'Participate in training and knowledge sessions',
      'Maintain professional standards and deliverables',
      'Attend team meetings and standups'
    ],
    requirements: [
      'Final-year student or fresh graduate',
      'Background in Computer Science, Software Engineering, IT, Business, or Design',
      'Strong communication and teamwork skills',
      'Willingness to learn and adapt',
      'Basic knowledge in chosen field',
      'Ability to commit 8-12 weeks full-time'
    ],
    skills: [
      'Teamwork',
      'Communication',
      'Problem Solving',
      'Quick Learning',
      'Technical Aptitude',
      'Time Management',
      'Attention to Detail'
    ],
    benefits: [
      'Hands-on industry experience',
      'Professional mentorship',
      'Real project exposure',
      'Certificate of Completion',
      'Networking opportunities',
      'Potential conversion to full-time role',
      'Internship stipend'
    ]
  },
  'graduate-trainee-program': {
    id: 'graduate-trainee-program',
    title: 'Graduate Trainee Program',
    department: 'Technology & Business',
    employmentType: 'Full-time',
    location: 'Lahore, Pakistan',
    experience: '0-1 years',
    deadline: '2026-10-31',
    shortDesc: 'Launch your career with our structured graduate training program.',
    description: 'Join our Graduate Trainee Program designed for fresh graduates and early-career professionals. This comprehensive program includes structured training, real project experience, and mentorship from industry experts. Develop the skills needed to succeed in your chosen field at Avantcore Technologies.',
    responsibilities: [
      'Participate in structured training programs',
      'Work on real client projects',
      'Learn industry best practices and methodologies',
      'Collaborate with senior professionals and mentors',
      'Contribute to team deliverables',
      'Attend workshops and training sessions',
      'Develop professional and technical skills'
    ],
    requirements: [
      'Fresh graduate or up to 1 year experience',
      'Bachelor\'s degree in Computer Science, Software Engineering, IT, Business Administration, or Computer Engineering',
      'Strong foundation in chosen field',
      'Excellent communication and interpersonal skills',
      'Eagerness to learn and grow',
      'Willingness to take on challenging projects'
    ],
    skills: [
      'Teamwork',
      'Communication',
      'Problem Solving',
      'Technical Aptitude',
      'Learning Ability',
      'Project Management',
      'Adaptability'
    ],
    benefits: [
      'Structured training and mentorship',
      'Real project exposure',
      'Competitive salary',
      'Health insurance',
      'Professional development',
      'Career advancement opportunities',
      'Industry certification support'
    ]
  },
  'senior-fullstack-engineer': {
    id: 'senior-fullstack-engineer',
    title: 'Senior Software Engineer - Full Stack',
    department: 'Engineering',
    employmentType: 'Full-time',
    location: 'Lahore, Pakistan',
    experience: '3-5 years',
    deadline: '2025-12-31',
    shortDesc: 'Avantcore Technologies seeks a talented Full Stack Developer responsible for crafting and implementing cutting-edge web applications.',
    description: 'Join our engineering team and take the lead on full-stack development projects. You\'ll be responsible for architecting, developing, and deploying scalable web applications using modern technologies. Work with both frontend and backend systems, collaborate with cross-functional teams, and drive technical excellence across the organization.',
    responsibilities: [
      'Design and implement robust full-stack web applications',
      'Lead architectural decisions and code reviews',
      'Collaborate with product and design teams to deliver user-centric solutions',
      'Mentor junior developers and contribute to team growth',
      'Optimize application performance and scalability',
      'Participate in agile development practices',
      'Ensure code quality through testing and best practices'
    ],
    requirements: [
      '3-5 years of professional software development experience',
      'Strong proficiency in modern web frameworks (React, Node.js, etc.)',
      'Experience with cloud platforms (AWS, GCP, Azure)',
      'Solid understanding of databases and data modeling',
      'Experience with microservices architecture',
      'Strong problem-solving and communication skills',
      'Bachelor\'s degree in Computer Science or related field'
    ],
    skills: [
      'React.js / Vue.js / Angular',
      'Node.js / Python / Java',
      'PostgreSQL / MongoDB',
      'Docker & Kubernetes',
      'AWS / Google Cloud Platform',
      'Git / Version Control',
      'REST APIs / GraphQL',
      'Agile/Scrum'
    ],
    benefits: [
      'Competitive salary package',
      'Health insurance coverage',
      'Professional development allowance',
      'Flexible working hours',
      'Remote work opportunities',
      'Performance bonuses',
      'Team outings and company events'
    ]
  },
  'gis-specialist': {
    id: 'gis-specialist',
    title: 'Geographic Information System (GIS) Specialist',
    department: 'Solutions',
    employmentType: 'Full-time',
    location: 'Lahore, Pakistan',
    experience: '2-4 years',
    deadline: '2025-12-31',
    shortDesc: 'Seeking a GIS Integration Specialist to spearhead the seamless integration of GIS technology across diverse systems.',
    description: 'We\'re looking for an experienced GIS specialist to lead the integration of geospatial technologies into our enterprise solutions. You\'ll work on projects involving spatial data analysis, mapping platforms, and location-based services. Your expertise will help clients leverage geographical data for business intelligence and decision-making.',
    responsibilities: [
      'Lead GIS implementation projects for clients',
      'Design and develop custom GIS solutions',
      'Manage spatial databases and data integration',
      'Create maps and geographic visualizations',
      'Troubleshoot and optimize GIS systems',
      'Provide technical support and training',
      'Collaborate with engineering and product teams'
    ],
    requirements: [
      '2-4 years of GIS implementation experience',
      'Proficiency in ArcGIS, QGIS, or similar platforms',
      'Experience with spatial databases',
      'Knowledge of geospatial data formats and standards',
      'Strong analytical and problem-solving skills',
      'Good communication and client management abilities',
      'Certification in GIS (preferred)'
    ],
    skills: [
      'ArcGIS Desktop & Server',
      'QGIS',
      'PostGIS',
      'JavaScript / Python for GIS',
      'Web mapping libraries',
      'Spatial analysis',
      'Data management',
      'SQL'
    ],
    benefits: [
      'Competitive salary',
      'Health and wellness benefits',
      'Professional certification support',
      'Career growth opportunities',
      'Collaborative work environment',
      'Annual performance bonuses'
    ]
  },
  'nodejs-developer': {
    id: 'nodejs-developer',
    title: 'Node.js Developer',
    department: 'Engineering',
    employmentType: 'Full-time',
    location: 'Lahore, Pakistan',
    experience: '2-3 years',
    deadline: '2025-12-31',
    shortDesc: 'Join Avantcore Technologies as a Node.js Developer, responsible for building robust server-side applications.',
    description: 'We\'re seeking a talented Node.js developer to join our backend engineering team. You\'ll build scalable, efficient server-side applications that power our enterprise solutions. This role offers the opportunity to work with cutting-edge technologies and contribute to impactful projects.',
    responsibilities: [
      'Develop and maintain Node.js applications',
      'Design RESTful and GraphQL APIs',
      'Optimize database queries and server performance',
      'Implement authentication and security measures',
      'Write clean, maintainable, and well-documented code',
      'Collaborate with frontend developers and DevOps teams',
      'Participate in code reviews and continuous improvement'
    ],
    requirements: [
      '2-3 years of Node.js development experience',
      'Strong JavaScript/TypeScript skills',
      'Experience with Express.js or similar frameworks',
      'Knowledge of RESTful and GraphQL API design',
      'Experience with MongoDB or PostgreSQL',
      'Understanding of async programming patterns',
      'Familiarity with Git and version control'
    ],
    skills: [
      'Node.js',
      'Express.js',
      'JavaScript / TypeScript',
      'MongoDB / PostgreSQL',
      'RESTful APIs',
      'GraphQL',
      'Redis',
      'Docker'
    ],
    benefits: [
      'Competitive salary',
      'Health insurance',
      'Professional development budget',
      'Remote work flexibility',
      'Performance bonuses',
      'Career advancement opportunities'
    ]
  },
  'php-developer': {
    id: 'php-developer',
    title: 'PHP Developer',
    department: 'Engineering',
    employmentType: 'Full-time',
    location: 'Lahore, Pakistan',
    experience: '2-4 years',
    deadline: '2025-12-31',
    shortDesc: 'Seeking a skilled PHP Developer to contribute to the development of dynamic and scalable web solutions.',
    description: 'Join our development team and build robust PHP-based solutions for our enterprise clients. You\'ll work on projects using modern PHP frameworks, contribute to backend architecture, and ensure code quality and security. This is an excellent opportunity to expand your skills in a professional environment.',
    responsibilities: [
      'Develop and maintain PHP applications',
      'Build database-driven web solutions',
      'Write clean and efficient code',
      'Optimize web application performance',
      'Implement security best practices',
      'Collaborate with frontend and database teams',
      'Debug and troubleshoot application issues'
    ],
    requirements: [
      '2-4 years of PHP development experience',
      'Proficiency in PHP 7+ and object-oriented programming',
      'Experience with Laravel or similar frameworks',
      'MySQL or PostgreSQL database knowledge',
      'Understanding of web security principles',
      'Experience with version control systems',
      'Strong problem-solving skills'
    ],
    skills: [
      'PHP 7+',
      'Laravel / Symfony',
      'MySQL / PostgreSQL',
      'JavaScript / jQuery',
      'REST APIs',
      'Git',
      'HTML / CSS',
      'Apache / Nginx'
    ],
    benefits: [
      'Attractive salary package',
      'Health and life insurance',
      'Professional development opportunities',
      'Flexible working arrangement',
      'Annual bonuses',
      'Team collaboration and growth'
    ]
  }
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 }
};

const JobDetails = () => {
  const { jobId } = useParams();
  const navigate = useNavigate();
  const job = jobId ? jobsDatabase[jobId] : null;

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    currentLocation: '',
    yearsExperience: '',
    coverLetter: '',
    resume: null
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  if (!job) {
    return (
      <div className="min-h-screen bg-white pt-20 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Job Not Found</h1>
          <p className="text-gray-600 mb-8">The job position you're looking for doesn't exist.</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            onClick={() => navigate('/career')}
            className="inline-flex items-center gap-2 px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
          >
            <ArrowLeft size={18} /> Back to Careers
          </motion.button>
        </motion.div>
      </div>
    );
  }

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Invalid email format';
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!formData.currentLocation.trim()) newErrors.currentLocation = 'Location is required';
    if (!formData.yearsExperience) newErrors.yearsExperience = 'Years of experience is required';
    if (!formData.coverLetter.trim()) newErrors.coverLetter = 'Cover letter is required';
    if (!formData.resume) newErrors.resume = 'Resume upload is required';
    else if (!['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'].includes(formData.resume.type)) {
      newErrors.resume = 'Resume must be PDF, DOC, or DOCX';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));

      // In production, send to backend/email service
      console.log('Application submitted:', {
        ...formData,
        jobId: job.id,
        jobTitle: job.title,
        timestamp: new Date().toISOString()
      });

      setSubmitSuccess(true);
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        currentLocation: '',
        yearsExperience: '',
        coverLetter: '',
        resume: null
      });

      // Reset success message after 5 seconds
      setTimeout(() => setSubmitSuccess(false), 5000);
    } catch (error) {
      setErrors({ submit: 'Failed to submit application. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      setFormData({ ...formData, resume: e.target.files[0] });
      if (errors.resume) {
        const newErrors = { ...errors };
        delete newErrors.resume;
        setErrors(newErrors);
      }
    }
  };

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Header */}
      <motion.section
        className="relative py-16 px-4 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <div className="absolute inset-0">
          <motion.div 
            className="absolute top-10 right-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 10, repeat: Infinity }}
          ></motion.div>
        </div>

        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <motion.button
            whileHover={{ x: -4 }}
            onClick={() => navigate('/career')}
            className="inline-flex items-center gap-2 text-blue-200 hover:text-white mb-8 transition"
          >
            <ArrowLeft size={18} /> Back to Careers
          </motion.button>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
            className="space-y-4"
          >
            <motion.h1 variants={fadeUp} className="text-4xl md:text-5xl font-bold text-white">
              {job.title}
            </motion.h1>
            
            <motion.div variants={fadeUp} className="flex flex-wrap gap-4 items-center">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-blue-800/50 rounded-lg text-blue-100">
                <Briefcase size={18} /> {job.department}
              </span>
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-blue-800/50 rounded-lg text-blue-100">
                <Clock size={18} /> {job.employmentType}
              </span>
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-blue-800/50 rounded-lg text-blue-100">
                {job.location}
              </span>
            </motion.div>

            <motion.p variants={fadeUp} className="text-xl text-blue-100 max-w-2xl">
              {job.description}
            </motion.p>
          </motion.div>
        </div>
      </motion.section>

      {/* Job Details Content */}
      <section className="py-16 px-4">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left Column - Job Details */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
              className="lg:col-span-2 space-y-12"
            >
              {/* Key Details */}
              <motion.div variants={fadeUp} className="space-y-6">
                <h2 className="text-3xl font-bold text-gray-900">Position Overview</h2>
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { label: 'Experience Required', value: job.experience },
                    { label: 'Employment Type', value: job.employmentType },
                    { label: 'Department', value: job.department },
                    { label: 'Location', value: job.location },
                    { label: 'Application Deadline', value: new Date(job.deadline).toLocaleDateString() },
                    { label: 'Position ID', value: job.id }
                  ].map((item) => (
                    <div key={item.label} className="p-4 bg-gray-50 rounded-lg">
                      <p className="text-sm font-semibold text-gray-600 mb-1">{item.label}</p>
                      <p className="text-lg font-bold text-gray-900">{item.value}</p>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Responsibilities */}
              <motion.div variants={fadeUp} className="space-y-4">
                <h2 className="text-3xl font-bold text-gray-900">Responsibilities</h2>
                <ul className="space-y-3">
                  {job.responsibilities.map((resp, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.05 }}
                      className="flex gap-3 items-start"
                    >
                      <CheckCircle className="w-5 h-5 text-orange-500 flex-shrink-0 mt-1" />
                      <span className="text-gray-700">{resp}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              {/* Requirements */}
              <motion.div variants={fadeUp} className="space-y-4">
                <h2 className="text-3xl font-bold text-gray-900">Requirements</h2>
                <ul className="space-y-3">
                  {job.requirements.map((req, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.05 }}
                      className="flex gap-3 items-start"
                    >
                      <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                      <span className="text-gray-700">{req}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              {/* Skills */}
              <motion.div variants={fadeUp} className="space-y-4">
                <h2 className="text-3xl font-bold text-gray-900">Required Skills</h2>
                <div className="flex flex-wrap gap-3">
                  {job.skills.map((skill, idx) => (
                    <motion.span
                      key={idx}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.05 }}
                      className="px-4 py-2 bg-blue-100 text-blue-900 rounded-full font-medium text-sm"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>

              {/* Benefits */}
              <motion.div variants={fadeUp} className="space-y-4">
                <h2 className="text-3xl font-bold text-gray-900">Benefits</h2>
                <ul className="space-y-3">
                  {job.benefits.map((benefit, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.05 }}
                      className="flex gap-3 items-start"
                    >
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                      <span className="text-gray-700">{benefit}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>

            {/* Right Column - Application Form */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="lg:col-span-1"
            >
              <div className="sticky top-24 bg-gradient-to-br from-blue-50 to-white rounded-2xl border-2 border-blue-200 p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Apply Now</h3>

                {submitSuccess && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg"
                  >
                    <p className="text-green-800 font-semibold flex items-center gap-2"><CheckCircle size={20} /> Application submitted successfully!</p>
                    <p className="text-green-700 text-sm mt-1">We'll review your application and get back to you soon.</p>
                  </motion.div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Full Name */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">Full Name *</label>
                    <input
                      type="text"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 ${
                        errors.fullName ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="Your full name"
                    />
                    {errors.fullName && <p className="text-red-600 text-sm mt-1">{errors.fullName}</p>}
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">Email Address *</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 ${
                        errors.email ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="your@email.com"
                    />
                    {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email}</p>}
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">Phone Number *</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 ${
                        errors.phone ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="+92 300 1234567"
                    />
                    {errors.phone && <p className="text-red-600 text-sm mt-1">{errors.phone}</p>}
                  </div>

                  {/* Current Location */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">Current Location *</label>
                    <input
                      type="text"
                      value={formData.currentLocation}
                      onChange={(e) => setFormData({ ...formData, currentLocation: e.target.value })}
                      className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 ${
                        errors.currentLocation ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="City, Country"
                    />
                    {errors.currentLocation && <p className="text-red-600 text-sm mt-1">{errors.currentLocation}</p>}
                  </div>

                  {/* Years of Experience */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">Years of Experience *</label>
                    <select
                      value={formData.yearsExperience}
                      onChange={(e) => setFormData({ ...formData, yearsExperience: e.target.value })}
                      className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 ${
                        errors.yearsExperience ? 'border-red-500' : 'border-gray-300'
                      }`}
                    >
                      <option value="">Select experience level</option>
                      <option value="0-1">0-1 years</option>
                      <option value="1-2">1-2 years</option>
                      <option value="2-3">2-3 years</option>
                      <option value="3-5">3-5 years</option>
                      <option value="5-10">5-10 years</option>
                      <option value="10+">10+ years</option>
                    </select>
                    {errors.yearsExperience && <p className="text-red-600 text-sm mt-1">{errors.yearsExperience}</p>}
                  </div>

                  {/* Resume Upload */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">Upload Resume (PDF, DOC, DOCX) *</label>
                    <div className={`border-2 border-dashed rounded-lg p-4 text-center cursor-pointer transition ${
                      errors.resume ? 'border-red-500 bg-red-50' : 'border-blue-300 hover:bg-blue-50'
                    }`}>
                      <input
                        type="file"
                        onChange={handleFileChange}
                        accept=".pdf,.doc,.docx"
                        className="hidden"
                        id="resume-upload"
                      />
                      <label htmlFor="resume-upload" className="cursor-pointer">
                        <Upload className="w-6 h-6 mx-auto text-blue-600 mb-2" />
                        <p className="text-sm font-semibold text-gray-900">{formData.resume ? formData.resume.name : 'Click to upload'}</p>
                        <p className="text-xs text-gray-600">PDF, DOC, or DOCX (max 5MB)</p>
                      </label>
                    </div>
                    {errors.resume && <p className="text-red-600 text-sm mt-1">{errors.resume}</p>}
                  </div>

                  {/* Cover Letter */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">Cover Letter *</label>
                    <textarea
                      value={formData.coverLetter}
                      onChange={(e) => setFormData({ ...formData, coverLetter: e.target.value })}
                      className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 resize-none h-24 ${
                        errors.coverLetter ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="Tell us why you're interested in this position..."
                    />
                    {errors.coverLetter && <p className="text-red-600 text-sm mt-1">{errors.coverLetter}</p>}
                  </div>

                  {errors.submit && <p className="text-red-600 text-sm">{errors.submit}</p>}

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: isSubmitting ? 1 : 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full py-3 bg-gradient-to-r from-blue-600 to-orange-500 text-white font-bold rounded-lg hover:from-blue-700 hover:to-orange-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader className="w-5 h-5 animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      'Submit Application'
                    )}
                  </motion.button>
                </form>

                <p className="text-xs text-gray-600 text-center mt-4">
                  By submitting, you agree to our Privacy Policy and Terms of Service
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default JobDetails;
