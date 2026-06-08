import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Switch, Tooltip } from 'antd';
import {
  HomeOutlined,
  AppstoreOutlined,
  BookOutlined,
  UserOutlined,
  GithubOutlined,
  LinkedinOutlined,
  MailOutlined,
  MenuOutlined,
  CloseOutlined,
} from '@ant-design/icons';
import { useTheme } from '../ThemeContext';
import '../Styles/Navbar.css';

export const Navbar = () => {
  const { isDark, toggleTheme } = useTheme();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { to: '/', label: 'Home', icon: <HomeOutlined /> },
    { to: '/about', label: 'About', icon: <UserOutlined /> },
    { to: '/projects', label: 'Projects', icon: <AppstoreOutlined /> },
    { to: '/publications', label: 'Publications', icon: <BookOutlined /> },
  ];

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/' || location.pathname === '';
    return location.pathname === path;
  };

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <Link to="/" className="navbar-brand" onClick={() => setMenuOpen(false)}>
          <span className="navbar-brand-name">Yash Sinha</span>
          <span className="navbar-brand-title">ML Researcher · Quant Analyst</span>
        </Link>

        <div className={`navbar-links${menuOpen ? ' open' : ''}`}>
          {navLinks.map(link => (
            <Link
              key={link.to}
              to={link.to}
              className={`nav-link${isActive(link.to) ? ' active' : ''}`}
              onClick={() => setMenuOpen(false)}
            >
              {link.icon} {link.label}
            </Link>
          ))}

          <div className="navbar-socials">
            <Tooltip title="LinkedIn">
              <a href="https://www.linkedin.com/in/ysinha24/" target="_blank" rel="noopener noreferrer" className="social-icon">
                <LinkedinOutlined />
              </a>
            </Tooltip>
            <Tooltip title="GitHub">
              <a href="https://github.com/ysinha24" target="_blank" rel="noopener noreferrer" className="social-icon">
                <GithubOutlined />
              </a>
            </Tooltip>
            <Tooltip title="Email">
              <a href="mailto:ysinha@smu.edu" className="social-icon">
                <MailOutlined />
              </a>
            </Tooltip>
          </div>

          <div className="theme-toggle">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: isDark ? 0.3 : 1 }}>
              <circle cx="12" cy="12" r="5"/>
              <line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/>
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
              <line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/>
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
            </svg>
            <Switch
              checked={isDark}
              onChange={toggleTheme}
              size="small"
              style={{ margin: '0 6px' }}
            />
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: isDark ? 1 : 0.3 }}>
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
            </svg>
          </div>
        </div>

        <button className="hamburger" onClick={() => setMenuOpen(o => !o)} aria-label="Toggle menu">
          {menuOpen ? <CloseOutlined /> : <MenuOutlined />}
        </button>
      </div>
    </nav>
  );
};
