const { VITE_EMAIL = '', VITE_GITHUB = '', VITE_LINKEDIN = '', VITE_RESUME_URL = '' } = import.meta.env;

export const portfolioData = {
  personalInfo: {
    name: "Kumari Vaishnavi",
    role: "AI & Web Developer",
    email: VITE_EMAIL,
    github: VITE_GITHUB,
    linkedin: VITE_LINKEDIN,
    resumeUrl: VITE_RESUME_URL,
    aboutText: "I am a pre-final year B.Tech Computer Science graduate with a passion for building delightful, scalable software — from AI-powered tools to full-stack web platforms...",
    aboutText2: "I am passionate about leveraging technology to solve real-world problems and create impactful solutions. With a strong foundation in both AI and web development, I enjoy working on projects that push the boundaries of what's possible and deliver value to users.",
    // stats: { projects: "10+", satisfaction: "95%", experience: "10+" }
  },
  
  currentlyExploring: ["Agentic AI", "Multi-Agent Systems", "System Design", "Cloud services"],

  skills: {
    "Programming Languages": ["JavaScript", "Python", "Java", ],
    "Web Development": ["React", "Node.js", "HTML5", "CSS3", "MongoDB", "Nodejs", "Tailwind CSS", "RestfulAPI", ],
    "Databases & Cloud": ["MongoDB", "SQL", "AWS", "Docker"],
    "Tools & Platforms": ["Git", "GitHub"],
    "AI & Machine Learning": ["TensorFlow", "PyTorch", "Scikit-learn", "HuggingFace", "LangChain", "RAG Systems", "Agentic AI", "Multi-Agent Systems"]
  },

  experiences: [

    {
      company: "Nathcorp Inc, Ranchi",
      role: "Generative AI Intern",
      duration: "June 2026 - July 2026",
      description: "Built a Rag based Medical Chatbot using Langchain",
      technologies: ["React", "RAG", "Vector DB", "FastAPI", "HuggingFace", "LangChain", "Pinecone"],
      achievements: " Implemented a RAG system using LangChain, enabling the chatbot to retrieve relevant medical information from a vector database and generate accurate responses, enhancing user experience and providing valuable insights.",
      logo: "🏢"
    },
    {
      company: "Codec Technologies  pvt ltd",
      role: "Machine Learning Intern",
      duration: "May 2025 - July 2025",
      description: "Built a Breast Cancer Classification system using Logistic Regression, achieving ~95–98% accuracy.",
      technologies: ["Streamlit", "Logistic Regression", "Python", "Scikit-learn"],
      achievements: " model training, evaluation, and deployment, ensuring efficient and scalable inference.",
      logo: "🏢"
    }
    
  ],

  projects: [
    {
      title: "Built a Custom Vector Database & RAG System from Scratch",
      category: "Generative AI",
      description: " a project that helped me understand what happens behind the scenes of modern AI systems instead of just consuming APIs.",
      technologies: ["Brute Force Search", "KD-Trees", "HNSW (Hierarchical Navigable Small World)"],
      github: "https://github.com/Vaishnavi943/my-own-GPT-VectorDB-",
      // live: "#",
      features: "Vector Database, Retrieval-Augmented Generation (RAG)"
    },
    {
      title: "MultiAgent AI Research System",
      category: "Generative AI",
      description: " This project combines the power of Agentic AI, Multi-Agent Architecture, RAG, and Large Language Models (LLMs) to create an intelligent resource assistant capable of retrieving, processing, and generating responses.",
      technologies: ["LLM", "RAG", "Agentic AI", "Multi-Agent Systems"],
      github: "https://github.com/Vaishnavi943/Multi-Agent-AI-Research-System",
       live: "https://multi-agent-ai-research-system-eyfkxwjykryyusftpsqkej.streamlit.app/",
      features: "Real-time news retrieval , PDF document upload functionalit, Context-aware response generation powered by LLMs"
    },
    {
      title: "WanderLust- Travel and Accommodation Platform",
      category: "Full Stack Development",
      description: " Built WanderHub, a full-stack travel listing web application enabling users to create, manage, and review listings, with secure authentication and session handling.",
      technologies: ["Node.js", "Expressjs", "MongoDB", "Passport.js",  "Tailwind CSS"],
      github: "https://github.com/Vaishnavi943/wanderHub_Project",
      //  live: "https://multi-agent-ai-research-system-eyfkxwjykryyusftpsqkej.streamlit.app/",
      features: "Developed RESTful architecture with robust error handling , Implemented secure user authentication and session management using Passport.js, Designed a responsive UI with Tailwind CSS, ensuring seamless user experience across devices."
    },
    {
      title: "Plant Disease Detection System",
      category: "Machine Learning",
      description: "Built a Plant Disease Prediction system using Convolutional Neural Networks (CNN), trained on a dataset of 53,000+ plant images, achieving 84% accuracy in classifying healthy and diseased leaves",
      technologies: ["Python", "TensorFlow", "CNN", "Image processing", "Numpy", "Pandas"],
      github: "https://github.com/Vaishnavi943/ML_Project/blob/main/PlantDieseasePrediction_CNN_Image_Classifier.ipynb",
      //  live: "#",
      features: "Image preprocessing, CNN architecture design, model training and evaluation, and deployment using Streamlit for real-time inference."
    }
  ],

  certifications: [
     { name: "Yuva AI", organization: "National Institute of Electronics and Information Technology (Govt. of India)", date: "2026", link: "https://api-fe.skillindiadigital.gov.in/api/registry-course/getCertificatePresignedUrl/2026061375229125-4dc1218c-e495-452c-b555-aa67ae23cdc3" },

    { name: "Building LLM Applications With Prompt Engineering", organization: "Nvidia", date: "2025", link: "https://learn.nvidia.com/certificates?id=YAmc4OFzSfGrRuzWddLw3g" },

    { name: "Building Scalable AI Applications", organization: "Microsoft Azure", date: "2025", link: "https://www.linkedin.com/feed/update/urn:li:activity:7357046826077745152/" }
  ],

  achievements: [
    { title: "1st Place Hackathon", organization: "TechFest 2025", details: "Built an AI-driven energy saving app." }
  ]
};