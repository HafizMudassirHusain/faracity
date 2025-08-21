// /data/services.js

const services = [
  {
    id: "ai",
    name: "AI & Machine Learning",
    description: "Harness the power of artificial intelligence to automate and optimize.",
    longDescription:
      "We develop powerful AI models tailored to your needs, covering NLP, computer vision, predictive analytics, and automation. Whether you're building a chatbot, fraud detection system, or intelligent recommender, we have you covered.",
    features: [
      "Custom AI Solution Development",
      "Machine Learning Models",
      "Natural Language Processing",
      "Computer Vision Systems",
      "Predictive Analytics",
    ],
    technologies: ["TensorFlow", "PyTorch", "scikit-learn", "Keras"],
    useCases: [
      "Chatbots & Virtual Assistants",
      "Fraud Detection",
      "Predictive Maintenance",
      "Recommendation Engines",
    ],
    caseStudies: [
      {
        title: "Retail Demand Forecasting",
        summary: "Improved forecast accuracy by 30% using time-series models.",
        url: "/case-studies/retail-forecasting",
      },
    ],
    pricing: {
      startingAt: "$12,000",
      model: "Fixed-price or retainer",
    },
    icon: "🤖",
    image: "/images/services/ai.jpg",
  },
  {
    id: "blockchain",
    name: "Blockchain Solutions",
    description: "Build secure, transparent decentralized applications.",
    longDescription:
      "We deliver enterprise-ready blockchain systems including smart contracts, decentralized apps, token economies, and more. We work with Ethereum, Hyperledger, and other modern blockchain platforms.",
    features: [
      "Smart Contract Development",
      "Decentralized Applications (dApps)",
      "Token Development",
      "Blockchain Integration",
      "NFT Marketplaces",
    ],
    technologies: ["Ethereum", "Solidity", "Hyperledger Fabric", "Truffle"],
    useCases: [
      "Supply Chain Tracking",
      "Digital Identity",
      "DeFi Platforms",
      "NFT Marketplaces",
    ],
    caseStudies: [
      {
        title: "Supply Chain Transparency",
        summary: "Enabled end-to-end traceability for luxury goods.",
        url: "/case-studies/supply-chain-transparency",
      },
    ],
    pricing: {
      startingAt: "$15,000",
      model: "Milestone-based",
    },
    icon: "🔗",
    image: "/images/services/blockchain.jpg",
  },
  {
    id: "cloud",
    name: "Cloud Services",
    description: "Leverage scalable cloud infrastructure to grow your business.",
    longDescription:
      "We help migrate, architect, and manage cloud platforms on AWS, Azure, and GCP. Our DevOps and serverless architectures keep your systems fast, reliable, and cost-efficient.",
    features: [
      "Cloud Migration",
      "Cloud-Native Development",
      "DevOps Implementation",
      "Serverless Architecture",
      "Multi-Cloud Management",
    ],
    technologies: ["AWS", "Azure", "Google Cloud", "Docker", "Kubernetes"],
    useCases: [
      "Lift-and-Shift Migration",
      "Microservices Architecture",
      "Serverless Apps",
      "CI/CD Pipelines",
    ],
    caseStudies: [
      {
        title: "E-commerce Platform Scalability",
        summary: "Reduced downtime by 90% with autoscaling architecture.",
        url: "/case-studies/ecommerce-scalability",
      },
    ],
    pricing: {
      startingAt: "$10,000",
      model: "Hourly or fixed",
    },
    icon: "☁️",
    image: "/images/services/cloud.jpg",
  },
  {
    id: "software",
    name: "Custom Software",
    description: "Tailor-made software solutions built just for you.",
    longDescription:
      "We specialize in custom enterprise-grade software — from SaaS products to mobile apps — using robust modern stacks and design systems tailored to your users.",
    features: [
      "Enterprise Applications",
      "Web Application Development",
      "Mobile Apps (iOS & Android)",
      "Desktop Software",
      "API Development & Integration",
    ],
    technologies: ["React", "Node.js", "Flutter", "Electron", ".NET Core"],
    useCases: [
      "SaaS Products",
      "Custom CRMs",
      "Cross-platform Mobile Apps",
      "Data Dashboards",
    ],
    caseStudies: [
      {
        title: "SaaS Platform Launch",
        summary: "Achieved 1,000-user adoption in 2 months post-launch.",
        url: "/case-studies/saas-launch",
      },
    ],
    pricing: {
      startingAt: "$20,000",
      model: "Retainer or milestone",
    },
    icon: "💻",
    image: "/images/services/software.jpg",
  },
  {
    id: "iot",
    name: "IoT Solutions",
    description: "Smart devices and systems for homes, offices, and industries.",
    longDescription:
      "We connect devices to the cloud and each other, enabling automation, monitoring, and data insights in real time. Build smart environments for energy, security, logistics, and more.",
    features: [
      "IoT Device Development",
      "IoT Platform Development",
      "Smart Home/Office Systems",
      "Industrial IoT Solutions",
      "IoT Data Analytics",
    ],
    technologies: ["Raspberry Pi", "Arduino", "AWS IoT", "Azure IoT Hub"],
    useCases: [
      "Smart Building Management",
      "Predictive Maintenance",
      "Asset Tracking",
      "Environmental Monitoring",
    ],
    caseStudies: [
      {
        title: "Smart Factory Deployment",
        summary: "Reduced maintenance costs by 40% with predictive alerts.",
        url: "/case-studies/smart-factory",
      },
    ],
    pricing: {
      startingAt: "$18,000",
      model: "Fixed-price",
    },
    icon: "📡",
    image: "/images/services/iot.jpg",
  },
  {
    id: "cybersecurity",
    name: "Cybersecurity",
    description: "Keep your systems safe from digital threats.",
    longDescription:
      "We audit, test, and monitor your systems for vulnerabilities and provide end-to-end protection strategies — from compliance to live threat detection.",
    features: [
      "Security Assessments",
      "Penetration Testing",
      "Security Monitoring",
      "Compliance Implementation",
      "Security Training",
    ],
    technologies: ["OWASP ZAP", "Metasploit", "Splunk", "Snort"],
    useCases: [
      "Vulnerability Assessments",
      "Incident Response",
      "Compliance Audits",
      "Security Awareness Training",
    ],
    caseStudies: [
      {
        title: "Financial Sector Audit",
        summary: "Achieved full PCI DSS compliance for global bank.",
        url: "/case-studies/pci-dss-compliance",
      },
    ],
    pricing: {
      startingAt: "$14,000",
      model: "Hourly or retainer",
    },
    icon: "🛡️",
    image: "/images/services/cybersecurity.jpg",
  },
];

export default services;
