"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ModernTemplate } from "@/components/resume-templates/modern";
import { MinimalTemplate } from "@/components/resume-templates/minimal";
import { TechTemplate } from "@/components/resume-templates/tech";
import { ExecutiveTemplate } from "@/components/resume-templates/executive";
import { CreativeTemplate } from "@/components/resume-templates/creative";
import { ProfessionalTemplate } from "@/components/resume-templates/professional";
import { GradientTemplate } from "@/components/resume-templates/gradient";
import { CorporateTemplate } from "@/components/resume-templates/corporate";
import { MinimalistTemplate } from "@/components/resume-templates/minimalist";
import { ClassicTemplate } from "@/components/resume-templates/classic";
import { ModernPlusTemplate } from "@/components/resume-templates/modern-plus";
import { ElegantTemplate } from "@/components/resume-templates/elegant";
import { PortfolioTemplate } from "@/components/resume-templates/portfolio";
import { VibrantTemplate } from "@/components/resume-templates/vibrant";
import { StartupTemplate } from "@/components/resume-templates/startup";
import { AcademicTemplate } from "@/components/resume-templates/academic";
import { TemplateWrapper } from "@/components/resume-templates/TemplateWrapper";
import { ArrowRight, Check, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

const sampleData = {
  name: "Alex Morgan",
  title: "Product Designer",
  contact: {
    email: "alex.morgan@example.com",
    phone: "+1 (555) 123-4567",
    location: "New York, NY",
  },
  summary: "Creative and detail-oriented Product Designer with 5+ years of experience in building user-centric digital products. Skilled in UI/UX design, prototyping, and design systems.",
  experience: [
    {
      position: "Senior Product Designer",
      company: "Creative Studio",
      duration: "2021 - Present",
      description: [
        "Led the redesign of the core mobile application, increasing user retention by 25%.",
        "Collaborated with cross-functional teams to deliver high-quality design solutions.",
      ],
      location: "New York, NY"
    },
  ],
  education: [
    {
      degree: "Bachelor of Fine Arts in Design",
      school: "Rhode Island School of Design",
      location: "Providence, RI",
      startDate: "2015",
      endDate: "2019",
      duration: "2015 - 2019",
    },
  ],
  skills: ["Figma", "Adobe XD", "React", "Tailwind CSS", "Prototyping"],
  projects: [
    {
      name: "E-commerce Redesign",
      description: "Complete overhaul of a major e-commerce platform's checkout flow.",
      technologies: ["Figma", "User Testing"],
      duration: "2022"
    }
  ],
  links: [
    {
      title: "Portfolio",
      url: "https://alexmorgan.design",
      description: "My personal design portfolio"
    }
  ]
};

const categories = [
  {
    id: "professional",
    name: "Professional",
    description: "Clean, traditional layouts perfect for corporate roles, law, finance, and administration.",
    templates: [
      { id: "modern", name: "Modern Classic", component: ModernTemplate },
      { id: "executive", name: "Executive", component: ExecutiveTemplate },
      { id: "professional", name: "Professional", component: ProfessionalTemplate },
      { id: "corporate", name: "Corporate", component: CorporateTemplate },
      { id: "classic", name: "Classic", component: ClassicTemplate },
      { id: "elegant", name: "Elegant", component: ElegantTemplate },
      { id: "academic", name: "Academic", component: AcademicTemplate, new: true },
    ],
  },
  {
    id: "creative",
    name: "Creative & Tech",
    description: "Bold, modern designs for startups, tech, design, and creative industries.",
    templates: [
      { id: "startup", name: "Startup", component: StartupTemplate, new: true },
      { id: "creative", name: "Creative", component: CreativeTemplate },
      { id: "tech", name: "Tech Stack", component: TechTemplate },
      { id: "portfolio", name: "Portfolio", component: PortfolioTemplate },
      { id: "vibrant", name: "Vibrant", component: VibrantTemplate },
      { id: "gradient", name: "Gradient", component: GradientTemplate },
      { id: "modern-plus", name: "Modern Plus", component: ModernPlusTemplate },
    ],
  },
  {
    id: "minimal",
    name: "Minimalist",
    description: "Simple, distraction-free templates that focus purely on content.",
    templates: [
      { id: "minimal", name: "Minimal", component: MinimalTemplate },
      { id: "minimalist", name: "Minimalist", component: MinimalistTemplate },
    ],
  }
];

export default function TemplatesPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  return (
    <div className="min-h-screen bg-muted/30">
      {/* Hero Section */}
      <div className="bg-white border-b relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-indigo-50 opacity-50" />
        <div className="container mx-auto py-12 sm:py-16 px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-outfit mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600">
              Choose Your Perfect Template
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Stand out with our professionally designed, ATS-friendly resume templates.
              Customizable to fit your unique style and career goals.
            </p>
          </motion.div>

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="flex flex-wrap justify-center gap-2"
          >
            <Button
              variant={selectedCategory === "all" ? "default" : "outline"}
              onClick={() => setSelectedCategory("all")}
              className="rounded-full transition-all duration-300 hover:scale-105"
            >
              All Templates
            </Button>
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.id)}
                className="rounded-full transition-all duration-300 hover:scale-105"
              >
                {category.name}
              </Button>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Templates Grid */}
      <div className="container mx-auto py-12 px-4 space-y-16">
        <AnimatePresence mode="wait">
          {categories
            .filter((category) => selectedCategory === "all" || category.id === selectedCategory)
            .map((category) => (
              <motion.section
                key={category.id}
                className="space-y-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex items-center gap-4">
                  <div className="h-px flex-1 bg-border"></div>
                  <div className="text-center">
                    <h2 className="text-2xl font-bold font-outfit text-primary">{category.name}</h2>
                    <p className="text-muted-foreground">{category.description}</p>
                  </div>
                  <div className="h-px flex-1 bg-border"></div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {category.templates.map((template: any, index: number) => (
                    <Dialog key={template.id}>
                      <DialogTrigger asChild>
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.05 }}
                          className="group relative bg-white rounded-xl border shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden hover:-translate-y-1"
                        >
                          {/* New Badge */}
                          {template.new && (
                            <div className="absolute top-3 right-3 z-10 bg-blue-600 text-white text-[10px] font-bold px-2 py-1 rounded-full shadow-lg flex items-center gap-1 animate-pulse">
                              <Sparkles className="w-3 h-3" /> NEW
                            </div>
                          )}

                          {/* Preview Image */}
                          <div className="aspect-[1/1.4] bg-muted/20 relative overflow-hidden">
                            <div className="absolute inset-0 p-4 transform transition-transform duration-500 group-hover:scale-105 origin-top">
                              <div className="w-full h-full bg-white shadow-sm rounded overflow-hidden pointer-events-none select-none">
                                <TemplateWrapper
                                  Template={template.component}
                                  content={sampleData}
                                  isPreview={true}
                                />
                              </div>
                            </div>

                            {/* Hover Overlay */}
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100 backdrop-blur-[1px]">
                              <Button variant="secondary" className="shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                Preview Template
                              </Button>
                            </div>
                          </div>

                          {/* Card Footer */}
                          <div className="p-4 border-t bg-white">
                            <div className="flex items-center justify-between mb-3">
                              <h3 className="font-semibold text-lg truncate">{template.name}</h3>
                            </div>
                            <Link href={`/create?template=${template.id}`} className="w-full block">
                              <Button className="w-full gap-2 group-hover:bg-primary/90 transition-colors">
                                Use Template <ArrowRight className="w-4 h-4" />
                              </Button>
                            </Link>
                          </div>
                        </motion.div>
                      </DialogTrigger>

                      {/* Preview Modal */}
                      <DialogContent className="max-w-4xl max-h-[90vh] p-0 overflow-hidden bg-muted/10">
                        <div className="flex flex-col h-full">
                          <div className="p-4 border-b bg-white flex justify-between items-center">
                            <div>
                              <h2 className="text-xl font-bold">{template.name}</h2>
                              <p className="text-sm text-muted-foreground">Perfect for your next role</p>
                            </div>
                            <Link href={`/create?template=${template.id}`}>
                              <Button size="lg" className="gap-2 shadow-md hover:shadow-lg transition-all">
                                Use This Template <Check className="w-4 h-4" />
                              </Button>
                            </Link>
                          </div>
                          <div className="flex-1 overflow-y-auto p-8 flex justify-center">
                            <div className="bg-white shadow-2xl rounded-lg overflow-hidden max-w-[210mm] w-full">
                              <template.component content={sampleData} />
                            </div>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                  ))}
                </div>
              </motion.section>
            ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
