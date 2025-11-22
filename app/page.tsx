
"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Sparkles, FileText, Zap, Star, Shield, MousePointerClick } from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <header className="px-4 lg:px-6 h-16 flex items-center border-b bg-background/80 backdrop-blur-md sticky top-0 z-50 transition-all duration-300">
        <Link className="flex items-center justify-center gap-2 group" href="#">
          <div className="bg-primary/10 p-2 rounded-lg group-hover:bg-primary/20 transition-colors">
            <FileText className="h-6 w-6 text-primary" />
          </div>
          <span className="font-bold text-xl font-outfit tracking-tight">ResumeAI</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:text-primary transition-colors hover:scale-105 transform" href="/create">
            Create
          </Link>
          <Link className="text-sm font-medium hover:text-primary transition-colors hover:scale-105 transform" href="/templates">
            Templates
          </Link>
          <Link className="text-sm font-medium hover:text-primary transition-colors hover:scale-105 transform" href="#">
            About
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b from-background via-muted/30 to-background relative overflow-hidden">
          {/* Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 90, 0],
                opacity: [0.3, 0.5, 0.3]
              }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -top-[20%] -right-[10%] w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-3xl"
            />
            <motion.div
              animate={{
                scale: [1, 1.5, 1],
                rotate: [0, -45, 0],
                opacity: [0.3, 0.4, 0.3]
              }}
              transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              className="absolute top-[40%] -left-[10%] w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-3xl"
            />
          </div>

          <div className="container px-4 md:px-6 relative z-10">
            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
              className="flex flex-col items-center space-y-4 text-center"
            >
              <motion.div variants={item} className="space-y-2">
                <div className="inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary/10 text-primary hover:bg-primary/20 mb-4 cursor-default">
                  <Sparkles className="w-3 h-3 mr-1 animate-pulse" />
                  Powered by Advanced AI
                </div>
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none font-outfit bg-clip-text text-transparent bg-gradient-to-r from-primary via-blue-600 to-indigo-600 pb-2">
                  Craft Your Perfect Resume <br className="hidden sm:inline" />
                  in Minutes, Not Hours
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl dark:text-gray-400 leading-relaxed">
                  Stand out from the crowd with professionally designed templates and AI-powered content enhancement.
                  Build a resume that gets you hired.
                </p>
              </motion.div>
              <motion.div variants={item} className="space-x-4 pt-4">
                <Link href="/create">
                  <Button size="lg" className="h-12 px-8 text-base shadow-lg hover:shadow-primary/25 transition-all hover:-translate-y-1 hover:scale-105 duration-300">
                    Create My Resume
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/templates">
                  <Button variant="outline" size="lg" className="h-12 px-8 text-base hover:bg-muted/50 transition-all hover:-translate-y-1 hover:scale-105 duration-300">
                    View Templates
                  </Button>
                </Link>
              </motion.div>

              {/* Stats / Trust Indicators */}
              <motion.div variants={item} className="pt-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-center opacity-80">
                <div>
                  <div className="text-2xl font-bold text-primary">10k+</div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wider">Resumes Created</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary">95%</div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wider">Success Rate</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary">50+</div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wider">Templates</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary">24/7</div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wider">AI Availability</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/30 relative">
          <div className="container px-4 md:px-6">
            <div className="grid gap-12 lg:grid-cols-3 lg:gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="flex flex-col items-center space-y-4 text-center p-6 rounded-2xl bg-background/50 backdrop-blur-sm border shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="p-3 bg-blue-100 dark:bg-blue-900/20 rounded-full text-blue-600 dark:text-blue-400">
                  <Zap className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold font-outfit">AI Enhancement</h3>
                <p className="text-muted-foreground">
                  Our AI analyzes your experience and suggests improvements to make your resume more impactful and ATS-friendly.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="flex flex-col items-center space-y-4 text-center p-6 rounded-2xl bg-background/50 backdrop-blur-sm border shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="p-3 bg-green-100 dark:bg-green-900/20 rounded-full text-green-600 dark:text-green-400">
                  <FileText className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold font-outfit">Professional Templates</h3>
                <p className="text-muted-foreground">
                  Choose from a variety of professionally designed templates that are clean, modern, and easy to read.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="flex flex-col items-center space-y-4 text-center p-6 rounded-2xl bg-background/50 backdrop-blur-sm border shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="p-3 bg-purple-100 dark:bg-purple-900/20 rounded-full text-purple-600 dark:text-purple-400">
                  <CheckCircle2 className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold font-outfit">Real-time Preview</h3>
                <p className="text-muted-foreground">
                  See changes instantly as you type. No more guessing how your resume will look when exported.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* New Feature Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="flex-1 space-y-4">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Why Choose Us?</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-outfit">
                  Designed for Success
                </h2>
                <p className="text-muted-foreground text-lg">
                  We've analyzed thousands of successful resumes to create a builder that gives you the best chance of landing an interview.
                </p>
                <ul className="space-y-3 pt-4">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500" />
                    <span>ATS-Optimized Layouts</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500" />
                    <span>Expert-Written Phrases</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500" />
                    <span>One-Click PDF Export</span>
                  </li>
                </ul>
              </div>
              <div className="flex-1 relative">
                <div className="relative rounded-xl overflow-hidden shadow-2xl border bg-white p-2 transform rotate-2 hover:rotate-0 transition-transform duration-500">
                  <div className="aspect-[4/3] bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center">
                    <div className="text-center space-y-2">
                      <MousePointerClick className="h-12 w-12 text-primary mx-auto animate-bounce" />
                      <p className="font-medium text-muted-foreground">Interactive Editor</p>
                    </div>
                  </div>
                </div>
                {/* Decorative blobs */}
                <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-3xl rounded-full" />
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-muted/10">
        <p className="text-xs text-muted-foreground">
          © 2024 ResumeAI. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4 text-muted-foreground hover:text-foreground" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4 text-muted-foreground hover:text-foreground" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  );
}