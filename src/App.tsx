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
      { name: 'Java', level: 15 },
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
      live: 'https://github.com/dhangarbhushan026',
      github: 'https://github.com/dhangarbhushan026'
    },
    {
      title: 'Expense Tracker',
      description: 'Real-time total calculation and expense management.',
      tags: ['HTML', 'CSS', 'JS'],
      live: 'https://smart-expensive-tracker-project.vercel.app/',
      github: 'https://github.com/dhangarbhushan026'
    }
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
          
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="text-sm font-medium text-slate-300 hover:text-blue-400 transition-colors">
                {link.name}
              </a>
            ))}
          </div>

          <button className="md:hidden text-slate-300 hover:text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      <main className="relative z-10">
        <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-6">
          <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 order-2 md:order-1 text-left">
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
              <div className="flex flex-wrap items-center gap-4 pt-4">
                <a href="#" className="px-8 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-full font-medium transition-all shadow-[0_0_20px_rgba(37,99,235,0.4)] flex items-center gap-2">
                  <Download size={18} /> Download Resume
                </a>
                <div className="flex items-center gap-4 ml-2">
                  <a href="https://github.com/dhangarbhushan026" target="_blank" className="p-3 bg-slate-800/50 hover:bg-slate-800 rounded-full text-slate-300 hover:text-blue-400 transition-colors border border-slate-700/50">
                    <Github size={20} />
                  </a>
                  <a href="https://www.linkedin.com/in/bhushan-dhangar-a6282433a" target="_blank" className="p-3 bg-slate-800/50 hover:bg-slate-800 rounded-full text-slate-300 hover:text-blue-400 transition-colors border border-slate-700/50">
                    <Linkedin size={20} />
                  </a>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2 flex justify-center">
              <TiltCard>
                <div className="relative w-64 h-80 md:w-80 md:h-[420px] rounded-3xl p-1 bg-gradient-to-tr from-blue-500 to-purple-600 shadow-[0_0_40px_rgba(59,130,246,0.3)]">
                  <div className="w-full h-full rounded-[22px] bg-slate-900 border-4 border-slate-950 overflow-hidden flex items-center justify-center">
                    <img src="https://i.ibb.co/C38rPz7W/IMG-20251126-WA0004.jpg" alt="Bhushan Dhangar" className="w-full h-full object-cover" />
                  </div>
                </div>
              </TiltCard>
            </div>
          </div>
        </section>

        {/* Contact Section with Web3Forms Key */}
        <section id="contact" className="py-24 px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Let's Build Something <span className="text-blue-400">Together.</span></h2>
            <TiltCard className="max-w-xl mx-auto">
              <form action="https://api.web3forms.com/submit" method="POST" className="bg-slate-800/40 border border-slate-700/50 p-8 rounded-3xl text-left space-y-6">
                <input type="hidden" name="access_key" value="3c14972d-e2d2-4634-a2ed-e73d611af08e" />
                <input type="hidden" name="from_name" value="Bhushan Portfolio Contact" />
                <div>
                  <label className="block text-sm text-slate-300 mb-2">Name</label>
                  <input type="text" name="name" required className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3 text-white outline-none" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-sm text-slate-300 mb-2">Email</label>
                  <input type="email" name="email" required className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3 text-white outline-none" placeholder="john@example.com" />
                </div>
                <div>
                  <label className="block text-sm text-slate-300 mb-2">Message</label>
                  <textarea name="message" required rows={4} className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3 text-white resize-none outline-none" placeholder="Hello Bhushan..."></textarea>
                </div>
                <button type="submit" className="w-full py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-medium transition-all">Send Message</button>
              </form>
            </TiltCard>
          </div>
        </section>
      </main>

      <footer className="py-8 text-center border-t border-slate-800">
        <p className="text-slate-500">© 2026 Bhushan A Dhangar. Built with Machine Learning passion.</p>
      </footer>
    </div>
  );
            }
