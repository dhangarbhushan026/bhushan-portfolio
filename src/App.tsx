import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail, ExternalLink, Download, Code, Database, Wrench, ChevronRight, Award } from 'lucide-react';
import ParticlesBackground from './components/ParticlesBackground';
import TiltCard from './components/TiltCard';
import TypingText from './components/TypingText';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact', href: '#contact' },
  ];

  const skills = {
    frontend: [
      { name: 'HTML5', level: 92 },
      { name: 'CSS3', level: 93 },
      { name: 'JavaScript', level: 75 },
    ],
    backend: [
      { name: 'Python', level: 90 },
      { name: 'C', level: 80 },
      { name: 'C#', level: 70 },
      { name: 'SQL', level: 70 },
      { name: 'Java', level: 60 },
    ],
    tools: ['Git', 'GitHub', 'Vercel', 'Acode', 'VS Code']
  };

  const projects = [
    {
      title: 'Samarth Vada Pav',
      description: 'Live business website, mobile-first design, deployed on Vercel.',
      tags: ['HTML', 'CSS', 'JS', 'Vercel'],
      live: 'https://samarth-vada-pav.vercel.app',
      github: 'https://github.com/dhangarbhushan026'
    },
    {
      title: 'Student Management System',
      description: 'CRUD operations using SQL, HTML, CSS, and JS.',
      tags: ['SQL', 'HTML', 'CSS', 'JS'],
      live: '#',
      github: '#'
    },
    {
      title: 'Expense Tracker',
      description: 'Real-time total calculation and expense management.',
      tags: ['HTML', 'CSS', 'JS'],
      live: '#',
      github: '#'
    }
  ];

  const certifications = [
    'Scaler School Python',
    'Edureka AI Engineer',
    'Edureka Machine Learning',
    'Edureka Fullstack Developer'
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 font-sans selection:bg-blue-500/30">
      <ParticlesBackground />
      
      {/* Navbar */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-900/80 backdrop-blur-md shadow-lg shadow-blue-900/20 py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex justify-between items-center">
          <a href="#home" className="text-2xl font-bold tracking-tighter">
            Bhushan<span className="text-blue-500">.</span>
          </a>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="text-sm font-medium text-slate-300 hover:text-blue-400 transition-colors">
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden text-slate-300 hover:text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-slate-900/95 backdrop-blur-lg border-t border-slate-800 py-4 px-6 flex flex-col space-y-4 shadow-xl">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-base font-medium text-slate-300 hover:text-blue-400"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </div>
        )}
      </nav>

      <main className="relative z-10">
        {/* Hero Section */}
        <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-6">
          <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 order-2 md:order-1">
              <h2 className="text-blue-400 font-medium tracking-wider uppercase text-sm">Welcome to my universe</h2>
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                Hi, I am <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                  Bhushan Ashok Dhangar.
                </span>
              </h1>
              <div className="text-xl md:text-2xl text-slate-400 h-8">
                <TypingText />
              </div>
              <p className="text-slate-400 max-w-lg leading-relaxed">
                I build hyper-professional, interactive, and scalable web applications. Passionate about clean code and AI integration.
              </p>
              <div className="flex flex-wrap items-center gap-4 pt-4">
                <a href="#" className="px-8 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-full font-medium transition-all shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:shadow-[0_0_30px_rgba(37,99,235,0.6)] flex items-center gap-2">
                  <Download size={18} /> Download Resume
                </a>
                <div className="flex items-center gap-4 ml-2">
                  <a href="https://github.com/dhangarbhushan026" className="p-3 bg-slate-800/50 hover:bg-slate-800 rounded-full text-slate-300 hover:text-blue-400 transition-colors backdrop-blur-sm border border-slate-700/50">
                    <Github size={20} />
                  </a>
                  <a href="https://www.linkedin.com/in/bhushan-dhangar-a6282433a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="p-3 bg-slate-800/50 hover:bg-slate-800 rounded-full text-slate-300 hover:text-blue-400 transition-colors backdrop-blur-sm border border-slate-700/50">
                    <Linkedin size={20} />
                  </a>
                  <a href="mailto:dhangarbhushan026@gmail.com" className="p-3 bg-slate-800/50 hover:bg-slate-800 rounded-full text-slate-300 hover:text-blue-400 transition-colors backdrop-blur-sm border border-slate-700/50">
                    <Mail size={20} />
                  </a>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2 flex justify-center">
              <TiltCard>
                <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full p-1 bg-gradient-to-tr from-blue-500 to-purple-600 shadow-[0_0_40px_rgba(59,130,246,0.3)]">
                  <div className="w-full h-full rounded-full overflow-hidden border-4 border-blue-400 shadow-2xl flex items-center justify-center bg-slate-800">
                    <img
                      src="https://lh3.googleusercontent.com/d/1P9L1m_lZngNtgxu5EftifUV8NevS96SZ"
                      alt="Bhushan Ashok Dhangar"
                      className="w-full h-full object-cover"
                      />
                  </div>
                </div>
              </TiltCard>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-24 px-6 bg-slate-900/30 backdrop-blur-sm border-y border-slate-800/50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              About <span className="text-blue-400">Me</span>
            </h2>
            <TiltCard className="bg-slate-800/40 border border-slate-700/50 p-8 md:p-12 rounded-3xl backdrop-blur-md shadow-xl">
              <div className="space-y-6 text-slate-300 leading-relaxed text-lg">
                <p>
                  I am a <span className="text-white font-medium">12th-grade Science (PCMB) student</span> deeply passionate about clean code, real-world problem-solving, and the fascinating world of Artificial Intelligence.
                </p>
                <p>
                  My journey in tech is driven by an insatiable curiosity to understand how things work under the hood. Whether it's crafting a pixel-perfect UI or designing a robust backend architecture, I strive for excellence in every line of code.
                </p>
                <p>
                  When I'm not immersed in code or studying for my exams, you can find me on the field <span className="text-blue-400 font-medium">playing cricket</span>, which teaches me teamwork, strategy, and resilience—skills that I bring back to my development process.
                </p>
              </div>
            </TiltCard>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-24 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
              Technical <span className="text-blue-400">Proficiency</span>
            </h2>
            
            <div className="grid md:grid-cols-2 gap-12">
              {/* Frontend */}
              <div className="space-y-8">
                <div className="flex items-center gap-3 mb-6">
                  <Code className="text-blue-400" size={28} />
                  <h3 className="text-2xl font-semibold">Frontend</h3>
                </div>
                <div className="space-y-6">
                  {skills.frontend.map(skill => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-2">
                        <span className="font-medium text-slate-200">{skill.name}</span>
                        <span className="text-blue-400">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Backend */}
              <div className="space-y-8">
                <div className="flex items-center gap-3 mb-6">
                  <Database className="text-purple-400" size={28} />
                  <h3 className="text-2xl font-semibold">Backend & Core</h3>
                </div>
                <div className="space-y-6">
                  {skills.backend.map(skill => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-2">
                        <span className="font-medium text-slate-200">{skill.name}</span>
                        <span className="text-purple-400">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-purple-500 to-blue-500 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Tools */}
            <div className="mt-16 pt-12 border-t border-slate-800/50">
              <div className="flex items-center justify-center gap-3 mb-8">
                <Wrench className="text-slate-400" size={24} />
                <h3 className="text-xl font-semibold text-center">Tools & Environment</h3>
              </div>
              <div className="flex flex-wrap justify-center gap-4">
                {skills.tools.map(tool => (
                  <span key={tool} className="px-6 py-3 bg-slate-800/50 border border-slate-700/50 rounded-xl text-slate-300 font-medium backdrop-blur-sm hover:border-blue-500/50 hover:text-blue-400 transition-colors">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-24 px-6 bg-slate-900/30 backdrop-blur-sm border-y border-slate-800/50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
              Professional <span className="text-blue-400">Experience</span>
            </h2>
            
            <div className="relative pl-8 md:pl-0">
              {/* Timeline Line */}
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-slate-800 -translate-x-1/2"></div>
              <div className="md:hidden absolute left-0 top-0 bottom-0 w-px bg-slate-800 ml-3"></div>

              {/* Timeline Item */}
              <div className="relative flex flex-col md:flex-row items-center justify-between w-full mb-8">
                <div className="hidden md:block w-5/12"></div>
                
                {/* Dot */}
                <div className="absolute left-0 md:left-1/2 w-6 h-6 rounded-full bg-blue-500 border-4 border-slate-950 -translate-x-1/2 mt-1.5 md:mt-0 z-10 shadow-[0_0_10px_rgba(59,130,246,0.8)]"></div>
                
                <div className="w-full md:w-5/12 pl-8 md:pl-0">
                  <TiltCard className="bg-slate-800/40 border border-slate-700/50 p-6 rounded-2xl backdrop-blur-md hover:border-blue-500/30 transition-colors">
                    <span className="text-blue-400 text-sm font-semibold tracking-wider uppercase mb-2 block">3 Months</span>
                    <h3 className="text-xl font-bold text-white mb-1">Web Development Intern</h3>
                    <h4 className="text-slate-400 font-medium mb-4">Simpleshper</h4>
                    <ul className="space-y-2 text-slate-300">
                      <li className="flex items-start gap-2">
                        <ChevronRight className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                        <span>Resolved critical UI bug fixes ensuring cross-browser compatibility.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ChevronRight className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                        <span>Enhanced mobile responsiveness across the primary application.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ChevronRight className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                        <span>Managed version control and collaborative workflows using GitHub.</span>
                      </li>
                    </ul>
                  </TiltCard>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-24 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
              Featured <span className="text-blue-400">Projects</span>
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <TiltCard key={index} className="h-full">
                  <div className="bg-slate-800/40 border border-slate-700/50 rounded-2xl p-6 h-full flex flex-col backdrop-blur-md hover:border-blue-500/50 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] transition-all group">
                    <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center mb-6 text-blue-400 group-hover:scale-110 transition-transform">
                      <Code size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                    <p className="text-slate-400 mb-6 flex-grow">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.tags.map(tag => (
                        <span key={tag} className="text-xs font-medium px-3 py-1 bg-slate-900/80 text-blue-300 rounded-full border border-blue-900/30">
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex items-center gap-4 mt-auto">
                      <a href={project.live} className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-blue-600 hover:bg-blue-500 text-white rounded-lg text-sm font-medium transition-colors">
                        <ExternalLink size={16} /> Live Demo
                      </a>
                      <a href={project.github} className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-slate-700 hover:bg-slate-600 text-white rounded-lg text-sm font-medium transition-colors">
                        <Github size={16} /> GitHub
                      </a>
                    </div>
                  </div>
                </TiltCard>
              ))}
            </div>
          </div>
        </section>

        {/* Certifications Section */}
        <section id="certifications" className="py-24 px-6 bg-slate-900/30 backdrop-blur-sm border-y border-slate-800/50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
              Licenses & <span className="text-blue-400">Certifications</span>
            </h2>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {certifications.map((cert, index) => (
                <TiltCard key={index}>
                  <div className="bg-slate-800/40 border border-slate-700/50 p-6 rounded-2xl backdrop-blur-md hover:border-blue-500/50 transition-all cursor-pointer group text-center h-full flex flex-col items-center justify-center">
                    <Award className="w-12 h-12 text-blue-400 mb-4 group-hover:scale-110 transition-transform" />
                    <h3 className="text-lg font-semibold text-slate-200 group-hover:text-white transition-colors">{cert}</h3>
                  </div>
                </TiltCard>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Let's Build Something <span className="text-blue-400">Together.</span>
            </h2>
            <p className="text-slate-400 mb-12 text-lg">
              Currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>
            <TiltCard className="max-w-xl mx-auto">
  {/* NAVIN Web3Forms Integration */}
  <form action="https://api.web3forms.com/submit" method="POST" className="bg-slate-800/40 border border-slate-700/50 p-8 rounded-3xl backdrop-blur-md text-left space-y-6">
    
    {/* UNIQUE ACCESS KEY */}
    <input type="hidden" name="access_key" value="3c14972d-e2d2-4634-a2ed-e73d611af08e" />
    
    {/* OPTIONAL: Form submit jhalyaver Redirect honyasathi link (jar pahije asel tar) */}
    {/* <input type="hidden" name="redirect" value="https://web3forms.com/success" /> */}

    <div>
      <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">Name</label>
      <input type="text" id="name" name="name" required className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-all" placeholder="John Doe" />
    </div>
    <div>
      <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">Email</label>
      <input type="email" id="email" name="email" required className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-all" placeholder="john@example.com" />
    </div>
    <div>
      <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">Message</label>
      <textarea id="message" name="message" required rows={4} className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-all resize-none" placeholder="Hello Bhushan..."></textarea>
    </div>
    <button type="submit" className="w-full py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-medium transition-all shadow-[0_0_15px_rgba(37,99,235,0.3)]">
      Send Message
    </button>
  </form>
</TiltCard>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-slate-800/50 bg-slate-950/80 backdrop-blur-md py-8 text-center">
        <p className="text-slate-400 text-sm">
          © 2026 Bhushan A Dhangar. Built with passion for Machine Learning.
        </p>
      </footer>
    </div>
  );
}
