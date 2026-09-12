export const portfolioData = {
  profile: {
    name: 'Muhammad Abdullah',
    title: 'AI/ML Engineer',
    taglines: [
      'AI/ML Engineer',
      'Computer Vision Engineer',
      'Deep Learning Engineer',
      'Generative AI Engineer'
    ],
    location: 'Lahore, Punjab, Pakistan',
    email: 'abdullahse2211@gmail.com',
    phone: '+92 3094157102',
    aboutText: 'I am a Software Engineering graduate and AI/ML Engineer specializing in Computer Vision, Deep Learning, and production-grade Generative AI pipelines. I bridge the gap between academic research and real-world engineering—building everything from medical image diagnostics to enterprise Agentic GraphRAG architectures. With hands-on experience in model acceleration (vLLM, TensorRT, 4-bit AWQ) and full-stack microservice deployment (FastAPI, Docker, Streamlit), I focus on engineering scalable, high-throughput, and production-ready AI systems.',
    education: {
      degree: 'BS Software Engineering',
      university: 'Lahore Garrison University',
      years: '2022 – 2026',
      focus: 'Artificial Intelligence, Robotics & Deep Learning'
    },
    socialLinks: {
      github: 'https://github.com/abdullahse2211',
      linkedin: 'https://linkedin.com/in/muhammad-abdullah2211',
      email: 'mailto:abdullahse2211@gmail.com'
    },
    resumeUrl: '/Muhammad Abdullah_CV.pdf',
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
      subtitle: 'Hybrid CNN-Vision Transformer Framework for Diabetic Retinopathy Classification',
      role: 'Final Year Project — Sole AI Researcher & Developer',
      duration: '01/01/2026 – 22/05/2026',
      description: 'Processed 3,662 APTOS images across 5 DR classes using circular cropping and Ben Graham normalization, expanding data to ~16,000 augmented instances. Trained and evaluated Swin-T (85.27% accuracy, 0.7216 macro-F1), EfficientNet-B3, and ViT-B/16, engineering weighted soft-voting ensembles, clinical label remap, and agreement analysis.',
      features: 'Built a multi-page web app featuring real-time DR diagnostic reports, probability visualizers, session analytics, and downloadable JSON records; authored a 72-page technical report.',
      techTags: ['PyTorch', 'Swin Transformer', 'ViT-B/16', 'EfficientNet-B3', 'Streamlit', 'OpenCV', 'Computer Vision'],
      githubUrl: 'https://github.com/abdullahse2211/diabetic-retinopathy-classification',
      videoUrl: 'https://youtu.be/MnS1vS5ZLqU?si=td3M1nW6vMmZRVf5',
      videoId: 'MnS1vS5ZLqU',
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
      category: 'Computer Vision & Deep Learning',
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
      publicationStatus: 'First-author manuscript currently in preparation',
      order: 1,
      featured: true
    },
    {
      id: 'bionafnet',
      title: 'BioNAFNet',
      subtitle: 'Bio-Inspired Neural Architecture for Low-Light Image Enhancement & Restoration',
      role: 'Student Deep Learning Researcher',
      duration: '07/01/2026 – 08/03/2026',
      description: 'Designed a bio-inspired enhancement network trained from scratch with a composite Charbonnier, SSIM, color, and Weber-Fechner perceptual loss, surpassing 9 baselines with 28.67 dB PSNR on LOLv2 Real. Compressed model parameters from 154M to 24M via knowledge distillation (6.4× compression, 3.9× speedup) with zero perceptual degradation, enabling the student model to surpass the teacher by +0.29 dB.',
      features: 'Shipped interactive inference UI with live preview, qualitative benchmark visualizer, side-by-side restoration comparisons, and automated preprocessing pipeline (augmentation, cropping, resizing).',
      techTags: ['PyTorch', 'Knowledge Distillation', 'SSIM & Perceptual Loss', 'LOLv2 Real', 'Image Restoration', 'Streamlit', 'Computer Vision'],
      metrics: [
        { label: 'LOLv2 PSNR', value: '28.67 dB' },
        { label: 'Compression', value: '6.4×' },
        { label: 'Inference Speedup', value: '3.9×' },
        { label: 'Parameters', value: '154M → 24M' }
      ],
      image: '/Dashboard.png',
      images: [
        {
          url: '/Dashboard.png',
          label: 'Inference Dashboard & Control Panel',
          tag: 'Dashboard',
          path: 'bionafnet.ai/dashboard'
        },
        {
          url: '/Live preview page .png',
          label: 'Live Real-Time Enhancement Preview',
          tag: 'Live Preview',
          path: 'bionafnet.ai/live-preview'
        },
        {
          url: '/Qualitative Results.png',
          label: 'Qualitative Benchmark Comparisons',
          tag: 'Benchmarks',
          path: 'bionafnet.ai/benchmarks'
        },
        {
          url: '/Input Image vs Output Image.png',
          label: 'Input vs Output Enhanced Comparison',
          tag: 'Input vs Output',
          path: 'bionafnet.ai/comparison'
        },
        {
          url: '/Input , Enhnced and real.png',
          label: 'Input, Enhanced & Ground Truth',
          tag: 'Ground Truth',
          path: 'bionafnet.ai/ground-truth'
        },
        {
          url: '/Augmentation  Page.png',
          label: 'Data Augmentation Pipeline',
          tag: 'Augmentation',
          path: 'bionafnet.ai/augmentation'
        },
        {
          url: '/Croping page.png',
          label: 'Crop & Boundary Processing',
          tag: 'Cropping',
          path: 'bionafnet.ai/cropping'
        },
        {
          url: '/Resize Page.png',
          label: 'Multi-scale Resizing Engine',
          tag: 'Resizing',
          path: 'bionafnet.ai/resizing'
        }
      ],
      category: 'Deep Learning & Image Restoration',
      order: 2,
      featured: true
    },
    {
      id: 'thalcare',
      title: 'ThalCare - Alpha Thalassemia Classification',
      role: 'Student ML Researcher',
      duration: '01/12/2025 – 02/02/2026',
      image: '/images/thalcare.jpg',
      category: 'Machine Learning & Diagnostics',
      contributions: [
        {
          title: 'Clinical Feature Engineering',
          text: 'Engineered 15 diagnostic features combining 9 CBC/HPLC parameters with 6 clinical indices (Mentzer, Shine & Lal, Green & King), elevating Silent Carrier diagnostic F1 to ',
          metric: '0.92–0.955.'
        },
        {
          title: 'Robust Multi-Class ML Benchmarking',
          text: 'Evaluated 6 ML architectures (hybrid CNN-Transformer, 1D-CNN, SVM, RF, LR) for 5-class differential diagnosis, achieving ',
          metric: '90.60% balanced accuracy',
          textMid: ' and ',
          metric2: '0.906 weighted F1',
          textEnd: ' under injected clinical noise and 10% feature dropout.'
        }
      ],
      metrics: [
        { label: 'Balanced Accuracy', value: '90.60%' },
        { label: 'Weighted F1', value: '0.906' },
        { label: 'Diagnostic Features', value: '15 Combined' },
        { label: 'Architectures', value: '6 Evaluated' }
      ],
      techTags: ['PyTorch', 'Feature Engineering', '1D-CNN', 'Hybrid CNN-Transformer', 'SVM & RF', 'Clinical Analytics'],
      order: 3
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
      id: 'ailytica-aiml',
      role: 'AI/ML Engineer (Full-Time, Jun 2026–Present) | Jr. AI/ML Engineer (Part-Time, Sep 2025–May 2026)',
      employmentType: 'Full-Time (Current)',
      company: 'Ailytica',
      duration: '01/09/2025 – Present',
      location: 'Lahore, Pakistan',
      contributions: [
        {
          title: 'Medical Vision & Feature Segmentation',
          text: 'Designed and deployed hybrid CNN-Transformer models (Swin-UNet, MedSAM adaptations) for automated 2D/3D feature extraction and multi-class image segmentation, achieving sub-second GPU latency and high Dice similarity scores across target datasets.'
        },
        {
          title: 'MLOps, Quantization & Inference Infrastructure',
          text: 'Engineered end-to-end MLOps pipelines utilizing vLLM and TensorRT-LLM to serve quantized models (AWQ/QAT), reducing VRAM consumption by ',
          metric: '45%',
          textMid: ' while doubling inference throughput across Docker-containerized microservices.'
        },
        {
          title: 'Edge Vision & Real-Time Tracking',
          text: 'Built real-time visual tracking and spatial feature-extraction microservices using OpenCV, TensorRT, and PyTorch, optimizing processing speed to ',
          metric: '30+ FPS',
          textMid: ' for deployment on resource-constrained embedded nodes.'
        },
        {
          title: 'GraphRAG & Knowledge Retrieval',
          text: 'Developed enterprise GraphRAG architectures integrating Graph Neural Networks (GNNs) with vector databases (Qdrant), improving retrieval contextual accuracy by ',
          metric: '35%',
          textMid: ' on complex structured datasets.'
        },
        {
          title: 'Dataset Engineering & Model Benchmarking',
          text: 'Built automated data preprocessing, synthetic augmentation, and benchmarking scripts in PyTorch for deep learning backbones (UNet, ResNet, EfficientNet), establishing baseline metrics for downstream production tasks.'
        }
      ],
      techStack: [
        'PyTorch',
        'Swin-UNet',
        'MedSAM',
        'vLLM',
        'TensorRT-LLM',
        'OpenCV',
        'Qdrant',
        'GraphRAG',
        'Docker',
        'FastAPI'
      ]
    }
  ]
};

export default portfolioData;
