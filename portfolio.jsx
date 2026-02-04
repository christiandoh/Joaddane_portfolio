import React, { useState, useEffect } from 'react';
import { Sun, Moon, Mail, Phone, MapPin, Briefcase, GraduationCap, Award, Code, Film, Camera, Users, Zap, FileText } from 'lucide-react';

const Portfolio = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'experience', 'skills', 'education', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

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

  const skills = [
    { name: "Cadrage vidéo", icon: Film, category: "Audiovisuel" },
    { name: "Montage vidéo", icon: Code, category: "Audiovisuel" },
    { name: "Prise de photos", icon: Camera, category: "Audiovisuel" },
    { name: "Travail en équipe", icon: Users, category: "Soft Skills" },
    { name: "Adaptabilité", icon: Zap, category: "Soft Skills" },
    { name: "Organisation d'événements", icon: Briefcase, category: "Soft Skills" }
  ];

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

  return (
    <div className={`min-h-screen transition-colors duration-500 ${darkMode ? 'dark' : ''}`}>
      <div className="fixed inset-0 -z-10 transition-colors duration-500">
        <div className={`absolute inset-0 ${darkMode ? 'bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900' : 'bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50'}`}></div>
        <div className="absolute inset-0 opacity-30" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, ${darkMode ? 'rgba(255,255,255,0.15)' : 'rgba(0,0,0,0.05)'} 1px, transparent 0)`,
          backgroundSize: '32px 32px'
        }}></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 p-6">
        <div className="max-w-6xl mx-auto">
          <div className={`backdrop-blur-xl rounded-3xl border transition-all duration-300 ${
            darkMode 
              ? 'bg-white/10 border-white/20 shadow-2xl shadow-purple-500/10' 
              : 'bg-white/60 border-white/60 shadow-2xl shadow-black/5'
          }`}>
            <div className="px-6 py-4 flex items-center justify-between">
              <div className="flex items-center gap-8">
                <h1 className={`text-xl font-bold tracking-tight ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                  KOUAKOU ANGE
                </h1>
                <div className="hidden md:flex gap-6">
                  {['about', 'experience', 'skills', 'education', 'contact'].map((section) => (
                    <button
                      key={section}
                      onClick={() => scrollToSection(section)}
                      className={`px-4 py-2 rounded-xl transition-all duration-300 ${
                        activeSection === section
                          ? darkMode
                            ? 'bg-white/20 text-white'
                            : 'bg-slate-900/10 text-slate-900'
                          : darkMode
                            ? 'text-white/70 hover:text-white hover:bg-white/10'
                            : 'text-slate-600 hover:text-slate-900 hover:bg-slate-900/5'
                      }`}
                    >
                      {section.charAt(0).toUpperCase() + section.slice(1)}
                    </button>
                  ))}
                </div>
              </div>
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
        </div>
      </nav>

      {/* Hero Section */}
      <section id="about" className="pt-32 pb-20 px-6">
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
                  <span className="text-sm font-medium">Stagiaire en Cadrage</span>
                </div>
                <h2 className={`text-5xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                  KOUAKOU AKOUA<br />ANGE JOADDANE
                </h2>
                <p className={`text-lg leading-relaxed mb-8 ${darkMode ? 'text-white/80' : 'text-slate-700'}`}>
                  Titulaire d'une licence en électronique, énergie électrique et automatique, je suis un jeune diplômé passionné par la communication audiovisuelle, en particulier le cadrage, la prise de vue et le montage vidéo.
                </p>
                <p className={`text-base leading-relaxed ${darkMode ? 'text-white/70' : 'text-slate-600'}`}>
                  Curieux, motivé et autodidacte, j'ai acquis une première expérience pratique dans le domaine audiovisuel à travers des activités en milieu religieux et entrepreneurial. Je souhaite aujourd'hui renforcer mes compétences par un stage d'immersion afin de me rapprocher du métier de l'audiovisuel et de la production médiatique.
                </p>
              </div>
              <div className="space-y-4">
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
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-6">
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
                style={{ animationDelay: `${index * 100}ms` }}
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

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6">
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
                  style={{ animationDelay: `${index * 50}ms` }}
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

          {/* Additional Skills */}
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

      {/* Education Section */}
      <section id="education" className="py-20 px-6">
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

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 pb-32">
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
                href="tel:+22507191256​23"
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

      {/* Footer */}
      <footer className={`py-8 px-6 border-t ${darkMode ? 'border-white/10' : 'border-slate-200'}`}>
        <div className="max-w-6xl mx-auto text-center">
          <p className={darkMode ? 'text-white/60' : 'text-slate-600'}>
            © 2026 KOUAKOU AKOUA ANGE JOADDANE. Tous droits réservés.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;