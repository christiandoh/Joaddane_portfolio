import React from 'react';
import { GraduationCap, Award } from 'lucide-react';
import { useDarkMode } from '../context/DarkModeContext';

const education = [
  {
    degree: "Licence en Électronique, Énergie Électrique et Automatique",
    institution: "Université Polytechnique de Bingerville",
    period: "2024-2025",
    icon: GraduationCap
  },
  {
    degree: "Baccalauréat",
    institution: "Collège Catholique Roger Duquesne",
    period: "2021-2022",
    icon: Award
  }
];

const EducationPage = () => {
  const { darkMode } = useDarkMode();

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h3 className={`text-4xl font-bold mb-12 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
          Formation
        </h3>
        <div className="space-y-6">
          {education.map((edu, index) => {
            const Icon = edu.icon;
            return (
              <div
                key={index}
                className={`backdrop-blur-xl rounded-3xl border p-8 transition-all duration-300 hover:scale-[1.02] ${
                  darkMode 
                    ? 'bg-white/10 border-white/20 shadow-2xl shadow-purple-500/10' 
                    : 'bg-white/60 border-white/60 shadow-2xl shadow-black/5'
                }`}
              >
                <div className="flex items-start gap-6">
                  <div className={`p-4 rounded-2xl ${darkMode ? 'bg-purple-500/20' : 'bg-purple-100'}`}>
                    <Icon className={darkMode ? 'text-purple-300' : 'text-purple-600'} size={32} />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3">
                      <h4 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                        {edu.degree}
                      </h4>
                      <span className={`px-4 py-2 rounded-xl mt-2 md:mt-0 ${
                        darkMode ? 'bg-white/10 text-white/80' : 'bg-slate-900/10 text-slate-700'
                      }`}>
                        {edu.period}
                      </span>
                    </div>
                    <p className={`text-lg ${darkMode ? 'text-white/80' : 'text-slate-700'}`}>
                      {edu.institution}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default EducationPage;
