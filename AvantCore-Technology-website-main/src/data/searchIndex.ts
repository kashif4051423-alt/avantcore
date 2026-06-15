// Comprehensive search index for all website content
export interface SearchResult {
  id: string;
  title: string;
  description: string;
  category: 'service' | 'industry' | 'product' | 'page' | 'career' | 'news' | 'insight' | 'case-study';
  url: string;
  section?: string; // For scrolling to specific sections
  keywords: string[];
}

export const searchIndex: SearchResult[] = [
  // Services
  {
    id: 'service-digital-consulting',
    title: 'Digital Consulting & Strategy',
    description: 'Expert digital transformation consulting and strategic planning',
    category: 'service',
    url: '/services/digital-consulting',
    keywords: ['digital', 'consulting', 'strategy', 'transformation', 'planning'],
  },
  {
    id: 'service-digital-commerce',
    title: 'Digital Commerce',
    description: 'E-commerce and digital sales solutions',
    category: 'service',
    url: '/services/digital-commerce',
    keywords: ['digital', 'commerce', 'ecommerce', 'sales', 'online'],
  },
  {
    id: 'service-business-apps',
    title: 'Business Applications',
    description: 'Custom business application development',
    category: 'service',
    url: '/services/business-apps',
    keywords: ['business', 'applications', 'apps', 'software', 'development'],
  },
  {
    id: 'service-data-modernization',
    title: 'Data Modernization',
    description: 'Modernize your data infrastructure and pipelines',
    category: 'service',
    url: '/services/data-modernization',
    keywords: ['data', 'modernization', 'infrastructure', 'pipelines', 'migration'],
  },
  {
    id: 'service-advanced-analytics',
    title: 'Advanced Analytics',
    description: 'Deep data analytics and business intelligence',
    category: 'service',
    url: '/services/advanced-analytics',
    keywords: ['analytics', 'data', 'intelligence', 'insights', 'reporting'],
  },
  {
    id: 'service-connected-intelligence',
    title: 'Connected Intelligence',
    description: 'IoT and real-time data intelligence solutions',
    category: 'service',
    url: '/services/connected-intelligence',
    keywords: ['connected', 'intelligence', 'iot', 'real-time', 'data'],
  },
  {
    id: 'service-data-management',
    title: 'Data Management',
    description: 'Comprehensive data management and governance',
    category: 'service',
    url: '/services/data-management',
    keywords: ['data', 'management', 'governance', 'quality', 'storage'],
  },
  {
    id: 'service-generative-ai',
    title: 'Generative AI',
    description: 'AI-powered solutions and machine learning implementations',
    category: 'service',
    url: '/services/generative-ai',
    keywords: ['generative', 'ai', 'artificial', 'intelligence', 'machine', 'learning', 'ml'],
  },
  {
    id: 'service-cloud-migration',
    title: 'Cloud Operations & Migration',
    description: 'Seamless cloud migration and management services',
    category: 'service',
    url: '/services/cloud-migration',
    keywords: ['cloud', 'migration', 'operations', 'aws', 'azure', 'gcp'],
  },
  {
    id: 'service-cloud-development',
    title: 'Cloud Development & Integration',
    description: 'Cloud-native application development and integration',
    category: 'service',
    url: '/services/cloud-development',
    keywords: ['cloud', 'development', 'integration', 'api', 'microservices'],
  },
  {
    id: 'service-managed-services',
    title: 'Managed Services',
    description: 'Comprehensive managed IT and application services',
    category: 'service',
    url: '/services/managed-services',
    keywords: ['managed', 'services', 'monitoring', 'support', 'operations'],
  },
  {
    id: 'service-infrastructure',
    title: 'Digital Infrastructure Services',
    description: 'Infrastructure design, deployment, and management',
    category: 'service',
    url: '/services/infrastructure',
    keywords: ['infrastructure', 'digital', 'network', 'security', 'deployment'],
  },
  {
    id: 'service-security',
    title: 'Security',
    description: 'Cybersecurity and data protection solutions',
    category: 'service',
    url: '/services/security',
    keywords: ['security', 'cybersecurity', 'protection', 'threat', 'encryption', 'compliance'],
  },
  {
    id: 'service-emerging-tech',
    title: 'Emerging Technologies',
    description: 'Blockchain, quantum computing, and future tech solutions',
    category: 'service',
    url: '/services/emerging-tech',
    keywords: ['emerging', 'technology', 'blockchain', 'quantum', 'vr', 'ar'],
  },
  {
    id: 'service-bps',
    title: 'Business Process Services',
    description: 'Business process optimization and automation',
    category: 'service',
    url: '/services/bps',
    keywords: ['business', 'process', 'services', 'automation', 'optimization'],
  },

  // Industries
  {
    id: 'industry-banking',
    title: 'Banking & Financial Services',
    description: 'Solutions for banking and financial institutions',
    category: 'industry',
    url: '/industries/banking',
    keywords: ['banking', 'financial', 'fintech', 'payments', 'lending'],
  },
  {
    id: 'industry-retail',
    title: 'Retail & CPG',
    description: 'Retail and consumer goods solutions',
    category: 'industry',
    url: '/industries/retail',
    keywords: ['retail', 'cpg', 'consumer', 'goods', 'ecommerce', 'point-of-sale'],
  },
  {
    id: 'industry-healthcare',
    title: 'Healthcare',
    description: 'Healthcare and medical technology solutions',
    category: 'industry',
    url: '/industries/healthcare',
    keywords: ['healthcare', 'medical', 'hospital', 'clinic', 'patient', 'health'],
  },
  {
    id: 'industry-telecom',
    title: 'Telecommunications',
    description: 'Telecommunications and network solutions',
    category: 'industry',
    url: '/industries/telecom',
    keywords: ['telecommunications', 'telecom', 'network', 'mobile', 'carrier'],
  },
  {
    id: 'industry-public-sector',
    title: 'Public Sector',
    description: 'Government and public sector solutions',
    category: 'industry',
    url: '/industries/public-sector',
    keywords: ['public', 'sector', 'government', 'agency', 'municipal'],
  },
  {
    id: 'industry-energy',
    title: 'Energy & Utilities',
    description: 'Energy and utility company solutions',
    category: 'industry',
    url: '/industries/energy',
    keywords: ['energy', 'utilities', 'power', 'oil', 'gas', 'renewable'],
  },

  // Products/Solutions
  {
    id: 'product-erp',
    title: 'Enterprise Resource Planning (ERP)',
    description: 'Comprehensive ERP system for business operations',
    category: 'product',
    url: '/solutions/erp',
    keywords: ['erp', 'enterprise', 'resource', 'planning', 'operations'],
  },
  {
    id: 'product-gis',
    title: 'Geographic Information System (GIS)',
    description: 'Advanced GIS mapping and spatial analysis',
    category: 'product',
    url: '/solutions/gis',
    keywords: ['gis', 'geographic', 'mapping', 'location', 'spatial', 'maps'],
  },
  {
    id: 'product-bi',
    title: 'Business Intelligence (BI) and Analytics',
    description: 'Data analytics and business intelligence platform',
    category: 'product',
    url: '/solutions/bi',
    keywords: ['business', 'intelligence', 'bi', 'analytics', 'dashboard', 'reporting'],
  },
  {
    id: 'product-crm',
    title: 'Customer Relationship Management (CRM)',
    description: 'CRM platform for customer management',
    category: 'product',
    url: '/solutions/crm',
    keywords: ['crm', 'customer', 'relationship', 'management', 'sales', 'contact'],
  },
  {
    id: 'product-hcm',
    title: 'Human Capital Management (HCM)',
    description: 'HR and human resources management system',
    category: 'product',
    url: '/solutions/hcm',
    keywords: ['hcm', 'human', 'capital', 'management', 'hr', 'payroll', 'employee'],
  },
  {
    id: 'product-sales-distribution',
    title: 'Sales And Distribution Management',
    description: 'Sales and distribution system',
    category: 'product',
    url: '/products/sales-distribution',
    keywords: ['sales', 'distribution', 'management', 'inventory', 'orders'],
  },
  {
    id: 'product-hrms',
    title: 'HRMS Payroll And Compliance',
    description: 'HRMS and payroll management',
    category: 'product',
    url: '/products/hrms-payroll',
    keywords: ['hrms', 'payroll', 'compliance', 'employee', 'hr', 'benefits'],
  },
  {
    id: 'product-inventory',
    title: 'Inventory And Purchase Order Management',
    description: 'Inventory and purchase order system',
    category: 'product',
    url: '/products/inventory-purchase',
    keywords: ['inventory', 'purchase', 'order', 'stock', 'management', 'warehouse'],
  },

  // Pages
  {
    id: 'page-about',
    title: 'About AvantCore',
    description: 'Learn about AvantCore Technologies',
    category: 'page',
    url: '/about',
    keywords: ['about', 'company', 'profile', 'information', 'history'],
  },
  {
    id: 'page-services',
    title: 'Services',
    description: 'All AvantCore services and solutions',
    category: 'page',
    url: '/services',
    keywords: ['services', 'solutions', 'offerings'],
  },
  {
    id: 'page-industries',
    title: 'Industries',
    description: 'Industries we serve',
    category: 'page',
    url: '/industries',
    keywords: ['industries', 'sectors', 'verticals'],
  },
  {
    id: 'page-products',
    title: 'Products',
    description: 'AvantCore products and solutions',
    category: 'page',
    url: '/products',
    keywords: ['products', 'solutions', 'applications'],
  },
  {
    id: 'page-contact',
    title: 'Contact Us',
    description: 'Get in touch with AvantCore',
    category: 'page',
    url: '/contact',
    keywords: ['contact', 'reach', 'support', 'help', 'email', 'phone'],
  },

  // Career Pages
  {
    id: 'career-frontend-developer',
    title: 'Frontend Developer',
    description: 'Frontend Developer position - React, Vue, Angular',
    category: 'career',
    url: '/career',
    section: 'frontend-developer',
    keywords: ['frontend', 'developer', 'react', 'vue', 'angular', 'javascript', 'typescript'],
  },
  {
    id: 'career-backend-developer',
    title: 'Backend Developer',
    description: 'Backend Developer position - Node.js, Python, Java',
    category: 'career',
    url: '/career',
    section: 'backend-developer',
    keywords: ['backend', 'developer', 'nodejs', 'python', 'java', 'api', 'database'],
  },
  {
    id: 'career-fullstack-developer',
    title: 'Full Stack Developer',
    description: 'Full Stack Developer position - Full stack development',
    category: 'career',
    url: '/career',
    section: 'fullstack-developer',
    keywords: ['fullstack', 'full', 'stack', 'developer', 'frontend', 'backend'],
  },
  {
    id: 'career-devops-engineer',
    title: 'DevOps Engineer',
    description: 'DevOps Engineer position - Cloud and infrastructure',
    category: 'career',
    url: '/career',
    section: 'devops-engineer',
    keywords: ['devops', 'engineer', 'cloud', 'docker', 'kubernetes', 'aws'],
  },
  {
    id: 'career-qa-engineer',
    title: 'QA Engineer',
    description: 'QA Engineer position - Quality assurance and testing',
    category: 'career',
    url: '/career',
    section: 'qa-engineer',
    keywords: ['qa', 'quality', 'assurance', 'testing', 'automation', 'engineer'],
  },
  {
    id: 'career-sales-executive',
    title: 'Sales Executive',
    description: 'Sales Executive position - Business development',
    category: 'career',
    url: '/career',
    section: 'sales-executive',
    keywords: ['sales', 'executive', 'business', 'development', 'account'],
  },

  // News & Events
  {
    id: 'news-latest-update',
    title: 'Latest News & Events',
    description: 'Stay updated with latest AvantCore news and events',
    category: 'news',
    url: '/news-events',
    keywords: ['news', 'events', 'update', 'announcement', 'latest'],
  },
];

// Search function with fuzzy matching and ranking
export function searchWebsite(query: string): SearchResult[] {
  if (!query.trim()) return [];

  const lowerQuery = query.toLowerCase().trim();
  
  // Score-based search with fuzzy matching
  const results = searchIndex
    .map((item) => {
      let score = 0;

      // Exact title match - highest priority
      if (item.title.toLowerCase() === lowerQuery) {
        score += 1000;
      }

      // Title contains query - high priority
      if (item.title.toLowerCase().includes(lowerQuery)) {
        score += 500;
      }

      // Keyword matches - medium priority
      if (item.keywords.some((k) => k.includes(lowerQuery))) {
        score += 200;
      }

      // Description contains query - lower priority
      if (item.description.toLowerCase().includes(lowerQuery)) {
        score += 100;
      }

      // Word start match - bonus points
      const words = item.title.toLowerCase().split(' ');
      if (words.some((w) => w.startsWith(lowerQuery))) {
        score += 300;
      }

      return { item, score };
    })
    .filter(({ score }) => score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 8) // Top 8 results
    .map(({ item }) => item);

  return results;
}
