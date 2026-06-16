import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence, easeInOut } from 'framer-motion';
import { ArrowRight, CheckCircle, DollarSign, Headphones, Users, Briefcase, Globe, BarChart3, Map, Database, UserCheck, Server, Cloud } from 'lucide-react';

const heroSlides = [
  {
    title: 'Sales And Distribution Management',
    subtitle: 'The system allows you to create sales, manage distribution operations, such as delivery, receiving, and fulfillment.',
    bg: '/saleanddistribution.jpg'
  },
  {
    title: 'HRMS Payroll And Compliance',
    subtitle: 'Manage organisation employees HR and payroll, performance management, task assignments and recruitment.',
    bg: '/hrms.jpg'
  },
  {
    title: 'Inventory And Purchase Order Management',
    subtitle: 'The solution allows you to manage orders from customers/suppliers, including tracking order status and inventory levels.',
    bg: '/inventory.jpg'
  }
];

const features = [
  {
    icon: <Database className="w-8 h-8 text-blue-600" />,
    title: 'Inventory & Purchase Order Management',
    desc: 'Manage orders from customers/suppliers, track order status and inventory levels.'
  },
  {
    icon: <Users className="w-8 h-8 text-blue-600" />,
    title: 'HRMS Payroll & Compliance',
    desc: 'Manage employees HR, payroll, performance, tasks, and recruitment.'
  },
  {
    icon: <Briefcase className="w-8 h-8 text-blue-600" />,
    title: 'Sales & Distribution Management',
    desc: 'Create sales, manage distribution, delivery, receiving, and fulfillment.'
  }
];

const valueProps = [
  {
    icon: <CheckCircle className="w-8 h-8 text-green-500" />,
    title: 'Best Service',
    desc: 'We redefine excellence in service. With unwavering dedication, we consistently deliver the best.'
  },
  {
    icon: <DollarSign className="w-8 h-8 text-blue-600" />,
    title: 'Affordable Price',
    desc: 'Ensuring value without compromise. Our commitment to affordability never sacrifices excellence.'
  },
  {
    icon: <Headphones className="w-8 h-8 text-orange-500" />,
    title: '24/7 Support',
    desc: 'At Avantcore, quality support, around the clock. Our team is here for you, 24/7, ensuring your success.'
  }
];

const companyProfile = `AVANTCORE Technologies has been at the forefront of delivering innovative software solutions and services since its establishment. Our team at AVANTCORE is dedicated to providing tailored solutions to a diverse range of industries and sectors, ensuring that every project meets the client's specifications, budget, and quality standards. From small businesses to enterprise-level corporations, AVANTCORE offers comprehensive IT services and software solutions for US, UK, KSA & Pakistan. We pride ourselves on our ability to identify the unique IT requirements of companies and develop customized products and services to meet those needs effectively. With our full-range in-house development capabilities, clients can trust that AVANTCORE will deliver the right solutions to drive their businesses forward.`;

const businessSolutions = [
  {
    icon: <Database className="w-8 h-8 text-blue-600" />,
    title: 'Enterprise Resource Planning (ERP)',
    desc: 'Cutting-edge ERP solutions to streamline operations, boost productivity, and drive growth.'
  },
  {
    icon: <Map className="w-8 h-8 text-blue-600" />,
    title: 'Geographic Information System (GIS)',
    desc: 'Advanced GIS solutions to harness the power of spatial data for informed decision-making.'
  },
  {
    icon: <BarChart3 className="w-8 h-8 text-blue-600" />,
    title: 'Business Intelligence (BI) and Analytics',
    desc: 'State-of-the-art BI and Analytics solutions to convert your data into strategic insights.'
  },
  {
    icon: <Users className="w-8 h-8 text-blue-600" />,
    title: 'Customer Relationship Management',
    desc: 'Custom CRM solutions to streamline and optimize your customer interactions and sales.'
  },
  {
    icon: <UserCheck className="w-8 h-8 text-blue-600" />,
    title: 'Human Capital Management (HCM)',
    desc: 'Innovative HCM solutions to optimize workforce management and enhance performance.'
  }
];

const services = [
  {
    icon: <Server className="w-8 h-8 text-blue-600" />,
    title: 'Data Management And Analytics',
    desc: 'Transform raw data into actionable insights, driving efficiency, innovation, and growth.'
  },
  {
    icon: <Briefcase className="w-8 h-8 text-blue-600" />,
    title: 'Custom Software Development',
    desc: 'Scalable, flexible, and usable solutions to help your organization thrive.'
  },
  {
    icon: <Globe className="w-8 h-8 text-blue-600" />,
    title: 'Application Integration',
    desc: 'Enhance efficiency, reduce costs, and improve decision-making with optimized application ecosystems.'
  },
  {
    icon: <Cloud className="w-8 h-8 text-blue-600" />,
    title: 'Cloud Solutions',
    desc: 'Harness the power of the cloud to enhance flexibility, scalability, and innovation.'
  },
  {
    icon: <Map className="w-8 h-8 text-blue-600" />,
    title: 'GIS Integration And Solutions',
    desc: 'Seamless integration of GIS technology into your workflows.'
  },
  {
    icon: <Headphones className="w-8 h-8 text-blue-600" />,
    title: 'Training And Support',
    desc: 'Dedicated support team ensures smooth operations and rapid issue resolution.'
  }
];

const testimonials = [
  {
    name: 'Jeniffer Parker',
    text: "We are incredibly impressed with Avantcore Technology's services. Their Sales and Distribution System has transformed our business operations, providing us with a user-friendly interface and efficient tools. Their HRMS & Payroll Solution simplified our HR processes and improved employee management. The Inventory and Purchase Management Solution streamlined our supply chain, optimizing our inventory control. Their CRM development team crafted a tailored solution that perfectly aligns with our business requirements. The Point of Sale system they integrated has been a game-changer, enhancing our sales and customer satisfaction. Moreover, their dedication to after-sale support has made us loyal customers for life."
  },
  {
    name: 'Michael Steven',
    text: "Avantcore Technology has exceeded our expectations. Their Sales and Distribution System has boosted our sales process, with its intuitive design and easy navigation. The HRMS & Payroll Solution they provided streamlined our HR tasks, saving us time and resources. Their Inventory and Purchase Management Solution has optimized our inventory control and order management. Their CRM development team created a personalized solution that has revolutionized our customer interactions. The Point of Sale system they implemented has improved our checkout process, resulting in happier customers. Additionally, their after-sale service has been outstanding, providing timely assistance whenever we needed it."
  },
  {
    name: 'Laura Martinez',
    text: "We are beyond satisfied with Avantcore Technology's services. Their Sales and Distribution System transformed the way we handle sales, with its elegant design and unmatched efficiency. Their HRMS & Payroll Solution has made managing our workforce effortless, streamlining our HR operations. Their Inventory and Purchase Management Solution has been a game-changer, simplifying our supply chain processes and reducing costs. Their CRM development expertise allowed us to have a fully customized solution that perfectly fits our business needs. The Point of Sale system they crafted has significantly improved our transactions, enhancing the customer experience. Moreover, their after-sale support has been top-notch, making us feel valued as a client."
  },
  {
    name: 'Ayesha Khan',
    text: "Avantcore's team delivered our project on time and exceeded our expectations. Their professionalism and technical expertise are unmatched. We highly recommend their services to anyone looking for reliable tech partners."
  },
  {
    name: 'John Doe',
    text: "The support and dedication from Avantcore Technologies have been phenomenal. Their solutions are robust, scalable, and user-friendly. We look forward to working with them again!"
  },
  {
    name: 'Sara Lee',
    text: "From consultation to delivery, Avantcore was with us every step of the way. Their innovative approach and attention to detail made all the difference."
  }
];

// Unsplash images for cards and sections
const heroImage = 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=900&q=80';
const companyProfileImage = 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80';
const businessImages = [
  'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80', // ERP
  'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80', // GIS
  'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80', // BI
  'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=600&q=80', // CRM
  'https://images.unsplash.com/photo-1515168833906-d2a3b82b302b?auto=format&fit=crop&w=600&q=80', // HCM
];
const serviceImages = [
  'https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=600&q=80', // Data
  'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80', // Custom Software
  'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80', // Integration
  'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80', // Cloud
  'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80', // GIS
  'https://images.unsplash.com/photo-1515168833906-d2a3b82b302b?auto=format&fit=crop&w=600&q=80', // Training
];
const testimonialAvatars = [
  'https://randomuser.me/api/portraits/women/44.jpg',
  'https://randomuser.me/api/portraits/men/32.jpg',
  'https://randomuser.me/api/portraits/women/68.jpg',
];

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 40 },
};
const fadeInLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: easeInOut } }
};
const fadeInRight = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: easeInOut } }
};
const floatY = {
  animate: { y: [0, -10, 0], transition: { duration: 4, repeat: Infinity, ease: easeInOut } }
};

// Add a "Why Choose Us" section
const whyChooseUs = [
  {
    icon: <CheckCircle className="w-8 h-8 text-orange-500" />,
    title: 'Proven Expertise',
    desc: 'Years of experience delivering innovative solutions for diverse industries.'
  },
  {
    icon: <Users className="w-8 h-8 text-blue-600" />,
    title: 'Client-Centric Approach',
    desc: 'We tailor every project to your unique business needs and goals.'
  },
  {
    icon: <Headphones className="w-8 h-8 text-orange-500" />,
    title: '24/7 Support',
    desc: 'Our team is always available to ensure your success and satisfaction.'
  },
  {
    icon: <Cloud className="w-8 h-8 text-blue-600" />,
    title: 'Cutting-Edge Technology',
    desc: 'We leverage the latest tools and platforms to keep you ahead.'
  }
];

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: easeInOut } }
};
const staggerContainer = {
  visible: { transition: { staggerChildren: 0.12 } }
};
const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: easeInOut } }
};

const Home = () => {
  const heroSectionStyle = {
    backgroundImage: `url(${heroImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    filter: 'blur(0px)',
  };

  // Carousel state for testimonials
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const testimonialCount = testimonials.length;
  const autoPlayRef = useRef<(() => void) | null>(null);

  // Autoplay logic
  React.useEffect(() => {
    autoPlayRef.current = nextTestimonial;
  });
  React.useEffect(() => {
    const play = () => {
      if (autoPlayRef.current) autoPlayRef.current();
    };
    const interval = setInterval(play, 5000);
    return () => clearInterval(interval);
  }, [testimonialIndex]);

  function nextTestimonial() {
    setTestimonialIndex((prev) => (prev + 1) % testimonialCount);
  }
  function prevTestimonial() {
    setTestimonialIndex((prev) => (prev - 1 + testimonialCount) % testimonialCount);
  }

  // Responsive: show 1 on mobile, 2 on desktop
  const isDesktop = typeof window !== 'undefined' && window.innerWidth >= 768;
  const visibleTestimonials = isDesktop
    ? [testimonialIndex, (testimonialIndex + 1) % testimonialCount]
    : [testimonialIndex];

  // Hero Slider state
  const [heroIndex, setHeroIndex] = useState(0);
  const heroCount = heroSlides.length;
  const heroAutoPlayRef = useRef<(() => void) | null>(null);

  React.useEffect(() => {
    heroAutoPlayRef.current = nextHeroSlide;
  });
  React.useEffect(() => {
    const play = () => { if (heroAutoPlayRef.current) heroAutoPlayRef.current(); };
    const interval = setInterval(play, 5000);
    return () => clearInterval(interval);
  }, [heroIndex]);

  function nextHeroSlide() {
    setHeroIndex((prev) => (prev + 1) % heroCount);
  }
  function prevHeroSlide() {
    setHeroIndex((prev) => (prev - 1 + heroCount) % heroCount);
  }

  return (
    <div className="min-h-screen bg-background font-sans">
      {/* Hero Slider Section */}
      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="relative min-h-[70vh] flex flex-col items-center justify-center text-center overflow-hidden bg-primary"
        style={{
          backgroundImage: `url(${heroSlides[heroIndex].bg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transition: 'background-image 0.6s cubic-bezier(0.4,0,0.2,1)',
        }}
      >
        {/* Strong Overlay for readability */}
        <div className="absolute inset-0 bg-primary/80" aria-hidden="true"></div>
        {/* Centered Text Content with transition */}
        <motion.div
          className="relative z-10 w-full flex flex-col items-center justify-center min-h-[70vh]"
          variants={fadeInLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
            <AnimatePresence initial={false} mode="wait">
              <motion.div
                key={heroIndex}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.7, ease: easeInOut }}
                className="w-full flex flex-col items-center justify-center"
              >
              <h1 className="text-2xl md:text-4xl lg:text-5xl font-extrabold mb-3 tracking-tight leading-tight text-white drop-shadow-xl">
                  {heroSlides[heroIndex].title}
                </h1>
              <p className="text-sm md:text-lg lg:text-xl max-w-2xl mx-auto text-white font-medium drop-shadow-md">
                  {heroSlides[heroIndex].subtitle}
                </p>
              </motion.div>
            </AnimatePresence>
        </motion.div>
        {/* Navigation Arrows at far left/right */}
        <button onClick={prevHeroSlide} aria-label="Previous" className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 md:p-3 rounded-full bg-primary/60 text-white hover:bg-accent hover:text-white transition shadow-lg">
                <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 28 12 16 20 4"></polyline></svg>
              </button>
        <button onClick={nextHeroSlide} aria-label="Next" className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 md:p-3 rounded-full bg-primary/60 text-white hover:bg-accent hover:text-white transition shadow-lg">
                <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="12 28 20 16 12 4"></polyline></svg>
              </button>
      </motion.section>

      {/* Value Props + Appointment Section (Below Hero) */}
      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="relative z-20 -mt-16 mb-12"
      >
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="container mx-auto px-4"
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {valueProps.map((v, i) => (
              <motion.div
                key={i}
                variants={i % 2 === 0 ? fadeInLeft : fadeInRight}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                whileHover={{ scale: 1.08, boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.18)', backgroundColor: '#e3f2fd' }}
                whileTap={{ scale: 0.97 }}
                className="bg-white rounded-2xl p-6 md:p-8 flex flex-col items-center shadow-md border border-primary/10 transition-all duration-300"
              >
                <motion.span
                  className="bg-accent/10 rounded-full p-2 mb-2 flex items-center justify-center"
                  variants={floatY}
                  animate="animate"
                >{v.icon}</motion.span>
                <h3 className="text-base md:text-lg font-bold text-primary mb-2 text-center">{v.title}</h3>
                <p className="text-sm md:text-base text-foreground text-center">{v.desc}</p>
              </motion.div>
            ))}
            <motion.div
              variants={fadeInRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{
                scale: 1.06,
                boxShadow: '0 8px 32px 0 rgba(37,124,255,0.18)',
                borderColor: '#1976D2',
                background: 'linear-gradient(135deg, #e3f2fd 60%, #fff 100%)',
              }}
              whileTap={{ scale: 0.98 }}
              className="bg-gradient-to-br from-blue-50 to-white border-2 border-primary/10 rounded-2xl p-6 md:p-8 flex flex-col justify-between text-primary shadow-lg transition-all duration-300"
            >
              <h3 className="text-base md:text-lg font-extrabold mb-2 text-primary">Make Appointment</h3>
              <p className="text-xs md:text-base mb-6 font-medium text-primary/80">"Schedule your appointment now with Avantcore Technologies. Seamlessly book your time with our expert team."</p>
              <Link
                to="/book-call"
                className="inline-flex items-center justify-center bg-accent text-white font-bold px-8 py-3 rounded-xl shadow-lg hover:bg-primary hover:text-white transition text-xs md:text-base text-center mt-2 gap-2"
                style={{ boxShadow: '0 4px 16px 0 rgba(37,124,255,0.12)' }}
              >
                BOOK NOW
                <svg className="ml-2" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="15" y2="12"></line><polyline points="12 8 16 12 12 16"></polyline></svg>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </motion.section>

      {/* Company Profile Section */}
      <motion.section
        id="company-profile"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="py-16 md:py-24 bg-background"
      >
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-3xl shadow-xl flex flex-col md:flex-row items-center justify-between p-8 md:p-16 gap-8 md:gap-16 border border-primary/10">
            {/* Text Side */}
            <motion.div
              className="flex-1 text-center md:text-left"
              variants={fadeInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <h2 className="text-2xl md:text-4xl font-extrabold mb-6 text-primary">Company Profile</h2>
              <p className="text-base md:text-lg text-foreground leading-relaxed">
                AVANTCORE Technologies has been at the forefront of delivering innovative software solutions and services since its establishment. Our team at AVANTCORE is dedicated to providing tailored solutions to a diverse range of industries and sectors, ensuring that every project meets the client's specifications, budget, and quality standards. From small businesses to enterprise-level corporations, AVANTCORE offers comprehensive IT services and software solutions for US, UK, KSA & Pakistan. We pride ourselves on our ability to identify the unique IT requirements of companies and develop customized products and services to meet those needs effectively. With our full-range in-house development capabilities, clients can trust that AVANTCORE will deliver the right solutions to drive their businesses forward.
              </p>
            </motion.div>
            {/* Image Side */}
            <motion.div
              className="flex-1 flex justify-center items-center"
              variants={fadeInRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <motion.img
                src="/company_profile.jpg"
                alt="Company Profile"
                className="w-full max-w-md rounded-2xl shadow-md object-contain bg-white border border-primary/10"
                variants={floatY}
                animate="animate"
              />
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Company Pillars Section */}
      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="py-12 md:py-20 bg-background"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-4xl font-extrabold text-center mb-12 text-primary">Company Pillars</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
            {/* Pillar 1 */}
            <motion.div
              className="flex flex-col items-center"
              variants={fadeInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <h3 className="text-xl md:text-2xl font-bold text-center mb-6 text-primary">Business Application Solutions</h3>
              <motion.img
                src="/Business_Application_Solutions.jpg"
                alt="Business Application Solutions"
                className="w-full max-w-md rounded-2xl shadow-lg object-contain bg-white border border-primary/10"
                variants={floatY}
                animate="animate"
              />
            </motion.div>
            {/* Pillar 2 */}
            <motion.div
              className="flex flex-col items-center"
              variants={fadeInRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <h3 className="text-xl md:text-2xl font-bold text-center mb-6 text-primary">Technology & Integration Services</h3>
              <motion.img
                src="/Technology_Integration_Services.jpg"
                alt="Technology & Integration Services"
                className="w-full max-w-md rounded-2xl shadow-lg object-contain bg-white border border-primary/10"
                variants={floatY}
                animate="animate"
              />
            </motion.div>
              </div>
        </div>
      </motion.section>

      {/* Business Application Solutions - Solutions Blocks */}
      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="py-12 md:py-20 bg-background"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-extrabold text-center mb-2 text-primary">Business Application Solutions</h2>
          <p className="text-base md:text-lg text-center mb-10 text-foreground">We have Business with Comprehensive Solutions</p>
          {[
            {
              image: "/ERP.jpg",
              alt: "ERP",
              title: "Enterprise Resource Planning (ERP)",
              desc: `At Avantcore Technologies, we deliver cutting-edge Enterprise Resource Planning (ERP) solutions to streamline operations, boost productivity, and drive growth. Our scalable and flexible ERP systems integrate all aspects of business operations, providing real-time data insights for informed decision-making. By automating routine tasks and standardizing processes, our ERP solutions enhance efficiency and performance. We ensure compliance with industry regulations through precise record-keeping and reporting. Committed to ongoing support, our team maintains and updates your ERP system to guarantee smooth, secure, and efficient operations. Transform your business with Avantcore's ERP solutions and achieve your strategic goals.`
            },
            {
              image: "/GIS.jpg",
              alt: "GIS",
              title: "Geographic Information System (GIS)",
              desc: `At Avantcore Technologies, we provide advanced Geographic Information System (GIS) solutions to harness the power of spatial data for informed decision-making and problem-solving. Our GIS systems integrate seamlessly with your existing workflows, offering comprehensive tools for data collection, analysis, and visualization. By leveraging location intelligence, our solutions enhance operational efficiency and strategic planning across various industries. Our scalable and flexible GIS solutions adapt to your evolving needs, ensuring long-term success. We ensure data accuracy and compliance with robust security measures and precise reporting. Dedicated to excellence, our team provides continuous support and updates to maintain the effectiveness and reliability of your GIS systems. Empower your organization with Avantcore's GIS solutions and achieve your strategic goals.`
            },
            {
              image: "/BI_Analytics.webp",
              alt: "BI & Analytics",
              title: "Business Intelligence (BI) and Analytics",
              desc: `At Avantcore Technologies, we deliver state-of-the-art Business Intelligence (BI) and Analytics solutions to convert your data into strategic insights. Our BI systems seamlessly integrate with your existing infrastructure, offering a holistic view of business operations through real-time data analysis and visualization. By utilizing advanced analytics, our solutions facilitate informed decision-making and strategic planning, driving growth and operational efficiency. Our scalable and flexible BI solutions adapt to your evolving business needs, ensuring long-term success. We prioritize data accuracy and compliance through robust security measures and detailed reporting. Committed to excellence, our team provides ongoing support and updates to ensure your BI systems remain effective and reliable. Empower your organization with Avantcore's BI and Analytics solutions and achieve your business goals.`
            },
            {
              image: "/crm.jpeg",
              alt: "CRM",
              title: "Customer Relationship Management",
              desc: `Introducing our CRM (Customer Relationship Management) solution, where our skilled development team excels in creating customized solutions tailored to your unique business needs and processes. Whether you're a small startup or a large enterprise, our CRM is designed to streamline and optimize your customer interactions, sales processes, and marketing efforts. With intuitive features and seamless integration capabilities, our CRM empowers you to build stronger relationships with your customers, improve efficiency, and drive business growth. Say goodbye to one-size-fits-all solutions and hello to a CRM that works the way you do.`
            },
            {
              image: "/hcm.jpg",
              alt: "HCM",
              title: "Human Capital Management (HCM)",
              desc: `At Avantcore Technologies, we offer innovative Human Capital Management (HCM) solutions designed to optimize workforce management and enhance organizational performance. Our HCM systems streamline HR processes, from recruitment and onboarding to talent development and payroll management. By providing real-time insights into workforce data, our solutions enable informed decision-making and strategic planning. With scalable and flexible features, our HCM solutions adapt to your evolving business needs, ensuring long-term success. We ensure compliance with regulatory requirements through precise record-keeping and reporting. Dedicated to continuous support, our team maintains and updates your HCM system for smooth and efficient operations. Transform your HR operations with Avantcore's HCM solutions and achieve your business objectives.`
            }
          ].map((block, idx) => (
            <div
              key={block.title}
              className={`grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-16`}
            >
              {/* Image Side */}
              {(idx % 2 === 0) ? (
                <motion.div
                  className="flex justify-center"
                  variants={fadeInLeft}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                >
                  <motion.img
                    src={block.image}
                    alt={block.alt}
                    className="w-full max-w-md rounded-2xl shadow-lg object-contain bg-white"
                    variants={floatY}
                    animate="animate"
                  />
                </motion.div>
              ) : null}
              {/* Text Side */}
              <motion.div
                variants={idx % 2 === 0 ? fadeInRight : fadeInLeft}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
              >
                <h3 className="text-2xl md:text-4xl font-extrabold mb-4 text-gray-900">{block.title}</h3>
                <p className="text-base md:text-lg text-gray-800 leading-relaxed">{block.desc}</p>
              </motion.div>
              {/* Image Side for odd indexes */}
              {(idx % 2 === 1) ? (
                <motion.div
                  className="flex justify-center"
                  variants={fadeInRight}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                >
                  <motion.img
                    src={block.image}
                    alt={block.alt}
                    className="w-full max-w-md rounded-2xl shadow-lg object-contain bg-white"
                    variants={floatY}
                    animate="animate"
                  />
                </motion.div>
              ) : null}
            </div>
          ))}
        </div>
      </motion.section>

      {/* Our Services - Technology & Integration Services Section */}
      <motion.section
        id="tools"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="py-16 bg-background"
      >
        <div className="container mx-auto px-4">
          <p className="text-xs text-primary text-center tracking-widest mb-2 uppercase">Our Services</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-2 text-primary">Technology & Integration Services</h2>
          <motion.div className="w-24 h-1 bg-primary rounded-full mx-auto mb-6" initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} transition={{ duration: 0.7 }} style={{ transformOrigin: 'left' }} />
          <p className="text-base md:text-lg text-center mb-12 text-foreground max-w-2xl mx-auto">
            Explore our array of services tailored to meet your business needs. We offer solutions to drive your success in today's competitive landscape.
          </p>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 items-center justify-items-center"
          >
            {[ 
              { src: "/apple_logo_1988.webp", alt: "Apple" },
              { src: "/Node.js_logo_2015.svg_.png", alt: "Node.js" },
              { src: "/duckdb.png", alt: "DuckDB" },
              { src: "/Google-flutter-logo.svg_.png", alt: "Flutter" },
              { src: "/hexagon.jpeg", alt: "Hexagon" },
              { src: "/postgresql.png", alt: "PostgreSQL" },
              { src: "/Windows-Logo.png", alt: "Windows 11" },
              { src: "/Django-Logo.png", alt: "Django" },
              { src: "/mapbox.png", alt: "Mapbox" },
              { src: "/OpenLayers-370x206-1.png", alt: "OpenLayers" },
              { src: "/android.png", alt: "Android" },
              { src: "/PHP-Logo-PNG-Image.png", alt: "PHP" },
              { src: "/laravel.png", alt: "Laravel" },
              { src: "/codigniter.png", alt: "CodeIgniter" },
              { src: "/Expressjs.png", alt: "Express" },
              { src: "/angularjs-logo-600x394-1.png", alt: "AngularJS" },
            ].map((logo, idx) => (
              <motion.div
                key={logo.alt}
                variants={cardVariants}
                whileHover={{ scale: 1.12, boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.18)', backgroundColor: '#e3f2fd' }}
                whileTap={{ scale: 0.98 }}
                className="transition-all duration-300 bg-white rounded-2xl p-5 flex items-center justify-center shadow-md border border-primary/10"
                style={{ minHeight: 100 }}
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="h-20 md:h-24 object-contain"
                  style={{ maxWidth: 160 }}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Our Success Stories Section */}
      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="py-12 bg-background"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-8 text-primary">Our Success Stories</h2>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 items-center justify-items-center"
          >
            {[ 
              { src: "/rising_distribution.png", alt: "Rising Distribution" },
              { src: "/dixy_chicken.png", alt: "Dixy Chicken" },
              { src: "/agc_pak.png", alt: "AGC Pakistan" },
              { src: "/riyal_commision.jpeg", alt: "Riyal Commission" },
              { src: "/punjab_health_foundation.jpeg", alt: "Punjab Health Foundation" },
              { src: "/prime_food_distribution.jpg", alt: "Prime Food Distribution" },
              { src: "/inventooly.png", alt: "Inventooly" },
              { src: "/hyundai.png", alt: "Hyundai" },
              { src: "/aryana_food.jpeg", alt: "Aryana Food" },
              { src: "/star_food.jpeg", alt: "Star Food" },
              { src: "/housr.jpeg", alt: "Housr" },
              { src: "/urtasker.jpeg", alt: "Urtasker" },
              { src: "/girlzwhosell.jpeg", alt: "GirlzWhoSell" },
              { src: "/ayan_energy.png", alt: "Ayan Energy" },
              { src: "/cloud_billing_manager.jpg", alt: "Cloud Billing Manager" },
              { src: "/crm_avantcore.png", alt: "CRM Avantcore" },
            ].map((logo, idx) => (
              <motion.div
                key={logo.alt}
                variants={cardVariants}
                whileHover={{ scale: 1.12, boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.18)', backgroundColor: '#e3f2fd' }}
                whileTap={{ scale: 0.98 }}
                className="transition-all duration-300 bg-white rounded-2xl p-5 flex items-center justify-center shadow-md border border-primary/10"
                style={{ minHeight: 100 }}
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="h-20 md:h-24 object-contain"
                  style={{ maxWidth: 160 }}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Our Services - What Service We Offer Section */}
      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="py-16 bg-background"
      >
        <div className="container mx-auto px-4">
          <p className="text-xs text-primary text-center tracking-widest mb-2 uppercase">Our Services</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-2 text-primary">What Service We Offer</h2>
          <div className="w-24 h-1 bg-primary rounded-full mx-auto mb-6"></div>
          <p className="text-base md:text-lg text-center mb-12 text-foreground max-w-2xl mx-auto">
            Explore our array of services tailored to meet your business needs. We offer solutions to drive your success in today's competitive landscape
          </p>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {/* Data Management And Analytics (Blue Card) */}
            <motion.div
              variants={cardVariants}
              whileHover={{ scale: 1.05, boxShadow: '0 8px 32px 0 rgba(37,124,255,0.18)', backgroundColor: '#1976D2' }}
              className="rounded-2xl rounded-tl-[2.5rem] p-8 flex flex-col shadow-lg bg-primary text-white transition-all duration-300"
            >
              <div className="mb-4 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="4" width="18" height="14" rx="2" stroke="white"/>
                  <path d="M8 20h8" stroke="white" strokeLinecap="round"/>
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2">Data Management And Analytics</h3>
              <p className="text-sm mb-4">With advanced analytics tools and expert guidance, we transform raw data into actionable insights, driving efficiency, innovation, and strategic growth across your business operations.</p>
              <Link to="/services" className="text-xs font-semibold underline underline-offset-2">READ MORE &rarr;</Link>
            </motion.div>
            {/* Custom Software Development */}
            <motion.div
              variants={cardVariants}
              whileHover={{ scale: 1.05, boxShadow: '0 8px 32px 0 rgba(37,124,255,0.10)', backgroundColor: '#fff' }}
              className="rounded-2xl p-8 flex flex-col shadow border border-primary/10 bg-white text-primary transition-all duration-300"
            >
              <div className="mb-4 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <rect x="4" y="4" width="16" height="16" rx="2" stroke="#1976D2"/>
                  <path d="M8 8h8v8H8z" stroke="#1976D2"/>
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2">Custom Software Development</h3>
              <p className="text-sm mb-4">With a focus on scalability, flexibility, and usability, we empower your organization to thrive in today's dynamic digital landscape.</p>
              <Link to="/services" className="text-xs font-semibold text-primary underline underline-offset-2">READ MORE &rarr;</Link>
            </motion.div>
            {/* Application Integration */}
            <motion.div
              variants={cardVariants}
              whileHover={{ scale: 1.05, boxShadow: '0 8px 32px 0 rgba(37,124,255,0.10)', backgroundColor: '#fff' }}
              className="rounded-2xl p-8 flex flex-col shadow border border-primary/10 bg-white text-primary transition-all duration-300"
            >
              <div className="mb-4 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" stroke="#1976D2"/>
                  <path d="M8 12h8" stroke="#1976D2"/>
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2">Application Integration</h3>
              <p className="text-sm mb-4">Our solutions are designed to enhance efficiency, reduce operational costs, and improve decision-making capabilities. Trust Avantcore to optimize your application ecosystem and drive business success.</p>
              <Link to="/services" className="text-xs font-semibold text-primary underline underline-offset-2">READ MORE &rarr;</Link>
            </motion.div>
            {/* Cloud Solutions */}
            <motion.div
              variants={cardVariants}
              whileHover={{ scale: 1.05, boxShadow: '0 8px 32px 0 rgba(37,124,255,0.10)', backgroundColor: '#fff' }}
              className="rounded-2xl p-8 flex flex-col shadow border border-primary/10 bg-white text-primary transition-all duration-300"
            >
              <div className="mb-4 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path d="M6 18v-2a4 4 0 014-4h4a4 4 0 014 4v2" stroke="#1976D2"/>
                  <circle cx="12" cy="8" r="4" stroke="#1976D2"/>
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2">Cloud Solutions</h3>
              <p className="text-sm mb-4">Harness the power of the cloud to enhance flexibility, scalability, and innovation with Avantcore as your trusted partner."</p>
              <Link to="/services" className="text-xs font-semibold text-primary underline underline-offset-2">READ MORE &rarr;</Link>
            </motion.div>
            {/* GIS Integration And Solutions */}
            <motion.div
              variants={cardVariants}
              whileHover={{ scale: 1.05, boxShadow: '0 8px 32px 0 rgba(37,124,255,0.10)', backgroundColor: '#fff' }}
              className="rounded-2xl p-8 flex flex-col shadow border border-primary/10 bg-white text-primary transition-all duration-300"
            >
              <div className="mb-4 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <rect x="4" y="4" width="16" height="16" rx="2" stroke="#1976D2"/>
                  <path d="M12 8v8" stroke="#1976D2"/>
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2">GIS Integration And Solutions</h3>
              <p className="text-sm mb-4">enable seamless integration of GIS technology into your workflows, unlocking insights and optimizing operations.</p>
              <Link to="/services" className="text-xs font-semibold text-primary underline underline-offset-2">READ MORE &rarr;</Link>
            </motion.div>
            {/* Training And Support */}
            <motion.div
              variants={cardVariants}
              whileHover={{ scale: 1.05, boxShadow: '0 8px 32px 0 rgba(37,124,255,0.10)', backgroundColor: '#fff' }}
              className="rounded-2xl p-8 flex flex-col shadow border border-primary/10 bg-white text-primary transition-all duration-300"
            >
              <div className="mb-4 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" stroke="#1976D2"/>
                  <path d="M9 12h6" stroke="#1976D2"/>
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2">Training And Support</h3>
              <p className="text-sm mb-4">our dedicated support team ensures smooth operations and rapid issue resolution.</p>
              <Link to="/services" className="text-xs font-semibold text-primary underline underline-offset-2">READ MORE &rarr;</Link>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Testimonials Section (Professional Carousel) */}
      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="py-24 bg-primary/90 relative"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-white text-center">Learn from Our Client's Experiences</h2>
          <div className="flex flex-col items-center">
            <div className="w-full flex flex-col md:flex-row justify-center items-stretch gap-8 mb-12">
              {testimonials.slice(testimonialIndex, testimonialIndex + 3).concat(
                testimonialIndex + 3 > testimonials.length
                  ? testimonials.slice(0, testimonialIndex + 3 - testimonials.length)
                  : []
              ).map((t, idx) => (
                <div
                  key={t.name}
                  className="relative flex-1 bg-white rounded-3xl shadow-2xl px-8 pt-12 pb-20 flex flex-col items-center min-w-[320px] max-w-xl mx-auto border border-primary/10"
                >
                  {/* Blue quote icon */}
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-white rounded-full p-2 shadow-md border-4 border-primary/10">
                    <svg width="40" height="40" fill="none" stroke="#1976D2" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><text x="10" y="32" fontSize="32" fontFamily="serif">&#8220;</text></svg>
                  </div>
                  {/* Testimonial text */}
                  <p className="italic text-base text-center text-foreground mb-8 font-light leading-relaxed mt-6">{t.text}</p>
                  {/* Avatar and name */}
                  <div className="flex flex-col items-center mt-4">
                    <div className="w-20 h-20 rounded-full border-4 border-primary bg-blue-50 flex items-center justify-center shadow-lg overflow-hidden">
                      <img
                        src={testimonialAvatars[idx % testimonialAvatars.length]}
                        alt={t.name}
                        className="w-16 h-16 object-cover rounded-full"
                      />
                    </div>
                    <span className="mt-3 text-gray-900 font-semibold text-base text-center">{t.name}</span>
                  </div>
            </div>
              ))}
            </div>
            {/* Pagination dots */}
            <div className="flex gap-2 mt-16">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setTestimonialIndex(idx)}
                  className={`w-3 h-3 rounded-full ${testimonialIndex === idx ? 'bg-accent' : 'bg-primary/30'} transition`}
                  aria-label={`Go to testimonial ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* New section below testimonials */}
      <section className="py-20 bg-white mb-32">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-start gap-12">
          {/* Left: Image and quote */}
          <div className="relative flex-1 flex justify-center items-start">
            <img
              src='/newsandevents/ahmad_shahzad.jpg'
              alt="Ahmed Shehzad Cheema"
              className="rounded-3xl w-full max-w-md object-cover shadow-lg"
              style={{ minHeight: 340, minWidth: 320 }}
            />
            {/* Blue quote box overlay */}
            <div className="absolute left-0 bottom-0 translate-y-1/2 bg-blue-600 text-white rounded-xl p-6 pr-16 shadow-lg flex items-center" style={{ maxWidth: 380 }}>
              <span className="text-base md:text-lg italic font-light z-10">
                Don't try to tell the client what he wants. If you want to be smart, be smart in the shower. Then get out, go to work, and serve the client.
              </span>
              <svg className="absolute right-4 bottom-2 opacity-20" width="60" height="60" fill="none" stroke="white" strokeWidth="2"><text x="10" y="50" fontSize="60" fontFamily="serif">&#8220;</text></svg>
            </div>
          </div>
          {/* Right: About and bio */}
          <div className="flex-1 flex flex-col justify-center">
            <span className="uppercase text-blue-600 font-bold tracking-widest text-xs mb-2">About Company</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-blue-900 mb-4">We Build New Future With Best Techology</h2>
            <p className="text-gray-700 text-base md:text-lg mb-6 max-w-xl">
              We are architects of the future, pioneering innovation through cutting-edge technology. With a steadfast commitment to excellence, we build tomorrow's possibilities today.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 mb-8">
              <div className="flex items-center gap-2 text-blue-900 font-medium"><svg width="20" height="20" fill="none" stroke="#257CFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="5 11 9 15 15 7"></polyline></svg> Free Consultations</div>
              <div className="flex items-center gap-2 text-blue-900 font-medium"><svg width="20" height="20" fill="none" stroke="#257CFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="5 11 9 15 15 7"></polyline></svg> Artifical Campaign</div>
              <div className="flex items-center gap-2 text-blue-900 font-medium"><svg width="20" height="20" fill="none" stroke="#257CFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="5 11 9 15 15 7"></polyline></svg> Brilliant Client Service</div>
              <div className="flex items-center gap-2 text-blue-900 font-medium"><svg width="20" height="20" fill="none" stroke="#257CFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="5 11 9 15 15 7"></polyline></svg> Innovative Solutions</div>
              <div className="flex items-center gap-2 text-blue-900 font-medium"><svg width="20" height="20" fill="none" stroke="#257CFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="5 11 9 15 15 7"></polyline></svg> Affordable Pricing</div>
              <div className="flex items-center gap-2 text-blue-900 font-medium"><svg width="20" height="20" fill="none" stroke="#257CFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="5 11 9 15 15 7"></polyline></svg> 24/7 Support</div>
            </div>
            <h3 className="text-2xl md:text-3xl font-extrabold text-gray-500 mb-1 mt-4 tracking-wide">AHMED SHEHZAD CHEEMA</h3>
            <div className="text-blue-900 font-semibold mb-2">Chairman</div>
            <p className="text-gray-700 text-base max-w-xl">
              Mr. Ahmed Shahzad Cheema has been associated with the Company since its inception as promoter. Mr. Cheema is an eminent individual and is part of various National and International Boards and Bodies. He is responsible for the overall working of the Company and is instrumental in making strategic decisions for the Company.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
