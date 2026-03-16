import { Github, ExternalLink } from 'lucide-react';

interface ProjectProps {
    title: string;
    description: string;
    tags: string[];
    github: string;
    demo: string;
    image: string;
}

export function ProjectCard({ title, description, tags, github, demo, image }: ProjectProps) {
    return (
        <div className="group flex flex-col rounded-2xl bg-white dark:bg-brand-900/50 border border-brand-100 dark:border-brand-800 overflow-hidden hover:shadow-xl hover:border-brand-300 dark:hover:border-brand-500 transition-all duration-300">

            {/* Image Container */}
            <div className="relative w-full aspect-video overflow-hidden bg-brand-50 dark:bg-brand-950">
                <img
                    src={image}
                    alt={`${title} preview`}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                {/* Subtle overlay */}
                <div className="absolute inset-0 bg-brand-900/10 group-hover:bg-transparent transition-colors duration-300"></div>
            </div>

            {/* Content */}
            <div className="flex flex-col flex-grow p-6 md:p-8">
                <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-100 group-hover:text-brand-500 transition-colors">
                        {title}
                    </h3>
                    <div className="flex gap-3">
                        <a href={github} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-brand-500 transition-colors" aria-label="GitHub Repository">
                            <Github className="w-5 h-5" />
                        </a>
                        {demo !== '#' && (
                            <a href={demo} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-brand-500 transition-colors" aria-label="Live Demo">
                                <ExternalLink className="w-5 h-5" />
                            </a>
                        )}
                    </div>
                </div>

                <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed flex-grow">
                    {description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                    {tags.map((tag, i) => (
                        <span key={i} className="px-3 py-1 text-xs font-semibold bg-brand-50 dark:bg-brand-950 text-brand-600 dark:text-brand-400 rounded-full border border-brand-200 dark:border-brand-800">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}