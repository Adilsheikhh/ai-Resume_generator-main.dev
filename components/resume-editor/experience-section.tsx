"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Plus, Trash2 } from "lucide-react";
import { ResumeData } from "@/lib/types";
import { memo } from "react";

interface ExperienceSectionProps {
    experience: ResumeData["experience"];
    onChange: (value: ResumeData["experience"]) => void;
    isLoading?: boolean;
}

export const ExperienceSection = memo(function ExperienceSection({
    experience,
    onChange,
    isLoading,
}: ExperienceSectionProps) {
    const addExperience = () => {
        onChange([
            ...experience,
            {
                position: "",
                company: "",
                location: "",
                duration: "",
                description: [],
            },
        ]);
    };

    const removeExperience = (index: number) => {
        const newExp = [...experience];
        newExp.splice(index, 1);
        onChange(newExp);
    };

    const updateExperience = (index: number, field: string, value: any) => {
        const newExp = [...experience];
        newExp[index] = { ...newExp[index], [field]: value };
        onChange(newExp);
    };

    return (
        <div className="space-y-3 sm:space-y-4">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 sm:gap-0">
                <h2 className="text-base sm:text-lg font-semibold">Experience</h2>
                <Button
                    onClick={addExperience}
                    variant="outline"
                    size="sm"
                    className="text-xs sm:text-sm w-full sm:w-auto"
                >
                    <Plus className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                    Add Experience
                </Button>
            </div>
            {experience.map((exp, index) => (
                <div key={index} className="space-y-3 sm:space-y-4 border rounded-lg p-3 sm:p-4">
                    <div className="flex justify-between items-center">
                        <h3 className="font-medium text-sm sm:text-base">Experience {index + 1}</h3>
                        <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => removeExperience(index)}
                            className="h-8 w-8 p-0"
                        >
                            <Trash2 className="w-4 h-4" />
                        </Button>
                    </div>
                    <div className="grid gap-3 sm:gap-4">
                        <Input
                            placeholder="Job Position"
                            value={exp.position || ""}
                            onChange={(e) => updateExperience(index, "position", e.target.value)}
                            disabled={isLoading}
                            className="text-sm sm:text-base"
                        />
                        <Input
                            placeholder="Company"
                            value={exp.company || ""}
                            onChange={(e) => updateExperience(index, "company", e.target.value)}
                            disabled={isLoading}
                            className="text-sm sm:text-base"
                        />
                        <Input
                            placeholder="Location"
                            value={exp.location || ""}
                            onChange={(e) => updateExperience(index, "location", e.target.value)}
                            disabled={isLoading}
                            className="text-sm sm:text-base"
                        />
                        <Input
                            placeholder="Duration (e.g., 2020 - Present)"
                            value={exp.duration || ""}
                            onChange={(e) => updateExperience(index, "duration", e.target.value)}
                            disabled={isLoading}
                            className="text-sm sm:text-base"
                        />
                        <Textarea
                            placeholder="Description (each line will be a bullet point)"
                            value={Array.isArray(exp.description) ? exp.description.join("\n") : ""}
                            onChange={(e) => updateExperience(index, "description", e.target.value.split("\n"))}
                            disabled={isLoading}
                            className="text-sm sm:text-base min-h-[60px] sm:min-h-[80px]"
                        />
                    </div>
                </div>
            ))}
        </div>
    );
});
