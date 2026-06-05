import React from 'react';
import { EnvironmentOutlined } from '@ant-design/icons';
import { Navbar } from '../Components/Navbar';
import '../Styles/Landing.css';
import '../Styles/Projects.css';

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
      'Integrated RAG (Retrieval-Augmented Generation) to ground LLM recommendations in relevant historical context, improving signal quality for unseen news.',
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

export const AboutPage = () => {
  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg)' }}>
      <Navbar />
      <div className="page-container">

        {/* ── HEADER ── */}
        <div className="page-hero">
          <p className="page-hero-label">About Me</p>
          <h1 className="page-hero-title">Yash Sinha</h1>
          <p className="page-hero-sub">ML Research Scientist · Quantitative Analyst · Data Scientist</p>
        </div>

        {/* ── SUMMARY ── */}
        <section className="section">
          <h2 className="section-title">Professional Summary</h2>
          <div className="card">
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.85, fontSize: '1rem', marginBottom: '1rem' }}>
              I am an AI/ML Research Scientist and Quantitative Analyst with 6+ years of applied research experience
              building and deploying production-grade machine learning systems. My work sits at the intersection of
              machine learning research, quantitative finance, and large-scale data engineering — spanning LLM-driven
              autonomous agents, reinforcement learning for trading, statistical modeling, and applied ML in hardware
              security and biometrics.
            </p>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.85, fontSize: '1rem', marginBottom: '1rem' }}>
              On the quantitative side, I have built end-to-end trading research systems that combine LLM-powered
              news ingestion with RL-optimized signal generation, financial time-series forecasting, and multi-source
              investment analytics platforms. I am a CFA Level I Candidate (Nov 2026), reflecting my commitment to
              bridging rigorous quantitative research with financial domain expertise.
            </p>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.85, fontSize: '1rem' }}>
              I hold an M.S. in Computer Engineering and dual B.S. degrees in Computer Science (AI/ML specialization)
              and Statistical Science from Southern Methodist University. I am the inventor of patent-pending AI/ML
              methodologies, a published researcher (SRC TechCon 2024 &amp; 2025, MODSIM 2022), and an AWS Certified
              Solutions Architect proficient in deploying production ML workloads at scale.
            </p>
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
            <div className="edu-location"><EnvironmentOutlined /> Houston / Dallas, TX</div>
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

      </div>
      <footer className="footer">
        Yash Sinha © 2025 · Houston / Dallas, TX · ML Research Scientist &amp; Quantitative Analyst
      </footer>
    </div>
  );
};
