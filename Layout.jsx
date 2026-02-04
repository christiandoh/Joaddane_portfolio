import React, { useState } from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import { Sun, Moon, Menu, X } from 'lucide-react';
import { useDarkMode } from './context/DarkModeContext';

const navItems = [
  { path: '/', label: 'Accueil' },
  { path: '/experience', label: 'Expérience' },
  { path: '/competences', label: 'Compétences' },
  { path: '/formation', label: 'Formation' },
  { path: '/projets', label: 'Projets' },
  { path: '/contact', label: 'Contact' },
];

const Layout = () => {
  const { darkMode, setDarkMode } = useDarkMode();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className={`min-h-screen transition-colors duration-500 ${darkMode ? 'dark' : ''}`}>
      <div className="fixed inset-0 -z-10 transition-colors duration-500">
        <div className={`absolute inset-0 ${darkMode ? 'bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900' : 'bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50'}`}></div>
        <div className="absolute inset-0 opacity-30" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, ${darkMode ? 'rgba(255,255,255,0.15)' : 'rgba(0,0,0,0.05)'} 1px, transparent 0)`,
          backgroundSize: '32px 32px'
        }}></div>
      </div>

      <nav className="fixed top-0 left-0 right-0 z-50 p-6">
        <div className="max-w-6xl mx-auto">
          <div className={`backdrop-blur-xl rounded-3xl border transition-all duration-300 ${
            darkMode 
              ? 'bg-white/10 border-white/20 shadow-2xl shadow-purple-500/10' 
              : 'bg-white/60 border-white/60 shadow-2xl shadow-black/5'
          }`}>
            <div className="px-6 py-4 flex items-center justify-between">
              <div className="flex items-center gap-8">
                <NavLink 
                  to="/" 
                  className={({ isActive }) => `text-xl font-bold tracking-tight ${darkMode ? 'text-white' : 'text-slate-900'}`}
                >
                  KOUAKOU ANGE
                </NavLink>
                <div className="hidden md:flex gap-2">
                  {navItems.map(({ path, label }) => (
                    <NavLink
                      key={path}
                      to={path}
                      end={path === '/'}
                      className={({ isActive }) =>
                        `px-4 py-2 rounded-xl transition-all duration-300 ${
                          isActive
                            ? darkMode
                              ? 'bg-white/20 text-white'
                              : 'bg-slate-900/10 text-slate-900'
                            : darkMode
                              ? 'text-white/70 hover:text-white hover:bg-white/10'
                              : 'text-slate-600 hover:text-slate-900 hover:bg-slate-900/5'
                        }`
                      }
                    >
                      {label}
                    </NavLink>
                  ))}
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className={`md:hidden p-3 rounded-xl transition-all duration-300 ${
                    darkMode ? 'bg-white/20 text-white' : 'bg-slate-900/10 text-slate-900'
                  }`}
                >
                  {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
                </button>
              <button
                onClick={() => setDarkMode(!darkMode)}
                className={`p-3 rounded-xl transition-all duration-300 ${
                  darkMode 
                    ? 'bg-white/20 hover:bg-white/30 text-white' 
                    : 'bg-slate-900/10 hover:bg-slate-900/20 text-slate-900'
                }`}
              >
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              </div>
            </div>
            {mobileMenuOpen && (
              <div className={`md:hidden px-6 pb-4 flex flex-col gap-2 border-t ${darkMode ? 'border-white/10' : 'border-slate-200'}`}>
                {navItems.map(({ path, label }) => (
                  <NavLink
                    key={path}
                    to={path}
                    end={path === '/'}
                    onClick={() => setMobileMenuOpen(false)}
                    className={({ isActive }) =>
                      `px-4 py-3 rounded-xl transition-all duration-300 ${
                        isActive
                          ? darkMode ? 'bg-white/20 text-white' : 'bg-slate-900/10 text-slate-900'
                          : darkMode ? 'text-white/70 hover:bg-white/10' : 'text-slate-600 hover:bg-slate-900/5'
                      }`
                    }
                  >
                    {label}
                  </NavLink>
                ))}
              </div>
            )}
          </div>
        </div>
      </nav>

      <main className="pt-24">
        <Outlet />
      </main>

      <footer className={`py-8 px-6 mt-12 border-t ${darkMode ? 'border-white/10' : 'border-slate-200'}`}>
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center gap-4 mb-4">
            <a
              href="https://wa.me/2250719125623"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-3 rounded-xl transition-all duration-300 hover:scale-110 ${
                darkMode ? 'text-white/70 hover:text-green-400 hover:bg-white/10' : 'text-slate-600 hover:text-green-600 hover:bg-slate-900/5'
              }`}
              aria-label="WhatsApp"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
            </a>
            <a
              href="https://tiktok.com/@joaddane"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-3 rounded-xl transition-all duration-300 hover:scale-110 ${
                darkMode ? 'text-white/70 hover:text-pink-400 hover:bg-white/10' : 'text-slate-600 hover:text-pink-600 hover:bg-slate-900/5'
              }`}
              aria-label="TikTok"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
              </svg>
            </a>
          </div>
          <p className={darkMode ? 'text-white/60' : 'text-slate-600'}>
            © 2026 KOUAKOU AKOUA ANGE JOADDANE. Tous droits réservés.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
