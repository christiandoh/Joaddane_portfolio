import React from 'react';
import { useDarkMode } from '../context/DarkModeContext';

const experiences = [
  {
    title: "Cadreur & Monteur vidéo",
    type: "Expérience associative",
    location: "Église",
    period: "2021 - 2024",
    tasks: [
      "Cadrage vidéo lors des cultes, événements et activités de l'église",
      "Prise de vue à l'aide d'un téléphone et d'un appareil photo",
      "Montage vidéo pour diffusion interne et sur les plateformes numériques"
    ]
  },
  {
    title: "Monteur vidéo",
    type: "Freelance / Prestation",
    location: "HAVILA – Entreprise immobilier",
    period: "2023 - 2024",
    tasks: [
      "Réalisation de montages vidéo pour la présentation des activités de l'entreprise",
      "Valorisation visuelle des projets immobiliers",
      "Utilisation de CapCut pour le montage et l'édition des vidéos",
      "Respect des consignes et délais de livraison"
    ]
  }
];

const ExperiencePage = () => {
  const { darkMode } = useDarkMode();

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h3 className={`text-4xl font-bold mb-12 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
          Expériences Professionnelles
        </h3>
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`backdrop-blur-xl rounded-3xl border p-8 transition-all duration-300 hover:scale-[1.02] ${
                darkMode 
                  ? 'bg-white/10 border-white/20 shadow-2xl shadow-purple-500/10' 
                  : 'bg-white/60 border-white/60 shadow-2xl shadow-black/5'
              }`}
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                <div>
                  <h4 className={`text-2xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                    {exp.title}
                  </h4>
                  <div className="flex flex-wrap gap-3 mb-2">
                    <span className={`px-3 py-1 rounded-full text-sm ${
                      darkMode ? 'bg-purple-500/20 text-purple-300' : 'bg-purple-100 text-purple-700'
                    }`}>
                      {exp.type}
                    </span>
                    <span className={`px-3 py-1 rounded-full text-sm ${
                      darkMode ? 'bg-blue-500/20 text-blue-300' : 'bg-blue-100 text-blue-700'
                    }`}>
                      {exp.location}
                    </span>
                  </div>
                </div>
                <span className={`px-4 py-2 rounded-xl ${
                  darkMode ? 'bg-white/10 text-white/80' : 'bg-slate-900/10 text-slate-700'
                }`}>
                  {exp.period}
                </span>
              </div>
              <ul className="space-y-3">
                {exp.tasks.map((task, taskIndex) => (
                  <li key={taskIndex} className={`flex items-start gap-3 ${darkMode ? 'text-white/80' : 'text-slate-700'}`}>
                    <span className={`mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 ${
                      darkMode ? 'bg-purple-400' : 'bg-purple-600'
                    }`}></span>
                    <span>{task}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperiencePage;
