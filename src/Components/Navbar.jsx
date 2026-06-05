import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Switch, Tooltip } from 'antd';
import {
  HomeOutlined,
  AppstoreOutlined,
  BookOutlined,
  GithubOutlined,
  LinkedinOutlined,
  MailOutlined,
  BulbOutlined,
  StarOutlined,
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
          <span className="navbar-brand-title">AI/ML Engineer</span>
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
            <BulbOutlined style={{ color: isDark ? '#64748b' : '#f59e0b' }} />
            <Switch
              checked={isDark}
              onChange={toggleTheme}
              size="small"
              style={{ margin: '0 6px' }}
            />
            <StarOutlined style={{ color: isDark ? '#a78bfa' : '#64748b' }} />
          </div>
        </div>

        <button className="hamburger" onClick={() => setMenuOpen(o => !o)} aria-label="Toggle menu">
          {menuOpen ? <CloseOutlined /> : <MenuOutlined />}
        </button>
      </div>
    </nav>
  );
};
