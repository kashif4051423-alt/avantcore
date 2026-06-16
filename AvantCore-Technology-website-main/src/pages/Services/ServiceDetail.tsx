import React, { useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { ArrowLeft, CheckCircle, TrendingUp, Briefcase, Zap } from 'lucide-react';

interface Service {
  title: string;
  subtitle: string;
  heroImage: string;
  contentImage: string;
  overview: string;
  challenges: string[];
  solution: string;
  capabilities: string[];
  benefits: string[];
  methodology: Array<{ step: string; desc: string }>;
  useCases: string[];
  layout: string;
}

// Premium Enterprise Service Content - AVANTCORE Specific
const serviceDetails: Record<string, Service> = {
  'digital-consulting': {
    title: 'Digital Consulting & Strategy',
    subtitle: 'Enterprise Digital Transformation Leadership',
    heroImage: '/Digital Consulting.jpg',
    contentImage: '/Digital Consulting.jpg',
    overview: 'AVANTCORE brings 15+ years of enterprise consulting experience across North America, Europe, and Middle East markets. Our digital consulting practice helps Fortune 500 companies design transformational technology strategies driving competitive advantage.',
    challenges: ['Legacy infrastructure limiting innovation', 'Transformation roadmaps lacking business alignment', 'Digital skills gaps', 'ROI uncertainty', 'Organizational resistance', 'Fragmented technology ecosystems'],
    solution: 'We combine strategic business acumen with deep technology expertise. Comprehensive assessments, high-impact identification, phased roadmaps delivering measurable ROI across banking, healthcare, retail, manufacturing.',
    capabilities: ['Digital Maturity Assessments', 'Technology Portfolio Rationalization', 'Cloud Migration Strategy', 'Organizational Change Management', 'Technology Talent Strategy', 'Innovation Roadmap Development', 'Enterprise Architecture Planning', 'Business Process Optimization'],
    benefits: ['30-40% faster implementation', '35% average cost reduction', 'Structured risk mitigation', 'First-mover advantage', 'Leadership alignment', 'Top talent attraction'],
    methodology: [
      { step: 'Assess', desc: 'In-depth analysis of technology, processes, readiness, market positioning' },
      { step: 'Strategy', desc: 'Comprehensive digital roadmap with phased milestones and metrics' },
      { step: 'Design', desc: 'Target state architecture, integration, technology selection' },
      { step: 'Enable', desc: 'Change management, capability building, team augmentation' }
    ],
    useCases: ['$50M technology cost savings through transformation', '50% faster product launches with cloud-first architecture', 'Healthcare network integration across 12 hospitals'],
    layout: 'premium'
  },
  'digital-commerce': {
    title: 'Digital Commerce',
    subtitle: 'Enterprise E-Commerce Transformation',
    heroImage: '/pexels-n-voitkevich-6214477.jpg',
    contentImage: '/pexels-n-voitkevich-6214477.jpg',
    overview: 'AVANTCORE builds enterprise e-commerce platforms driving revenue growth and customer loyalty. We combine commerce expertise with technology mastery for omnichannel experiences competing with digital-native players.',
    challenges: ['Legacy systems unable to support expectations', 'Omnichannel complexity', 'Personalization at scale', 'Global payment management', 'Inventory optimization', 'Customer experience differentiation'],
    solution: 'Composable commerce combining best-of-breed platforms with custom capabilities. Delivers rapid time-to-market with flexibility for business evolution across multi-regional, multi-currency markets.',
    capabilities: ['Composable Commerce Architecture', 'Headless Commerce Implementation', 'Omnichannel Integration', 'Personalization Engines', 'Payment Gateway Integration', 'B2B and B2C Platforms', 'Mobile Commerce Solutions', 'Analytics and Optimization'],
    benefits: ['25-40% online sales increase', '40% conversion rate improvement', '30% operational efficiency gain', '10x traffic scalability', '60-90 day new market launch', 'Best-in-class experience'],
    methodology: [
      { step: 'Discovery', desc: 'Customer journey mapping, competitive analysis, tech audit' },
      { step: 'Architecture', desc: 'Platform selection, integration design, security model' },
      { step: 'Build', desc: 'Agile development with continuous integration and reviews' },
      { step: 'Scale', desc: 'Performance optimization, load testing, global deployment' }
    ],
    useCases: ['$100M+ annual sales multi-region luxury retail platform', 'Omnichannel integration connecting 150 retail stores', 'B2B platform enabling direct-to-business sales'],
    layout: 'premium'
  },
  'business-apps': {
    title: 'Business Applications',
    subtitle: 'Enterprise Software Built for Your Business',
    heroImage: '/Business Applications.jpg',
    contentImage: '/Business Applications.jpg',
    overview: 'AVANTCORE develops custom business applications solving complex operational challenges. Mission-critical applications managing billions in transactions for global enterprises.',
    challenges: ['Custom logic unsupported by off-the-shelf software', 'Legacy modernization without disruption', 'Complex system integration', 'Regulatory compliance', 'Performance requirements', 'Scalability to 100K+ users'],
    solution: 'Cloud-native architecture ensuring security, performance, and maintainability. Enterprise software practices including automated testing, continuous integration, disaster recovery planning.',
    capabilities: ['Enterprise Architecture', 'Cloud-Native Development', 'Legacy Modernization', 'API-First Architecture', 'Microservices Decomposition', 'High-Availability Design', 'Security Compliance', 'Performance Optimization'],
    benefits: ['Weekly deployments vs quarterly', '99.99% uptime through redundancy', '40% lower TCO than off-the-shelf', 'Unique competitive differentiation', '30-50% user productivity improvement', 'Technical debt elimination'],
    methodology: [
      { step: 'Requirements', desc: 'Business process workshops, user stories, technical specs' },
      { step: 'Design', desc: 'Enterprise architecture, database design, API specification' },
      { step: 'Development', desc: 'Iterative development with automated testing and CI' },
      { step: 'Operations', desc: 'Deployment automation, monitoring, incident response' }
    ],
    useCases: ['Transaction processing system handling $500M+ daily volumes', 'Patient management system serving 10M+ records', 'Supply chain system reducing inventory by 25%'],
    layout: 'premium'
  },
  'data-modernization': {
    title: 'Data Modernization',
    subtitle: 'Unlock Data as a Strategic Asset',
    heroImage: '/Data Modernization.jpg',
    contentImage: '/Data Modernization.jpg',
    overview: 'AVANTCORE modernizes enterprise data infrastructures transforming legacy systems into cloud-native platforms. Architected solutions managing petabytes of data for global enterprises.',
    challenges: ['Aging data warehouses becoming bottlenecks', 'Data silos preventing cross-functional insights', 'Escalating infrastructure costs', 'Weeks-long query response times', 'Security and compliance risks', 'Legacy technology talent scarcity'],
    solution: 'Cloud-native data architectures combining data lakes, warehouses, real-time streaming. Phased migrations with parallel systems ensuring business continuity throughout transformation.',
    capabilities: ['Data Architecture Design', 'Cloud Platform Selection', 'ETL/ELT Pipeline Development', 'Data Warehouse Implementation', 'Real-Time Streaming', 'Data Governance Framework', 'Security & Compliance Architecture', 'Performance Optimization'],
    benefits: ['50-70% infrastructure cost savings', '10-100x query speed improvement', 'Days not months for analytics', 'Advanced analytics and ML enablement', 'Automated governance and audit', 'Modern tech stack talent attraction'],
    methodology: [
      { step: 'Assess', desc: 'Current state analysis, cost modeling, performance profiling' },
      { step: 'Design', desc: 'Target architecture, platform selection, migration approach' },
      { step: 'Migrate', desc: 'Phased data migration, parallel validation, cutover planning' },
      { step: 'Optimize', desc: 'Performance tuning, cost optimization, governance setup' }
    ],
    useCases: ['20TB warehouse migration reducing query time from 2 hours to 30 seconds', 'Real-time customer analytics enabling personalization at scale', 'Unified patient data enabling integrated care analytics'],
    layout: 'premium'
  },
  'advanced-analytics': {
    title: 'Advanced Analytics',
    subtitle: 'Predictive Insights Driving Business Outcomes',
    heroImage: '/Advanced Analytics.jpg',
    contentImage: '/Advanced Analytics.jpg',
    overview: 'AVANTCORE builds advanced analytics capabilities enabling enterprises to predict trends, optimize operations, and uncover opportunities. Analytics generating millions in incremental value.',
    challenges: ['Reporting historical events rather than predicting futures', 'Siloed analytics teams unable to influence decisions', 'ML models never reaching production', 'Data scientists spending 80% on preparation', 'Analytics talent scarcity', 'Regulatory compliance in AI decisions'],
    solution: 'Enterprise analytics platforms combining descriptive, diagnostic, predictive, prescriptive analytics. Integration with business processes ensuring analytics influence daily decisions.',
    capabilities: ['Advanced Statistical Modeling', 'Machine Learning Pipeline Development', 'Predictive Model Deployment', 'Real-Time Decision Systems', 'Analytics Dashboard Development', 'Data Visualization & Storytelling', 'Model Governance & Monitoring', 'AI Ethics & Compliance'],
    benefits: ['15-25% revenue lift through personalization', '20-40% operational efficiency', '30-50% fraud loss reduction', 'Minutes not days for decisions', 'Unique predictive capabilities', 'Millions of automated transactions'],
    methodology: [
      { step: 'Define', desc: 'Business problem framing, success metrics, data assessment' },
      { step: 'Develop', desc: 'Feature engineering, model training, hyperparameter tuning' },
      { step: 'Deploy', desc: 'Model serving, A/B testing, decision system integration' },
      { step: 'Monitor', desc: 'Performance tracking, drift detection, continuous improvement' }
    ],
    useCases: ['$50M annual fraud loss reduction through detection model', '20% demand forecasting improvement for inventory turns', 'Churn prediction retaining high-value customers'],
    layout: 'premium'
  },
  'connected-intelligence': {
    title: 'Connected Intelligence',
    subtitle: 'Unified Data Ecosystem for Enterprise Insights',
    heroImage: '/Connected Intelligence.jpg',
    contentImage: '/Connected Intelligence.jpg',
    overview: 'AVANTCORE builds unified intelligence platforms connecting disparate sources into single sources of truth. Integrated solutions across 50+ business applications for global enterprises.',
    challenges: ['Data fragmented across 20+ incompatible systems', 'Duplicate and conflicting information', 'Weeks to answer basic questions', 'Different departments using different numbers', 'Impossible 360° customer view', 'Poor compliance visibility'],
    solution: 'Composable data architectures integrating through APIs, message queues, ETL. Master data management ensuring consistency. Real-time dashboards accessible across organizational boundaries.',
    capabilities: ['Data Integration Architecture', 'Master Data Management', 'Real-Time Data Pipelines', 'API Development & Management', 'Master Reference Databases', 'Data Quality Frameworks', 'Analytics Data Platforms', 'Governance Automation'],
    benefits: ['10x faster business question answering', '30% operational efficiency through coordination', 'Unified customer view enabling personalization', 'Centralized audit trails and governance', 'Weeks not months for new integrations', 'Single source of truth eliminating conflicts'],
    methodology: [
      { step: 'Map', desc: 'Current landscape, system inventory, data flows, quality' },
      { step: 'Design', desc: 'Integration architecture, master data model, streaming design' },
      { step: 'Build', desc: 'Integration development, quality rules, governance' },
      { step: 'Enable', desc: 'Team training, dashboard development, operational handover' }
    ],
    useCases: ['Unified customer master across 8 banks enabling cross-sell', 'Real-time inventory visibility across 500+ stores', 'Integrated patient data across 15 hospitals'],
    layout: 'premium'
  },
  'data-management': {
    title: 'Data Management',
    subtitle: 'Governance, Security & Optimization',
    heroImage: '/Data Management.jpg',
    contentImage: '/Data Management.jpg',
    overview: 'AVANTCORE establishes enterprise data governance ensuring quality, security, and compliance. Governance frameworks managing billions of data records across industries.',
    challenges: ['No clear data ownership or accountability', 'Uncontrolled data proliferation', 'Regulatory compliance difficulty', 'Data quality undermining analytics', 'Unmanaged data access security risks', 'Inability to retire obsolete data'],
    solution: 'Comprehensive data management strategies defining governance policies, quality frameworks, security models. Platforms automating governance enforcement at scale.',
    capabilities: ['Data Governance Framework', 'Data Quality Management', 'Master Data Management', 'Data Lineage Tracking', 'Privacy & Security Controls', 'Compliance Automation', 'Data Catalog Solutions', 'Metadata Management'],
    benefits: ['Automated audit trails and controls', '30-50% data quality issue reduction', 'Automated governance reducing effort', 'Centralized access control', 'Clear policies enabling innovation', 'Better data enabling better analytics'],
    methodology: [
      { step: 'Strategy', desc: 'Governance model design, policy definition, organizational structure' },
      { step: 'Implement', desc: 'Technology selection, automation, control implementation' },
      { step: 'Enable', desc: 'Team training, process implementation, change management' },
      { step: 'Sustain', desc: 'Monitoring, policy updates, capability building' }
    ],
    useCases: ['GDPR compliance through automated data governance', 'HIPAA compliance across distributed healthcare systems', 'Unified global data governance framework'],
    layout: 'premium'
  },
  'generative-ai': {
    title: 'Generative AI Solutions',
    subtitle: 'Enterprise AI Transformation',
    heroImage: '/Generative AI Solutions.jpg',
    contentImage: '/Generative AI Solutions.jpg',
    overview: 'AVANTCORE integrates generative AI into enterprise workflows amplifying productivity and automating complex processes. AI solutions generating millions in value across industries.',
    challenges: ['Evaluating legitimate opportunities vs hype', 'Model quality and consistency', 'Data privacy concerns', 'Change management when automating', 'Regulatory AI compliance', 'ROI measurement'],
    solution: 'High-impact AI opportunities aligned with strategy. Responsible AI practices ensuring fairness and compliance. Enterprise AI platform enabling rapid experimentation and safe deployment.',
    capabilities: ['AI Opportunity Assessment', 'LLM Integration & Tuning', 'RAG System Development', 'Prompt Engineering', 'Model Fine-Tuning', 'AI Agent Development', 'Responsible AI Practices', 'AI Operations & Monitoring'],
    benefits: ['30-50% efficiency gains through automation', 'New AI-enabled business capabilities', '20-40% manual process cost reduction', 'Consistent AI-assisted decision-making', 'Weeks to deploy vs months', 'Scale to millions of transactions'],
    methodology: [
      { step: 'Discover', desc: 'AI opportunity identification, business case development' },
      { step: 'Develop', desc: 'LLM selection, fine-tuning, enterprise integration' },
      { step: 'Deploy', desc: 'Pilot validation, scaling strategy, monitoring setup' },
      { step: 'Scale', desc: 'Production deployment, monitoring, continuous improvement' }
    ],
    useCases: ['AI-powered customer service reducing support costs 40%', 'Clinical documentation automation reducing physician burden', 'Contract analysis accelerating due diligence 10x'],
    layout: 'premium'
  },
  'cloud-migration': {
    title: 'Cloud Operations & Migration',
    subtitle: 'Secure, Seamless Cloud Transformation',
    heroImage: '/Cloud Operations & Migration.jpg',
    contentImage: '/Cloud Operations & Migration.jpg',
    overview: 'AVANTCORE migrates enterprise applications to cloud platforms with zero downtime. Orchestrated migrations managing 1000+ applications for global enterprises.',
    challenges: ['Legacy applications tightly coupled to on-premise', 'Massive data migration requiring zero downtime', 'Cloud licensing optimization', 'Security and compliance in shared infrastructure', 'Skills gaps in cloud technologies', 'Cost optimization post-migration'],
    solution: 'Phased migration strategies leveraging 6Rs framework. Infrastructure provisioning, application migration, data transfer, security, operational handover. Expertise across AWS, Azure, GCP.',
    capabilities: ['Migration Planning & Assessment', 'Application Refactoring', 'Infrastructure Automation', 'Data Migration at Scale', 'Security Implementation', 'Cost Optimization', 'Operational Enablement', 'Multi-Cloud Architecture'],
    benefits: ['30-50% infrastructure cost reduction', '10x faster application deployment', 'Auto-scaling meeting demand spikes', '99.99% uptime vs traditional data centers', 'Latest cloud services access', 'Cloud talent hiring ability'],
    methodology: [
      { step: 'Assess', desc: 'Application portfolio analysis, cloud readiness, cost modeling' },
      { step: 'Plan', desc: 'Migration strategy, wave planning, resource estimation' },
      { step: 'Migrate', desc: 'Infrastructure provisioning, deployment, data transfer' },
      { step: 'Optimize', desc: 'Cost optimization, performance tuning, operations handover' }
    ],
    useCases: ['500-application migration enabling $100M annual savings', 'Real-time system migration maintaining 99.99% uptime', 'HIPAA-compliant cloud infrastructure for healthcare'],
    layout: 'premium'
  },
  'cloud-development': {
    title: 'Cloud Development & Integration',
    subtitle: 'Modern Applications for Modern Businesses',
    heroImage: '/Cloud Development & Integration.jpg',
    contentImage: '/Cloud Development & Integration.jpg',
    overview: 'AVANTCORE builds cloud-native applications from ground up leveraging cloud capabilities. Applications serving millions with sub-100ms response times.',
    challenges: ['Designing for distributed systems', 'Managing microservices complexity', 'Implementing resilience without brittleness', 'Cost control at scale', 'Cloud-native security', 'Operational excellence'],
    solution: 'Cloud-native architectures leveraging containerization, serverless, managed services. Patterns ensuring elastic scaling, automatic failure recovery, cost efficiency.',
    capabilities: ['Microservices Architecture', 'Containerization & Orchestration', 'Serverless Application Development', 'API Gateway Management', 'Event-Driven Architecture', 'DevOps & CI/CD', 'Infrastructure as Code', 'Cloud Security Architecture'],
    benefits: ['Daily feature deployments', '10x traffic growth scalability', 'Pay-only-for-resources cost model', '99.99%+ reliability uptime', 'Independent team deployments', 'Sub-100ms global latency'],
    methodology: [
      { step: 'Design', desc: 'Application architecture, service boundaries, data models' },
      { step: 'Develop', desc: 'Agile development, microservices implementation, testing' },
      { step: 'Deploy', desc: 'Infrastructure automation, CI/CD pipelines, canary deployments' },
      { step: 'Operate', desc: 'Monitoring & alerting, incident response, optimization' }
    ],
    useCases: ['$1B+ annual GMV e-commerce platform with auto-scaling', 'Sub-100ms fintech transactions at scale', 'Multi-tenant SaaS serving 10K+ customers'],
    layout: 'premium'
  },
  'managed-services': {
    title: 'Managed Services',
    subtitle: '24/7 Enterprise Operations',
    heroImage: '/Managed Services.jpg',
    contentImage: '/Managed Services.jpg',
    overview: 'AVANTCORE operates mission-critical systems 24/7 ensuring availability, performance, and security. Managing infrastructures serving billions of transactions.',
    challenges: ['Finding reliable 24/7 operations teams', 'Managing infrastructure complexity', 'Minutes-level incident response', 'Maintaining security at scale', 'Cost optimization without reliability compromise', 'Consistent SLA achievement'],
    solution: 'End-to-end managed services covering infrastructure, application, database management. Automation with expert engineers for minute-level incident response.',
    capabilities: ['Infrastructure Management', 'Application Monitoring', 'Database Administration', 'Security Operations', 'Incident Response', 'Performance Optimization', 'Capacity Planning', 'Cost Optimization'],
    benefits: ['99.99% uptime maintained', 'Minute-level incident resolution', '30-40% cost reduction vs in-house', '200+ cloud-certified engineers access', 'Infrastructure growth without team expansion', '24/7 monitoring peace of mind'],
    methodology: [
      { step: 'Onboard', desc: 'System inventory, health assessment, metrics, alerts' },
      { step: 'Monitor', desc: '24/7 proactive monitoring, predictive alerting' },
      { step: 'Manage', desc: 'Incident response, maintenance windows, optimization' },
      { step: 'Improve', desc: 'Monthly reviews, capacity planning, cost optimization' }
    ],
    useCases: ['99.99% uptime managing $500B+ daily financial transactions', 'Peak season readiness ensuring 100% availability', 'HIPAA-compliant healthcare infrastructure'],
    layout: 'premium'
  },
  'infrastructure': {
    title: 'Digital Infrastructure Services',
    subtitle: 'Modern Infrastructure for Digital Transformation',
    heroImage: '/Digital Infrastructure Services.jpg',
    contentImage: '/Digital Infrastructure Services.jpg',
    overview: 'AVANTCORE architects modern infrastructure enabling digital strategies. Designed infrastructures supporting companies scaling from 100 to 100K employees.',
    challenges: ['Aging data centers becoming liabilities', 'Multi-cloud provider management', 'Security and compliance across environments', 'Unpredictable capacity growth', 'Vendor lock-in risks', 'Escalating infrastructure costs'],
    solution: 'Multi-cloud infrastructure providing flexibility, resilience, cost optimization. Infrastructure-as-code ensuring consistency and rapid scaling.',
    capabilities: ['Multi-Cloud Architecture', 'Network Design & Security', 'Database Infrastructure', 'Storage & Backup', 'Disaster Recovery', 'Infrastructure Automation', 'Security Architecture', 'Cost Optimization'],
    benefits: ['Best provider for each workload', 'Multi-region resilience and availability', 'Defense-in-depth security', 'Demand-based infrastructure scaling', '40-50% cost reduction', 'Automated governance and audit'],
    methodology: [
      { step: 'Design', desc: 'Requirements analysis, architecture design, security model' },
      { step: 'Build', desc: 'Infrastructure provisioning, security hardening, testing' },
      { step: 'Deploy', desc: 'Application deployment, data migration, traffic cutover' },
      { step: 'Optimize', desc: 'Performance tuning, cost optimization, team enablement' }
    ],
    useCases: ['Multi-region infrastructure serving 50 countries', 'Infrastructure scaling from 0 to 1M users', 'Disaster recovery meeting RPO/RTO targets'],
    layout: 'premium'
  },
  'security': {
    title: 'Security',
    subtitle: 'Enterprise Security for Modern Threats',
    heroImage: '/Security.jpg',
    contentImage: '/Security.jpg',
    overview: 'AVANTCORE protects enterprises from evolving cyber threats. Comprehensive security architecture and operations for organizations managing petabytes of sensitive data.',
    challenges: ['Sophisticated threats evolving faster', 'Multi-jurisdiction compliance', 'Security skills shortage', 'Balancing security with productivity', 'Global infrastructure security', 'Threat detection in event noise'],
    solution: 'Defense-in-depth security combining network, endpoint, encryption, detection. 24/7 security operations centers detecting and responding to threats real-time.',
    capabilities: ['Security Architecture Design', 'Penetration Testing', 'Vulnerability Management', 'Threat Detection & Response', 'Incident Response', 'Security Operations', 'Compliance Management', 'Security Awareness Training'],
    benefits: ['Proactive threat detection and response', 'Automated compliance monitoring', 'Security validated through testing', 'Minutes-level threat response', 'Trained workforce reducing risk', 'Customer data protection trust'],
    methodology: [
      { step: 'Assess', desc: 'Security assessment, threat modeling, compliance gaps' },
      { step: 'Design', desc: 'Security architecture, controls design, operations procedures' },
      { step: 'Implement', desc: 'Technology deployment, security controls, testing' },
      { step: 'Operate', desc: '24/7 monitoring, incident response, continuous improvement' }
    ],
    useCases: ['$50M cybersecurity investment protecting assets', 'HIPAA compliance across 15 hospitals', 'National security-grade infrastructure'],
    layout: 'premium'
  },
  'emerging-tech': {
    title: 'Emerging Technologies',
    subtitle: 'Innovation at Enterprise Scale',
    heroImage: '/Emerging Technologies.jpg',
    contentImage: '/Emerging Technologies.jpg',
    overview: 'AVANTCORE helps enterprises harness emerging technologies for competitive advantage. Led proof-of-concepts and production deployments of cutting-edge technologies.',
    challenges: ['Separating hype from opportunity', 'Limited emerging tech expertise', 'Regulatory uncertainty', 'POC to production scaling', 'Technology failure risk management', 'Emerging tech talent scarcity'],
    solution: 'High-impact emerging technology identification aligned with strategy. POC validation before major investment. Regulatory analysis and risk assessment.',
    capabilities: ['Blockchain Architecture', 'IoT Platform Development', 'Edge Computing', 'Quantum Computing Evaluation', 'AR/VR Applications', 'Advanced AI/ML', 'Proof-of-Concept Development', 'Technology Roadmapping'],
    benefits: ['First-mover advantage in transformative tech', 'New business models and revenue streams', 'Process automation through technology', 'Unique competitive capabilities', 'POC validation reducing risk', 'Cutting-edge tech talent attraction'],
    methodology: [
      { step: 'Discover', desc: 'Technology evaluation, use case identification, business case' },
      { step: 'Pilot', desc: 'POC development, learning capture, scale planning' },
      { step: 'Deploy', desc: 'Production architecture, compliance, go-to-market' },
      { step: 'Scale', desc: 'Global rollout, optimization, capability building' }
    ],
    useCases: ['Blockchain-based settlement system for financial network', 'IoT platform monitoring 10,000+ devices', 'Quantum computing for route optimization'],
    layout: 'premium'
  },
  'bps': {
    title: 'Business Process Services',
    subtitle: 'Transform Operations Through Optimization',
    heroImage: '/Business Process Services .jpg',
    contentImage: '/Business Process Services .jpg',
    overview: 'AVANTCORE optimizes enterprise business processes delivering efficiency, quality, and cost improvements. Redesigned operations for enterprises managing millions of daily transactions.',
    challenges: ['Legacy processes optimized for old world', 'Manual processes driving costs and errors', 'Inconsistent quality across geographies', 'Siloed processes', 'Employee workflow frustration', 'Technology unable to support optimization'],
    solution: 'Business process management combining workflow analysis and technology enablement. Process redesign with technology ensuring efficiency and maintainability.',
    capabilities: ['Process Mapping & Analysis', 'Lean Six Sigma', 'Workflow Automation', 'RPA Implementation', 'Operations Technology', 'Change Management', 'Performance Measurement', 'Continuous Improvement'],
    benefits: ['30-50% process efficiency gains', 'Error reduction through standardization', '40-70% cycle time reduction', 'Proportional-cost-free scaling', 'Employee and customer satisfaction', 'Standardized compliance processes'],
    methodology: [
      { step: 'Analyze', desc: 'Current state mapping, data collection, bottleneck identification' },
      { step: 'Design', desc: 'Future state design, technology requirements, roadmap' },
      { step: 'Implement', desc: 'Process implementation, system configuration, training' },
      { step: 'Sustain', desc: 'Performance monitoring, continuous improvement cycles' }
    ],
    useCases: ['Finance process optimization reducing cost 40%', 'Recruiting redesign reducing time-to-hire', 'Supply chain procurement cycle time reduction'],
    layout: 'premium'
  }
};

// Premium Layout Component with Advanced Animations
const PremiumLayout = ({ service, navigate }: any) => {
  return (
    <div className="min-h-screen bg-white">
      {/* HERO SECTION - Full Screen with Dark Overlay */}
      <motion.section
        className="relative h-screen flex items-center justify-center text-white overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Background Image with Dark Overlay (55%) */}
        <motion.div
          className="absolute inset-0 z-0"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
        >
          <img src={service.heroImage} alt={service.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/55"></div>
        </motion.div>

        {/* Hero Content - All White Text */}
        <motion.div
          className="relative z-10 text-center max-w-4xl mx-auto px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <motion.button
            onClick={() => navigate('/services')}
            className="mb-8 flex items-center gap-2 text-white hover:text-orange-400 transition"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            whileHover={{ x: -5 }}
          >
            <ArrowLeft size={20} />
            Back to Services
          </motion.button>

          <motion.h1
            className="text-6xl md:text-7xl font-bold mb-4 text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            {service.title}
          </motion.h1>

          <motion.p
            className="text-2xl md:text-3xl text-white mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            {service.subtitle}
          </motion.p>

          <motion.p
            className="text-lg md:text-xl text-gray-100 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            {service.overview}
          </motion.p>
        </motion.div>
      </motion.section>

      {/* BLUE SECTION: Industry Challenges */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-5xl mx-auto px-4">
          <motion.h2
            className="text-4xl font-bold mb-12 text-white"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            Industry Challenges
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-6">
            {service.challenges.map((c: string, i: number) => (
              <motion.div
                key={i}
                className="flex gap-4 bg-blue-800/50 p-4 rounded-lg"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ delay: i * 0.08, duration: 0.6, ease: 'easeOut' }}
              >
                <TrendingUp className="w-5 h-5 flex-shrink-0 text-orange-400 mt-1" />
                <span className="text-white">{c}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHITE SECTION: Service Overview with Image */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <motion.div className="grid md:grid-cols-2 gap-12 items-center" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: false, amount: 0.2 }}>
            {/* Image - Slide from Left */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              whileHover={{ scale: 1.02 }}
              className="overflow-hidden rounded-lg"
            >
              <motion.img
                src={service.contentImage}
                alt={service.title}
                className="w-full h-auto rounded-lg shadow-2xl"
                initial={{ scale: 1.05 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.8 }}
              />
            </motion.div>

            {/* Text - Slide from Right */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              <motion.h2
                className="text-4xl font-bold mb-6 text-gray-900"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                How AVANTCORE Solves It
              </motion.h2>
              <motion.p
                className="text-lg text-gray-700 leading-relaxed mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                {service.solution}
              </motion.p>
              <div className="space-y-3">
                {service.capabilities.slice(0, 4).map((cap: string, i: number) => (
                  <motion.div
                    key={i}
                    className="flex gap-3"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ delay: 0.4 + i * 0.1, duration: 0.6 }}
                  >
                    <CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{cap}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* BLUE SECTION: Core Capabilities */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-5xl mx-auto px-4">
          <motion.h2
            className="text-4xl font-bold mb-12 text-center text-white"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            Core Capabilities
          </motion.h2>
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1,
                  delayChildren: 0.1,
                },
              },
            }}
          >
            {service.capabilities.map((cap: string, i: number) => (
              <motion.div
                key={i}
                className="bg-blue-800/50 rounded-lg p-6 border-l-4 border-orange-400"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <Briefcase className="w-6 h-6 text-orange-400 mb-3" />
                <p className="font-semibold text-white text-sm">{cap}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* WHITE SECTION: Business Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <motion.h2
            className="text-4xl font-bold mb-12 text-center text-gray-900"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            Business Benefits
          </motion.h2>
          <motion.div
            className="grid md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.12,
                },
              },
            }}
          >
            {service.benefits.map((b: string, i: number) => (
              <motion.div
                key={i}
                className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-8 border-l-4 border-orange-600"
                variants={{
                  hidden: { opacity: 0, scale: 0.9 },
                  visible: { opacity: 1, scale: 1 },
                }}
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 100 }}
              >
                <Zap className="w-8 h-8 text-orange-600 mb-4" />
                <p className="text-gray-900 font-semibold leading-relaxed text-sm">{b}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* BLUE SECTION: Industry Use Cases */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-5xl mx-auto px-4">
          <motion.h2
            className="text-4xl font-bold mb-12 text-center text-white"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            Real-World Impact
          </motion.h2>
          <motion.div
            className="space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.15,
                },
              },
            }}
          >
            {service.useCases.map((u: string, i: number) => (
              <motion.div
                key={i}
                className="bg-blue-800/50 rounded-lg p-8 border-l-4 border-orange-400"
                variants={{
                  hidden: { opacity: 0, x: -40 },
                  visible: { opacity: 1, x: 0 },
                }}
                whileHover={{ x: 8 }}
                transition={{ type: 'spring', stiffness: 100 }}
              >
                <p className="text-white text-lg leading-relaxed">{u}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* WHITE SECTION: Our Methodology/Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <motion.h2
            className="text-4xl font-bold mb-12 text-center text-gray-900"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            Our Methodology
          </motion.h2>
          <motion.div
            className="grid md:grid-cols-4 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.15,
                },
              },
            }}
          >
            {service.methodology.map((m: any, i: number) => (
              <motion.div
                key={i}
                className="relative"
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                {/* Connector Line */}
                {i < service.methodology.length - 1 && (
                  <motion.div
                    className="hidden md:block absolute top-8 left-1/2 w-full h-1 bg-gradient-to-r from-orange-600 to-transparent -ml-24"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: false, amount: 0.5 }}
                    transition={{ delay: i * 0.15 + 0.3, duration: 0.6 }}
                    style={{ originX: 0 }}
                  ></motion.div>
                )}

                {/* Step Card */}
                <motion.div
                  className="relative z-10 bg-white border-2 border-blue-900 rounded-lg p-6 shadow-md"
                  whileHover={{ y: -5, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)' }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    className="text-3xl font-bold text-orange-600 mb-2"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: false, amount: 0.5 }}
                    transition={{ delay: i * 0.15 + 0.4, type: 'spring', stiffness: 200 }}
                  >
                    {i + 1}
                  </motion.div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{m.step}</h3>
                  <p className="text-gray-700 text-sm">{m.desc}</p>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* BLUE SECTION: Final CTA */}
      <motion.section
        className="relative py-20 bg-blue-900 text-white overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false }}
      >
        {/* Parallax background */}
        <motion.div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url(${service.heroImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
          initial={{ scale: 1 }}
          whileInView={{ scale: 1.05 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: false }}
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/95 to-blue-800/95" />

        <motion.div
          className="relative max-w-3xl mx-auto text-center px-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: false }}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-6 text-white"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: false }}
          >
            Ready to Transform?
          </motion.h2>

          <motion.p
            className="text-lg md:text-xl mb-8 text-blue-100"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: false }}
          >
            Let AVANTCORE's experts discuss enterprise-grade solutions for your organization.
          </motion.p>

          <motion.button
            className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: false }}
          >
            Schedule Consultation
          </motion.button>
        </motion.div>
      </motion.section>
    </div>
  );
};

const ServiceDetail = () => {
  const { serviceId } = useParams();
  const navigate = useNavigate();
  const service = serviceId ? serviceDetails[serviceId] : null;

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Service Not Found</h1>
          <button onClick={() => navigate('/services')} className="text-orange-600 hover:text-orange-700 font-semibold">
            ← Back to Services
          </button>
        </div>
      </div>
    );
  }

  return <PremiumLayout service={service} navigate={navigate} />;
};

export default ServiceDetail;
