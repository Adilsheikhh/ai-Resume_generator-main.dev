import React from 'react';
import { cn } from '@/lib/utils';
import { ResumeData } from "@/lib/types";

interface AcademicTemplateProps {
    content: ResumeData;
    className?: string;
}

export function AcademicTemplate({ content, className }: AcademicTemplateProps) {
    return (
        <div className={cn("max-w-[850px] mx-auto p-8 sm:p-12 bg-white text-black font-serif", className)}>
            {/* Minimal Header */}
            <header className="border-b-2 border-black pb-6 mb-8 text-center">
                <h1 className="text-3xl sm:text-4xl font-bold uppercase tracking-widest mb-3">{content.name}</h1>
                <div className="flex flex-wrap justify-center gap-x-4 gap-y-1 text-sm sm:text-base">
                    <span>{content.contact.location}</span>
                    <span>•</span>
                    <span>{content.contact.phone}</span>
                    <span>•</span>
                    <a href={`mailto:${content.contact.email}`} className="hover:underline">{content.contact.email}</a>
                </div>
                {content.links && content.links.length > 0 && (
                    <div className="flex flex-wrap justify-center gap-x-4 gap-y-1 text-sm mt-2">
                        {content.links.map((link, index) => (
                            <React.Fragment key={index}>
                                {index > 0 && <span>•</span>}
                                <a href={link.url} target="_blank" rel="noopener noreferrer" className="hover:underline">
                                    {link.title}
                                </a>
                            </React.Fragment>
                        ))}
                    </div>
                )}
            </header>

            {/* Education First for Academic CVs */}
            <section className="mb-8">
                <h2 className="text-lg font-bold uppercase border-b border-black mb-4 pb-1">Education</h2>
                <div className="space-y-4">
                    {content.education.map((edu, index) => (
                        <div key={index} className="flex flex-col sm:flex-row sm:justify-between">
                            <div>
                                <div className="font-bold">{edu.school}</div>
                                <div className="italic">{edu.degree}</div>
                                <div className="text-sm">{edu.location}</div>
                            </div>
                            <div className="text-right font-medium whitespace-nowrap">
                                {edu.duration}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Research Interests / Summary */}
            <section className="mb-8">
                <h2 className="text-lg font-bold uppercase border-b border-black mb-4 pb-1">Professional Summary</h2>
                <p className="leading-relaxed text-justify">
                    {content.summary}
                </p>
            </section>

            {/* Experience */}
            <section className="mb-8">
                <h2 className="text-lg font-bold uppercase border-b border-black mb-4 pb-1">Experience</h2>
                <div className="space-y-6">
                    {content.experience.map((exp, index) => (
                        <div key={index}>
                            <div className="flex justify-between items-baseline mb-1">
                                <h3 className="font-bold text-lg">{exp.position}</h3>
                                <span className="font-medium">{exp.duration}</span>
                            </div>
                            <div className="italic mb-2">{exp.company}, {exp.location}</div>
                            <ul className="list-disc list-outside ml-5 space-y-1">
                                {exp.description.map((item, i) => (
                                    <li key={i} className="leading-relaxed pl-1">{item}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </section>

            {/* Projects as "Selected Work" */}
            {content.projects && content.projects.length > 0 && (
                <section className="mb-8">
                    <h2 className="text-lg font-bold uppercase border-b border-black mb-4 pb-1">Selected Projects</h2>
                    <div className="space-y-4">
                        {content.projects.map((project, index) => (
                            <div key={index}>
                                <div className="flex justify-between items-baseline">
                                    <h3 className="font-bold">{project.name}</h3>
                                    {project.duration && <span className="text-sm">{project.duration}</span>}
                                </div>
                                <p className="text-sm mt-1 mb-1">{project.description}</p>
                                {project.technologies && (
                                    <div className="text-sm italic text-gray-700">
                                        Technologies: {project.technologies.join(", ")}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </section>
            )}

            {/* Skills as a compact list */}
            <section>
                <h2 className="text-lg font-bold uppercase border-b border-black mb-4 pb-1">Skills</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2">
                    {content.skills.map((skill, index) => (
                        <div key={index} className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 bg-black rounded-full"></span>
                            <span>{skill}</span>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
