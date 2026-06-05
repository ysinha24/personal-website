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
  UserOutlined,
} from '@ant-design/icons';
import { Navbar } from '../Components/Navbar';
import ProfilePic from '../Resources/ProfilePic.jpg';
import SMU from '../Resources/SMU.png';
import CAE from '../Resources/CAE.jpg';
import Raytheon from '../Resources/Raytheon.png';
import '../Styles/Landing.css';

const skills = {
  Languages: { color: 'blue', items: ['Python', 'SQL', 'R', 'C/C++', 'JavaScript', 'Java', 'Bash', 'MATLAB', 'Perl'] },
  'ML / AI Frameworks': { color: 'purple', items: ['TensorFlow', 'PyTorch', 'Keras', 'Scikit-learn', 'LangChain', 'LangGraph', 'LangSmith', 'Ollama', 'LlamaIndex', 'OpenAI API', 'Anthropic API'] },
  'Cloud & MLOps': { color: 'orange', items: ['AWS (EC2, S3, Lambda, SageMaker, Glue, RDS, Athena)', 'Databricks', 'Apache Spark', 'MLflow', 'Terraform', 'Docker', 'Apache Airflow', 'CI/CD', 'Git / GitHub', 'Linux'] },
  'Domains': { color: 'green', items: ['LLMs', 'AI Agents', 'RAG Systems', 'NLP', 'Quantitative Finance', 'Time Series Forecasting', 'Statistical Modeling', 'ETL / ELT Automation', 'Computer Vision', 'Biometrics'] },
};

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

const affiliations = [
  {
    name: 'Southern Methodist University',
    role: 'Research & Graduate Studies',
    img: SMU,
    bg: '#ffffff',
  },
  {
    name: 'Raytheon Technologies',
    role: 'Sponsored Research',
    img: Raytheon,
    bg: '#ffffff',
  },
  {
    name: 'CAE',
    role: 'Affiliated Research',
    img: CAE,
    bg: '#ffffff',
  },
  {
    name: 'Intel / SRC',
    role: 'SRC/Intel Sponsored Research',
    img: null,
    bg: '#0071c5',
    logoText: 'intel',
    logoFg: '#ffffff',
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
            <div className="hero-title-group">
              <span className="hero-title-chip primary">ML Research Scientist</span>
              <span className="hero-title-chip secondary">Quantitative Analyst</span>
              <span className="hero-title-chip tertiary">Data Scientist</span>
            </div>
            <p className="hero-location">
              <EnvironmentOutlined /> Dallas, TX
            </p>
            <p className="hero-summary">
              ML Research Scientist and Quantitative Analyst with 6+ years of applied experience at the
              intersection of machine learning, quantitative finance, and large-scale data engineering.
              Inventor of patent-pending AI/ML methodologies. CFA Level I Candidate with a track record
              across LLM-driven agents, RL-based trading systems, statistical modeling, and production
              ML deployment on AWS.
            </p>
            <div className="hero-actions">
              <Link to="/about" className="btn-primary">
                <UserOutlined /> About Me
              </Link>
              <Link to="/projects" className="btn-outline">
                View Projects <ArrowRightOutlined />
              </Link>
              <Link to="/publications" className="btn-outline">
                <FileTextOutlined /> Research
              </Link>
            </div>
          </div>
          <div className="hero-photo-wrapper">
            <img src={ProfilePic} alt="Yash Sinha" className="hero-photo" />
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

        {/* ── AFFILIATIONS ── */}
        <section className="section">
          <h2 className="section-title">Affiliated With</h2>
          <div className="affiliations-row">
            {affiliations.map(aff => (
              <div key={aff.name} className="affiliation-card">
                <div className="affiliation-logo-wrap" style={{ background: aff.bg }}>
                  {aff.img ? (
                    <img src={aff.img} alt={aff.name} className="affiliation-logo" />
                  ) : (
                    <span className="affiliation-logo-text" style={{ color: aff.logoFg }}>
                      {aff.logoText}
                    </span>
                  )}
                </div>
                <div className="affiliation-name">{aff.name}</div>
                <div className="affiliation-role">{aff.role}</div>
              </div>
            ))}
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
        Yash Sinha © 2025 · Dallas, TX · ML Research Scientist &amp; Quantitative Analyst
      </footer>
    </div>
  );
};
