import React from 'react';
import { Navbar } from '../Components/Navbar';
import '../Styles/Projects.css';

const publications = [
  {
    type: 'Patent Pending',
    badge: 'green',
    title: 'AI-Powered Real Estate Investment Analytics and Property Valuation Algorithms',
    venue: 'Patent Pending — PropertyDealz LLC',
    year: '2025',
    abstract: 'Developed proprietary ML-driven methodologies and automated decision pipelines for identifying undervalued real estate assets using multi-source market, geospatial, and behavioral data signals. Encompasses ensemble ML models for price anomaly detection, LLM-powered investment report generation via multi-agent RAG architectures, and geospatial scoring systems for neighborhood signal analysis.',
    tags: ['ML', 'LLMs', 'RAG', 'Geospatial Analysis', 'Real Estate'],
  },
  {
    type: 'Conference Paper',
    badge: 'blue',
    title: 'ML-Based Analysis of Power Trace Resistant Circuit Optimizations',
    venue: 'SRC TechCon 2025',
    year: '2025',
    abstract: 'Evaluated ML-driven security benchmarks across DES, AES, and ASCON cryptographic implementations. Applied ML-based Test Vector Leakage Assessment (TVLA) to statistically quantify circuit vulnerability to power analysis attacks, informing iterative design improvements for hardware security.',
    tags: ['ML', 'Hardware Security', 'TVLA', 'Cryptography', 'Side-Channel Analysis'],
  },
  {
    type: 'Conference Paper',
    badge: 'blue',
    title: 'Circuit Optimizations for Power Trace Modification and Attack Resistance',
    venue: 'SRC TechCon 2024',
    year: '2024',
    abstract: 'Developed latch-based designs to harden DES and ASCON cryptographic implementations against power side-channel attacks. Introduced novel mux-latch variants evaluated using Cadence Joules simulation for power trace comparison. Led a five-person cross-disciplinary team in this SRC/Intel-sponsored research at SMU.',
    tags: ['Hardware Security', 'Side-Channel Attacks', 'Cadence', 'DES', 'ASCON'],
  },
  {
    type: 'Conference Paper',
    badge: 'purple',
    title: 'Real-Time Situation Awareness Assessment for Pilots via Machine Learning',
    venue: 'MODSIM World 2022',
    year: '2022',
    abstract: 'Classified pilot cognitive and psychological state during flight maneuvers using ML models trained on biometric sensor data. Employed transfer-learned neural networks combining wrist-worn and eye-tracker data streams to regress to Situation Awareness (SA) scores. Achieved 77% accuracy for Level 1 SA and 70% for Level 2 SA across 40 subjects, demonstrating viability for real-time adaptive training systems.',
    tags: ['Machine Learning', 'Biometrics', 'Situation Awareness', 'Neural Networks', 'Simulation'],
  },
  {
    type: 'Research',
    badge: 'orange',
    title: 'Quantum-Assisted Circuit Partitioning for Optimized VLSI Testing',
    venue: 'Ph.D. Research — SMU (2025)',
    year: '2025',
    abstract: 'Developed hybrid quantum-classical design-for-test (DFT) methodologies leveraging quantum circuit partitioning and classical optimization algorithms to improve scalable fault testing, test pattern efficiency, and hardware validation workflows for complex integrated circuits.',
    tags: ['Quantum Computing', 'VLSI', 'Design for Test', 'Circuit Partitioning', 'Hardware'],
  },
];

export const Publications = () => {
  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg)' }}>
      <Navbar />
      <div className="page-container">
        <div className="page-hero">
          <p className="page-hero-label">Research</p>
          <h1 className="page-hero-title">Publications &amp; Research</h1>
          <p className="page-hero-sub">
            Peer-reviewed conference papers, patent-pending work, and independent research
            spanning ML, hardware security, biometrics, and quantum computing.
          </p>
        </div>

        <div className="project-grid">
          {publications.map((pub, idx) => (
            <div key={idx} className="project-card">
              <div className="project-header">
                <div style={{ flex: 1 }}>
                  <div className="project-title">{pub.title}</div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '4px', flexShrink: 0 }}>
                  <span className={`project-badge badge-${pub.badge}`}>{pub.type}</span>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 600 }}>{pub.year}</span>
                </div>
              </div>
              <div className="project-org">{pub.venue}</div>
              <p className="project-desc">{pub.abstract}</p>
              <div className="project-tags">
                {pub.tags.map(t => <span key={t} className="tech-tag">{t}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
      <footer className="footer">
        Yash Sinha © 2025 · Dallas, TX · AI/ML Engineer &amp; Data Scientist
      </footer>
    </div>
  );
};
