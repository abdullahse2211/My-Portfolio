export const portfolioData = {
  profile: {
    name: 'Muhammad Abdullah',
    title: 'AI/ML Research Engineer',
    taglines: [
      'AI/ML Engineer',
      'Computer Vision Engineer',
      'Deep Learning Engineer',
      'AI Research Assistant'
    ],
    location: 'Lahore, Punjab, Pakistan',
    email: 'abdullahse2211@gmail.com',
    phone: '+92 3094157102',
    aboutText: 'Software Engineering Graduate from Lahore Garrison University (2022–2026) specializing in Medical Computer Vision, Deep Learning, and end-to-end PyTorch pipelines. I build explainable hybrid CNN-Transformer frameworks, compress production models via Knowledge Distillation (6.4× compression with zero quality loss), and deploy full-stack inference systems backed by quantitative benchmarks.',
    education: {
      degree: 'BS SE (Software Engineering)',
      university: 'Lahore Garrison University',
      years: '2022 – 2026'
    },
    socialLinks: {
      github: 'https://github.com/abdullahse2211',
      linkedin: 'https://linkedin.com/in/muhammad-abdullah2211',
      email: 'mailto:abdullahse2211@gmail.com'
    },
    resumeUrl: '/M.Abdullah Ultimate.pdf',
    avatarUrl: '/profile-pic.png',
    statsHighlights: [
      { label: 'Research Projects', value: '4' },
      { label: 'Model Compression', value: '6.4×' },
      { label: 'Detection Accuracy', value: '96.34%' },
      { label: 'Publications', value: '1 In Prep' }
    ],
    techStack: [
      {
        category: 'Core AI & Frameworks (ML & DL)',
        skills: [
          'PyTorch', 'TensorFlow', 'scikit-Learn',
          'Hugging Face Transformers', 'OpenCV (Image Processing)',
          'Jupyter Notebook', 'Overleaf'
        ]
      },
      {
        category: 'Generative AI & Advanced ML',
        skills: [
          'Diffusion Models (DDPM, DDIM)', 'RAG (Retrieval-Augmented Generation)',
          'Bayesian Optimization (BoTorch)', 'Knowledge Distillation',
          'Qwen2-VL', 'LlamaIndex', 'GraphRAG',
          'vLLM', 'TensorRT', '4-bit AWQ', 'Neo4j', 'LoRA'
        ]
      },
      {
        category: 'Data Analytics & Programming',
        skills: [
          'NumPy', 'Pandas', 'Matplotlib', 'Streamlit',
          'Python', 'JavaScript (ES6+)', 'SQL (MySQL)', 'HTML5', 'CSS3',
          'MERN Stack (React, Node.js, Express.js, MongoDB)'
        ]
      },
      {
        category: 'Professional & Soft Skills',
        skills: [
          'Git / GitHub Version Control', 'MLOps', 'Time Series Forecasting',
          'Technical Problem Solving', 'Analytical Thinking',
          'Teamwork & Collaboration', 'Research & Report Writing'
        ]
      }
    ]
  },
  projects: [
    {
      id: 'retinaxplain',
      title: 'RetinaXplain',
      subtitle: 'A Hybrid CNN-Vision Transformer Framework for Diabetic Retinopathy Severity Classification',
      role: 'Sole Researcher & Developer',
      description: 'An independently developed, explainable framework for 5-class diabetic retinopathy severity classification. Processed 3,662 APTOS 2019 fundus images (augmented to ~16,000 instances) using Ben Graham normalization, circular cropping, and illumination correction. Swin Transformer Tiny achieved the strongest result with 85.27% validation accuracy and 0.7216 macro-F1.',
      features: 'Features single-model inference, simultaneous 3-model weighted soft voting ensembling, and a locally deployable multi-page Streamlit application with processing-time monitoring and downloadable JSON records.',
      techTags: ['PyTorch', 'Swin Transformer', 'ViT-B/16', 'EfficientNet-B3', 'Streamlit', 'OpenCV', 'Medical AI'],
      githubUrl: 'https://github.com/abdullahse2211/diabetic-retinopathy-classification',
      metrics: [
        { label: 'Validation Accuracy', value: '85.27%', numericValue: 85.27, suffix: '%' },
        { label: 'Macro-F1 Score', value: '0.7216', numericValue: 0.7216, suffix: '' },
        { label: 'Training Samples', value: '~16,000', numericValue: 16000, suffix: '' },
        { label: 'Models Ensembled', value: '3', numericValue: 3, suffix: '' }
      ],
      highlights: [
        'Fine-tuned EfficientNet-B3, Swin Transformer Tiny, and ViT-B/16 — Swin-T achieved highest individual validation accuracy',
        'Built simultaneous 3-model weighted soft voting ensembles',
        'Fully functioning multi-page Streamlit frontend with PyTorch inference backend',
        'Triage gauges, probability charts, and automated JSON reporting'
      ],
      category: 'Medical AI',
      image: '/Dashboard1.jpg',
      images: [
        {
          url: '/Dashboard1.jpg',
          label: 'Fundus Image Analysis & Classification',
          tag: 'Dashboard 1',
          path: 'retinaxplain.ai / image-analysis'
        },
        {
          url: '/Dashboard2.jpg',
          label: 'Session Analytics & Model Performance',
          tag: 'Dashboard 2',
          path: 'retinaxplain.ai / session-analytics'
        }
      ],
      fallbackImage: '/Dashboard1.jpg',
      publicationStatus: 'First-author manuscript currently in preparation',
      order: 1,
      featured: true
    }
  ],
  certifications: [
    {
      title: 'Information Technology Specialist: JavaScript',
      issuer: 'Certiport (A Pearson VUE Business)',
      date: 'Jan 13, 2025',
      credentialId: 'mTp4-DwVM',
      verificationLink: 'https://certiport.com',
      grade: 'Certified',
      image: '/cert-js.png',
      order: 1
    },
    {
      title: 'Javascript Fullstack MERN Development',
      issuer: 'NAVTTC & KICS UET Lahore',
      date: 'Dec 16, 2024',
      credentialId: 'P-24-895714',
      grade: 'Grade A+',
      image: '/cert-mern.jpg',
      order: 2
    },
    {
      title: 'Introduction to Web Development',
      issuer: 'IBM (Coursera)',
      date: 'Nov 18, 2023',
      verificationLink: 'https://coursera.org',
      grade: 'Certified',
      image: '/cert-ibm.png',
      order: 3
    },
    {
      title: 'Prompt Engineering Certification',
      issuer: 'NCAI & KICS UET Lahore',
      date: 'December 2023',
      grade: 'Certified',
      image: '/cert-prompt.jpg',
      order: 4
    },
    {
      title: 'IT Career Symposium Recognition',
      issuer: 'IEEE ComSoc & IEEE Computer Society Lahore Section',
      date: 'Oct 15, 2024',
      grade: 'Certified Participant',
      image: '/cert-ieee.jpg',
      order: 5
    },
    {
      title: '14th National Youth Peace Festival 2024',
      issuer: 'CHANAN Development Association & NED',
      date: 'September 24-25, 2024',
      grade: 'Certified Participant',
      image: '/cert-peace.jpg',
      order: 6
    }
  ],
  experiences: [
    {
      id: 'allytica-aiml',
      role: 'AI/ML ENGINEER',
      company: 'ALLYTICA',
      duration: '01/09/2025 – 03/09/2026',
      location: 'LAHORE, PAKISTAN',
      contributions: [
        {
          title: 'Agentic GraphRAG & Workflow Orchestration',
          text: 'Engineered Agentic GraphRAG architectures integrating Neo4j Knowledge Graphs and LlamaIndex agents, reducing multi-hop retrieval hallucinations by ',
          metric: '42%'
        },
        {
          title: 'Sovereign AI Quantization & Local Edge Optimization',
          text: 'Quantized open-weights LLMs/VLMs using 4-bit AWQ and deployed containerized vLLM microservices, reducing VRAM footprint by ',
          metric: '60%',
          textMid: ' and first-token latency by ',
          metric2: '55%'
        },
        {
          title: 'Multimodal Visual Document Parsing',
          text: 'Fine-tuned multimodal Vision-Language Models (Qwen2-VL) using LoRA and converted vision backbones to TensorRT FP16 execution engines, accelerating inference to ',
          metric: '62 FPS'
        },
        {
          title: 'Enterprise Risk Analytics & Anomaly Detection',
          text: 'Built end-to-end statistical risk scoring and anomaly detection pipelines in PyTorch, maintaining a ',
          metric: '0.91+ AUC',
          textMid: ' on out-of-distribution enterprise transaction streams.'
        },
        {
          title: 'Sovereign Compliance & Microservices',
          text: 'Integrated strict data residency guardrails and REST API microservices using FastAPI and Docker to comply with cloud requirements.'
        }
      ],
      techStack: [
        'PyTorch',
        'Qwen2-VL',
        'LlamaIndex',
        'vLLM',
        'TensorRT',
        '4-bit AWQ',
        'Neo4j',
        'FastAPI',
        'Docker',
        'Streamlit'
      ]
    }
  ]
};

export default portfolioData;
