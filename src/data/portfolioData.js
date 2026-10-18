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
      pipelineSteps: [
        { step: '01', title: 'Ben Graham Normalization', description: 'Gaussian-weighted local average subtraction for uniform illumination' },
        { step: '02', title: 'Circular Cropping', description: 'Automated fundus boundary detection with black-region removal' },
        { step: '03', title: 'Data Augmentation', description: '3,662 → ~16,000 samples via rotation, flip, color jitter & elastic transforms' },
        { step: '04', title: 'Class Balancing & Soft Voting', description: 'Weighted soft-voting ensembles across Swin-T, EfficientNet-B3, and ViT-B/16' }
      ],
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
      pipelineSteps: [
        { step: '01', title: 'Bio-Inspired Retinal Contrast', description: 'Weber-Fechner logarithmic compression mimicking biological photoreceptor adaptation' },
        { step: '02', title: 'Composite Multi-Objective Loss', description: 'Joint Charbonnier, SSIM, color fidelity, and perceptual loss minimization' },
        { step: '03', title: 'Knowledge Distillation Framework', description: '154M teacher model distilled into 24M student model with +0.29 dB PSNR boost' },
        { step: '04', title: 'Real-Time Edge Acceleration', description: '3.9× speedup, 6.4× compression achieving 30+ FPS low-light image restoration' }
      ],
      order: 2,
      featured: true
    },
    {
      id: 'thalcare',
      title: 'ThalCare - Alpha Thalassemia Classification',
      subtitle: 'Multi-Class ML Diagnostic System for Alpha Thalassemia Carrier Detection',
      role: 'Student ML Researcher',
      duration: '01/12/2025 – 02/02/2026',
      description: 'Developed a robust multi-class machine learning diagnostic system for Alpha Thalassemia carrier classification. Engineered 15 diagnostic features combining 9 CBC/HPLC blood parameters with 6 established clinical indices (Mentzer, Shine & Lal, Green & King), and benchmarked 6 ML architectures including a hybrid CNN-Transformer, 1D-CNN, SVM, Random Forest, and Logistic Regression for 5-class differential diagnosis.',
      features: 'Achieved 90.60% balanced accuracy and 0.906 weighted F1 under injected clinical noise and 10% feature dropout. Elevated Silent Carrier diagnostic F1 to 0.92–0.955 through advanced feature engineering and robust cross-validation strategies.',
      image: '/images/thalcare-doctor-dashboard.jpg',
      images: [
        {
          url: '/images/thalcare-doctor-dashboard.jpg',
          label: 'Doctor Clinical Dashboard & Risk Distribution',
          tag: 'Dashboard',
          path: 'thalcare.ai/doctor-dashboard'
        },
        {
          url: '/images/thalcare-prediction-analysis.jpg',
          label: 'Multi-Class ML Prediction & Clinical Explainability',
          tag: 'Predictions',
          path: 'thalcare.ai/predictions'
        },
        {
          url: '/images/thalcare-test-input.jpg',
          label: '15-Feature CBC/HPLC Diagnostic Entry Engine',
          tag: 'Data Entry',
          path: 'thalcare.ai/enter-test-data'
        },
        {
          url: '/images/thalcare-analytics.jpg',
          label: 'Population Analytics & Longitudinal Trend Visualizer',
          tag: 'Analytics',
          path: 'thalcare.ai/analytics'
        },
        {
          url: '/images/thalcare-lab-portal.jpg',
          label: 'Lab Technician Patient Registration & CBC Upload',
          tag: 'Lab Portal',
          path: 'thalcare.ai/lab-technician'
        },
        {
          url: '/images/thalcare-login.jpg',
          label: 'Authentication & Clinical Portal Access',
          tag: 'Login',
          path: 'thalcare.ai/login'
        }
      ],
      category: 'Machine Learning & Diagnostics',
      githubUrl: 'https://github.com/abdullahse2211/ThalCare',
      videoUrl: 'https://youtu.be/ciiGgdlZ4d4?si=_xKxSkJOZ9t3njEA',
      videoId: 'ciiGgdlZ4d4',
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
        { label: 'Balanced Accuracy', value: '90.60%', numericValue: 90.60, suffix: '%' },
        { label: 'Weighted F1', value: '0.906', numericValue: 0.906, suffix: '' },
        { label: 'Diagnostic Features', value: '15 Combined', numericValue: 15, suffix: '' },
        { label: 'Architectures', value: '6 Evaluated', numericValue: 6, suffix: '' }
      ],
      highlights: [
        'Engineered 15 diagnostic features from CBC/HPLC blood parameters and 6 clinical indices',
        'Benchmarked 6 ML architectures including hybrid CNN-Transformer and 1D-CNN',
        'Achieved 90.60% balanced accuracy on 5-class differential diagnosis under noise',
        'Silent Carrier detection F1 elevated to 0.92–0.955 via robust feature engineering'
      ],
      pipelineSteps: [
        { step: '01', title: '15-Feature CBC/HPLC Engineering', description: 'Combined 9 hematological parameters with 6 clinical discriminant indices (Mentzer, Shine & Lal, Green & King)' },
        { step: '02', title: 'Silent Carrier Triage Optimization', description: 'Elevated Silent Carrier diagnostic F1 score to 0.92–0.955 through mathematical biomarker formulation' },
        { step: '03', title: 'Clinical Noise & Dropout Validation', description: 'Tested robustness under injected clinical noise perturbations and 10% simulated feature dropout' },
        { step: '04', title: '6-Architecture Model Benchmarking', description: 'Evaluated hybrid CNN-Transformer, 1D-CNN, SVM, Random Forest, and Logistic Regression' }
      ],
      techTags: ['PyTorch', 'Feature Engineering', '1D-CNN', 'Hybrid CNN-Transformer', 'SVM & RF', 'Clinical Analytics'],
      order: 3,
      featured: true
    }
  ],
  certifications: [
    {
      title: 'Information Technology Specialist: JavaScript',
      issuer: 'Certiport (A Pearson VUE Business)',
      date: 'Jan 13, 2025',
      credentialId: 'mTp4-DwVM',
      verificationLink: 'https://verify.certiport.com/',
      grade: 'Certified',
      image: '/cert-js.png',
      fileUrl: '/cert-js.png',
      isInternational: true,
      badgeLabel: 'International Certification',
      order: 1
    },
    {
      title: 'Javascript Fullstack MERN Development',
      issuer: 'NAVTTC & KICS UET Lahore',
      date: 'Dec 16, 2024',
      credentialId: 'P-24-895714',
      grade: 'Grade A+',
      image: '/cert-mern.jpg',
      fileUrl: '/cert-mern.jpg',
      order: 2
    },
    {
      title: 'Introduction to Data Science',
      issuer: 'LUMSx / ilmX — Lahore University of Management Sciences (LUMS)',
      date: 'Dec 22, 2024',
      credentialId: 'c17846ddd6c44266b817017e3045c766',
      verificationLink: 'https://ilmx.org',
      grade: 'Verified Certificate',
      image: '/cert-lums-datascience.png',
      fileUrl: '/Introduction  to data science  LUMS.pdf',
      order: 3
    },
    {
      title: 'Machine Learning & Deep Learning Internship Certificate',
      issuer: 'National Center for Physics (NCP), Islamabad — Artificial Intelligence Technology Center (AITeC)',
      date: 'May 27, 2024 – August 27, 2024',
      credentialId: 'NCP-CAAD/HR/Int-1455/AITeC',
      grade: 'Internship Completed',
      image: '/cert-ncp-internship.png',
      fileUrl: '/Abdullah Internship NCP.pdf',
      order: 4
    },
    {
      title: 'International Symposium on AI and Medical Imaging and Pattern Recognition (ISAIMP-2023)',
      issuer: 'Artificial Intelligence Technology Center (AITeC), National Center for Physics (NCP), Islamabad',
      date: 'July 24–25, 2023',
      grade: 'Certified Participant',
      image: '/cert-ncp-symposium.png',
      fileUrl: '/International sympouism on AI medical imagining and pattren recognition confrence NCP.pdf',
      isInternational: true,
      badgeLabel: 'International Symposium',
      order: 5
    },
    {
      title: 'Scientific Writing for Impact Factor Journals',
      issuer: 'University of Engineering and Technology (UET), Lahore',
      date: 'Nov 06, 2023',
      credentialId: 'Serial No. 014-2023 | PEB-P-UETLHR-0034',
      grade: '1.0 CPD Credit Point',
      image: '/cert-scientific-writing.jpg',
      fileUrl: '/Scientific writing for impact factor journels 1 Credit point workshop.jpeg',
      order: 6
    },
    {
      title: 'Tools to Improve Your Professional Writing',
      issuer: 'University of Engineering and Technology (UET), Lahore',
      date: 'Nov 13, 2023',
      credentialId: 'Serial No. 34-2023 | PEB-P-UETLHR-0034',
      grade: '1.0 CPD Credit Point',
      image: '/cert-tools-writing.jpg',
      fileUrl: '/Tools to improve your professional writing 1 Credit point workshop.jpeg',
      order: 7
    },
    {
      title: 'Introduction to Web Development',
      issuer: 'IBM (Coursera)',
      date: 'Nov 18, 2023',
      verificationLink: 'https://coursera.org/verify/E8X42H6HASJL',
      grade: 'Certified',
      image: '/cert-ibm.png',
      fileUrl: '/cert-ibm.png',
      order: 8
    },
    {
      title: 'Prompt Engineering Certification',
      issuer: 'NCAI & KICS UET Lahore',
      date: 'December 2023',
      grade: 'Certified',
      image: '/cert-prompt.jpg',
      fileUrl: '/cert-prompt.jpg',
      order: 9
    },
    {
      title: 'IT Career Symposium Recognition',
      issuer: 'IEEE ComSoc & IEEE Computer Society Lahore Section',
      date: 'Oct 15, 2024',
      grade: 'Certified Participant',
      image: '/cert-ieee.jpg',
      fileUrl: '/cert-ieee.jpg',
      order: 10
    },
    {
      title: '14th National Youth Peace Festival 2024',
      issuer: 'CHANAN Development Association & NED',
      date: 'September 24-25, 2024',
      grade: 'Certified Participant',
      image: '/cert-peace.jpg',
      fileUrl: '/cert-peace.jpg',
      order: 11
    }
  ],
  experiences: [
    {
      id: 'codium-aiml',
      role: 'AI/ML Engineer (Full-Time)',
      employmentType: 'Full-Time (Current)',
      company: 'Codium',
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
        'TensorRT',
        'GraphRAG',
        'Qdrant',
        'GNNs',
        'Docker',
        'FastAPI'
      ]
    },
    {
      id: 'codium-intern',
      role: 'AI/ML Engineer (Intern)',
      employmentType: 'Internship',
      company: 'Codium',
      duration: '01/06/2025 – 30/08/2025',
      location: 'Lahore, Pakistan',
      contributions: [
        {
          title: 'Data Engineering & Preprocessing',
          text: 'Built automated data preprocessing and synthetic augmentation pipelines in PyTorch for deep learning models.'
        },
        {
          title: 'Baseline Architecture & Scripting',
          text: 'Developed initial benchmarking scripts for U-Net, ResNet, and EfficientNet architectures.'
        },
        {
          title: 'Evaluation Metrics & Workflows',
          text: 'Established baseline evaluation metrics for downstream computer vision tasks and assisted with dataset engineering workflows.'
        }
      ],
      techStack: [
        'PyTorch',
        'Computer Vision',
        'Data Augmentation',
        'U-Net',
        'ResNet',
        'EfficientNet',
        'Python'
      ]
    },
    {
      id: 'ncp-intern',
      role: 'Machine Learning & Deep Learning Intern',
      employmentType: 'Research Internship',
      company: 'National Center for Physics (NCP) — AITeC',
      duration: '27/05/2024 – 27/08/2024',
      location: 'Islamabad, Pakistan',
      contributions: [
        {
          title: 'Medical Imaging & Pattern Recognition',
          text: 'Contributed to AI-driven medical imaging and pattern recognition workflows within the Artificial Intelligence Technology Center (AITeC).'
        },
        {
          title: 'Deep Learning Model Prototyping',
          text: 'Implemented and benchmarked machine learning and deep learning pipelines in PyTorch for automated feature extraction and classification.'
        },
        {
          title: 'Research Evaluation & Data Pipelines',
          text: 'Collaborated with research scientists at CAAD / AITeC to establish experimental baselines, data normalization, and statistical validation metrics.'
        }
      ],
      techStack: [
        'PyTorch',
        'TensorFlow',
        'Deep Learning',
        'Pattern Recognition',
        'Medical Imaging',
        'Python',
        'NumPy',
        'OpenCV'
      ]
    }
  ]
};

export default portfolioData;
