import React from 'react';
import { Cloud, Users, Package, UserCheck, ShoppingCart, Home } from 'lucide-react';
import { motion, easeOut } from 'framer-motion';

const products = [
  {
    image: '/cloud.webp',
    name: 'Cloud Billing Manager',
    description: 'Cloud Billing Manager is a SAAS-based invoicing solution integrates seamlessly with its comprehensive suite of modules, including Sales, Purchasing , HRMS, Logistics, BI reporting, and Accounts, designed for the distribution and small businesses. Fostering business growth and efficiency can be a daunting task, especially for companies that need to manage inventory, plan for the future, handle logistics, drive sales, and provide customer support. Luckily, there is a reliable and easy-to-use solution available to streamline the process. Elevate your brand with customized invoice templates featuring your business details and logo. Choose from our pre-designed options or tailor templates to your unique preference, And manymore.',
    demoLink: 'https://cloudbillingmanager.com/'
  },
  {
    image: '/hrms&.png',
    name: 'HRMS & Payroll Solution',
    description: 'HRMS& Payroll Solution, a comprehensive software solution designed to streamline and optimize human resource management and payroll processes with precision and ease. With a user-friendly interface and robust features, our solution simplifies the complexities of HR administration, from employee onboarding and performance management to leave tracking and compliance management. Seamlessly integrated payroll functionalities ensure accurate and timely processing of payroll, including tax calculations, deductions, and direct deposits.',
    demoLink: 'https://cloudbillingmanager.com/'
  },
  {
    image: '/inventoolyy.png',
    name: 'Inventooly',
    description: 'Introducing Inventooly, your all-in-one Inventory and Purchase Management Solution designed to streamline your supply chain with precision. With an intuitive and user-friendly interface, Inventooly maximizes control and efficiency, empowering you to manage all aspects of your e-commerce platforms and stores seamlessly. From distribution to forecasting, our solution handles it all, providing you with real-time insights and tools to optimize inventory levels, streamline purchasing processes, and meet customer demand effectively. Say goodbye to manual tasks and hello to automated efficiency with Inventooly.',
    demoLink: 'https://cloudbillingmanager.com/'
  },
  {
    image: '/crm.jpeg',
    name: 'Customer Relationship Management',
    description: 'Introducing our CRM (Customer Relationship Management) solution, where our skilled development team excels in creating customized solutions tailored to your unique business needs and processes. Whether you\'re a small startup or a large enterprise, our CRM is designed to streamline and optimize your customer interactions, sales processes, and marketing efforts. With intuitive features and seamless integration capabilities, our CRM empowers you to build stronger relationships with your customers, improve efficiency, and drive business growth. Say goodbye to one-size-fits-all solutions and hello to a CRM that works the way you do.',
    demoLink: 'https://cloudbillingmanager.com/'
  },
  {
    image: '/pos.png',
    name: 'Point of Sale',
    description: 'Introducing Inventooly, your all-in-one Inventory and Purchase  Management Solution designed to streamline your supply chain with precision. With an intuitive and user-friendly interface, Inventooly maximizes control and efficiency, empowering you to manage all aspects of your e-commerce platforms and stores seamlessly. From distribution to forecasting, our solution handles it all, providing you with real-time insights and tools to optimize inventory levels, streamline purchasing processes, and meet customer demand effectively. Say goodbye to manual tasks and hello to automated efficiency with Inventooly.',
    demoLink: 'https://cloudbillingmanager.com/'
  },
  {
    image: '/student_rentmate.jpg',
    name: 'Student Rentmate',
    description: 'Introducing our Property and Tenant Management Platform, a comprehensive portal designed to streamline and optimize property management processes for both house teams and commercial users. Our Property and Tenant Management Platform offers a streamlined solution for house teams, admins, agents, and landlords. Priced competitively, it provides intuitive panels for mobile app management and user-friendly dashboards for property oversight. With automated processes and AI-driven features, it optimizes workflow efficiency, making it an invaluable asset for agencies and landlords alike.',
    demoLink: 'https://cloudbillingmanager.com/'
  }
];

const testimonials = [
  {
    quote: 'The Account Module has been a game-changer for us. It streamlines our billing and accounting tasks, providing us with real-time financial data and helping us make informed decisions.',
    name: 'Michael H.'
  },
  {
    quote: 'CBM has transformed our billing processes. The AI and BI modules provide invaluable insights, making our financial management more efficient and data-driven. Highly recommended!',
    name: 'Ciarra Cobbley'
  },
  {
    quote: "The barcode inventory feature has greatly improved our stock management. It's accurate and efficient, reducing errors and saving us valuable time. Thank you, CBM!",
    name: 'Ellipse Steven'
  }
];

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: easeOut } }
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.7, ease: easeOut } }
};

const Products = () => {
  return (
    <div className="min-h-screen pt-20 bg-gray-50">
      {/* Banner Area */}
      <motion.section
        className="relative w-full h-72 md:h-96 flex items-center justify-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <img src="/our_products.png" alt="Banner" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-blue-900 bg-opacity-70 flex flex-col items-center justify-center text-center">
          <motion.h1 className="text-4xl md:text-5xl font-bold text-white mb-4" variants={fadeInUp}>Our Products</motion.h1>
          <motion.h2 className="text-2xl md:text-3xl font-semibold text-white mb-2" variants={fadeInUp}>Elevate Your Experience With Our Products</motion.h2>
        </div>
      </motion.section>

      {/* Introduction Section */}
      <motion.section
        className="py-10 bg-gray-50 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <h3 className="text-2xl md:text-3xl font-bold mb-2">What We Offer</h3>
        <p className="max-w-2xl mx-auto text-lg text-gray-600">Explore our diverse array of products tailored to meet your business needs. We offer innovative solutions to drive your success in today's competitive landscape.</p>
      </motion.section>

      {/* Products Listing with Box Design */}
      <section className="py-10 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {products.map((product, idx) => (
              <motion.div
                key={product.name}
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                whileHover={{ y: -8 }}
                className="h-full"
              >
                <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 h-full flex flex-col group">
                  {/* Image Section */}
                  <motion.div
                    className="w-full h-48 bg-gray-50 flex items-center justify-center overflow-hidden"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="h-full w-full object-contain group-hover:scale-110 transition-transform duration-300 p-4"
                      loading="lazy"
                    />
                  </motion.div>

                  {/* Content Section */}
                  <div className="p-8 flex flex-col justify-between flex-grow">
                    {/* Product Name */}
                    <h4 className="text-xl md:text-2xl font-bold text-blue-900 mb-3">
                      {product.name}
                    </h4>

                    {/* Description */}
                    <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6 flex-grow line-clamp-3">
                      {product.description}
                    </p>

                    {/* CTA Button */}
                    <a
                      href={product.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-400 hover:from-blue-700 hover:to-cyan-500 text-white font-bold px-6 py-2 rounded-lg shadow-lg transition-all duration-200 text-base tracking-wide uppercase ring-2 ring-blue-200 hover:ring-blue-400 focus:outline-none focus:ring-4 focus:ring-blue-300 w-fit"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                      Get a Demo
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <motion.section
        className="py-20 bg-gradient-to-br from-blue-900 to-blue-700 text-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">Learn from Our Client's Experiences</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, idx) => (
          <motion.div
                key={idx}
                className="bg-white text-blue-900 rounded-3xl p-10 pb-16 shadow-lg flex flex-col items-center"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeInUp}
                whileHover={{ scale: 1.04, boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.18)' }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <span className="text-6xl text-blue-600 mb-4">&ldquo;</span>
                <p className="italic text-lg mb-8 text-center">{t.quote}</p>
                <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-center px-2">
                  <span className="text-sm">{t.name}</span>
                </div>
          </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Request for a Demo Form */}
      <motion.section
        className="py-16 bg-gray-50 flex justify-center items-center mb-32"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <motion.div
          className="w-full max-w-3xl bg-gradient-to-br from-white via-blue-50 to-blue-100 rounded-3xl shadow-2xl p-0 md:p-0 mx-4 relative overflow-hidden"
          whileHover={{ scale: 1.01, boxShadow: '0 12px 36px 0 rgba(31, 38, 135, 0.20)' }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <div className="absolute left-0 top-0 h-full w-2 bg-gradient-to-b from-blue-600 to-cyan-400 rounded-tl-3xl rounded-bl-3xl" />
          <div className="relative p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 tracking-wide text-blue-900">REQUEST FOR A DEMO</h2>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="relative">
                <input type="text" id="fullName" placeholder=" " className="peer w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-200 bg-white" />
                <label htmlFor="fullName" className="absolute left-4 top-3 text-gray-500 text-sm transition-all duration-200 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-4 peer-focus:text-xs bg-white px-1">Your Full Name</label>
              </div>
              <div className="relative">
                <input type="email" id="email" placeholder=" " className="peer w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-200 bg-white" />
                <label htmlFor="email" className="absolute left-4 top-3 text-gray-500 text-sm transition-all duration-200 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-4 peer-focus:text-xs bg-white px-1">Your Email</label>
              </div>
              <div className="relative">
                <input type="text" id="phone" placeholder=" " className="peer w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-200 bg-white" />
                <label htmlFor="phone" className="absolute left-4 top-3 text-gray-500 text-sm transition-all duration-200 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-4 peer-focus:text-xs bg-white px-1">Phone Number</label>
              </div>
              <div className="relative">
                <input type="text" id="nature" placeholder=" " className="peer w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-200 bg-white" />
                <label htmlFor="nature" className="absolute left-4 top-3 text-gray-500 text-sm transition-all duration-200 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-4 peer-focus:text-xs bg-white px-1">Nature Of Business</label>
              </div>
              <div className="relative">
                <input type="text" id="companyName" placeholder=" " className="peer w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-200 bg-white" />
                <label htmlFor="companyName" className="absolute left-4 top-3 text-gray-500 text-sm transition-all duration-200 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-4 peer-focus:text-xs bg-white px-1">Company Name</label>
              </div>
              <div className="relative">
                <input type="text" id="companyWebsite" placeholder=" " className="peer w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-200 bg-white" />
                <label htmlFor="companyWebsite" className="absolute left-4 top-3 text-gray-500 text-sm transition-all duration-200 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-4 peer-focus:text-xs bg-white px-1">Company Website</label>
              </div>
              <div className="relative">
                <input type="text" id="registerNumber" placeholder=" " className="peer w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-200 bg-white" />
                <label htmlFor="registerNumber" className="absolute left-4 top-3 text-gray-500 text-sm transition-all duration-200 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-4 peer-focus:text-xs bg-white px-1">Company Register number</label>
              </div>
              <div className="relative">
                <input type="text" id="companyId" placeholder=" " className="peer w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-200 bg-white" />
                <label htmlFor="companyId" className="absolute left-4 top-3 text-gray-500 text-sm transition-all duration-200 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-4 peer-focus:text-xs bg-white px-1">Company Id (If Any)</label>
              </div>
              <div className="relative">
                <input type="text" id="country" placeholder=" " className="peer w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-200 bg-white" />
                <label htmlFor="country" className="absolute left-4 top-3 text-gray-500 text-sm transition-all duration-200 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-4 peer-focus:text-xs bg-white px-1">Country Name</label>
              </div>
              <div className="relative md:col-span-2">
                <textarea id="message" placeholder=" " rows={4} className="peer w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-200 bg-white resize-none" />
                <label htmlFor="message" className="absolute left-4 top-3 text-gray-500 text-sm transition-all duration-200 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-4 peer-focus:text-xs bg-white px-1">Your Message</label>
              </div>
              <div className="md:col-span-2 flex justify-end mt-4">
                <button type="submit" className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-400 hover:from-blue-700 hover:to-cyan-500 text-white font-bold px-8 py-2 rounded-lg shadow transition-all tracking-widest uppercase text-base">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </motion.div>
      </motion.section>
    </div>
  );
};

export default Products;
