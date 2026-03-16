import { Moon, Sun, Terminal } from 'lucide-react';

interface NavbarProps {
    isDark: boolean;
    toggleTheme: () => void;
}

export function Navbar({ isDark, toggleTheme }: NavbarProps) {
    return (
        <nav className="fixed w-full backdrop-blur-md bg-brand-50/80 dark:bg-brand-950/80 border-b border-brand-100 dark:border-brand-900 z-50 transition-colors duration-300">
            <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">

                {/* Logo */}
                <a href="#" className="flex items-center gap-2 font-bold text-xl tracking-tight text-brand-800 dark:text-brand-100 hover:opacity-80 transition-opacity">
                    <Terminal className="w-6 h-6 text-brand-500" />
                    <span>jaymmyx.tech</span>
                </a>

                {/* Navigation & Theme Toggle */}
                <div className="flex items-center gap-6">
                    <div className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600 dark:text-slate-300">
                        <a href="#about" className="hover:text-brand-500 transition-colors">About</a>
                        <a href="#projects" className="hover:text-brand-500 transition-colors">Projects</a>
                        <a href="#contact" className="hover:text-brand-500 transition-colors">Contact</a>
                    </div>

                    <div className="w-px h-4 bg-slate-300 dark:bg-slate-700 hidden md:block"></div>

                    <button
                        onClick={toggleTheme}
                        className="p-2 rounded-full bg-brand-100/50 dark:bg-brand-900/50 hover:bg-brand-200 dark:hover:bg-brand-800 transition-colors focus:outline-none focus:ring-2 focus:ring-brand-500"
                        aria-label="Toggle dark mode"
                    >
                        {isDark ? (
                            <Sun className="w-4 h-4 text-brand-300" />
                        ) : (
                            <Moon className="w-4 h-4 text-brand-700" />
                        )}
                    </button>
                </div>
            </div>
        </nav>
    );
}