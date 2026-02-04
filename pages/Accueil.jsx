import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { useDarkMode } from '../context/DarkModeContext';

const Accueil = () => {
  const { darkMode } = useDarkMode();

  return (
    <section className="pt-8 pb-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className={`backdrop-blur-xl rounded-3xl border p-12 transition-all duration-300 ${
          darkMode 
            ? 'bg-white/10 border-white/20 shadow-2xl shadow-purple-500/10' 
            : 'bg-white/60 border-white/60 shadow-2xl shadow-black/5'
        }`}>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className={`inline-block px-4 py-2 rounded-full mb-6 ${
                darkMode ? 'bg-purple-500/20 text-purple-300' : 'bg-purple-100 text-purple-700'
              }`}>
                <span className="text-sm font-medium">Cadrage & Montage vidéo</span>
              </div>
              <h2 className={`text-5xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                KOUAKOU AKOUA<br />ANGE JOADDANE
              </h2>
              <p className={`text-lg leading-relaxed mb-6 ${darkMode ? 'text-white/80' : 'text-slate-700'}`}>
                Créateur audiovisuel basé à Abidjan. Je réalise des captations, du cadrage et du montage vidéo pour des événements, des entreprises et des projets créatifs.
              </p>
              <p className={`text-base leading-relaxed ${darkMode ? 'text-white/70' : 'text-slate-600'}`}>
                Ce portfolio présente mes réalisations et mon parcours en électronique et en audiovisuel. Vous y trouverez mes compétences, mes projets et les formations qui ont jalonné mon parcours.
              </p>
            </div>
            <div className="relative flex flex-col items-center md:items-end gap-8">
              {/* Image flottante */}
              <div
                className={`animate-float w-56 h-56 md:w-72 md:h-72 rounded-3xl overflow-hidden border-4 flex-shrink-0 ${
                  darkMode
                    ? 'border-white/20 shadow-2xl shadow-purple-500/20'
                    : 'border-white/80 shadow-2xl shadow-slate-400/30'
                }`}
              >
                <img
                  src="joaddane.png"
                  alt="KOUAKOU AKOUA ANGE JOADDANE"
                  className="w-full h-full object-cover object-top"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.style.display = 'none';
                    const next = e.target.nextElementSibling;
                    if (next) next.classList.remove('hidden');
                  }}
                />
                <div
                  className={`hidden w-full h-full object-cover object-center ${darkMode ? 'bg-gradient-to-br from-purple-600 to-slate-700' : 'bg-gradient-to-br from-purple-200 to-slate-300'} flex items-center justify-center text-4xl font-bold ${darkMode ? 'text-white/80' : 'text-slate-600'}`}
                  aria-hidden="true"
                >
                  KA
                </div>
              </div>
              <div className="space-y-4 w-full">
              <div className={`backdrop-blur-xl rounded-2xl border p-6 transition-all duration-300 ${
                darkMode 
                  ? 'bg-white/5 border-white/10 hover:bg-white/10' 
                  : 'bg-white/40 border-white/40 hover:bg-white/60'
              }`}>
                <div className="flex items-center gap-4">
                  <div className={`p-3 rounded-xl ${darkMode ? 'bg-purple-500/20' : 'bg-purple-100'}`}>
                    <Mail className={darkMode ? 'text-purple-300' : 'text-purple-600'} size={24} />
                  </div>
                  <div>
                    <p className={`text-sm ${darkMode ? 'text-white/60' : 'text-slate-500'}`}>Email</p>
                    <p className={`font-medium ${darkMode ? 'text-white' : 'text-slate-900'}`}>akouajoaddane@gmail.com</p>
                  </div>
                </div>
              </div>
              <div className={`backdrop-blur-xl rounded-2xl border p-6 transition-all duration-300 ${
                darkMode 
                  ? 'bg-white/5 border-white/10 hover:bg-white/10' 
                  : 'bg-white/40 border-white/40 hover:bg-white/60'
              }`}>
                <div className="flex items-center gap-4">
                  <div className={`p-3 rounded-xl ${darkMode ? 'bg-blue-500/20' : 'bg-blue-100'}`}>
                    <Phone className={darkMode ? 'text-blue-300' : 'text-blue-600'} size={24} />
                  </div>
                  <div>
                    <p className={`text-sm ${darkMode ? 'text-white/60' : 'text-slate-500'}`}>Téléphone</p>
                    <p className={`font-medium ${darkMode ? 'text-white' : 'text-slate-900'}`}>+225 07-19-12-56-23</p>
                  </div>
                </div>
              </div>
              <div className={`backdrop-blur-xl rounded-2xl border p-6 transition-all duration-300 ${
                darkMode 
                  ? 'bg-white/5 border-white/10 hover:bg-white/10' 
                  : 'bg-white/40 border-white/40 hover:bg-white/60'
              }`}>
                <div className="flex items-center gap-4">
                  <div className={`p-3 rounded-xl ${darkMode ? 'bg-pink-500/20' : 'bg-pink-100'}`}>
                    <MapPin className={darkMode ? 'text-pink-300' : 'text-pink-600'} size={24} />
                  </div>
                  <div>
                    <p className={`text-sm ${darkMode ? 'text-white/60' : 'text-slate-500'}`}>Localisation</p>
                    <p className={`font-medium ${darkMode ? 'text-white' : 'text-slate-900'}`}>Abidjan, Côte d'Ivoire</p>
                  </div>
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Accueil;
