"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus, Trash2 } from "lucide-react";
import { ResumeData } from "@/lib/types";
import { memo } from "react";

interface LinksSectionProps {
    links: ResumeData["links"];
    onChange: (value: ResumeData["links"]) => void;
    isLoading?: boolean;
}

export const LinksSection = memo(function LinksSection({
    links,
    onChange,
    isLoading,
}: LinksSectionProps) {
    const addLink = () => {
        onChange([
            ...(links || []),
            { title: "", url: "", description: "" },
        ]);
    };

    const removeLink = (index: number) => {
        const newLinks = [...(links || [])];
        newLinks.splice(index, 1);
        onChange(newLinks);
    };

    const updateLink = (index: number, field: string, value: any) => {
        const newLinks = [...(links || [])];
        newLinks[index] = { ...newLinks[index], [field]: value };
        onChange(newLinks);
    };

    return (
        <div className="space-y-3 sm:space-y-4">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 sm:gap-0">
                <h2 className="text-base sm:text-lg font-semibold">Links</h2>
                <Button
                    onClick={addLink}
                    variant="outline"
                    size="sm"
                    className="text-xs sm:text-sm w-full sm:w-auto"
                >
                    <Plus className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                    Add Link
                </Button>
            </div>
            {(links || []).map((link, index) => (
                <div key={index} className="space-y-3 sm:space-y-4 border rounded-lg p-3 sm:p-4">
                    <div className="flex justify-between items-center">
                        <h3 className="font-medium text-sm sm:text-base">Link {index + 1}</h3>
                        <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => removeLink(index)}
                            className="h-8 w-8 p-0"
                        >
                            <Trash2 className="w-4 h-4" />
                        </Button>
                    </div>
                    <div className="grid gap-3 sm:gap-4">
                        <Input
                            placeholder="Title (e.g., LinkedIn, GitHub, Portfolio)"
                            value={link.title || ""}
                            onChange={(e) => updateLink(index, "title", e.target.value)}
                            disabled={isLoading}
                            className="text-sm sm:text-base"
                        />
                        <Input
                            placeholder="URL"
                            value={link.url || ""}
                            onChange={(e) => updateLink(index, "url", e.target.value)}
                            disabled={isLoading}
                            className="text-sm sm:text-base"
                        />
                        <Input
                            placeholder="Description (optional)"
                            value={link.description || ""}
                            onChange={(e) => updateLink(index, "description", e.target.value)}
                            disabled={isLoading}
                            className="text-sm sm:text-base"
                        />
                    </div>
                </div>
            ))}
        </div>
    );
});
