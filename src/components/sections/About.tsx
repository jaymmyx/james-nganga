import { Code2, Database, Calculator, MonitorSmartphone } from 'lucide-react';

export function About() {
    const skills = [
        {
            category: "Frontend & UI/UX",
            icon: <MonitorSmartphone className="w-5 h-5 text-brand-500" />,
            technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vite", "D3.js"]
        },
        {
            category: "Backend & Systems",
            icon: <Database className="w-5 h-5 text-brand-500" />,
            technologies: ["Node.js", "PostgreSQL", "SQLite", "Electron", "REST APIs"]
        },
        {
            category: "Computational & Analytical",
            icon: <Calculator className="w-5 h-5 text-brand-500" />,
            technologies: ["MATLAB", "Numerical Analysis", "Mathematical Modeling", "Estimation Theory"]
        },
        {
            category: "Tools & Practices",
            icon: <Code2 className="w-5 h-5 text-brand-500" />,
            technologies: ["Git / GitHub", "Responsive Design", "Agile Workflow", "System Architecture"]
        }
    ];

    return (
        <section id="about" className="py-20 space-y-12 border-t border-brand-100 dark:border-brand-900">

            <div className="border-b border-brand-200 dark:border-brand-800 pb-4">
                <h2 className="text-3xl font-bold text-brand-900 dark:text-brand-50">About & Arsenal</h2>
                <p className="text-slate-500 dark:text-slate-400 mt-2">
                    The background and tools that power my digital experiences.
                </p>
            </div>

            <div className="flex flex-col lg:flex-row gap-16">

                {/* The Narrative */}
                <div className="flex-1 space-y-6 text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
                    <p>
                        I am currently in my third year pursuing a BSc. in Mathematics and Computer Science at J.K.U.A.T. My engineering philosophy is built on the belief that the best user experiences are backed by rock-solid logic and architecture.
                    </p>
                    <p>
                        My journey bridges the gap between deep mathematical theory—handling ordinary differential equations, real analysis, and complex numerical methods—and practical, scalable software engineering.
                    </p>
                    <p>
                        Whether I am utilizing D3.js and React to visualize data on the web, optimizing a Next.js application for flawless SSR performance, or structuring a local SQLite database for an Electron desktop app like Aetlantiq-OS, I bring a high level of analytical rigor to every line of code I write.
                    </p>
                </div>

                {/* The Skills Grid */}
                <div className="flex-1">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {skills.map((skillGroup, index) => (
                            <div
                                key={index}
                                className="p-6 rounded-2xl bg-brand-50/50 dark:bg-brand-900/20 border border-brand-100 dark:border-brand-800/50 hover:border-brand-300 dark:hover:border-brand-700 transition-colors"
                            >
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="p-2 bg-white dark:bg-brand-950 rounded-lg shadow-sm border border-brand-100 dark:border-brand-800">
                                        {skillGroup.icon}
                                    </div>
                                    <h3 className="font-bold text-slate-800 dark:text-slate-100">
                                        {skillGroup.category}
                                    </h3>
                                </div>
                                <ul className="space-y-2">
                                    {skillGroup.technologies.map((tech, i) => (
                                        <li key={i} className="flex items-center gap-2 text-slate-600 dark:text-slate-400 text-sm font-medium">
                                            <span className="w-1.5 h-1.5 rounded-full bg-brand-400 dark:bg-brand-600"></span>
                                            {tech}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}