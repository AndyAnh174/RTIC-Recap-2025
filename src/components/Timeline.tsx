"use client";

import { ProjectCard } from "./ProjectCard";
import { ProjectSummary } from "@/data/rtic-2025";

interface TimelineProps {
    projects: ProjectSummary[];
}

export function Timeline({ projects }: TimelineProps) {
    return (
        <div className="relative max-w-5xl mx-auto px-4 py-20">
            {/* Central Line with Gradient */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-primary/20 to-transparent -translate-x-1/2 hidden md:block" />

            <div className="space-y-20 md:space-y-32">
                {projects.map((project, index) => (
                    <div key={project.id} className="relative flex flex-col md:flex-row items-center">
                        {/* Timeline Node */}
                        <div className="absolute left-[-1.6rem] md:left-1/2 w-8 h-8 rounded-full bg-white border-4 border-primary shadow-[0_0_20px_rgba(109,93,246,0.3)] z-10 -translate-x-1/2 hidden md:flex items-center justify-center">
                            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                        </div>

                        <div className={`w-full md:w-[46%] ${index % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'}`}>
                            <ProjectCard
                                time={project.time}
                                title={project.title}
                                shortDesc={project.shortDesc}
                                highlights={project.highlights}
                                techStack={project.techStack}
                                image={project.image}
                                index={index}
                            />
                        </div>

                        {/* Month indicator for desktop */}
                        <div className={`absolute top-0 hidden md:block text-sm font-black text-primary/30 uppercase tracking-[0.2em] pointer-events-none
              ${index % 2 === 0 ? 'left-[calc(50%+2rem)]' : 'right-[calc(50%+2rem)]'}`}>
                            {project.month}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
