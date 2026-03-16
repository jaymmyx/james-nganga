import { Github, DownloadCloud, Terminal } from 'lucide-react';
// Import your resume PDF here
import resumePdf from '../../assets/james-njoroge-resume.pdf';

export function Hero() {
  return (
    // Reduced pt-24 md:pt-32 to pt-8 md:pt-12 to fix the excessive top spacing
    <section className="relative flex flex-col items-center justify-between min-h-[85vh] pb-32 pt-8 md:flex-row md:pt-12 gap-16 md:gap-24 overflow-hidden">
      
      {/* BACKGROUND WAVE PATTERN */}
      <div className="absolute bottom-0 left-0 w-full h-40 -z-10 opacity-60 dark:opacity-40">
        <svg viewBox="0 0 1440 320" className="w-full h-full" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path fill="var(--color-brand-100)" fillOpacity="1" d="M0,192L48,197.3C96,203,192,213,288,192C384,171,480,117,576,122.7C672,128,768,192,864,197.3C960,203,1056,149,1152,144C1248,139,1344,181,1392,202.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,
96,320,48,320L0,320Z"></path>
        </svg>
      </div>

      {/* Text Content */}
      <div className="flex-1 space-y-6 md:space-y-8 md:w-3/5 text-center md:text-left">
        {/* Status Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:mt-16 mt-16 rounded-full bg-brand-100 dark:bg-brand-900/50 text-brand-700 dark:text-brand-300 text-sm font-semibold mb-2 border border-brand-200 dark:border-brand-800 focus:outline-none focus:ring-2 focus:ring-brand-500">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-brand-500"></span>
          </span>
          Open to High-Stakes Internships
        </div>
        
        {/* Command H1 (Scaled down from 7xl to 5xl/6xl) */}
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-slate-950 dark:text-white leading-[1.1]">
          Crafting scalable <br/>
          <span className="text-brand-500">digital experiences.</span>
        </h1>
        
        {/* Compelling Bio */}
        <p className="text-lg md:text-xl text-slate-700 dark:text-slate-300 max-w-2xl leading-relaxed mx-auto md:mx-0">
          I am a BSc. Mathematics & Computer Science student specializing in modern frontend engineering. My background enables me to approach technical challenges with deep analytical rigor, building pixel-perfect web apps and robust desktop environments focused on intuitive UI/UX.
        </p>
        
        {/* Revamped CTA Group */}
        <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 pt-4 md:pt-6">
          <a 
            href={resumePdf} 
            download="James-Njoroge-Resume.pdf" 
            className="group flex items-center gap-2.5 bg-brand-500 hover:bg-brand-600 text-white px-7 py-3.5 rounded-xl font-semibold transition-all shadow-lg shadow-brand-500/25 text-lg"
          >
            <DownloadCloud className="w-5 h-5 group-hover:animate-pulse" />
            Download CV
          </a>
          
          <a 
            href="#projects" 
            className="flex items-center gap-2.5 bg-white dark:bg-brand-900 border border-slate-200 dark:border-brand-800 text-slate-800 dark:text-slate-200 hover:border-brand-500 dark:hover:border-brand-500 px-6 py-3 rounded-xl font-medium transition-colors"
          >
            <Terminal className="w-5 h-5 text-brand-500" />
            View Projects
          </a>
          
          <a 
            href="https://github.com/jaymmyx" 
            target="_blank" 
            rel="noreferrer" 
            className="flex items-center gap-2.5 px-6 py-3 rounded-xl font-medium bg-white dark:bg-brand-900 border border-slate-200 dark:border-brand-800 text-slate-700 dark:text-slate-200 hover:border-brand-500 dark:hover:border-brand-500 transition-colors"
          >
            <Github className="w-5 h-5" /> 
            GitHub
          </a>
        </div>
      </div>

      {/* The "Taa" SVG Illustration */}
      <div className="flex-1 flex justify-center items-center relative w-full max-w-sm aspect-square md:w-2/5 mt-8 md:mt-0">
        <svg viewBox="0 0 500 500" className="w-full h-full drop-shadow-md z-10" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="metal" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#1e293b" />
              <stop offset="50%" stopColor="#64748b" />
              <stop offset="100%" stopColor="#0f172a" />
            </linearGradient>

            <linearGradient id="glass" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(255, 255, 255, 0.05)" />
              <stop offset="20%" stopColor="rgba(255, 255, 255, 0.2)" />
              <stop offset="80%" stopColor="rgba(255, 255, 255, 0.05)" />
              <stop offset="100%" stopColor="rgba(255, 255, 255, 0.3)" />
            </linearGradient>
          </defs>

          {/* Background Tech Stack */}
          <g className="opacity-20 dark:opacity-30" strokeWidth="1" fill="none">
            <g transform="translate(420, 100) scale(0.4)" stroke="#0ea5e9">
              <ellipse cx="0" cy="0" rx="45" ry="15" transform="rotate(30)" />
              <ellipse cx="0" cy="0" rx="45" ry="15" transform="rotate(90)" />
              <ellipse cx="0" cy="0" rx="45" ry="15" transform="rotate(150)" />
              <circle cx="0" cy="0" r="8" fill="#0ea5e9" />
            </g>
            <text x="30" y="450" fontSize="40" fill="#3b82f6" opacity="0.3" fontFamily="monospace" fontWeight="bold">TS</text>
          </g>

          {/* Taa Base */}
          <path d="M170,410 Q250,435 330,410 L305,340 Q250,325 195,340 Z" fill="url(#metal)" />
          <path d="M170,410 Q250,435 330,410 L330,425 Q250,450 170,425 Z" fill="#0f172a" />
          <rect x="290" y="335" width="18" height="12" fill="#020617" rx="3" transform="rotate(10 290 335)" />

          {/* Burner Mechanism */}
          <path d="M210,340 L290,340 L275,305 L225,305 Z" fill="url(#metal)" />
          <rect x="235" y="305" width="30" height="15" fill="#334155" />

          {/* Back Glass Globe */}
          <path d="M225,305 C170,240 180,160 220,135 L280,135 C320,160 330,240 275,305 Z" fill="url(#glass)" opacity="0.4" />

          {/* JavaScript Flame */}
          <g transform="translate(250, 245)">
            <rect x="-28" y="-28" width="56" height="56" fill="#f7df1e" rx="6" />
            <text x="2" y="14" fontSize="32" fill="#000000" fontWeight="900" textAnchor="middle" fontFamily="sans-serif" letterSpacing="-1">JS</text>
          </g>

          {/* Front Glass Globe */}
          <path d="M225,305 C170,240 180,160 220,135 L280,135 C320,160 330,240 275,305 Z" fill="none" stroke="#e2e8f0" strokeWidth="1" opacity="0.7" />
          <path d="M235,290 C195,230 205,170 230,145 C240,145 230,210 245,290 Z" fill="#ffffff" opacity="0.1" />

          {/* Top Chimney */}
          <path d="M210,135 L290,135 L265,75 L235,75 Z" fill="url(#metal)" />
          <path d="M225,75 L275,75 L255,45 L245,45 Z" fill="url(#metal)" />
          <path d="M200,45 L300,45 L290,35 L210,35 Z" fill="url(#metal)" />
          <path d="M230,35 L270,35 L260,20 L240,20 Z" fill="#334155" />

          {/* Wire Guards */}
          <g stroke="url(#metal)" strokeWidth="3" fill="none" strokeLinecap="round">
            <path d="M187,220 L313,220" opacity="0.8" />
            <path d="M205,320 C160,240 160,160 215,130" />
            <path d="M295,320 C340,240 340,160 285,130" />
          </g>

          {/* Handle */}
          <path d="M165,360 C60,180 160,10 250,10 C340,10 440,180 335,360" fill="none" stroke="url(#metal)" strokeWidth="5" strokeLinecap="round" />
        </svg>
      </div>
    </section>
  );
}