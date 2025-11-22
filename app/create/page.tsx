"use client";

import { useState, useRef, Suspense, useEffect, useMemo, useCallback } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useSearchParams } from "next/navigation";
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
import { VibrantTemplate } from "@/components/resume-templates/vibrant";
import { ElegantTemplate } from "@/components/resume-templates/elegant";
import { PortfolioTemplate } from "@/components/resume-templates/portfolio";
import { StartupTemplate } from "@/components/resume-templates/startup";
import { AcademicTemplate } from "@/components/resume-templates/academic";
import { TemplateWrapper } from "@/components/resume-templates/TemplateWrapper";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { ResumeData } from "@/lib/types";
import { ResumeSection } from "@/components/resume-editor/section";
import { useToast } from "@/components/ui/use-toast";
import { Download, Sparkles } from "lucide-react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import axios from 'axios';

// Add this custom hook for debouncing
function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}

const sampleData = {
  name: "John Doe",
  title: "Software Engineer",
  contact: {
    email: "john@example.com",
    phone: "(555) 123-4567",
    location: "San Francisco, CA"
  },
  summary: "Experienced software engineer with a passion for building scalable applications",
  experience: [
    {
      position: "Senior Software Engineer",
      company: "Tech Corp",
      duration: "2020 - Present",
      description: ["Led development of cloud-based solutions", "Managed team of 5 engineers"]
    }
  ],
  education: [
    {
      degree: "B.S. Computer Science",
      school: "Stanford University",
      location: "Stanford, CA",
      startDate: "2012",
      endDate: "2016",
      duration: "2012 - 2016"
    }
  ],
  skills: ["JavaScript", "React", "Node.js", "Python", "AWS"],
  projects: [
    {
      name: "E-commerce Platform",
      description: "Built a scalable e-commerce platform with React and Node.js",
      link: "https://github.com/johndoe/ecommerce",
      technologies: ["React", "Node.js", "MongoDB"],
      duration: "2019 - 2020"
    }
  ],
  links: [
    {
      title: "GitHub",
      url: "https://github.com/johndoe",
      description: "View my open source projects"
    },
    {
      title: "LinkedIn",
      url: "https://linkedin.com/in/johndoe",
      description: "Professional profile"
    }
  ]
};

const templates = [
  { id: "modern", name: "Modern", component: ModernTemplate },
  { id: "minimal", name: "Minimal", component: MinimalTemplate },
  { id: "tech", name: "Tech", component: TechTemplate },
  { id: "executive", name: "Executive", component: ExecutiveTemplate },
  { id: "creative", name: "Creative", component: CreativeTemplate },
  { id: "professional", name: "Professional", component: ProfessionalTemplate },
  { id: "gradient", name: "Gradient", component: GradientTemplate },
  { id: "corporate", name: "Corporate", component: CorporateTemplate },
  { id: "minimalist", name: "Minimalist", component: MinimalistTemplate },
  { id: "classic", name: "Classic", component: ClassicTemplate },
  { id: "modern-plus", name: "Modern Plus", component: ModernPlusTemplate },
  { id: "elegant", name: "Elegant", component: ElegantTemplate },
  { id: "portfolio", name: "Portfolio", component: PortfolioTemplate },
  { id: "vibrant", name: "Vibrant", component: VibrantTemplate },
  { id: "startup", name: "Startup", component: StartupTemplate },
  { id: "academic", name: "Academic", component: AcademicTemplate },
];

const CreatePageContent = () => {
  const { toast } = useToast();
  const searchParams = useSearchParams();
  const [selectedTemplate, setSelectedTemplate] = useState(searchParams.get('template') || 'modern');
  const [resumeData, setResumeData] = useState<ResumeData>(sampleData);
  // Use debounced version for the preview to prevent excessive re-renders
  const debouncedResumeData = useDebounce<ResumeData>(resumeData, 300);
  const resumeRef = useRef<HTMLDivElement>(null);
  const [isDownloading, setIsDownloading] = useState(false);
  const [isEnhancing, setIsEnhancing] = useState(false);

  // Create a wrapper function to handle the type conversion
  const handleResumeDataChange = useCallback((data: ResumeData) => {
    setResumeData(data);
  }, []);

  // Find the selected template with memoization
  const selectedTemplateData = useMemo(() =>
    templates.find(t => t.id === selectedTemplate),
    [selectedTemplate]
  );

  // Memoize the template component to prevent unnecessary re-renders
  const TemplateComponent = useMemo(() => {
    if (!selectedTemplateData) return null;
    return selectedTemplateData.component;
  }, [selectedTemplateData]);

  const handleDownload = async () => {
    if (!resumeRef.current) return;

    try {
      setIsDownloading(true);
      toast({
        title: "Preparing download...",
        description: "Please wait while we generate your resume PDF.",
      });

      // Apply print-specific styles to ensure colors and content render correctly
      const style = document.createElement('style');
      style.innerHTML = `
        @media print {
          body, html {
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }
        }
      `;
      document.head.appendChild(style);

      // Create a clone of the resume element for manipulation
      const resumeElement = resumeRef.current;
      const clone = resumeElement.cloneNode(true) as HTMLElement;

      // Create a wrapper with A4 dimensions
      const wrapper = document.createElement('div');
      wrapper.style.width = '794px'; // A4 width at 96 DPI
      wrapper.style.position = 'absolute';
      wrapper.style.top = '-9999px';
      wrapper.style.left = '-9999px';
      wrapper.style.padding = '40px';
      wrapper.style.backgroundColor = 'white';
      wrapper.style.boxSizing = 'border-box';

      // Adjust the clone to fit A4 proportions
      clone.style.transform = 'none';
      clone.style.width = '100%';
      clone.style.height = 'auto';
      clone.style.margin = '0';
      clone.style.boxShadow = 'none';
      clone.style.border = 'none';

      // Append the clone to the wrapper and the wrapper to the body
      wrapper.appendChild(clone);
      document.body.appendChild(wrapper);

      // Optimize canvas generation with better settings
      const canvas = await html2canvas(wrapper, {
        scale: 1.5, // Reduced from 2 for better performance while maintaining acceptable quality
        useCORS: true,
        allowTaint: true,
        backgroundColor: "#ffffff",
        logging: false,
        imageTimeout: 0, // No timeout for images
        onclone: (clonedDoc) => {
          // Minimal operations in the clone callback
          const clonedElement = clonedDoc.body.querySelector('[ref="resumeRef"]') as HTMLElement;
          if (clonedElement) {
            clonedElement.style.visibility = 'visible';
          }
        }
      });

      // Remove the wrapper after capturing
      document.body.removeChild(wrapper);
      document.head.removeChild(style);

      // Create and optimize PDF with proper A4 dimensions
      const imgData = canvas.toDataURL('image/jpeg', 0.95); // Slightly reduced quality for better performance
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4',
        compress: true,
      });

      const pdfWidth = pdf.internal.pageSize.getWidth();
      const ratio = canvas.width / canvas.height;
      const scaledHeight = pdfWidth / ratio;

      // Add image to PDF with proper positioning
      pdf.addImage(imgData, 'JPEG', 0, 0, pdfWidth, scaledHeight);

      // Save the PDF with the user's name
      pdf.save(`${resumeData.name.replace(/\s+/g, '_')}_resume.pdf`);

      toast({
        title: "Download complete!",
        description: "Your resume has been downloaded successfully.",
      });
    } catch (error) {
      console.error("Error generating PDF:", error);
      toast({
        title: "Download failed",
        description: "There was an error generating your resume PDF. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsDownloading(false);
    }
  };

  const handleEnhanceWithAI = async () => {
    try {
      setIsEnhancing(true);
      toast({
        title: "Enhancing your resume...",
        description: "Please wait while we enhance your resume content using AI.",
      });

      const response = await axios.post('/api/enhance-resume', { resume: resumeData });

      if (response.data && response.data.enhancedResume) {
        setResumeData(response.data.enhancedResume);
        toast({
          title: "Enhancement complete!",
          description: "Your resume content has been successfully enhanced.",
        });
      } else {
        throw new Error("Invalid response from AI service");
      }
    } catch (error) {
      console.error("Error enhancing resume:", error);
      toast({
        title: "Enhancement failed",
        description: "There was an error enhancing your resume. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsEnhancing(false);
    }
  };

  return (
    <div className="container mx-auto py-4 sm:py-6 px-3 sm:px-4">
      {/* Mobile View: Tabs */}
      <div className="lg:hidden">
        <Tabs defaultValue="editor" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-4">
            <TabsTrigger value="editor">Editor</TabsTrigger>
            <TabsTrigger value="preview">Preview</TabsTrigger>
          </TabsList>

          <TabsContent value="editor" className="space-y-4">
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <h1 className="text-xl font-bold font-outfit">Create Resume</h1>
                <div className="flex gap-2">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline" size="sm">Template</Button>
                    </DialogTrigger>
                    <DialogContent className="w-[95vw] max-w-3xl max-h-[80vh] p-4">
                      <DialogHeader>
                        <DialogTitle>Choose Template</DialogTitle>
                      </DialogHeader>
                      <ScrollArea className="h-[60vh]">
                        <div className="grid grid-cols-2 gap-3 p-2">
                          {templates.map((template) => (
                            <Card
                              key={template.id}
                              className={cn(
                                "cursor-pointer hover:bg-muted/50 transition-colors p-2",
                                selectedTemplate === template.id && "border-primary"
                              )}
                              onClick={() => setSelectedTemplate(template.id)}
                            >
                              <div className="aspect-[1/1.4] rounded-lg border bg-white flex items-center justify-center overflow-hidden relative">
                                <TemplateWrapper
                                  Template={template.component}
                                  content={sampleData}
                                  isPreview={true}
                                />
                              </div>
                              <h3 className="text-xs font-medium mt-2 text-center">{template.name}</h3>
                            </Card>
                          ))}
                        </div>
                      </ScrollArea>
                    </DialogContent>
                  </Dialog>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={handleEnhanceWithAI}
                    disabled={isEnhancing}
                  >
                    {isEnhancing ? "..." : "AI Enhance"}
                  </Button>
                </div>
              </div>

              <Card className="p-4">
                <ResumeSection
                  data={resumeData}
                  onChangeAction={handleResumeDataChange}
                  isLoading={isEnhancing}
                />
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="preview">
            <Card className="p-2">
              <div className="mb-4 flex justify-between items-center">
                <h2 className="font-semibold font-outfit">Preview</h2>
                <Button size="sm" onClick={handleDownload} disabled={isDownloading}>
                  <Download className="h-4 w-4 mr-2" />
                  {isDownloading ? "..." : "Download"}
                </Button>
              </div>
              <ScrollArea className="h-[calc(100vh-200px)]">
                <div className="p-2 flex justify-center bg-muted/20 rounded-lg">
                  {selectedTemplateData && (
                    <div
                      className="border rounded-lg bg-white shadow-sm relative max-w-full overflow-hidden"
                      ref={resumeRef}
                      style={{
                        width: "100%",
                        maxWidth: "210mm", // A4 width
                        aspectRatio: "210/297",
                      }}
                    >
                      {isEnhancing && (
                        <div className="absolute inset-0 bg-black/10 backdrop-blur-sm z-10 flex flex-col items-center justify-center p-4">
                          <Sparkles className="h-8 w-8 text-primary animate-spin mb-2" />
                          <p className="text-sm font-medium text-primary animate-pulse">Enhancing...</p>
                        </div>
                      )}
                      <div className="transform-gpu w-full h-full">
                        {TemplateComponent && (
                          <TemplateComponent content={debouncedResumeData} />
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </ScrollArea>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      {/* Desktop View: Split Screen */}
      <div className="hidden lg:flex flex-row gap-8">
        {/* Left Panel - Editor */}
        <div className="w-1/2 space-y-6">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold font-outfit text-primary">Create Resume</h1>
            <div className="flex gap-3">
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline">Change Template</Button>
                </DialogTrigger>
                <DialogContent className="max-w-4xl max-h-[85vh] p-6">
                  <DialogHeader>
                    <DialogTitle className="text-2xl font-outfit">Choose Template</DialogTitle>
                  </DialogHeader>
                  <ScrollArea className="h-[65vh] pr-4">
                    <div className="grid grid-cols-3 gap-6 p-2">
                      {templates.map((template) => (
                        <Card
                          key={template.id}
                          className={cn(
                            "cursor-pointer hover:ring-2 hover:ring-primary/50 transition-all p-4",
                            selectedTemplate === template.id && "ring-2 ring-primary border-primary"
                          )}
                          onClick={() => setSelectedTemplate(template.id)}
                        >
                          <div className="aspect-[1/1.4] rounded-lg border bg-white shadow-sm flex items-center justify-center overflow-hidden relative mb-3">
                            <TemplateWrapper
                              Template={template.component}
                              content={sampleData}
                              isPreview={true}
                            />
                          </div>
                          <h3 className="font-medium text-center">{template.name}</h3>
                        </Card>
                      ))}
                    </div>
                  </ScrollArea>
                </DialogContent>
              </Dialog>
              <Button
                variant="secondary"
                onClick={handleEnhanceWithAI}
                disabled={isEnhancing}
                className="gap-2"
              >
                <Sparkles className="w-4 h-4" />
                {isEnhancing ? "Enhancing..." : "Enhance with AI"}
              </Button>
            </div>
          </div>

          <Card className="p-6 shadow-md border-muted">
            <ResumeSection
              data={resumeData}
              onChangeAction={handleResumeDataChange}
              isLoading={isEnhancing}
            />
          </Card>
        </div>

        {/* Right Panel - Preview */}
        <div className="w-1/2">
          <div className="sticky top-6 space-y-4">
            <div className="flex justify-between items-center bg-card p-4 rounded-lg border shadow-sm">
              <h2 className="text-xl font-semibold font-outfit">Live Preview</h2>
              <Button
                className="gap-2 min-w-[140px]"
                onClick={handleDownload}
                disabled={isDownloading}
              >
                <Download className="h-4 w-4" />
                {isDownloading ? "Generating..." : "Download PDF"}
              </Button>
            </div>

            <div className="h-[calc(100vh-140px)] rounded-xl border bg-muted/30 p-8 overflow-hidden flex justify-center items-start shadow-inner">
              <ScrollArea className="h-full w-full">
                <div className="flex justify-center min-h-full pb-8">
                  {selectedTemplateData && (
                    <div
                      className="bg-white shadow-xl print:shadow-none relative transition-all duration-300 ease-in-out"
                      ref={resumeRef}
                      style={{
                        width: "210mm",
                        minHeight: "297mm",
                        transform: "scale(0.85)", // Scale down slightly to fit better
                        transformOrigin: "top center",
                      }}
                    >
                      {isEnhancing && (
                        <div className="absolute inset-0 bg-white/50 backdrop-blur-[2px] z-10 flex flex-col items-center justify-center">
                          <div className="bg-white p-6 rounded-xl shadow-2xl flex flex-col items-center gap-4 border">
                            <div className="relative">
                              <Sparkles className="h-10 w-10 text-primary animate-spin" />
                              <div className="absolute inset-0 flex items-center justify-center">
                                <div className="h-3 w-3 rounded-full bg-primary animate-ping" />
                              </div>
                            </div>
                            <div className="text-center">
                              <p className="text-lg font-bold text-primary">Enhancing Content</p>
                              <p className="text-sm text-muted-foreground">AI is polishing your resume...</p>
                            </div>
                          </div>
                        </div>
                      )}
                      <div className="w-full h-full">
                        {TemplateComponent && (
                          <TemplateComponent content={debouncedResumeData} />
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </ScrollArea>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function CreatePage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <CreatePageContent />
    </Suspense>
  );
}