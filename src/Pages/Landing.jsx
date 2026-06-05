import React from 'react';
import { Link } from 'react-router-dom';
import {
  EnvironmentOutlined,
  MailOutlined,
  PhoneOutlined,
  GithubOutlined,
  LinkedinOutlined,
  ArrowRightOutlined,
  FileTextOutlined,
} from '@ant-design/icons';
import { Navbar } from '../Components/Navbar';
import ProfilePic from '../Resources/ProfilePic.jpg';
import '../Styles/Landing.css';

const skills = {
  Languages: { color: 'blue', items: ['Python', 'SQL', 'R', 'C/C++', 'JavaScript', 'Java', 'Bash', 'MATLAB', 'Perl'] },
  'ML / AI Frameworks': { color: 'purple', items: ['TensorFlow', 'PyTorch', 'Keras', 'Scikit-learn', 'LangChain', 'LangGraph', 'LangSmith', 'Ollama', 'LlamaIndex', 'OpenAI API', 'Anthropic API'] },
  'Cloud & MLOps': { color: 'orange', items: ['AWS (EC2, S3, Lambda, SageMaker, Glue, RDS, Athena)', 'Databricks', 'Apache Spark', 'MLflow', 'Terraform', 'Docker', 'Apache Airflow', 'CI/CD', 'Git / GitHub', 'Linux'] },
  'Domains': { color: 'green', items: ['LLMs', 'AI Agents', 'RAG Systems', 'NLP', 'Quantitative Finance', 'Time Series Forecasting', 'Statistical Modeling', 'ETL / ELT Automation', 'Computer Vision', 'Biometrics'] },
};

const experience = [
  {
    role: 'Chief AI/ML Engineer & Chief Data Scientist',
    company: 'PropertyDealz LLC (Co-Founded)',
    date: 'June 2025 – Present',
    project: 'AI-Powered Real Estate Investment Analytics Platform',
    bullets: [
      'Designed and deployed advanced statistical models and ensemble ML algorithms for property price forecasting and anomaly detection, integrating tax history, price-per-sq-ft trends, and foreclosure signals.',
      'Built multi-agent AI workflows using LangGraph, LangChain, OpenAI APIs, and RAG architectures to automate property intelligence gathering and generate structured investment reports.',
      'Engineered geospatial scoring systems ingesting neighborhood signals from social media and public data APIs, improving investment signal precision.',
      'Developed scalable ETL/ELT pipelines using PostgreSQL, AWS Lambda, S3, and Glue with event-driven architectures.',
      'Implemented Infrastructure-as-Code with Terraform; deployed production ML workloads across AWS SageMaker, EC2, Lambda, API Gateway, RDS, and S3.',
    ],
  },
  {
    role: 'ML Research Engineer (Independent)',
    company: 'Quantitative Trading Research',
    date: '2025',
    project: 'Reinforcement Learning for Stock Trend Prediction via LLM-Augmented News Ingestion',
    bullets: [
      'Engineered a full NLP pipeline using LLMs to summarize financial news, extract stock tickers, classify market sentiment, and surface buy/sell/hold signals.',
      'Applied reinforcement learning (return-driven reward shaping) to optimize trade action policies against historical market data.',
      'Integrated RAG (Retrieval-Augmented Generation) to ground LLM recommendations in relevant historical context.',
      'Orchestrated end-to-end daily workflows (ingestion → LLM inference → RL update → storage) using Apache Airflow with CI/CD integration.',
    ],
  },
  {
    role: 'Lead Research Assistant',
    company: 'SMU AT&T Center for Virtualization (SRC/Intel Sponsored)',
    date: 'Aug 2023 – Jul 2025',
    project: 'ML-Aided Power Obfuscation for Cryptographic Hardware Security',
    bullets: [
      'Led a five-person cross-disciplinary team developing latch-based circuit modifications to defend against power side-channel attacks.',
      'Developed novel mux-latch variants of DES56 encryption; used Cadence Joules to simulate and compare power traces from VCD files.',
      'Applied ML-based TVLA (Test Vector Leakage Assessment) to statistically quantify circuit vulnerability to power analysis attacks.',
      'Presented research at SRC TechCon 2024 and 2025; work published in two conference proceedings.',
    ],
  },
  {
    role: 'Research Assistant',
    company: 'SMU Darwin Deason Institute for Cyber Security (Raytheon Sponsored)',
    date: 'Jun 2022 – Jun 2023',
    project: 'Biometric Authentication via Applied Machine Learning',
    bullets: [
      'Built an Android-based two-factor biometric authentication system leveraging on-device ML inference and cloud-backed model retraining.',
      'Designed end-to-end ML pipelines including feature engineering, model training, hyperparameter tuning, and evaluation using TensorFlow/Keras.',
      'Implemented on-device model retraining (TFLite) to enroll new users with minimal overhead, enabling continuous learning at the edge.',
      'Built cloud-native analytics infrastructure using AWS Amplify, Lambda, and S3 for telemetry collection, model versioning, and inference monitoring.',
    ],
  },
];

const certifications = [
  {
    name: 'AWS Certified Solutions Architect',
    issuer: 'Amazon Web Services',
    logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg',
    logoBg: '#FF9900',
    logoFg: '#ffffff',
    logoText: 'AWS',
  },
  {
    name: 'CompTIA Linux+',
    issuer: 'CompTIA',
    logoUrl: null,
    logoBg: '#C8202E',
    logoFg: '#ffffff',
    logoText: 'Linux+',
  },
  {
    name: 'CFA Level I Candidate',
    issuer: 'CFA Institute (Nov 2026)',
    logoUrl: null,
    logoBg: '#003087',
    logoFg: '#ffffff',
    logoText: 'CFA',
  },
];

export const LandingPage = () => {
  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg)' }}>
      <Navbar />

      <div className="page-container">

        {/* ── HERO ── */}
        <section className="hero">
          <div className="hero-text">
            <p className="hero-greeting">👋 Hello, I'm</p>
            <h1 className="hero-name">Yash Sinha</h1>
            <p className="hero-title">AI/ML Engineer &amp; Data Scientist</p>
            <p className="hero-location">
              <EnvironmentOutlined /> Dallas, TX
            </p>
            <p className="hero-summary">
              AI/ML Engineer and Data Scientist with 6+ years of applied research experience building and
              deploying production-grade machine learning systems. Proven expertise in end-to-end ML pipelines —
              from data ingestion and feature engineering to model training, evaluation, and cloud deployment.
              Hands-on track record across LLM-driven agents, computer vision/biometrics, quantitative finance,
              time-series forecasting, and NLP. Inventor of patent-pending AI/ML methodologies.
            </p>
            <div className="hero-actions">
              <Link to="/projects" className="btn-primary">
                View Projects <ArrowRightOutlined />
              </Link>
              <Link to="/publications" className="btn-outline">
                <FileTextOutlined /> Publications
              </Link>
            </div>
          </div>
          <div className="hero-photo-wrapper">
            <img src={ProfilePic} alt="Yash Sinha" className="hero-photo" />
          </div>
        </section>

        {/* ── SKILLS ── */}
        <section className="section">
          <h2 className="section-title">Skills &amp; Expertise</h2>
          <div className="card">
            <div className="skills-grid">
              {Object.entries(skills).map(([group, { color, items }]) => (
                <div key={group}>
                  <div className="skill-group-label">{group}</div>
                  <div className="skill-group">
                    {items.map(s => (
                      <span key={s} className={`skill-tag ${color}`}>{s}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CERTIFICATIONS ── */}
        <section className="section">
          <h2 className="section-title">Certifications</h2>
          <div className="certs-grid">
            {certifications.map(cert => (
              <div key={cert.name} className="cert-card">
                {cert.logoUrl ? (
                  <img
                    src={cert.logoUrl}
                    alt={cert.issuer}
                    className="cert-logo"
                    style={{ background: cert.logoBg, padding: '8px' }}
                  />
                ) : (
                  <div
                    className="cert-logo-badge"
                    style={{ background: cert.logoBg, color: cert.logoFg, fontSize: cert.logoText.length > 4 ? '0.9rem' : '1.5rem' }}
                  >
                    {cert.logoText}
                  </div>
                )}
                <div className="cert-info">
                  <div className="cert-name">{cert.name}</div>
                  <div className="cert-issuer">{cert.issuer}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── EXPERIENCE ── */}
        <section className="section">
          <h2 className="section-title">Experience</h2>
          <div className="experience-list">
            {experience.map(exp => (
              <div key={exp.role + exp.company} className="exp-card">
                <div className="exp-header">
                  <div>
                    <div className="exp-role">{exp.role}</div>
                    <div className="exp-company">{exp.company}</div>
                  </div>
                  <span className="exp-date">{exp.date}</span>
                </div>
                {exp.project && <div className="exp-project">{exp.project}</div>}
                <ul className="exp-bullets">
                  {exp.bullets.map((b, i) => <li key={i}>{b}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* ── EDUCATION ── */}
        <section className="section">
          <h2 className="section-title">Education</h2>
          <div className="edu-card">
            <div className="edu-school">Southern Methodist University</div>
            <div className="edu-location"><EnvironmentOutlined /> Dallas, TX</div>
            <div className="edu-degrees">
              <div className="edu-degree">
                <div>
                  <div className="edu-degree-name">M.S. Computer Engineering</div>
                </div>
                <span className="edu-degree-year">Spring 2025</span>
              </div>
              <div className="edu-degree">
                <div>
                  <div className="edu-degree-name">B.S. Computer Science</div>
                  <div className="edu-degree-detail">Specialization: Artificial Intelligence &amp; Machine Learning</div>
                </div>
                <span className="edu-degree-year">Spring 2023</span>
              </div>
              <div className="edu-degree">
                <div>
                  <div className="edu-degree-name">B.S. Statistical Science</div>
                </div>
                <span className="edu-degree-year">Spring 2023</span>
              </div>
            </div>
          </div>
        </section>

        {/* ── CONTACT ── */}
        <section className="section">
          <h2 className="section-title">Get In Touch</h2>
          <div className="contact-grid">
            <a href="mailto:ysinha@smu.edu" className="contact-item">
              <MailOutlined className="contact-icon" />
              <div>
                <div className="contact-label">Email</div>
                <div className="contact-value">ysinha@smu.edu</div>
              </div>
            </a>
            <a href="tel:8287299039" className="contact-item">
              <PhoneOutlined className="contact-icon" />
              <div>
                <div className="contact-label">Phone</div>
                <div className="contact-value">828-729-9039</div>
              </div>
            </a>
            <a href="https://www.linkedin.com/in/ysinha24/" target="_blank" rel="noopener noreferrer" className="contact-item">
              <LinkedinOutlined className="contact-icon" />
              <div>
                <div className="contact-label">LinkedIn</div>
                <div className="contact-value">ysinha24</div>
              </div>
            </a>
            <a href="https://github.com/ysinha24" target="_blank" rel="noopener noreferrer" className="contact-item">
              <GithubOutlined className="contact-icon" />
              <div>
                <div className="contact-label">GitHub</div>
                <div className="contact-value">ysinha24</div>
              </div>
            </a>
          </div>
        </section>

      </div>

      <footer className="footer">
        Yash Sinha © 2025 · Dallas, TX · AI/ML Engineer &amp; Data Scientist
      </footer>
    </div>
  );
};
