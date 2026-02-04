import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { DarkModeProvider } from './context/DarkModeContext';
import Layout from './Layout';
import Accueil from './pages/Accueil';
import ExperiencePage from './pages/ExperiencePage';
import SkillsPage from './pages/SkillsPage';
import EducationPage from './pages/EducationPage';
import ProjetsPage from './pages/ProjetsPage';
import ContactPage from './pages/ContactPage';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/Joaddane_portfolio">
      <DarkModeProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Accueil />} />
            <Route path="experience" element={<ExperiencePage />} />
            <Route path="competences" element={<SkillsPage />} />
            <Route path="formation" element={<EducationPage />} />
            <Route path="projets" element={<ProjetsPage />} />
            <Route path="contact" element={<ContactPage />} />
          </Route>
        </Routes>
      </DarkModeProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
