import React from 'react';
import { Code, Film, Camera, Users, Zap, Briefcase, FileText, Award } from 'lucide-react';
import { useDarkMode } from '../context/DarkModeContext';

const skills = [
  { name: "Cadrage vidéo", icon: Film, category: "Audiovisuel" },
  { name: "Montage vidéo", icon: Code, category: "Audiovisuel" },
  { name: "Prise de photos", icon: Camera, category: "Audiovisuel" },
  { name: "Travail en équipe", icon: Users, category: "Soft Skills" },
  { name: "Adaptabilité", icon: Zap, category: "Soft Skills" },
  { name: "Organisation d'événements", icon: Briefcase, category: "Soft Skills" }
];

const SkillsPage = () => {
  const { darkMode } = useDarkMode();

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h3 className={`text-4xl font-bold mb-12 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
          Compétences
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div
                key={index}
                className={`backdrop-blur-xl rounded-2xl border p-6 transition-all duration-300 hover:scale-105 ${
                  darkMode 
                    ? 'bg-white/10 border-white/20 shadow-xl shadow-purple-500/5' 
                    : 'bg-white/60 border-white/60 shadow-xl shadow-black/5'
                }`}
              >
                <div className={`p-3 rounded-xl w-fit mb-4 ${
                  index % 3 === 0 
                    ? darkMode ? 'bg-purple-500/20' : 'bg-purple-100'
                    : index % 3 === 1
                    ? darkMode ? 'bg-blue-500/20' : 'bg-blue-100'
                    : darkMode ? 'bg-pink-500/20' : 'bg-pink-100'
                }`}>
                  <Icon className={
                    index % 3 === 0 
                      ? darkMode ? 'text-purple-300' : 'text-purple-600'
                      : index % 3 === 1
                      ? darkMode ? 'text-blue-300' : 'text-blue-600'
                      : darkMode ? 'text-pink-300' : 'text-pink-600'
                  } size={24} />
                </div>
                <h4 className={`font-bold mb-2 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                  {skill.name}
                </h4>
                <p className={`text-sm ${darkMode ? 'text-white/60' : 'text-slate-600'}`}>
                  {skill.category}
                </p>
              </div>
            );
          })}
        </div>

        <div className={`backdrop-blur-xl rounded-3xl border p-8 mt-8 transition-all duration-300 ${
          darkMode 
            ? 'bg-white/10 border-white/20 shadow-2xl shadow-purple-500/10' 
            : 'bg-white/60 border-white/60 shadow-2xl shadow-black/5'
        }`}>
          <h4 className={`text-xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
            Compétences Additionnelles
          </h4>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h5 className={`font-semibold mb-3 flex items-center gap-2 ${darkMode ? 'text-white/90' : 'text-slate-800'}`}>
                <FileText size={20} />
                Langues
              </h5>
              <ul className="space-y-2">
                <li className={darkMode ? 'text-white/80' : 'text-slate-700'}>Français (Courant)</li>
                <li className={darkMode ? 'text-white/80' : 'text-slate-700'}>Anglais (Moyen)</li>
              </ul>
            </div>
            <div>
              <h5 className={`font-semibold mb-3 flex items-center gap-2 ${darkMode ? 'text-white/90' : 'text-slate-800'}`}>
                <Award size={20} />
                Autres
              </h5>
              <ul className="space-y-2">
                <li className={darkMode ? 'text-white/80' : 'text-slate-700'}>Permis de conduire A-B-C-D-E</li>
                <li className={darkMode ? 'text-white/80' : 'text-slate-700'}>Gestion Orange Money</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsPage;
