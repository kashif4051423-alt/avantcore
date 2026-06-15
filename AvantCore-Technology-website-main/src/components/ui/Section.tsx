import React from 'react';
import clsx from 'clsx';

interface SectionProps {
  children: React.ReactNode;
  background?: 'white' | 'light' | 'dark' | 'gradient' | 'blue-gradient' | 'light-gray' | 'soft-blue' | 'dark-navy';
  spacing?: 'compact' | 'standard' | 'generous' | 'hero';
  className?: string;
  id?: string;
}

const Section = ({
  children,
  background = 'white',
  spacing = 'standard',
  className = '',
  id,
}: SectionProps) => {
  const bgClasses = {
    white: 'bg-white',
    light: 'bg-gray-50',
    'light-gray': 'bg-[#F8FAFC]',
    'soft-blue': 'bg-[#F5F9FF]',
    dark: 'bg-slate-900',
    'dark-navy': 'bg-[#0F172A]',
    gradient: 'bg-gradient-to-br from-blue-900 to-slate-900',
    'blue-gradient': 'bg-gradient-to-r from-blue-900 via-blue-800 to-slate-900',
  };

  const spacingClasses = {
    compact: 'section-spacing-compact',
    standard: 'section-spacing-standard',
    generous: 'section-spacing-generous',
    hero: 'section-spacing-hero',
  };

  return (
    <section
      id={id}
      className={clsx(bgClasses[background], spacingClasses[spacing], 'px-4 md:px-6 lg:px-8', className)}
    >
      <div className="container mx-auto max-w-7xl">{children}</div>
    </section>
  );
};

export default Section;
