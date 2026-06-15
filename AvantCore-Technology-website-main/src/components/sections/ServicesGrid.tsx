import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, LucideIcon } from 'lucide-react';
import Section from '../ui/Section';
import Card from '../ui/Card';
import { containerAnimation, childAnimation } from '@/constants/animations';

interface Service {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
  features?: string[];
  link?: string;
}

interface ServicesGridProps {
  title?: string;
  subtitle?: string;
  services: Service[];
  columns?: 2 | 3;
}

const ServicesGrid = ({
  title = 'Our Services',
  subtitle = 'Comprehensive solutions for your business',
  services,
  columns = 3,
}: ServicesGridProps) => {
  const gridColsClass = {
    2: 'lg:grid-cols-2',
    3: 'lg:grid-cols-3',
  };

  return (
    <Section background="light" padding="large">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          {title}
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          {subtitle}
        </p>
      </motion.div>

      {/* Services Grid */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerAnimation}
        className={`grid grid-cols-1 md:grid-cols-2 ${gridColsClass[columns]} gap-8`}
      >
        {services.map((service) => {
          const IconComponent = service.icon;
          return (
            <motion.div key={service.id} variants={childAnimation}>
              <Card variant="default" hoverable>
                <div className="flex flex-col h-full">
                  {/* Icon */}
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="w-16 h-16 bg-gradient-to-br from-blue-500 to-orange-500 rounded-lg flex items-center justify-center mb-6 flex-shrink-0"
                  >
                    <IconComponent className="w-8 h-8 text-white" />
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-xl md:text-2xl font-semibold text-blue-900 mb-3 group-hover:text-orange-500 transition-colors">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 mb-6 flex-grow">
                    {service.description}
                  </p>

                  {/* Features */}
                  {service.features && service.features.length > 0 && (
                    <ul className="space-y-3 mb-6">
                      {service.features.map((feature, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-3 text-sm text-gray-600"
                        >
                          <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* CTA Link */}
                  {service.link && (
                    <motion.a
                      whileHover={{ x: 4 }}
                      href={service.link}
                      className="inline-flex items-center gap-2 text-blue-500 hover:text-orange-500 font-semibold transition-colors group"
                    >
                      Learn More
                      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </motion.a>
                  )}
                </div>
              </Card>
            </motion.div>
          );
        })}
      </motion.div>
    </Section>
  );
};

export default ServicesGrid;
