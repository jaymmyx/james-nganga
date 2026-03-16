import { useTheme } from './hooks/useTheme';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Projects } from './components/sections/Projects';
import { Contact } from './components/sections/Contact';

export default function App() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen font-sans selection:bg-brand-500 selection:text-white flex flex-col">
      <Navbar isDark={isDark} toggleTheme={toggleTheme} />
      
      {/* flex-grow ensures the footer stays at the bottom if content is short */}
      <main className="flex-grow max-w-5xl mx-auto px-6 w-full">
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>

      <footer className="border-t border-brand-100 dark:border-brand-900 py-8 text-center text-slate-500 dark:text-slate-400 mt-12">
        <p>© {new Date().getFullYear()} Jaymmyx. Built with React, Tailwind & Mathematics.</p>
      </footer>
    </div>
  );
}