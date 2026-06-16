import React, { useState, useRef, useCallback, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence, easeInOut } from 'framer-motion';
import {
  Database,
  BarChart3,
  Cloud,
  Users,
  UserCheck,
  Server,
  Globe,
  Briefcase,
  Map,
  Award,
  ArrowRight,
  CheckCircle,
  DollarSign,
  Headphones,
  ChevronLeft,
  ChevronRight,
  Star,
} from 'lucide-react';
import HeroSlider from '@/components/sections/HeroSlider';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/card';
import Button from '@/components/ui/button';
import WhyChooseAvantcore from '@/components/sections/WhyChooseAvantcore';
import PremiumTechnologyPartners from '@/components/sections/PremiumTechnologyPartners';
import PremiumSuccessStories from '@/components/sections/PremiumSuccessStories';
import EnterprisePartnerCarousel from '@/components/sections/EnterprisePartnerCarousel';
import { ViewportAnimatedSection, ViewportReveal } from '@/components/motion/ViewportAnimatedSection';
import { 
  containerAnimation, 
  childAnimation,
  fadeInUp,
  scrollReveal,
  scrollRevealLeft,
  scrollRevealRight,
  hoverLift,
  imageZoom,
  ctaButtonHover,
  numberCounterItem,
  cardHover,
} from '@/constants/animations';
import { useCountUp } from '@/hooks/useCountUp';

// Hero Slides Data with proper navigation
const heroSlides = [
  {
    title: 'Sales And Distribution Management',
    subtitle: 'The system allows you to create sales, manage distribution operations',
    description: 'Manage distribution operations effectively with delivery, receiving, and fulfillment.',
    buttonText: 'Learn More',
    backgroundImage: '/saleanddistribution.jpg',
    link: '/products/sales-distribution'
  },
  {
    title: 'HRMS Payroll And Compliance',
    subtitle: 'Complete HR management solution',
    description: 'Manage organisation employees HR and payroll, performance management, task assignments and recruitment.',
    buttonText: 'Explore HRMS',
    backgroundImage: '/hrms.jpg',
    link: '/products/hrms-payroll'
  },
  {
    title: 'Inventory And Purchase Order Management',
    subtitle: 'Smart inventory tracking',
    description: 'The solution allows you to manage orders from customers/suppliers, including tracking order status and inventory levels.',
    buttonText: 'View Features',
    backgroundImage: '/imageggg.jpg',
    link: '/products/inventory-purchase'
  }
];

// Testimonials Data with Enhanced Information
const testimonials = [
  {
    name: 'Jeniffer Parker',
    designation: 'Operations Director',
    company: 'Rising Distribution',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&h=200&q=80',
    text: "We are incredibly impressed with Avantcore Technology's services. Their Sales and Distribution System has transformed our business operations, providing us with a user-friendly interface and efficient tools. Their HRMS & Payroll Solution simplified our HR processes and improved employee management. Their dedication to after-sale support has made us loyal customers for life."
  },
  {
    name: 'Michael Steven',
    designation: 'Business Manager',
    company: 'Dixy Chicken',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&h=200&q=80',
    text: "Avantcore Technology has exceeded our expectations. Their Sales and Distribution System has boosted our sales process, with its intuitive design and easy navigation. The HRMS & Payroll Solution they provided streamlined our HR tasks, saving us time and resources. Their after-sale service has been outstanding, providing timely assistance whenever we needed it."
  },
  {
    name: 'Laura Martinez',
    designation: 'Finance Manager',
    company: 'AGC Pakistan',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&h=200&q=80',
    text: "We are beyond satisfied with Avantcore Technology's services. Their Sales and Distribution System transformed the way we handle sales, with its elegant design and unmatched efficiency. Their Inventory and Purchase Management Solution has been a game-changer, simplifying our supply chain processes and reducing costs. Their after-sale support has been top-notch, making us feel valued as a client."
  },
  {
    name: 'Ayesha Khan',
    designation: 'Project Lead',
    company: 'Prime Food Distribution',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&h=200&q=80',
    text: "Avantcore's team delivered our project on time and exceeded our expectations. Their professionalism and technical expertise are unmatched. We highly recommend their services to anyone looking for reliable tech partners."
  },
  {
    name: 'John Doe',
    designation: 'IT Director',
    company: 'Inventooly',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&h=200&q=80',
    text: "The support and dedication from Avantcore Technologies have been phenomenal. Their solutions are robust, scalable, and user-friendly. We look forward to working with them again!"
  },
  {
    name: 'Sara Lee',
    designation: 'CEO',
    company: 'Aryana Food',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&h=200&q=80',
    text: "From consultation to delivery, Avantcore was with us every step of the way. Their innovative approach and attention to detail made all the difference."
  }
];

// News/Events Images
const newsImages = [
  '/newsandevents/latest1.jpg',
  '/newsandevents/latest2.jpg',
  '/newsandevents/IMG_1540.jpg',
  '/newsandevents/IMG_1488.jpg',
  '/newsandevents/IMG_1535.jpg',
  '/newsandevents/IMG_1364.jpg',
  '/newsandevents/IMG_1579.jpg',
  '/newsandevents/IMG_1564.jpg',
  '/newsandevents/IMG_1545.jpg',
  '/newsandevents/IMG_1513.jpg',
  '/newsandevents/IMG_1504.jpg',
  '/newsandevents/IMG_1484-Copy.jpg',
  '/newsandevents/IMG_1481-Copy.jpg',
  '/newsandevents/after-iftari-party.jpg',
  '/newsandevents/iftari-party.jpg',
];

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
            <p className="text-sm text-blue-600 font-medium mb-4">{member.title}</p>
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

// Team Members
const team = [
  {
    name: 'Ahmad Shahzad',
    title: 'Chairman',
    img: '/newsandevents/ahmad_shahzad.jpg',
    linkedin: 'https://www.linkedin.com/in/ahmad-shahzad-cheema-2a696011/'
  },
  {
    name: 'Yamin Virk',
    title: 'Founder & CEO',
    img: '/newsandevents/yamin_virk.jpg',
    linkedin: 'https://www.linkedin.com/in/yamin-virk-4b594a17/'
  },
  {
    name: 'Athar Butt',
    title: 'Business Development',
    img: '/newsandevents/athar_butt.jpg',
    linkedin: 'https://www.linkedin.com/in/matharsaeed?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app&original_referer='
  },
  {
    name: 'Babar Azeem Khan',
    title: 'Senior Developer',
    img: '/newsandevents/babar.jpg',
    linkedin: 'https://www.linkedin.com/in/babar-azeem-a28b15176?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
  },
  {
    name: 'Rana Rizwan Sarwar',
    title: 'Senior Executive',
    img: '/rana rizwan sarwar .jpg',
    linkedin: 'https://www.linkedin.com/in/rana-rizwan-sarwar-55092670'
  }
];

// Technology Stack Logos
const technologyLogos = [
  { src: "/apple_logo_1988.jpg", alt: "Apple" },
  { src: "/Node.js_logo_2015.svg_.jpg", alt: "Node.js" },
  { src: "/duckdb.jpg", alt: "DuckDB" },
  { src: "/Google-flutter-logo.svg_.jpg", alt: "Flutter" },
  { src: "/hexagon.jpg", alt: "Hexagon" },
  { src: "/postgresql.jpg", alt: "PostgreSQL" },
  { src: "/Windows-Logo.jpg", alt: "Windows 11" },
  { src: "/Django-Logo.jpg", alt: "Django" },
  { src: "/mapbox.jpg", alt: "Mapbox" },
  { src: "/OpenLayers-370x206-1.jpg", alt: "OpenLayers" },
  { src: "/android.jpg", alt: "Android" },
  { src: "/PHP-Logo-PNG-Image.jpg", alt: "PHP" },
  { src: "/laravel.jpg", alt: "Laravel" },
  { src: "/codigniter.jpg", alt: "CodeIgniter" },
  { src: "/Expressjs.jpg", alt: "Express" },
  { src: "/angularjs-logo-600x394-1.jpg", alt: "AngularJS" },
];

// Success Stories / Clients
const successStories = [
  { src: "/rising_distribution.jpg", alt: "Rising Distribution" },
  { src: "/dixy_chicken.jpg", alt: "Dixy Chicken" },
  { src: "/agc_pak.jpg", alt: "AGC Pakistan" },
  { src: "/riyal_commision.jpg", alt: "Riyal Commission" },
  { src: "/punjab_health_foundation.jpg", alt: "Punjab Health Foundation" },
  { src: "/prime_food_distribution.jpg", alt: "Prime Food Distribution" },
  { src: "/inventooly.jpg", alt: "Inventooly" },
  { src: "/hyundai.jpg", alt: "Hyundai" },
  { src: "/aryana_food.jpg", alt: "Aryana Food" },
  { src: "/star_food.jpg", alt: "Star Food" },
  { src: "/housr.jpg", alt: "Housr" },
  { src: "/urtasker.jpg", alt: "Urtasker" },
  { src: "/girlzwhosell.jpg", alt: "GirlzWhoSell" },
  { src: "/ayan_energy.jpg", alt: "Ayan Energy" },
  { src: "/cloud_billing_manager.jpg", alt: "Cloud Billing Manager" },
  { src: "/crm_avantcore.jpg", alt: "CRM Avantcore" },
];

const serviceFeatures = [
  {
    title: 'Sales And Distribution Management',
    subtitle: 'Manage distribution operations effectively',
    description: 'The system allows you to create sales, manage distribution operations, such as delivery, receiving, and fulfillment.',
    buttonText: 'Learn More',
    backgroundImage: '/saleanddistribution.jpg'
  },
  {
    title: 'HRMS Payroll And Compliance',
    subtitle: 'Complete HR management solution',
    description: 'Manage organisation employees HR and payroll, performance management, task assignments and recruitment.',
    buttonText: 'Explore HRMS',
    backgroundImage: '/hrms.jpg'
  },
  {
    title: 'Inventory And Purchase Order Management',
    subtitle: 'Smart inventory tracking',
    description: 'The solution allows you to manage orders from customers/suppliers, including tracking order status and inventory levels.',
    buttonText: 'View Features',
    backgroundImage: '/inventory.jpg'
  }
];

// Your Original Value Props
const valueProps = [
  {
    icon: CheckCircle,
    title: 'Best Service',
    desc: 'We redefine excellence in service. With unwavering dedication, we consistently deliver the best.'
  },
  {
    icon: DollarSign,
    title: 'Affordable Price',
    desc: 'Ensuring value without compromise. Our commitment to affordability never sacrifices excellence.'
  },
  {
    icon: Headphones,
    title: '24/7 Support',
    desc: 'At Avantcore, quality support, around the clock. Our team is here for you, 24/7, ensuring your success.'
  }
];

// Your Original Business Solutions
const businessSolutions = [
  {
    icon: Database,
    title: 'Enterprise Resource Planning (ERP)',
    desc: 'Cutting-edge ERP solutions to streamline operations, boost productivity, and drive growth.',
    link: '/solutions/erp',
    image: '/Enterprise%20Resource%20Planning%20%28ERP%29.jpg'
  },
  {
    icon: Map,
    title: 'Geographic Information System (GIS)',
    desc: 'Advanced GIS solutions to harness the power of spatial data for informed decision-making.',
    link: '/solutions/gis',
    image: '/geographic%20information%20system%20%28GIS%29.jpg'
  },
  {
    icon: BarChart3,
    title: 'Business Intelligence (BI) and Analytics',
    desc: 'State-of-the-art BI and Analytics solutions to convert your data into strategic insights.',
    link: '/solutions/bi',
    image: '/Business%20Intelligence%20%28BI%29%20and%20Analytics_.jpg'
  },
  {
    icon: Users,
    title: 'Customer Relationship Management',
    desc: 'Custom CRM solutions to streamline and optimize your customer interactions and sales.',
    link: '/solutions/crm',
    image: '/Customer%20Relationship%20Management.jpg'
  },
  {
    icon: UserCheck,
    title: 'Human Capital Management (HCM)',
    desc: 'Innovative HCM solutions to optimize workforce management and enhance performance.',
    link: '/solutions/hcm',
    image: '/Human%20Capital%20Management%20%28HCM%29.jpg'
  }
];

// Your Original Services
const services = [
  {
    title: 'Data Management And Analytics',
    desc: 'Transform raw data into actionable insights, driving efficiency, innovation, and growth.',
    link: '/services',
    image: '/Data%20Management%20And%20Analytics.jpg'
  },
  {
    title: 'Custom Software Development',
    desc: 'Scalable, flexible, and usable solutions to help your organization thrive.',
    link: '/services',
    image: '/Custom%20Software%20Development.jpg'
  },
  {
    title: 'Application Integration',
    desc: 'Enhance efficiency, reduce costs, and improve decision-making with optimized application ecosystems.',
    link: '/services',
    image: '/Application%20Integration.jpg'
  },
  {
    title: 'Cloud Solutions',
    desc: 'Harness the power of the cloud to enhance flexibility, scalability, and innovation.',
    link: '/services',
    image: '/Cloud%20Solutions.jpg'
  },
  {
    title: 'GIS Integration And Solutions',
    desc: 'Seamless integration of GIS technology into your workflows.',
    link: '/services',
    image: '/GIS%20Integration%20And%20Solutions.jpg'
  },
  {
    title: 'Training And Support',
    desc: 'Dedicated support team ensures smooth operations and rapid issue resolution.',
    link: '/services',
    image: '/Training%20And%20Support.jpg'
  }
];

const companyProfile = `AVANTCORE Technologies has been at the forefront of delivering innovative software solutions and services since its establishment. Our team at AVANTCORE is dedicated to providing tailored solutions to a diverse range of industries and sectors, ensuring that every project meets the client's specifications, budget, and quality standards. From small businesses to enterprise-level corporations, AVANTCORE offers comprehensive IT services and software solutions for US, UK, KSA & Pakistan. We pride ourselves on our ability to identify the unique IT requirements of companies and develop customized products and services to meet those needs effectively. With our full-range in-house development capabilities, clients can trust that AVANTCORE will deliver the right solutions to drive their businesses forward.`;

const stats = [
  { number: 49, label: 'Years of Experience', suffix: '+' },
  { number: 500, label: 'Projects Completed', suffix: '+' },
  { number: 8500, label: 'Team Members', suffix: '+' },
  { number: 300, label: 'Active Clients', suffix: '+' },
];

// Enterprise Images for Missing Sections
const enterpriseImages = {
  // Company Profile Section
  companyProfile: '/company-office.jpg',
  
  // Value Props Section - visual badges/icons
  valuePropsImages: [
    '/value-service.jpg',      // Best Service
    '/value-affordable.jpg',   // Affordable Price
    '/value-support.jpg'       // 24/7 Support
  ],
  
  // Business Solutions Section
  businessSolutionsImages: [
    '/erp-system.jpg',         // ERP
    '/gis-mapping.jpg',        // GIS
    '/bi-analytics.jpg',       // BI & Analytics
    '/crm-interface.jpg',      // CRM
    '/hcm-workforce.jpg'       // HCM
  ],
  
  // Services Section
  servicesImages: [
    '/data-analytics.jpg',     // Data Management
    '/software-dev.jpg',       // Custom Software
    '/integration.jpg',        // App Integration
    '/cloud-infrastructure.jpg', // Cloud Solutions
    '/gis-solutions.jpg',      // GIS Solutions
    '/training-support.jpg'    // Training & Support
  ],
  
  // CTA Section
  ctaImage: '/business-transformation.jpg',
  
  // Newsletter Section
  newsletterImage: '/newsletter-bg.jpg'
};

// Counter Component
const StatCounter = ({ number, label, suffix }: { number: number; label: string; suffix: string }) => {
  const { count, ref } = useCountUp(number, 2000);
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      variants={childAnimation}
      whileHover={{ y: -4 }}
      className="h-full"
    >
      <div className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-lg transition-all text-center h-full flex flex-col items-center justify-center">
        <motion.div className="text-5xl md:text-6xl font-bold text-blue-600 mb-4">
          {count}
          <span className="text-3xl md:text-4xl ml-1">{suffix}</span>
        </motion.div>
        <p className="text-gray-600 font-medium">{label}</p>
      </div>
    </motion.div>
  );
};

const HomeNew = () => {
  const navigate = useNavigate();
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Slider - Your Data */}
      <HeroSlider slides={heroSlides} />

      {/* Company Profile Section - About AVANTCORE - WHITE */}
      <Section background="white" spacing="generous">
        <ViewportAnimatedSection className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center max-w-7xl mx-auto" imageDelay={0} contentDelay={0.15}>
          {/* Image with scroll direction-aware animations */}
          <motion.div className="relative">
            <div className="aspect-square rounded-lg overflow-hidden shadow-2xl">
              <motion.img
                src="/about%20us%20.jpg"
                alt="AvantCore About Us"
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                loading="lazy"
              />
            </div>
          </motion.div>

          {/* Content with viewport animations */}
          <motion.div className="space-y-6">
            <motion.div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                About AvantCore
              </h2>
              <motion.div 
                className="h-1 w-20 bg-blue-600 mb-6"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: false, amount: 0.5 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
              />
            </motion.div>
            
            <motion.p className="text-lg text-gray-700 leading-relaxed">
              {companyProfile}
            </motion.p>
            
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="inline-block"
            >
              <Button
                variant="primary"
                size="lg"
                className="mt-4"
                onClick={() => navigate('/about')}
              >
                Learn More About Us <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </motion.div>
          </motion.div>
        </ViewportAnimatedSection>
      </Section>

      {/* Why Choose AVANTCORE - Premium Enterprise Section */}
      <WhyChooseAvantcore />

      {/* Business Solutions - Featured Products - WHITE */}
      <Section background="white" spacing="generous">
        <ViewportReveal delay={0}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            className="mb-16 text-center max-w-3xl mx-auto"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Business Solutions
            </h2>
            <p className="text-lg text-gray-600">
              Comprehensive technology solutions for enterprise growth
            </p>
          </motion.div>
        </ViewportReveal>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={containerAnimation}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
        >
          {businessSolutions.map((solution, index) => {
            const IconComponent = solution.icon;
            return (
              <ViewportReveal delay={index * 0.1}>
                <motion.div
                  variants={childAnimation}
                  whileHover={{ y: -12, rotateX: 5, rotateY: -5 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  className="h-full"
                >
                  <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-2xl transition-all duration-300 h-full flex flex-col p-8 perspective">
                    {/* Image Section with 3D Animation */}
                    {solution.image && (
                      <motion.div
                        className="mb-6 rounded-lg overflow-hidden h-40 bg-gray-100"
                        whileHover={{ 
                          scale: 1.08,
                          rotateY: 10,
                          rotateX: -5,
                        }}
                        transition={{ type: 'spring', stiffness: 300 }}
                      >
                        <motion.img
                          src={solution.image}
                          alt={solution.title}
                          className="w-full h-full object-cover"
                          whileHover={{ scale: 1.15 }}
                        />
                      </motion.div>
                    )}
                    
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {solution.title}
                    </h3>
                    
                    <p className="text-gray-600 text-sm leading-relaxed flex-grow">
                      {solution.desc}
                    </p>
                    
                    <motion.div
                      whileHover={{ x: 4 }}
                      onClick={() => solution.link && navigate(solution.link)}
                      className="flex items-center text-blue-600 font-medium mt-4 pt-4 border-t border-gray-100 cursor-pointer hover:text-blue-900 transition"
                    >
                      Learn More <ArrowRight className="ml-2 w-4 h-4" />
                    </motion.div>
                  </div>
                </motion.div>
              </ViewportReveal>
            );
          })}
        </motion.div>
      </Section>

      {/* Services - LIGHT GRAY */}
      <Section background="light-gray" spacing="generous">
        <ViewportReveal delay={0}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            className="mb-16 text-center max-w-3xl mx-auto"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-lg text-gray-600">
              Comprehensive IT services and technology solutions
            </p>
          </motion.div>
        </ViewportReveal>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={containerAnimation}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
        >
          {services.map((service, index) => {
            return (
              <ViewportReveal delay={index * 0.1}>
                <motion.div
                  variants={childAnimation}
                  whileHover={{ y: -12, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
                  transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                  className="h-full"
                >
                  <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-2xl transition-all duration-300 h-full flex flex-col p-8 group">
                    {/* Image Section with 3D Animation */}
                    {service.image && (
                      <motion.div
                        className="mb-6 rounded-lg overflow-hidden h-40 bg-gray-100"
                        whileHover={{ 
                          scale: 1.08,
                          rotateY: 8,
                        }}
                        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                      >
                        <motion.img
                          src={service.image}
                          alt={service.title}
                          className="w-full h-full object-cover"
                          whileHover={{ scale: 1.15 }}
                          transition={{ duration: 0.5 }}
                        />
                      </motion.div>
                    )}
                    
                    <motion.h3 
                      className="text-xl font-semibold text-gray-900 mb-3"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: false }}
                    >
                      {service.title}
                    </motion.h3>
                    
                    <p className="text-gray-600 text-sm leading-relaxed flex-grow">
                      {service.desc}
                    </p>
                    
                    <motion.div
                      whileHover={{ x: 4 }}
                      onClick={() => service.link && navigate(service.link)}
                      className="flex items-center text-blue-600 font-medium mt-4 pt-4 border-t border-gray-100 cursor-pointer hover:text-blue-900 transition"
                    >
                      Explore <ArrowRight className="ml-2 w-4 h-4" />
                    </motion.div>
                  </div>
                </motion.div>
              </ViewportReveal>
            );
          })}
        </motion.div>
      </Section>

      {/* CTA Section - Alternating Layout */}
      <Section background="white" spacing="generous">
        <ViewportAnimatedSection className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center max-w-7xl mx-auto" imageDelay={0.1} contentDelay={0}>
          <motion.div className="space-y-8">
            <motion.div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Ready to Transform Your Business?
              </h2>
              <div className="h-1 w-20 bg-blue-600 mb-6"></div>
            </motion.div>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              Let AvantCore Technologies help you achieve your goals with our innovative solutions and expert team.
            </p>
            
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button
                variant="primary"
                size="lg"
                onClick={() => navigate('/contact')}
              >
                Get Started Today
              </Button>
              <Button
                variant="secondary"
                size="lg"
                onClick={() => navigate('/contact')}
              >
                Schedule Consultation
              </Button>
            </motion.div>
          </motion.div>

          <motion.div className="relative">
            <div className="aspect-square rounded-lg overflow-hidden shadow-lg">
              <motion.img
                src="/News & Events - AVANTCORE TECHNOLOGIES_files/Business Transformation.jpg"
                alt="Business Transformation"
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.5 }}
              />
            </div>
          </motion.div>
        </ViewportAnimatedSection>
      </Section>

      {/* Technology & Integration Services - Enterprise Partner Carousel */}
      <EnterprisePartnerCarousel logos={technologyLogos} />

      {/* Success Stories / Clients Section */}
      <PremiumSuccessStories stories={successStories} />

      {/* Testimonials Section - Our Success Stories */}
      <Section background="light-gray" spacing="generous">
        <ViewportReveal delay={0}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            className="mb-16 text-center"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Hear from companies that have transformed their business with us
            </p>
          </motion.div>
        </ViewportReveal>

        <TestimonialCarousel testimonials={testimonials} />
      </Section>

      {/* Team Section - WHITE */}
      <Section background="white" spacing="generous">
        <ViewportReveal delay={0}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            className="mb-16 text-center"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Meet Our Professional Team
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Experts dedicated to delivering exceptional results
            </p>
          </motion.div>
        </ViewportReveal>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={containerAnimation}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8"
        >
          {team.map((member, index) => (
            <ViewportReveal delay={index * 0.1}>
              <Team3DCard member={member} variants={childAnimation} />
            </ViewportReveal>
          ))}
        </motion.div>
      </Section>
    </div>
  );
};

// Testimonial Carousel Component - Premium Version with Viewport Animations
const TestimonialCarousel = ({ testimonials }: { testimonials: Array<{ text: string; name: string; designation?: string; company?: string; image?: string }> }) => {
  const [index, setIndex] = useState(0);
  const autoPlayRef = useRef<(() => void) | null>(null);

  useEffect(() => {
    autoPlayRef.current = () => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    };
  });

  useEffect(() => {
    const play = () => {
      if (autoPlayRef.current) autoPlayRef.current();
    };
    const interval = setInterval(play, 6000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="max-w-5xl mx-auto relative">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-2xl p-8 md:p-12 border border-gray-200 shadow-lg hover:shadow-xl transition-all"
        >
          {/* Star Rating */}
          <div className="mb-6 flex gap-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star key={star} size={20} className="fill-amber-400 text-amber-400" />
            ))}
          </div>

          {/* Quote Icon */}
          <div className="mb-6 text-5xl text-blue-200 opacity-40">"</div>

          {/* Testimonial Text */}
          <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-8 font-light italic">
            {testimonials[index].text}
          </p>

          {/* Client Info Section */}
          <div className="flex items-center gap-4 pt-6 border-t border-gray-200">
            {/* Profile Photo */}
            {testimonials[index].image && (
              <motion.img
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                src={testimonials[index].image}
                alt={testimonials[index].name}
                className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover border-2 border-blue-200"
              />
            )}

            {/* Client Details */}
            <div className="flex-1">
              <p className="font-bold text-gray-900 text-lg">{testimonials[index].name}</p>
              {testimonials[index].designation && (
                <p className="text-blue-600 font-semibold text-sm md:text-base">{testimonials[index].designation}</p>
              )}
              {testimonials[index].company && (
                <p className="text-gray-500 text-sm md:text-base">{testimonials[index].company}</p>
              )}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Buttons */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={prevTestimonial}
        className="absolute -left-12 md:-left-16 top-1/2 -translate-y-1/2 p-3 rounded-full bg-blue-900 text-white hover:bg-blue-800 transition-all shadow-lg"
      >
        <ChevronLeft size={24} />
      </motion.button>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={nextTestimonial}
        className="absolute -right-12 md:-right-16 top-1/2 -translate-y-1/2 p-3 rounded-full bg-blue-900 text-white hover:bg-blue-800 transition-all shadow-lg"
      >
        <ChevronRight size={24} />
      </motion.button>

      {/* Indicators */}
      <div className="flex justify-center gap-3 mt-8">
        {testimonials.map((_, i) => (
          <motion.button
            key={i}
            onClick={() => setIndex(i)}
            whileHover={{ scale: 1.2 }}
            className={`h-3 rounded-full transition-all ${
              i === index ? 'bg-blue-900 w-8' : 'bg-gray-300 w-3 hover:bg-gray-400'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HomeNew;

