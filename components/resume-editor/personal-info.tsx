"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ResumeData } from "@/lib/types";
import { memo } from "react";

interface PersonalInfoSectionProps {
    data: ResumeData;
    onChange: (section: string, value: any) => void;
    isLoading?: boolean;
}

export const PersonalInfoSection = memo(function PersonalInfoSection({
    data,
    onChange,
    isLoading,
}: PersonalInfoSectionProps) {
    return (
        <div className="space-y-6 sm:space-y-8">
            <div className="space-y-3 sm:space-y-4">
                <h2 className="text-base sm:text-lg font-semibold">Personal Information</h2>
                <div className="grid gap-3 sm:gap-4">
                    <div>
                        <Label htmlFor="name" className="text-sm sm:text-base">Name</Label>
                        <Input
                            id="name"
                            value={data.name}
                            onChange={(e) => onChange("name", e.target.value)}
                            disabled={isLoading}
                            className="mt-1"
                        />
                    </div>
                    <div>
                        <Label htmlFor="title" className="text-sm sm:text-base">Professional Title</Label>
                        <Input
                            id="title"
                            value={data.title}
                            onChange={(e) => onChange("title", e.target.value)}
                            disabled={isLoading}
                            className="mt-1"
                        />
                    </div>
                </div>
            </div>

            <div className="space-y-3 sm:space-y-4">
                <h2 className="text-base sm:text-lg font-semibold">Contact Information</h2>
                <div className="grid gap-3 sm:gap-4">
                    <div>
                        <Label htmlFor="email" className="text-sm sm:text-base">Email</Label>
                        <Input
                            id="email"
                            value={data.contact.email}
                            onChange={(e) =>
                                onChange("contact", {
                                    ...data.contact,
                                    email: e.target.value,
                                })
                            }
                            disabled={isLoading}
                            className="mt-1"
                        />
                    </div>
                    <div>
                        <Label htmlFor="phone" className="text-sm sm:text-base">Phone</Label>
                        <Input
                            id="phone"
                            value={data.contact.phone}
                            onChange={(e) =>
                                onChange("contact", {
                                    ...data.contact,
                                    phone: e.target.value,
                                })
                            }
                            disabled={isLoading}
                            className="mt-1"
                        />
                    </div>
                    <div>
                        <Label htmlFor="location" className="text-sm sm:text-base">Location</Label>
                        <Input
                            id="location"
                            value={data.contact.location}
                            onChange={(e) =>
                                onChange("contact", {
                                    ...data.contact,
                                    location: e.target.value,
                                })
                            }
                            disabled={isLoading}
                            className="mt-1"
                        />
                    </div>
                </div>
            </div>

            <div className="space-y-3 sm:space-y-4">
                <h2 className="text-base sm:text-lg font-semibold">Professional Summary</h2>
                <Textarea
                    value={data.summary}
                    onChange={(e) => onChange("summary", e.target.value)}
                    disabled={isLoading}
                    className="min-h-[80px] sm:min-h-[100px] mt-1"
                />
            </div>
        </div>
    );
});
