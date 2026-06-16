import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, User, Share2 } from 'lucide-react';
import Section from '@/components/ui/Section';
import Button from '@/components/ui/button';

const insightDetails: Record<string, any> = {
  'case-studies': {
    title: 'Our Case Studies',
    subtitle: 'See how we have transformed businesses across industries',
    description: 'Explore real-world examples of how our solutions have helped organizations achieve their digital transformation goals.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80',
    content: 'Our case studies showcase tangible results and measurable outcomes from successful projects across various industries. From banking to retail, healthcare to telecommunications, we have a proven track record of delivering transformative solutions.',
    author: 'AvantCore Team',
    date: 'Ongoing',
    categories: ['Banking', 'Retail', 'Healthcare', 'Telecom', 'Public Sector'],
    layout: 'case-studies',
  },
  'blog': {
    title: 'Technology Blog',
    subtitle: 'Latest insights and trends in digital transformation',
    description: 'Stay informed with our latest articles, industry trends, and best practices in technology and digital transformation.',
    image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=1200&q=80',
    content: 'Our blog features regular updates on emerging technologies, industry trends, and practical insights to help organizations stay competitive. Topics include cloud computing, AI/ML, data analytics, cybersecurity, and much more.',
    author: 'AvantCore Experts',
    date: 'Weekly',
    categories: ['Technology', 'Innovation', 'Best Practices', 'Trends', 'Industry News'],
    layout: 'blog',
  },
  'whitepapers': {
    title: 'Whitepapers & Research',
    subtitle: 'In-depth analysis and technical research',
    description: 'Download our comprehensive whitepapers covering strategic insights, technical deep dives, and industry analysis.',
    image: 'https://images.unsplash.com/photo-1507842217343-583f7270bfba?auto=format&fit=crop&w=1200&q=80',
    content: 'Our whitepapers provide detailed technical analysis and strategic recommendations for organizations planning their digital transformation journey. Each whitepaper includes research findings, best practices, and implementation recommendations.',
    author: 'AvantCore Research Team',
    date: 'Quarterly',
    categories: ['Cloud', 'Data', 'Security', 'AI', 'Strategy'],
    layout: 'whitepapers',
  },
  'newsroom': {
    title: 'Newsroom',
    subtitle: 'Latest news and announcements',
    description: 'Stay updated with AvantCore latest news, press releases, and company announcements.',
    image: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=1200&q=80',
    content: 'Our newsroom features the latest announcements about new services, partnerships, awards, and company milestones. Follow our news to stay informed about AvantCore growth and innovations.',
    author: 'AvantCore Communications',
    date: 'As Announced',
    categories: ['Announcements', 'Press Releases', 'Awards', 'Partnerships', 'Milestones'],
    layout: 'newsroom',
  },
};

const InsightDetail = () => {
  const { insightId } = useParams();
  const navigate = useNavigate();

  const insight = insightId ? insightDetails[insightId] : null;

  if (!insight) {
    return (
      <Section background="white" spacing="generous">
        <div className="text-center max-w-2xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Insight Not Found</h1>
          <p className="text-gray-600 mb-8">The insight you're looking for doesn't exist.</p>
          <Button onClick={() => navigate('/insights')}>Back to Insights</Button>
        </div>
      </Section>
    );
  }

  const layout = insight.layout || 'default';

  // Case Studies Layout - Focus on Results
  if (layout === 'case-studies') {
    return (
      <div className="min-h-screen bg-white">
        <Section background="gradient" spacing="generous">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <button
              onClick={() => navigate('/insights')}
              className="flex items-center gap-2 text-white hover:text-orange-400 transition mb-6"
            >
              <ArrowLeft size={20} />
              Back to Insights
            </button>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">{insight.title}</h1>
            <p className="text-xl text-blue-100 mb-6">{insight.subtitle}</p>
            <div className="flex items-center gap-2 text-blue-100">
              <User size={16} />
              <span>{insight.author}</span>
            </div>
          </motion.div>
        </Section>

        <Section background="white" spacing="generous">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <img
              src={insight.image}
              alt={insight.title}
              className="w-full h-96 object-cover rounded-lg shadow-lg mb-12"
            />
            <div className="prose prose-lg text-gray-700 max-w-none mb-12">
              <p className="text-lg leading-relaxed">{insight.description}</p>
              <p className="text-lg leading-relaxed mt-8">{insight.content}</p>
            </div>
          </motion.div>
        </Section>

        {insight.categories && (
          <Section background="light" spacing="generous">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-6">Industries Served</h3>
              <div className="flex flex-wrap gap-3">
                {insight.categories.map((category: string, index: number) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="px-4 py-2 bg-white rounded-full text-blue-900 font-medium border border-blue-200 hover:bg-blue-50 cursor-pointer transition"
                  >
                    {category}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </Section>
        )}

        <Section background="blue-gradient" spacing="generous">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-white mb-4">See How We Can Help You</h2>
            <p className="text-xl text-blue-100 mb-8">
              Explore more case studies and success stories from our project portfolio.
            </p>
            <Button variant="primary" size="lg" className="w-full sm:w-auto">
              View More Case Studies
            </Button>
          </motion.div>
        </Section>
      </div>
    );
  }

  // Blog Layout - Engaging Article Format
  if (layout === 'blog') {
    return (
      <div className="min-h-screen bg-white">
        <Section background="gradient" spacing="generous">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <button
              onClick={() => navigate('/insights')}
              className="flex items-center gap-2 text-white hover:text-orange-400 transition mb-6"
            >
              <ArrowLeft size={20} />
              Back to Blog
            </button>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">{insight.title}</h1>
            <p className="text-xl text-blue-100 mb-6">{insight.subtitle}</p>
            <div className="flex flex-wrap gap-6 text-blue-100 text-sm">
              <div className="flex items-center gap-2">
                <User size={16} />
                <span>{insight.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar size={16} />
                <span>{insight.date}</span>
              </div>
            </div>
          </motion.div>
        </Section>

        <Section background="white" spacing="generous">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <img
              src={insight.image}
              alt={insight.title}
              className="w-full h-96 object-cover rounded-lg shadow-lg mb-12"
            />
            <article className="prose prose-lg text-gray-700 max-w-none">
              <p className="text-lg leading-relaxed first-letter:text-4xl first-letter:font-bold first-letter:text-blue-600">
                {insight.description}
              </p>
              <p className="text-lg leading-relaxed mt-8">{insight.content}</p>
            </article>
          </motion.div>
        </Section>

        {insight.categories && (
          <Section background="light" spacing="generous">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-6">Topics Covered</h3>
              <div className="flex flex-wrap gap-3">
                {insight.categories.map((category: string, index: number) => (
                  <motion.span
                    key={index}
                    className="px-4 py-2 bg-white rounded-full text-orange-600 font-medium border border-orange-200 hover:bg-orange-50 cursor-pointer transition"
                  >
                    #{category}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </Section>
        )}

        <Section background="blue-gradient" spacing="generous">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Stay Updated</h2>
            <p className="text-xl text-blue-100 mb-8">
              Subscribe to our blog for the latest insights on technology and digital transformation.
            </p>
            <Button variant="primary" size="lg" className="w-full sm:w-auto">
              Read More Articles
            </Button>
          </motion.div>
        </Section>
      </div>
    );
  }

  // Whitepapers Layout - Research-focused
  if (layout === 'whitepapers') {
    return (
      <div className="min-h-screen bg-white">
        <Section background="gradient" spacing="generous">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <button
              onClick={() => navigate('/insights')}
              className="flex items-center gap-2 text-white hover:text-orange-400 transition mb-6"
            >
              <ArrowLeft size={20} />
              Back to Resources
            </button>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">{insight.title}</h1>
            <p className="text-xl text-blue-100">{insight.subtitle}</p>
          </motion.div>
        </Section>

        <Section background="white" spacing="generous">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <img
              src={insight.image}
              alt={insight.title}
              className="w-full h-96 object-cover rounded-lg shadow-lg mb-12"
            />
            <div className="prose prose-lg text-gray-700 max-w-none">
              <p className="text-lg leading-relaxed font-semibold text-blue-900 bg-blue-50 p-6 rounded-lg border-l-4 border-blue-600">
                {insight.description}
              </p>
              <p className="text-lg leading-relaxed mt-8">{insight.content}</p>
            </div>
          </motion.div>
        </Section>

        {insight.categories && (
          <Section background="light" spacing="generous">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-6">Research Areas</h3>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                {insight.categories.map((category: string, index: number) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="bg-white rounded-lg p-4 text-center shadow-sm border border-gray-200"
                  >
                    <p className="font-medium text-gray-900 text-sm">{category}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </Section>
        )}

        <Section background="blue-gradient" spacing="generous">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Deep Dive Into Research</h2>
            <p className="text-xl text-blue-100 mb-8">
              Download this whitepaper to explore comprehensive analysis and industry recommendations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" size="lg" className="w-full sm:w-auto">
                Download Whitepaper
              </Button>
              <Button
                variant="secondary"
                size="lg"
                className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-blue-900"
              >
                More Resources
              </Button>
            </div>
          </motion.div>
        </Section>
      </div>
    );
  }

  // Newsroom Layout - Announcement Focus
  if (layout === 'newsroom') {
    return (
      <div className="min-h-screen bg-white">
        <Section background="gradient" spacing="generous">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <button
              onClick={() => navigate('/insights')}
              className="flex items-center gap-2 text-white hover:text-orange-400 transition mb-6"
            >
              <ArrowLeft size={20} />
              Back to News
            </button>
            <div className="bg-yellow-400 inline-block px-4 py-2 rounded-full text-sm font-bold text-gray-900 mb-4">
              Press Release
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">{insight.title}</h1>
            <p className="text-xl text-blue-100 mb-6">{insight.subtitle}</p>
            <div className="flex items-center gap-2 text-blue-100 text-sm">
              <Calendar size={16} />
              <span>{insight.date}</span>
            </div>
          </motion.div>
        </Section>

        <Section background="white" spacing="generous">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <img
              src={insight.image}
              alt={insight.title}
              className="w-full h-96 object-cover rounded-lg shadow-lg mb-12"
            />
            <div className="prose prose-lg text-gray-700 max-w-none">
              <p className="text-lg leading-relaxed">{insight.description}</p>
              <p className="text-lg leading-relaxed mt-8">{insight.content}</p>
            </div>
          </motion.div>
        </Section>

        {insight.categories && (
          <Section background="light" spacing="generous">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-6">News Categories</h3>
              <div className="flex flex-wrap gap-3">
                {insight.categories.map((category: string, index: number) => (
                  <motion.span
                    key={index}
                    className="px-4 py-2 bg-white rounded-full text-gray-900 font-medium border border-gray-200 hover:border-orange-400 cursor-pointer transition"
                  >
                    {category}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </Section>
        )}

        <Section background="blue-gradient" spacing="generous">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Stay Informed</h2>
            <p className="text-xl text-blue-100 mb-8">
              Follow us for the latest announcements, partnerships, and company updates.
            </p>
            <Button variant="primary" size="lg" className="w-full sm:w-auto">
              Read More News
            </Button>
          </motion.div>
        </Section>
      </div>
    );
  }

  // Default layout (fallback)
  return (
    <div className="min-h-screen bg-white">
      <Section background="gradient" spacing="generous">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl"
        >
          <button
            onClick={() => navigate('/insights')}
            className="flex items-center gap-2 text-white hover:text-orange-400 transition mb-6"
          >
            <ArrowLeft size={20} />
            Back to Insights
          </button>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">{insight.title}</h1>
          <p className="text-xl text-blue-100 mb-6">{insight.subtitle}</p>
          <div className="flex flex-wrap gap-6 text-blue-100 text-sm">
            <div className="flex items-center gap-2">
              <User size={16} />
              <span>{insight.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar size={16} />
              <span>{insight.date}</span>
            </div>
          </div>
        </motion.div>
      </Section>

      <Section background="white" spacing="generous">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          <img
            src={insight.image}
            alt={insight.title}
            className="w-full h-96 object-cover rounded-lg shadow-lg"
          />
        </motion.div>
      </Section>

      <Section background="white" spacing="generous">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="prose prose-lg text-gray-700 max-w-none">
            <p className="text-lg leading-relaxed">{insight.description}</p>
            <p className="text-lg leading-relaxed mt-8">{insight.content}</p>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex items-center gap-4">
              <span className="font-semibold text-gray-900">Share this:</span>
              <button className="p-2 rounded-lg hover:bg-gray-100 transition text-gray-600">
                <Share2 size={20} />
              </button>
            </div>
          </div>
        </motion.div>
      </Section>

      {insight.categories && (
        <Section background="light" spacing="generous">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Related Topics</h3>
            <div className="flex flex-wrap gap-3">
              {insight.categories.map((category: string, index: number) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="px-4 py-2 bg-white rounded-full text-blue-900 font-medium border border-blue-200 hover:bg-blue-50 cursor-pointer transition"
                >
                  {category}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </Section>
      )}

      <Section background="blue-gradient" spacing="generous">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Interested in Learning More?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Connect with our team to discuss how these insights can benefit your organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="primary" size="lg" className="w-full sm:w-auto">
              Download Resource
            </Button>
            <Button
              variant="secondary"
              size="lg"
              className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-blue-900"
            >
              Contact Us
            </Button>
          </div>
        </motion.div>
      </Section>
    </div>
  );
};

export default InsightDetail;

