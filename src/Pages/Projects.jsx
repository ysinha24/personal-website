import React from 'react';
import { Navbar } from '../Components/Navbar';
import IOT from '../Resources/DoorRecognitionIOT.jpg';
import arch from '../Resources/ESP32-Recognition network.jpg';
import robot1 from '../Resources/robot_img.JPG';
import robot2 from '../Resources/robot_gif.gif';
import '../Styles/Projects.css';

const projects = [
  {
    title: 'AI-Powered Real Estate Investment Analytics Platform',
    org: 'PropertyDealz LLC (Co-Founded) — June 2025 – Present',
    badge: 'green',
    badgeLabel: 'Production',
    desc: 'Co-founded and led ML engineering for an AI-driven real estate platform that identifies undervalued properties and pricing anomalies using advanced statistical models, LLM-driven agents, and geospatial analytics.',
    bullets: [
      'Designed ensemble ML algorithms for property price forecasting and anomaly detection, integrating tax history, price-per-sq-ft trends, and foreclosure signals.',
      'Built multi-agent AI workflows using LangGraph, LangChain, OpenAI APIs, and RAG architectures to automate property intelligence gathering and generate structured investment reports.',
      'Engineered geospatial scoring systems ingesting neighborhood signals from social media and public data APIs.',
      'Developed scalable ETL/ELT pipelines using PostgreSQL, AWS Lambda, S3, and Glue with event-driven architectures.',
      'Deployed production ML workloads via Terraform across AWS SageMaker, EC2, Lambda, API Gateway, RDS, and S3.',
    ],
    tags: ['LangGraph', 'LangChain', 'OpenAI API', 'RAG', 'AWS SageMaker', 'Terraform', 'PostgreSQL', 'Python'],
    images: [],
  },
  {
    title: 'Reinforcement Learning for Stock Trend Prediction via LLM-Augmented News Ingestion',
    org: 'Independent ML Research — 2025',
    badge: 'purple',
    badgeLabel: 'Research',
    desc: 'Designed and implemented a research prototype for automated trading signal generation, combining LLM-based news analysis with RL-optimized decision making.',
    bullets: [
      'Engineered a full NLP pipeline using LLMs to summarize financial news, extract named stock tickers, classify market sentiment, and surface buy/sell/hold signals.',
      'Applied reinforcement learning (return-driven reward shaping) to optimize trade action policies against historical market data.',
      'Integrated RAG (Retrieval-Augmented Generation) to ground LLM recommendations in relevant historical context, improving signal quality for unseen news.',
      'Orchestrated end-to-end daily workflows (ingestion → LLM inference → RL update → storage) using Apache Airflow with CI/CD integration.',
    ],
    tags: ['LLMs', 'Reinforcement Learning', 'RAG', 'NLP', 'Apache Airflow', 'Python', 'Quantitative Finance'],
    images: [],
  },
  {
    title: 'ML-Aided Power Obfuscation for Cryptographic Hardware Security',
    org: 'SMU AT&T Center for Virtualization — SRC/Intel Sponsored',
    badge: 'orange',
    badgeLabel: 'Published',
    desc: 'Led a five-person cross-disciplinary team developing latch-based circuit modifications to defend against power side-channel attacks, applying ML techniques to evaluate and improve circuit security.',
    bullets: [
      'Developed novel mux-latch variants of DES56 encryption; used Cadence Joules to simulate and compare power traces from VCD files.',
      'Applied ML-based TVLA (Test Vector Leakage Assessment) to statistically quantify circuit vulnerability to power analysis attacks.',
      'Evaluated ML models trained on power trace data to benchmark resistance across DES, AES, and ASCON implementations.',
      'Presented research at SRC TechCon 2024 and 2025; work published in two conference proceedings.',
    ],
    tags: ['Machine Learning', 'Hardware Security', 'Side-Channel Analysis', 'TVLA', 'Cadence', 'Python'],
    images: [],
  },
  {
    title: 'Biometric Authentication via Applied Machine Learning',
    org: 'SMU Darwin Deason Institute for Cyber Security — Raytheon Sponsored',
    badge: 'blue',
    badgeLabel: 'Research',
    desc: 'Built an Android-based two-factor biometric authentication system leveraging on-device ML inference and cloud-backed model retraining, coordinating daily standups with Raytheon sponsors.',
    bullets: [
      'Designed end-to-end ML pipelines including feature engineering, preprocessing, model training, hyperparameter tuning, and evaluation using TensorFlow/Keras.',
      'Implemented on-device model retraining (TFLite) to enroll new users with minimal overhead, enabling continuous learning at the edge.',
      'Built cloud-native analytics infrastructure using AWS Amplify, Lambda, and S3 for telemetry collection, model versioning, and inference monitoring.',
    ],
    tags: ['TensorFlow', 'TFLite', 'Android', 'AWS Amplify', 'AWS Lambda', 'Biometrics', 'Python'],
    images: [],
  },
  {
    title: 'Facial Recognition for Home Security (IoT)',
    org: 'Personal Project',
    badge: 'blue',
    badgeLabel: 'Project',
    desc: 'Utilized multiple ESP32-CAM microcontrollers as IoT devices to achieve individual detection functionality, with cloud-based facial recognition and real-time SMS notifications for unauthorized access.',
    bullets: [
      'Captured and stored images of detected individuals in a local MySQL database using REST APIs.',
      'Leveraged AWS Lambda and OpenCV with existing ML architectures to identify known faces from captured images.',
      'Implemented real-time SMS notifications for unauthorized access and comprehensive weekly occurrence analysis.',
    ],
    tags: ['ESP32-CAM', 'AWS Lambda', 'OpenCV', 'MySQL', 'IoT', 'Python'],
    images: [IOT, arch],
  },
  {
    title: 'SMU KNW Robot Competition',
    org: 'Southern Methodist University',
    badge: 'green',
    badgeLabel: '1st Place',
    desc: 'Led a team to develop a robot achieving sensor-based navigation and environmental adaptability using the Scrum methodology across five sprints. Placed first in the competition.',
    bullets: [
      'Used C++ to program and flash sensors/microprocessors to create an adaptive system monitoring Environmental Agents.',
      'Applied dynamic programming to optimize performance for real-time usage.',
      'Worked with electrical tools (wiring, soldering, testing) and used CAD software to create complex diagrams.',
    ],
    tags: ['C++', 'Embedded Systems', 'Scrum / Agile', 'CAD', 'Sensors'],
    images: [robot1, robot2],
  },
];

export const Projects = () => {
  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg)' }}>
      <Navbar />
      <div className="page-container">
        <div className="page-hero">
          <p className="page-hero-label">Portfolio</p>
          <h1 className="page-hero-title">Projects</h1>
          <p className="page-hero-sub">
            A selection of ML, AI, and engineering projects spanning production systems,
            academic research, and independent exploration.
          </p>
        </div>

        <div className="project-grid">
          {projects.map(project => (
            <div key={project.title} className="project-card">
              <div className="project-header">
                <div className="project-title">{project.title}</div>
                <span className={`project-badge badge-${project.badge}`}>{project.badgeLabel}</span>
              </div>
              <div className="project-org">{project.org}</div>

              {project.images.length > 0 && (
                <div className="project-images">
                  {project.images.map((img, i) => (
                    <img key={i} src={img} alt={`${project.title} ${i + 1}`} className="project-img" style={{ maxWidth: project.images.length > 1 ? '48%' : '70%' }} />
                  ))}
                </div>
              )}

              <p className="project-desc">{project.desc}</p>
              <ul className="project-bullets">
                {project.bullets.map((b, i) => <li key={i}>{b}</li>)}
              </ul>
              <div className="project-tags">
                {project.tags.map(t => <span key={t} className="tech-tag">{t}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
      <footer className="footer">
        Yash Sinha © 2025 · Houston / Dallas, TX · AI/ML Engineer &amp; Data Scientist
      </footer>
    </div>
  );
};
