"use client";

import { ResumeData } from "@/lib/types";
import { PersonalInfoSection } from "./personal-info";
import { ExperienceSection } from "./experience-section";
import { EducationSection } from "./education-section";
import { ProjectsSection } from "./projects-section";
import { SkillsSection } from "./skills-section";
import { LinksSection } from "./links-section";
import { useCallback } from "react";

interface ResumeSectionProps {
  data: ResumeData;
  onChangeAction: (data: ResumeData) => void;
  isLoading?: boolean;
}

export function ResumeSection({
  data,
  onChangeAction,
  isLoading,
}: ResumeSectionProps) {
  // Optimized handler that only updates local state
  // We removed the server action call that was causing lag
  const handleChange = useCallback((section: string, value: any) => {
    const updatedData = {
      ...data,
      [section]: value,
    };

    onChangeAction({
      ...updatedData,
      // Ensure optional fields are handled properly
      projects: updatedData.projects || [],
      links: updatedData.links || []
    });
  }, [data, onChangeAction]);

  return (
    <div className="space-y-6 sm:space-y-8">
      <PersonalInfoSection
        data={data}
        onChange={handleChange}
        isLoading={isLoading}
      />

      <ExperienceSection
        experience={data.experience}
        onChange={(val) => handleChange("experience", val)}
        isLoading={isLoading}
      />

      <EducationSection
        education={data.education}
        onChange={(val) => handleChange("education", val)}
        isLoading={isLoading}
      />

      <ProjectsSection
        projects={data.projects}
        onChange={(val) => handleChange("projects", val)}
        isLoading={isLoading}
      />

      <LinksSection
        links={data.links}
        onChange={(val) => handleChange("links", val)}
        isLoading={isLoading}
      />

      <SkillsSection
        skills={data.skills}
        onChange={(val) => handleChange("skills", val)}
        isLoading={isLoading}
      />
    </div>
  );
}