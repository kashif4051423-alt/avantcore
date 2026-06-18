import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle, TrendingUp } from 'lucide-react';
import Section from '@/components/ui/Section';
import Button from '@/components/ui/button';

const industryDetails: Record<string, any> = {
  'banking': {
    title: 'Banking & Financial Services',
    subtitle: 'Digital transformation for the financial sector',
    description: 'We help banks and financial institutions modernize their operations, enhance customer experiences, and navigate regulatory challenges with innovative technology solutions.',
    image: '/f,,s,,.jpg',
    benefits: [
      'Regulatory compliance automation',
      'Customer experience enhancement',
      'Risk management optimization',
      'Operational efficiency improvement',
      'Digital banking solutions',
      'Data security and privacy',
    ],
    stats: [
      { label: 'Financial Institutions Served', value: '12+' },
      { label: 'Compliance Projects', value: '28+' },
      { label: 'Cost Savings Achieved', value: '15%+' },
    ],
    layout: 'banking',
  },
  'retail': {
    title: 'Retail & CPG',
    subtitle: 'Omnichannel solutions for retail success',
    description: 'Drive retail transformation through omnichannel experiences, supply chain optimization, and customer analytics.',
    image: '/Retail & CPG.jpg',
    benefits: [
      'Omnichannel commerce',
      'Inventory optimization',
      'Supply chain visibility',
      'Customer insights',
      'Loyalty programs',
      'Point of sale solutions',
    ],
    stats: [
      { label: 'Retail Clients', value: '18+' },
      { label: 'Sales Increase', value: '12%+' },
      { label: 'Customer Satisfaction', value: '88%+' },
    ],
    layout: 'default',
  },
  'healthcare': {
    title: 'Healthcare',
    subtitle: 'Digital health solutions for better outcomes',
    description: 'Transform healthcare delivery with digital solutions, telemedicine platforms, and patient engagement tools.',
    image: '/Healthcare.jpg',
    benefits: [
      'Electronic health records',
      'Telemedicine platforms',
      'Patient engagement tools',
      'Data analytics for healthcare',
      'Medical imaging solutions',
      'HIPAA compliance',
    ],
    stats: [
      { label: 'Healthcare Organizations', value: '20+' },
      { label: 'Patient Records Managed', value: '5M+' },
      { label: 'Uptime SLA', value: '99.5%' },
    ],
    layout: 'healthcare',
  },

};

// Banking-specific layout
const BankingLayout = ({ industry, navigate }: any) => (
  <div className="min-h-screen bg-white">
    {/* Hero Section with Background Image */}
    <div 
      className="relative h-screen md:h-96 bg-cover bg-center overflow-hidden flex items-center justify-center"
      style={{
        backgroundImage: `url('${industry.image}')`,
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
      }}
    >
      {/* Dark Blue Overlay (40-60% opacity) */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/50 to-blue-800/50 z-10"></div>
      
      {/* Hero Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-20 text-center max-w-3xl mx-auto px-4"
      >
        <button
          onClick={() => navigate('/industries')}
          className="flex items-center gap-2 text-white hover:text-blue-200 transition mb-6 mx-auto"
        >
          <ArrowLeft size={20} />
          Back to Industries
        </button>
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">
          {industry.title}
        </h1>
        <p className="text-xl md:text-2xl text-blue-100 drop-shadow-lg">
          {industry.subtitle}
        </p>
      </motion.div>
    </div>

    {/* Content Section with Image */}
    <Section background="white" spacing="generous">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Transforming Financial Services</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">{industry.description}</p>
            <Button variant="primary" size="lg">
              Schedule a Consultation
            </Button>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 30 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.02, y: -8 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
            <img
              src={industry.image}
              alt={industry.title}
              className="relative rounded-xl shadow-2xl w-full h-96 object-cover hover:shadow-2xl transition-all duration-300"
            />
            {/* Zoom effect on hover */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="absolute inset-0 rounded-xl"
            />
          </motion.div>
        </div>
      </motion.div>
    </Section>

    <Section background="light" spacing="generous">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Industry Impact</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {industry.stats.map((stat: any, idx: number) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-8 shadow-md text-center border-l-4 border-blue-600"
            >
              <TrendingUp className="w-8 h-8 text-blue-600 mx-auto mb-4" />
              <div className="text-4xl font-bold text-blue-900 mb-2">{stat.value}</div>
              <p className="text-gray-700 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </Section>

    <Section background="white" spacing="generous">
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Financial Services Solutions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {industry.benefits.map((benefit: string, idx: number) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="flex gap-4 bg-blue-50 p-6 rounded-lg"
            >
              <CheckCircle className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
              <p className="font-semibold text-gray-900">{benefit}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </Section>

    <Section background="blue-gradient" spacing="generous">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center max-w-2xl mx-auto"
      >
        <h2 className="text-4xl font-bold text-white mb-4">Ready to Modernize Your Financial Operations?</h2>
        <p className="text-xl text-blue-100 mb-8">
          Let's discuss how we can drive success in banking and financial services.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="primary" size="lg">Get Started</Button>
          <Button
            variant="secondary"
            size="lg"
            className="border-white text-white hover:bg-white hover:text-blue-900"
          >
            Learn More
          </Button>
        </div>
      </motion.div>
    </Section>
  </div>
);

// Healthcare-specific layout
const HealthcareLayout = ({ industry, navigate }: any) => (
  <div className="min-h-screen bg-white">
    {/* Hero Section with Background Image */}
    <div 
      className="relative h-screen md:h-96 bg-cover bg-center overflow-hidden flex items-center justify-center"
      style={{
        backgroundImage: `url('${industry.image}')`,
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
      }}
    >
      {/* Dark Blue Overlay (40-60% opacity) */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/50 to-blue-800/50 z-10"></div>
      
      {/* Hero Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-20 text-center max-w-3xl mx-auto px-4"
      >
        <button
          onClick={() => navigate('/industries')}
          className="flex items-center gap-2 text-white hover:text-blue-200 transition mb-6 mx-auto"
        >
          <ArrowLeft size={20} />
          Back to Industries
        </button>
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">
          {industry.title}
        </h1>
        <p className="text-xl md:text-2xl text-blue-100 drop-shadow-lg">
          {industry.subtitle}
        </p>
      </motion.div>
    </div>

    {/* Content Section with Image */}
    <Section background="white" spacing="generous">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-lg text-gray-700 leading-relaxed mb-8">{industry.description}</p>
            <Button variant="primary" size="lg" className="w-full sm:w-auto">
              Schedule a Consultation
            </Button>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 30 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.02, y: -8 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-green-800 rounded-xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
            <img
              src={industry.image}
              alt={industry.title}
              className="relative rounded-xl shadow-2xl w-full h-96 object-cover hover:shadow-2xl transition-all duration-300"
            />
          </motion.div>
        </div>
      </motion.div>
    </Section>

    <Section background="light" spacing="generous">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Our Healthcare Impact</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {industry.stats.map((stat: any, idx: number) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white rounded-lg p-8 shadow-md text-center border-t-4 border-green-500"
            >
              <TrendingUp className="w-8 h-8 text-green-500 mx-auto mb-4" />
              <div className="text-4xl font-bold text-gray-900 mb-2">{stat.value}</div>
              <p className="text-gray-600 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </Section>

    <Section background="white" spacing="generous">
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Healthcare Solutions</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {industry.benefits.map((benefit: string, idx: number) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-green-50 rounded-lg p-6 shadow-md"
            >
              <CheckCircle className="w-6 h-6 text-green-600 mb-3" />
              <p className="font-semibold text-gray-900">{benefit}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </Section>

    <Section background="blue-gradient" spacing="generous">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center max-w-2xl mx-auto"
      >
        <h2 className="text-4xl font-bold text-white mb-4">Transform Healthcare Delivery</h2>
        <p className="text-xl text-blue-100 mb-8">
          Let's discuss how technology can improve patient outcomes and operational efficiency.
        </p>
        <Button variant="primary" size="lg">Get Started</Button>
      </motion.div>
    </Section>
  </div>
);

// Default layout
const DefaultLayout = ({ industry, navigate }: any) => (
  <div className="min-h-screen bg-white">
    {/* Hero Section with Background Image */}
    <div 
      className="relative h-screen md:h-96 bg-cover bg-center overflow-hidden flex items-center justify-center"
      style={{
        backgroundImage: `url('${industry.image}')`,
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
      }}
    >
      {/* Dark Blue Overlay (40-60% opacity) */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/50 to-blue-800/50 z-10"></div>
      
      {/* Hero Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-20 text-center max-w-3xl mx-auto px-4"
      >
        <button
          onClick={() => navigate('/industries')}
          className="flex items-center gap-2 text-white hover:text-blue-200 transition mb-6 mx-auto"
        >
          <ArrowLeft size={20} />
          Back to Industries
        </button>
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">
          {industry.title}
        </h1>
        <p className="text-xl md:text-2xl text-blue-100 drop-shadow-lg">
          {industry.subtitle}
        </p>
      </motion.div>
    </div>

    {/* Content Section with Image */}
    <Section background="white" spacing="generous">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-lg text-gray-700 leading-relaxed mb-6">{industry.description}</p>
            <Button variant="primary" size="lg" className="w-full sm:w-auto">
              Schedule a Consultation
            </Button>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 30 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.02, y: -8 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
            <img
              src={industry.image}
              alt={industry.title}
              className="relative rounded-xl shadow-2xl w-full h-96 object-cover hover:shadow-2xl transition-all duration-300"
            />
          </motion.div>
        </div>
      </motion.div>
    </Section>

    <Section background="light" spacing="generous">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Our Impact</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {industry.stats.map((stat: any, idx: number) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="text-center bg-white rounded-lg p-8 shadow-md"
            >
              <TrendingUp className="w-8 h-8 text-orange-500 mx-auto mb-4" />
              <div className="text-4xl font-bold text-blue-900 mb-2">{stat.value}</div>
              <p className="text-gray-600 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </Section>

    <Section background="white" spacing="generous">
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Key Solutions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {industry.benefits.map((benefit: string, idx: number) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="flex gap-4"
            >
              <CheckCircle className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
              <div>
                <p className="font-semibold text-gray-900">{benefit}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </Section>

    <Section background="blue-gradient" spacing="generous">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center max-w-2xl mx-auto"
      >
        <h2 className="text-4xl font-bold text-white mb-4">Ready to Transform Your Business?</h2>
        <p className="text-xl text-blue-100 mb-8">
          Let's discuss how we can drive success in the {industry.title} industry.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="primary" size="lg" className="w-full sm:w-auto">
            Get Started
          </Button>
          <Button
            variant="secondary"
            size="lg"
            className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-blue-900"
          >
            Learn More
          </Button>
        </div>
      </motion.div>
    </Section>
  </div>
);

const IndustryDetail = () => {
  const { industryId } = useParams();
  const navigate = useNavigate();

  const industry = industryId ? industryDetails[industryId] : null;

  if (!industry) {
    return (
      <Section background="white" spacing="generous">
        <div className="text-center max-w-2xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Industry Not Found</h1>
          <p className="text-gray-600 mb-8">The industry you're looking for doesn't exist.</p>
          <Button onClick={() => navigate('/industries')}>Back to Industries</Button>
        </div>
      </Section>
    );
  }

  const layout = industry.layout || 'default';

  return (
    <>
      {layout === 'banking' && <BankingLayout industry={industry} navigate={navigate} />}
      {layout === 'healthcare' && <HealthcareLayout industry={industry} navigate={navigate} />}
      {layout === 'default' && <DefaultLayout industry={industry} navigate={navigate} />}
    </>
  );
};

export default IndustryDetail;


