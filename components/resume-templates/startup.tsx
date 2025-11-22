import React from 'react';
import { cn } from '@/lib/utils';
import { ResumeData } from "@/lib/types";
import { Mail, MapPin, Phone, Globe, Github, Linkedin } from 'lucide-react';

interface StartupTemplateProps {
    content: ResumeData;
    className?: string;
}

export function StartupTemplate({ content, className }: StartupTemplateProps) {
    return (
        <div className={cn("max-w-[850px] mx-auto bg-white text-slate-800 font-sans", className)}>
            {/* Header with bold gradient background */}
            <header className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-8 sm:p-10">
                <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-2">{content.name}</h1>
                <h2 className="text-xl sm:text-2xl font-medium text-indigo-100 mb-6">{content.title}</h2>

                <div className="flex flex-wrap gap-4 text-sm sm:text-base text-white/90">
                    <div className="flex items-center gap-1.5">
                        <Mail className="w-4 h-4" />
                        <span>{content.contact.email}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                        <Phone className="w-4 h-4" />
                        <span>{content.contact.phone}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                        <MapPin className="w-4 h-4" />
                        <span>{content.contact.location}</span>
                    </div>
                </div>
            </header>

            <div className="p-8 sm:p-10 grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Main Content Column */}
                <div className="md:col-span-2 space-y-8">
                    <section>
                        <h3 className="text-xl font-bold text-indigo-600 uppercase tracking-wider mb-4 flex items-center gap-2">
                            <span className="w-8 h-1 bg-indigo-600 rounded-full"></span>
                            Profile
                        </h3>
                        <p className="text-slate-600 leading-relaxed text-lg">
                            {content.summary}
                        </p>
                    </section>

                    <section>
                        <h3 className="text-xl font-bold text-indigo-600 uppercase tracking-wider mb-6 flex items-center gap-2">
                            <span className="w-8 h-1 bg-indigo-600 rounded-full"></span>
                            Experience
                        </h3>
                        <div className="space-y-8">
                            {content.experience.map((exp, index) => (
                                <div key={index} className="relative pl-6 border-l-2 border-indigo-100">
                                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-indigo-600 border-4 border-white"></div>
                                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-1">
                                        <h4 className="text-lg font-bold text-slate-800">{exp.position}</h4>
                                        <span className="text-sm font-medium text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded">
                                            {exp.duration}
                                        </span>
                                    </div>
                                    <div className="text-slate-500 font-medium mb-3">{exp.company} • {exp.location}</div>
                                    <ul className="space-y-2">
                                        {exp.description.map((item, i) => (
                                            <li key={i} className="text-slate-600 leading-relaxed flex items-start gap-2">
                                                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-indigo-400 shrink-0"></span>
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </section>

                    {content.projects && content.projects.length > 0 && (
                        <section>
                            <h3 className="text-xl font-bold text-indigo-600 uppercase tracking-wider mb-6 flex items-center gap-2">
                                <span className="w-8 h-1 bg-indigo-600 rounded-full"></span>
                                Projects
                            </h3>
                            <div className="grid gap-4">
                                {content.projects.map((project, index) => (
                                    <div key={index} className="bg-slate-50 p-4 rounded-lg border border-slate-100 hover:border-indigo-200 transition-colors">
                                        <div className="flex justify-between items-start mb-2">
                                            <h4 className="font-bold text-slate-800">{project.name}</h4>
                                            {project.link && (
                                                <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-xs text-indigo-600 hover:underline flex items-center gap-1">
                                                    <Globe className="w-3 h-3" /> View
                                                </a>
                                            )}
                                        </div>
                                        <p className="text-sm text-slate-600 mb-3">{project.description}</p>
                                        {project.technologies && (
                                            <div className="flex flex-wrap gap-2">
                                                {project.technologies.map((tech, i) => (
                                                    <span key={i} className="text-xs font-medium text-slate-500 bg-white px-2 py-1 rounded border border-slate-200">
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}
                </div>

                {/* Sidebar Column */}
                <div className="space-y-8">
                    <section>
                        <h3 className="text-lg font-bold text-slate-800 mb-4 border-b-2 border-indigo-100 pb-2">
                            Skills
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {content.skills.map((skill, index) => (
                                <span
                                    key={index}
                                    className="px-3 py-1.5 bg-indigo-600 text-white text-sm font-medium rounded-md shadow-sm"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </section>

                    <section>
                        <h3 className="text-lg font-bold text-slate-800 mb-4 border-b-2 border-indigo-100 pb-2">
                            Education
                        </h3>
                        <div className="space-y-4">
                            {content.education.map((edu, index) => (
                                <div key={index}>
                                    <h4 className="font-bold text-slate-800">{edu.school}</h4>
                                    <div className="text-indigo-600 text-sm font-medium mb-1">{edu.degree}</div>
                                    <div className="text-slate-500 text-sm">{edu.duration}</div>
                                    <div className="text-slate-400 text-xs">{edu.location}</div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {content.links && content.links.length > 0 && (
                        <section>
                            <h3 className="text-lg font-bold text-slate-800 mb-4 border-b-2 border-indigo-100 pb-2">
                                Links
                            </h3>
                            <div className="space-y-3">
                                {content.links.map((link, index) => (
                                    <a
                                        key={index}
                                        href={link.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 text-slate-600 hover:text-indigo-600 transition-colors group"
                                    >
                                        <div className="p-1.5 bg-slate-100 rounded group-hover:bg-indigo-50 transition-colors">
                                            <Globe className="w-4 h-4" />
                                        </div>
                                        <div>
                                            <div className="font-medium text-sm">{link.title}</div>
                                            {link.description && <div className="text-xs text-slate-400">{link.description}</div>}
                                        </div>
                                    </a>
                                ))}
                            </div>
                        </section>
                    )}
                </div>
            </div>
        </div>
    );
}
