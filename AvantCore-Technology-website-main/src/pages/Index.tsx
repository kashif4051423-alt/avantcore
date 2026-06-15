import React, { useState, useCallback, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Filter, X, ChevronLeft, ChevronRight, Calendar, MapPin, ArrowRight, Eye } from 'lucide-react';
import Section from '@/components/ui/Section';
import Button from '@/components/ui/button';
import { 
  containerAnimation, 
  childAnimation,
  scrollReveal,
} from '@/constants/animations';

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

// All news/events data with categorization
const newsData = [
  { id: 1, src: '/newsandevents/latest1.jpg', category: 'featured', date: '2024-06-10', location: 'Lahore' },
  { id: 2, src: '/newsandevents/latest2.jpg', category: 'featured', date: '2024-06-09', location: 'Islamabad' },
  { id: 3, src: '/newsandevents/IMG_1540.jpg', category: 'event', date: '2024-06-08', location: 'Karachi' },
  { id: 4, src: '/newsandevents/IMG_1488.jpg', category: 'event', date: '2024-06-07', location: 'Lahore' },
  { id: 5, src: '/newsandevents/IMG_1535.jpg', category: 'news', date: '2024-06-06', location: 'Remote' },
  { id: 6, src: '/newsandevents/IMG_1364.jpg', category: 'event', date: '2024-06-05', location: 'Karachi' },
  { id: 7, src: '/newsandevents/IMG_1579.jpg', category: 'news', date: '2024-06-04', location: 'Lahore' },
  { id: 8, src: '/newsandevents/IMG_1564.jpg', category: 'event', date: '2024-06-03', location: 'Islamabad' },
  { id: 9, src: '/newsandevents/IMG_1545.jpg', category: 'milestone', date: '2024-06-02', location: 'Global' },
  { id: 10, src: '/newsandevents/IMG_1513.jpg', category: 'event', date: '2024-06-01', location: 'Karachi' },
  { id: 11, src: '/newsandevents/IMG_1504.jpg', category: 'news', date: '2024-05-31', location: 'Lahore' },
  { id: 12, src: '/newsandevents/IMG_1484-Copy.jpg', category: 'milestone', date: '2024-05-30', location: 'Global' },
  { id: 13, src: '/newsandevents/IMG_1481-Copy.jpg', category: 'event', date: '2024-05-29', location: 'Islamabad' },
  { id: 14, src: '/newsandevents/after-iftari-party.jpg', category: 'event', date: '2024-05-28', location: 'Lahore' },
  { id: 15, src: '/newsandevents/iftari-party.jpg', category: 'event', date: '2024-05-27', location: 'Lahore' },
];

const categories = [
  { id: 'all', label: 'All' },
  { id: 'featured', label: 'Featured' },
  { id: 'event', label: 'Events' },
  { id: 'news', label: 'News' },
  { id: 'milestone', label: 'Milestones' },
];

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
    name: 'Muhammad Dawood Ahmad',
    title: 'Senior Developer',
    img: '/newsandevents/dawood.png',
    linkedin: 'https://www.linkedin.com/in/muhammad-dawood-ahmed-developer/'
  }
];

const Index = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [modalOpen, setModalOpen] = useState(false);
  const [modalIdx, setModalIdx] = useState(0);
  const [imgLoading, setImgLoading] = useState(true);

  // Filter news data by category
  const filteredNews = activeCategory === 'all' 
    ? newsData 
    : newsData.filter(item => item.category === activeCategory);

  // Featured article (latest featured item)
  const featuredArticle = newsData.find(item => item.category === 'featured');

  const openModal = (item) => {
    const index = newsData.findIndex(n => n.id === item.id);
    setModalIdx(index);
    setModalOpen(true);
    setImgLoading(true);
  };

  const closeModal = () => setModalOpen(false);

  const showPrev = useCallback(() => {
    setModalIdx((prev) => (prev - 1 + newsData.length) % newsData.length);
    setImgLoading(true);
  }, []);

  const showNext = useCallback(() => {
    setModalIdx((prev) => (prev + 1) % newsData.length);
    setImgLoading(true);
  }, []);

  useEffect(() => {
    if (!modalOpen) return;
    const handleKey = (e) => {
      if (e.key === 'Escape') closeModal();
      if (e.key === 'ArrowLeft') showPrev();
      if (e.key === 'ArrowRight') showNext();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [modalOpen, showPrev, showNext]);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 0.8 }}
        className="relative bg-gradient-to-r from-blue-900 to-blue-800 text-white py-20 overflow-hidden"
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
              News & Events
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Explore the latest in our News and Events section, your central hub for staying up-to-date and engaged. From noteworthy updates and announcements to industry insights, we've gathered a curated collection to keep you in the know.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Featured Article Section */}
      {featuredArticle && (
        <Section background="white" padding="large">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="max-w-6xl mx-auto"
          >
            <div className="mb-6">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Featured</h2>
              <div className="h-1 w-20 bg-blue-600 mt-4"></div>
            </div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
              onClick={() => openModal(featuredArticle)}
            >
              <div className="relative h-96 md:h-[500px] overflow-hidden bg-gray-100">
                <img
                  src={featuredArticle.src}
                  alt="Featured Article"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-8">
                <div className="flex gap-4 mb-4 flex-wrap">
                  <span className="px-4 py-2 bg-blue-600 text-white text-sm font-semibold rounded-full">
                    Featured
                  </span>
                  <div className="flex items-center gap-2 text-white text-sm">
                    <Calendar className="w-4 h-4" />
                    {featuredArticle.date}
                  </div>
                  <div className="flex items-center gap-2 text-white text-sm">
                    <MapPin className="w-4 h-4" />
                    {featuredArticle.location}
                  </div>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:text-blue-200 transition-colors">
                  Latest Highlight
                </h3>
              </div>
            </motion.div>
          </motion.div>
        </Section>
      )}

      {/* Category Filter Section */}
      <Section background="light" padding="large">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <Filter className="w-8 h-8 text-blue-600" />
              Filter by Category
            </h2>
            
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerAnimation}
              className="flex flex-wrap gap-3"
            >
              {categories.map((cat) => (
                <motion.button
                  key={cat.id}
                  variants={childAnimation}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                    activeCategory === cat.id
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'bg-white text-gray-900 border-2 border-gray-200 hover:border-blue-600 hover:text-blue-600'
                  }`}
                >
                  {cat.label}
                </motion.button>
              ))}
            </motion.div>
          </div>

          <div className="text-gray-600 font-semibold mb-8">
            Showing {filteredNews.length} item{filteredNews.length !== 1 ? 's' : ''}
          </div>
        </motion.div>
      </Section>

      {/* News Gallery with Modern Cards */}
      <Section background="white" padding="large">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerAnimation}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          {filteredNews.map((item) => (
            <motion.div
              key={item.id}
              variants={childAnimation}
              whileHover={{ y: -12 }}
              className="group cursor-pointer"
              onClick={() => openModal(item)}
            >
              <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 h-full flex flex-col">
                {/* Image Container */}
                <div className="relative h-56 overflow-hidden bg-gray-100">
                  <img
                    src={item.src}
                    alt={`News ${item.id}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="inline-block px-3 py-1 bg-blue-600 text-white text-xs font-bold rounded-full uppercase">
                      {item.category}
                    </span>
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileHover={{ opacity: 1, scale: 1 }}
                      className="text-white opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <Eye size={32} />
                    </motion.div>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 flex-grow flex flex-col">
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4 text-blue-600" />
                      {item.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4 text-blue-600" />
                      {item.location}
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors flex-grow">
                    {item.category.charAt(0).toUpperCase() + item.category.slice(1)} Highlight #{item.id}
                  </h3>

                  <motion.div
                    whileHover={{ x: 4 }}
                    className="mt-4 inline-flex items-center gap-2 text-blue-600 font-semibold text-sm"
                  >
                    View Full Image →
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {filteredNews.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-gray-500 text-lg">No items found in this category.</p>
          </motion.div>
        )}
      </Section>

      {/* Modal */}
      <AnimatePresence>
        {modalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
              className="relative flex items-center justify-center min-h-[40vh] min-w-[40vw]"
            >
              {/* Close Button */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={closeModal}
                className="absolute top-8 right-8 text-white text-4xl font-bold z-60 bg-black/60 rounded-full px-4 py-2 hover:bg-black/80 transition-all"
              >
                ×
              </motion.button>

              {/* Previous Button */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={showPrev}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white text-4xl font-bold z-60 bg-black/40 rounded-full px-3 py-2 hover:bg-black/70 transition-all"
              >
                ‹
              </motion.button>

              {/* Next Button */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={showNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-4xl font-bold z-60 bg-black/40 rounded-full px-3 py-2 hover:bg-black/70 transition-all"
              >
                ›
              </motion.button>

              {/* Image Counter */}
              <div className="absolute top-8 left-8 text-white text-sm font-semibold bg-black/60 px-4 py-2 rounded-full z-60">
                {modalIdx + 1} / {newsData.length}
              </div>

              {/* Image Container */}
              <div className="relative flex items-center justify-center">
                {imgLoading && (
                  <div className="absolute inset-0 flex items-center justify-center z-10">
                    <div className="w-12 h-12 border-4 border-blue-400 border-t-transparent rounded-full animate-spin"></div>
                  </div>
                )}
                <motion.img
                  key={modalIdx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: imgLoading ? 0 : 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                  src={newsData[modalIdx].src}
                  alt="Full view"
                  className="max-h-[80vh] max-w-[90vw] rounded-lg shadow-2xl border-4 border-white"
                  loading="lazy"
                  onLoad={() => setImgLoading(false)}
                  draggable={false}
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Our Team Section */}
      <Section background="light" padding="large">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-6xl mx-auto"
        >
          <div className="mb-12">
            <div className="text-sm font-semibold tracking-widest text-blue-600 mb-4">OUR TEAM</div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Meet Our Professional Team</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Meet our professional team of experts. With extensive experience and a passion for excellence, we're dedicated to delivering exceptional results.
            </p>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerAnimation}
            className="flex flex-col md:flex-row justify-center items-center gap-8 flex-wrap"
          >
            {team.map((member, idx) => (
              <Team3DCard key={member.name} member={member} variants={childAnimation} />
            ))}
          </motion.div>
        </motion.div>
      </Section>
    </div>
  );
};

export default Index;
