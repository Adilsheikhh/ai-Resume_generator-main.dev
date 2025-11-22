"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus, Trash2 } from "lucide-react";
import { ResumeData } from "@/lib/types";
import { memo } from "react";

interface EducationSectionProps {
    education: ResumeData["education"];
    onChange: (value: ResumeData["education"]) => void;
    isLoading?: boolean;
}

export const EducationSection = memo(function EducationSection({
    education,
    onChange,
    isLoading,
}: EducationSectionProps) {
    const addEducation = () => {
        onChange([
            ...education,
            { degree: "", school: "", location: "", startDate: "", endDate: "", duration: "" },
        ]);
    };

    const removeEducation = (index: number) => {
        const newEdu = [...education];
        newEdu.splice(index, 1);
        onChange(newEdu);
    };

    const updateEducation = (index: number, field: string, value: any) => {
        const newEdu = [...education];
        newEdu[index] = { ...newEdu[index], [field]: value };
        onChange(newEdu);
    };

    return (
        <div className="space-y-3 sm:space-y-4">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 sm:gap-0">
                <h2 className="text-base sm:text-lg font-semibold">Education</h2>
                <Button
                    onClick={addEducation}
                    variant="outline"
                    size="sm"
                    className="text-xs sm:text-sm w-full sm:w-auto"
                >
                    <Plus className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                    Add Education
                </Button>
            </div>
            {education.map((edu, index) => (
                <div key={index} className="space-y-3 sm:space-y-4 border rounded-lg p-3 sm:p-4">
                    <div className="flex justify-between items-center">
                        <h3 className="font-medium text-sm sm:text-base">Education {index + 1}</h3>
                        <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => removeEducation(index)}
                            className="h-8 w-8 p-0"
                        >
                            <Trash2 className="w-4 h-4" />
                        </Button>
                    </div>
                    <div className="grid gap-3 sm:gap-4">
                        <Input
                            placeholder="Degree"
                            value={edu.degree}
                            onChange={(e) => updateEducation(index, "degree", e.target.value)}
                            disabled={isLoading}
                            className="text-sm sm:text-base"
                        />
                        <Input
                            placeholder="School"
                            value={edu.school}
                            onChange={(e) => updateEducation(index, "school", e.target.value)}
                            disabled={isLoading}
                            className="text-sm sm:text-base"
                        />
                        <Input
                            placeholder="Location"
                            value={edu.location}
                            onChange={(e) => updateEducation(index, "location", e.target.value)}
                            disabled={isLoading}
                            className="text-sm sm:text-base"
                        />
                        <div className="grid grid-cols-1 xs:grid-cols-2 gap-3 sm:gap-4">
                            <Input
                                placeholder="Start Date"
                                value={edu.startDate}
                                onChange={(e) => updateEducation(index, "startDate", e.target.value)}
                                disabled={isLoading}
                                className="text-sm sm:text-base"
                            />
                            <Input
                                placeholder="End Date"
                                value={edu.endDate}
                                onChange={(e) => updateEducation(index, "endDate", e.target.value)}
                                disabled={isLoading}
                                className="text-sm sm:text-base"
                            />
                        </div>
                        <Input
                            placeholder="Duration"
                            value={edu.duration}
                            onChange={(e) => updateEducation(index, "duration", e.target.value)}
                            disabled={isLoading}
                            className="text-sm sm:text-base"
                        />
                    </div>
                </div>
            ))}
        </div>
    );
});
