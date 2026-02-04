import React from 'react';
import { useDarkMode } from '../context/DarkModeContext';

const ContactPage = () => {
  const { darkMode } = useDarkMode();

  return (
    <section className="py-20 px-6 pb-32">
      <div className="max-w-6xl mx-auto">
        <div className={`backdrop-blur-xl rounded-3xl border p-12 text-center transition-all duration-300 ${
          darkMode 
            ? 'bg-white/10 border-white/20 shadow-2xl shadow-purple-500/10' 
            : 'bg-white/60 border-white/60 shadow-2xl shadow-black/5'
        }`}>
          <h3 className={`text-4xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
            Contactez-moi
          </h3>
          <p className={`text-lg mb-8 max-w-2xl mx-auto ${darkMode ? 'text-white/80' : 'text-slate-700'}`}>
            Je suis à la recherche d'un stage d'immersion en cadrage et montage vidéo. N'hésitez pas à me contacter pour discuter de vos opportunités.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:akouajoaddane@gmail.com"
              className={`px-8 py-4 rounded-xl font-semibold transition-all duration-300 ${
                darkMode 
                  ? 'bg-purple-500/20 hover:bg-purple-500/30 text-white border border-purple-400/30' 
                  : 'bg-slate-900 hover:bg-slate-800 text-white shadow-lg'
              }`}
            >
              Envoyer un email
            </a>
            <a
              href="tel:+2250719125623"
              className={`px-8 py-4 rounded-xl font-semibold transition-all duration-300 ${
                darkMode 
                  ? 'bg-white/10 hover:bg-white/20 text-white border border-white/20' 
                  : 'bg-white hover:bg-slate-50 text-slate-900 border border-slate-200 shadow-lg'
              }`}
            >
              Appeler
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
