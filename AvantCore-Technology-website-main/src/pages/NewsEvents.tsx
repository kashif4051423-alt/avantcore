import React, { useState, useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Search } from 'lucide-react';
import Section from '@/components/ui/Section';
import Button from '@/components/ui/Button';

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

const NewsEvents = () => {
  const navigate = useNavigate();
  const [modalOpen, setModalOpen] = useState(false);
  const [modalIdx, setModalIdx] = useState(0);
  const [imgLoading, setImgLoading] = useState(true);

  const openModal = (idx: number) => {
    setModalIdx(idx);
    setModalOpen(true);
    setImgLoading(true);
  };

  const closeModal = () => setModalOpen(false);

  const showPrev = useCallback(() => {
    setModalIdx((prev) => (prev - 1 + newsImages.length) % newsImages.length);
    setImgLoading(true);
  }, []);

  const showNext = useCallback(() => {
    setModalIdx((prev) => (prev + 1) % newsImages.length);
    setImgLoading(true);
  }, []);

  useEffect(() => {
    if (!modalOpen) return;
    const handleKey = (e: KeyboardEvent) => {
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
      <Section background="gradient" padding="large">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl"
        >
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-white hover:text-orange-400 transition mb-6"
          >
            <ArrowLeft size={20} />
            Back to Home
          </button>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">News & Events</h1>
          <p className="text-xl text-blue-100">
            Stay updated with our latest news, events, and company celebrations
          </p>
        </motion.div>
      </Section>

      {/* Gallery Section */}
      <Section background="white" padding="large">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Moments
          </h2>
          <p className="text-lg text-gray-600">
            Click on any image to view in full screen. Use arrow keys or navigation buttons to browse.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          {newsImages.map((src, idx) => (
            <motion.div
              key={idx}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
              }}
              whileHover={{ scale: 1.05 }}
              onClick={() => openModal(idx)}
              className="overflow-hidden rounded-xl shadow-lg group relative cursor-pointer aspect-square"
            >
              <motion.img
                src={src}
                alt={`News Event ${idx + 1}`}
                className="w-full h-full object-cover group-hover:scale-125 transition-transform duration-500"
                loading="lazy"
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.1 }}
              />
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 bg-black/40 flex items-center justify-center"
              >
                <motion.div
                  initial={{ scale: 0.5 }}
                  whileHover={{ scale: 1.1 }}
                  className="text-white"
                >
                  <Search size={40} />
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* Modal Gallery with Smooth Animations */}
      <AnimatePresence>
        {modalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
            onClick={closeModal}
          >
            {/* Close Button */}
            <motion.button
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              onClick={(e) => {
                e.stopPropagation();
                closeModal();
              }}
              className="absolute top-8 right-8 text-white text-4xl font-bold z-60 bg-red-600/80 hover:bg-red-700 rounded-full px-4 py-2 transition-all hover:scale-110"
            >
              ×
            </motion.button>

            {/* Previous Button */}
            <motion.button
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              onClick={(e) => {
                e.stopPropagation();
                showPrev();
              }}
              className="absolute left-6 md:left-12 top-1/2 -translate-y-1/2 text-white text-3xl md:text-4xl font-bold z-60 bg-blue-600/80 hover:bg-blue-700 rounded-full px-3 md:px-4 py-2 md:py-3 transition-all hover:scale-110 active:scale-95"
            >
              ‹
            </motion.button>

            {/* Next Button */}
            <motion.button
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              onClick={(e) => {
                e.stopPropagation();
                showNext();
              }}
              className="absolute right-6 md:right-12 top-1/2 -translate-y-1/2 text-white text-3xl md:text-4xl font-bold z-60 bg-blue-600/80 hover:bg-blue-700 rounded-full px-3 md:px-4 py-2 md:py-3 transition-all hover:scale-110 active:scale-95"
            >
              ›
            </motion.button>

            {/* Image Container */}
            <div
              className="flex flex-col items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Counter */}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="text-white mb-6 text-sm md:text-base font-semibold bg-black/50 px-6 py-2 rounded-full"
              >
                {modalIdx + 1} / {newsImages.length}
              </motion.div>

              {/* Image with Loading Animation */}
              <div className="relative flex items-center justify-center w-full h-full max-h-[75vh] max-w-[90vw]">
                <AnimatePresence mode="wait">
                  {imgLoading && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="absolute inset-0 flex items-center justify-center z-10"
                    >
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                        className="w-12 h-12 border-4 border-blue-400 border-t-transparent rounded-full"
                      />
                    </motion.div>
                  )}
                </AnimatePresence>

                <motion.img
                  key={modalIdx}
                  src={newsImages[modalIdx]}
                  alt={`Full view ${modalIdx + 1}`}
                  className="max-h-[75vh] max-w-[90vw] rounded-lg shadow-2xl border-4 border-white/20 object-contain"
                  loading="lazy"
                  onLoad={() => setImgLoading(false)}
                  draggable={false}
                  initial={{ opacity: 0, scale: 0.9, rotateX: 20 }}
                  animate={{ opacity: 1, scale: 1, rotateX: 0 }}
                  exit={{ opacity: 0, scale: 0.9, rotateX: -20 }}
                  transition={{ duration: 0.4, ease: 'easeOut' }}
                />
              </div>

              {/* Keyboard Hint */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="text-white/70 text-xs md:text-sm mt-6 text-center"
              >
                Use arrow keys or buttons to navigate • Press ESC to close
              </motion.div>
            </div>

            {/* Thumbnails Strip (optional) */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 max-w-full overflow-x-auto px-4 pb-2"
            >
              {newsImages.map((_, i) => (
                <motion.button
                  key={i}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={(e) => {
                    e.stopPropagation();
                    setModalIdx(i);
                    setImgLoading(true);
                  }}
                  className={`w-8 h-8 md:w-10 md:h-10 rounded-full border-2 transition-all ${
                    i === modalIdx
                      ? 'border-white bg-blue-600'
                      : 'border-white/50 bg-black/40 hover:bg-black/60'
                  }`}
                />
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA Section */}
      <Section background="light" padding="large">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Want to be part of our story?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Join us at upcoming events and be part of the AvantCore community.
          </p>
          <motion.div whileHover={{ scale: 1.05 }} className="inline-block">
            <Button
              variant="primary"
              size="lg"
              onClick={() => navigate('/contact')}
            >
              Get in Touch
            </Button>
          </motion.div>
        </motion.div>
      </Section>
    </div>
  );
};

export default NewsEvents;
