import React from 'react';
import { Film, Video } from 'lucide-react';
import { useDarkMode } from '../context/DarkModeContext';

const projets = [
  {
    title: "Cultes & événements",
    description: "Montages et captations pour des événements religieux (cultes, activités).",
    type: "Cadrage & montage",
    year: "2021-2024"
  },
  {
    title: "HAVILA – Immobilier",
    description: "Vidéos de présentation des activités et projets immobiliers de l'entreprise.",
    type: "Montage vidéo",
    year: "2023-2024"
  },
  {
    title: "Projets personnels",
    description: "Créations personnelles et exercices de montage pour développer ma pratique.",
    type: "Audiovisuel",
    year: "En cours"
  }
];

const ProjetsPage = () => {
  const { darkMode } = useDarkMode();

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h3 className={`text-4xl font-bold mb-12 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
          Projets & Réalisations
        </h3>
        <p className={`text-lg mb-12 max-w-2xl ${darkMode ? 'text-white/80' : 'text-slate-700'}`}>
          Voici un aperçu des projets sur lesquels j'ai travaillé en cadrage et montage vidéo.
        </p>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projets.map((projet, index) => (
            <div
              key={index}
              className={`backdrop-blur-xl rounded-3xl border p-8 transition-all duration-300 hover:scale-[1.02] ${
                darkMode 
                  ? 'bg-white/10 border-white/20 shadow-2xl shadow-purple-500/10' 
                  : 'bg-white/60 border-white/60 shadow-2xl shadow-black/5'
              }`}
            >
              <div className={`p-4 rounded-2xl w-fit mb-6 ${
                index % 3 === 0 ? (darkMode ? 'bg-purple-500/20' : 'bg-purple-100')
                : index % 3 === 1 ? (darkMode ? 'bg-blue-500/20' : 'bg-blue-100')
                : (darkMode ? 'bg-pink-500/20' : 'bg-pink-100')
              }`}>
                {index === 0 ? (
                  <Film className={darkMode ? 'text-purple-300' : 'text-purple-600'} size={32} />
                ) : (
                  <Video className={darkMode ? 'text-blue-300' : 'text-blue-600'} size={32} />
                )}
              </div>
              <div className="flex flex-wrap gap-2 mb-3">
                <span className={`px-3 py-1 rounded-full text-sm ${
                  darkMode ? 'bg-purple-500/20 text-purple-300' : 'bg-purple-100 text-purple-700'
                }`}>
                  {projet.type}
                </span>
                <span className={`px-3 py-1 rounded-full text-sm ${
                  darkMode ? 'bg-white/10 text-white/80' : 'bg-slate-900/10 text-slate-700'
                }`}>
                  {projet.year}
                </span>
              </div>
              <h4 className={`text-xl font-bold mb-3 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                {projet.title}
              </h4>
              <p className={`${darkMode ? 'text-white/80' : 'text-slate-700'}`}>
                {projet.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjetsPage;
