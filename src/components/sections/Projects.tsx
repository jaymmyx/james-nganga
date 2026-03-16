import { ProjectCard } from '../ui/ProjectCard';
import { projects } from '../../data/projects';

export function Projects() {
    return (
        <section id="projects" className="space-y-12">
            <div className="border-b border-brand-200 dark:border-brand-800 pb-4">
                <h2 className="text-3xl font-bold text-brand-900 dark:text-brand-50">Featured Work</h2>
                <p className="text-slate-500 dark:text-slate-400 mt-2">
                    Showcasing recent full-stack applications and desktop environments.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {projects.map((project) => (
                    <ProjectCard
                        key={project.id}
                        title={project.title}
                        description={project.description}
                        tags={project.tags}
                        github={project.github}
                        demo={project.demo}
                        image={project.image}
                    />
                ))}
            </div>
        </section>
    );
}