"use client";

import { Textarea } from "@/components/ui/textarea";
import { ResumeData } from "@/lib/types";
import { memo } from "react";

interface SkillsSectionProps {
    skills: ResumeData["skills"];
    onChange: (value: ResumeData["skills"]) => void;
    isLoading?: boolean;
}

export const SkillsSection = memo(function SkillsSection({
    skills,
    onChange,
    isLoading,
}: SkillsSectionProps) {
    return (
        <div className="space-y-3 sm:space-y-4">
            <h2 className="text-base sm:text-lg font-semibold">Skills</h2>
            <Textarea
                value={skills.join(", ")}
                onChange={(e) =>
                    onChange(e.target.value.split(",").map((s) => s.trim()))
                }
                disabled={isLoading}
                placeholder="Enter skills separated by commas"
                className="min-h-[80px] sm:min-h-[100px] text-sm sm:text-base"
            />
        </div>
    );
});
