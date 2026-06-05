import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ConfigProvider, theme } from 'antd';
import './App.css';
import { ThemeProvider, useTheme } from './ThemeContext';
import { LandingPage } from './Pages/Landing';
import { Projects } from './Pages/Projects';
import { Publications } from './Pages/Publication';

function AppInner() {
  const { isDark } = useTheme();
  return (
    <ConfigProvider theme={{ algorithm: isDark ? theme.darkAlgorithm : theme.defaultAlgorithm }}>
      <div className={`app-wrapper${isDark ? ' dark-mode' : ''}`}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="projects" element={<Projects />} />
          <Route path="publications" element={<Publications />} />
        </Routes>
      </div>
    </ConfigProvider>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppInner />
    </ThemeProvider>
  );
}

export default App;
