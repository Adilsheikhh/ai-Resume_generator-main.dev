"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Plus, Trash2 } from "lucide-react";
import { ResumeData } from "@/lib/types";
import { memo } from "react";

interface ProjectsSectionProps {
    projects: ResumeData["projects"];
    onChange: (value: ResumeData["projects"]) => void;
    isLoading?: boolean;
}

export const ProjectsSection = memo(function ProjectsSection({
    projects,
    onChange,
    isLoading,
}: ProjectsSectionProps) {
    const addProject = () => {
        onChange([
            ...(projects || []),
            {
                name: "",
                description: "",
                link: "",
                technologies: [],
                duration: "",
            },
        ]);
    };

    const removeProject = (index: number) => {
        const newProjects = [...(projects || [])];
        newProjects.splice(index, 1);
        onChange(newProjects);
    };

    const updateProject = (index: number, field: string, value: any) => {
        const newProjects = [...(projects || [])];
        newProjects[index] = { ...newProjects[index], [field]: value };
        onChange(newProjects);
    };

    return (
        <div className="space-y-3 sm:space-y-4">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 sm:gap-0">
                <h2 className="text-base sm:text-lg font-semibold">Projects</h2>
                <Button
                    onClick={addProject}
                    variant="outline"
                    size="sm"
                    className="text-xs sm:text-sm w-full sm:w-auto"
                >
                    <Plus className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                    Add Project
                </Button>
            </div>
            {(projects || []).map((project, index) => (
                <div key={index} className="space-y-3 sm:space-y-4 border rounded-lg p-3 sm:p-4">
                    <div className="flex justify-between items-center">
                        <h3 className="font-medium text-sm sm:text-base">Project {index + 1}</h3>
                        <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => removeProject(index)}
                            className="h-8 w-8 p-0"
                        >
                            <Trash2 className="w-4 h-4" />
                        </Button>
                    </div>
                    <div className="grid gap-3 sm:gap-4">
                        <Input
                            placeholder="Project Name"
                            value={project.name || ""}
                            onChange={(e) => updateProject(index, "name", e.target.value)}
                            disabled={isLoading}
                            className="text-sm sm:text-base"
                        />
                        <Textarea
                            placeholder="Project Description"
                            value={project.description || ""}
                            onChange={(e) => updateProject(index, "description", e.target.value)}
                            disabled={isLoading}
                            className="text-sm sm:text-base min-h-[60px] sm:min-h-[80px]"
                        />
                        <Input
                            placeholder="Project Link (optional)"
                            value={project.link || ""}
                            onChange={(e) => updateProject(index, "link", e.target.value)}
                            disabled={isLoading}
                            className="text-sm sm:text-base"
                        />
                        <Input
                            placeholder="Duration (e.g., 2019-2020)"
                            value={project.duration || ""}
                            onChange={(e) => updateProject(index, "duration", e.target.value)}
                            disabled={isLoading}
                            className="text-sm sm:text-base"
                        />
                        <div>
                            <Label className="text-sm sm:text-base">Technologies Used</Label>
                            <Textarea
                                placeholder="Enter technologies separated by commas (e.g., React, TypeScript, Node.js)"
                                value={(project.technologies || []).join(", ")}
                                onChange={(e) => updateProject(index, "technologies", e.target.value.split(",").map((s: string) => s.trim()))}
                                disabled={isLoading}
                                className="text-sm sm:text-base mt-1 min-h-[60px]"
                            />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
});
