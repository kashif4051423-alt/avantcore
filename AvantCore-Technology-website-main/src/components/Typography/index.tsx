import React from 'react';
import clsx from 'clsx';

/* ============================================================
   DISPLAY HEADINGS
   For hero sections and major page headers
   ============================================================ */

export const DisplayLg: React.FC<{ 
  children: React.ReactNode; 
  className?: string;
}> = ({ children, className }) => (
  <h1 className={clsx('typography-display-lg', className)}>
    {children}
  </h1>
);

export const DisplayMd: React.FC<{ 
  children: React.ReactNode; 
  className?: string;
}> = ({ children, className }) => (
  <h1 className={clsx('typography-display-md', className)}>
    {children}
  </h1>
);

/* ============================================================
   SECTION HEADINGS
   Main content section titles
   ============================================================ */

export const HeadingXL: React.FC<{ 
  children: React.ReactNode; 
  className?: string;
}> = ({ children, className }) => (
  <h2 className={clsx('typography-heading-xl', className)}>
    {children}
  </h2>
);

export const HeadingLg: React.FC<{ 
  children: React.ReactNode; 
  className?: string;
}> = ({ children, className }) => (
  <h2 className={clsx('typography-heading-lg', className)}>
    {children}
  </h2>
);

export const HeadingMd: React.FC<{ 
  children: React.ReactNode; 
  className?: string;
}> = ({ children, className }) => (
  <h3 className={clsx('typography-heading-md', className)}>
    {children}
  </h3>
);

export const HeadingSm: React.FC<{ 
  children: React.ReactNode; 
  className?: string;
}> = ({ children, className }) => (
  <h3 className={clsx('typography-heading-sm', className)}>
    {children}
  </h3>
);

export const HeadingXs: React.FC<{ 
  children: React.ReactNode; 
  className?: string;
}> = ({ children, className }) => (
  <h4 className={clsx('typography-heading-xs', className)}>
    {children}
  </h4>
);

/* ============================================================
   SUBHEADINGS
   Secondary titles and labels
   ============================================================ */

export const SubheadingLg: React.FC<{ 
  children: React.ReactNode; 
  className?: string;
}> = ({ children, className }) => (
  <p className={clsx('typography-subheading-lg', className)}>
    {children}
  </p>
);

export const SubheadingMd: React.FC<{ 
  children: React.ReactNode; 
  className?: string;
}> = ({ children, className }) => (
  <p className={clsx('typography-subheading-md', className)}>
    {children}
  </p>
);

export const SubheadingSm: React.FC<{ 
  children: React.ReactNode; 
  className?: string;
}> = ({ children, className }) => (
  <p className={clsx('typography-subheading-sm', className)}>
    {children}
  </p>
);

/* ============================================================
   BODY TEXT
   Regular paragraph content
   ============================================================ */

export const BodyLg: React.FC<{ 
  children: React.ReactNode; 
  className?: string;
}> = ({ children, className }) => (
  <p className={clsx('typography-body-lg', className)}>
    {children}
  </p>
);

export const BodyMd: React.FC<{ 
  children: React.ReactNode; 
  className?: string;
}> = ({ children, className }) => (
  <p className={clsx('typography-body-md', className)}>
    {children}
  </p>
);

export const BodySm: React.FC<{ 
  children: React.ReactNode; 
  className?: string;
}> = ({ children, className }) => (
  <p className={clsx('typography-body-sm', className)}>
    {children}
  </p>
);

/* ============================================================
   LABELS & CAPTIONS
   Small, uppercase labels and captions
   ============================================================ */

export const LabelLg: React.FC<{ 
  children: React.ReactNode; 
  className?: string;
}> = ({ children, className }) => (
  <span className={clsx('typography-label-lg', className)}>
    {children}
  </span>
);

export const LabelMd: React.FC<{ 
  children: React.ReactNode; 
  className?: string;
}> = ({ children, className }) => (
  <span className={clsx('typography-label-md', className)}>
    {children}
  </span>
);

export const LabelSm: React.FC<{ 
  children: React.ReactNode; 
  className?: string;
}> = ({ children, className }) => (
  <span className={clsx('typography-label-sm', className)}>
    {children}
  </span>
);

/* ============================================================
   SEMANTIC WRAPPERS
   Flexible components for various use cases
   ============================================================ */

export const Text: React.FC<{ 
  children: React.ReactNode;
  variant?: 'display-lg' | 'display-md' | 'heading-xl' | 'heading-lg' | 'heading-md' | 'heading-sm' | 'heading-xs' | 'subheading-lg' | 'subheading-md' | 'subheading-sm' | 'body-lg' | 'body-md' | 'body-sm' | 'label-lg' | 'label-md' | 'label-sm';
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div';
  className?: string;
}> = ({ children, variant = 'body-md', as = 'p', className }) => {
  const Component = as as React.ElementType;
  return (
    <Component className={clsx(`typography-${variant}`, className)}>
      {children}
    </Component>
  );
};
