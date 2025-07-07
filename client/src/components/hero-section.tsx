"use client";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Code,
  CalendarDays,
  Server,
  Database,
  Cloud,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  fadeInUp,
  fadeInDown,
  fadeIn,
  floatAnimation,
  glowAnimation,
  staggerContainer,
  staggerItem,
} from "@/lib/animations";

export function HeroSection() {
  const scrollToSection = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const techStack = [
    { name: "Node.js", icon: Server },
    { name: "Sequelize", icon: Database },
    { name: "AWS", icon: Cloud },
    { name: "Tailwind CSS" },
    { name: "SQL" },
  ];

  return (
    <section
      id="home"
      className="relative overflow-hidden min-h-screen flex items-center justify-center pt-20 pb-12 sm:pb-16"
    >
      {/* Background Blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-16 left-6 w-56 h-56 sm:w-64 sm:h-64 bg-blue-400/30 rounded-full blur-3xl animate-blob" />
        <div className="absolute bottom-24 right-8 w-64 h-64 sm:w-72 sm:h-72 bg-purple-400/30 rounded-full blur-3xl animate-blob" />
      </div>

      {/* Content */}
      <motion.div
        variants={staggerContainer}
        initial="initial"
        animate="animate"
        className="relative z-10 container mx-auto px-5 sm:px-8 flex flex-col items-center text-center space-y-5"
      >
        {/* Badge */}
        <motion.div
          variants={staggerItem}
          className="flex items-center gap-3 bg-background/70 border border-white/10 rounded-full px-3 py-1 text-xs sm:text-sm font-medium text-foreground shadow backdrop-blur-lg"
        >
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500" />
          </span>
          Available for New Projects
        </motion.div>

        {/* Profile Image */}
        <motion.div
          variants={floatAnimation}
          className="rounded-full p-1 bg-white/20 shadow-xl"
        >
          <motion.img
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
            alt="Mosa Beryal"
            className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-full object-cover border-2 border-background"
            {...glowAnimation}
          />
        </motion.div>

        {/* Name */}
        <motion.h1
          variants={fadeInDown}
          className="text-3xl sm:text-4xl md:text-6xl font-bold text-foreground"
        >
          Mosa <span className="text-primary">Beryal</span>
        </motion.h1>

        {/* Title */}
        <motion.h2
          variants={fadeInUp}
          className="text-base sm:text-lg md:text-2xl text-muted-foreground"
        >
          Full Stack Software Engineer
        </motion.h2>

        {/* Bio */}
        <motion.p
          variants={fadeIn}
          className="max-w-xl text-sm sm:text-base text-muted-foreground leading-relaxed"
        >
          I build scalable full stack web apps, modern frontend experiences, and
          efficient backend systems using React, Node.js, Sequelize, Tailwind,
          and AWS.
        </motion.p>

        {/* Tech Stack */}
        <motion.div
          variants={staggerContainer}
          className="flex flex-wrap justify-center gap-2 sm:gap-3 pt-1"
        >
          {techStack.map((tech) => (
            <motion.span
              key={tech.name}
              variants={staggerItem}
              className="flex items-center gap-1 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs sm:text-sm font-medium"
            >
              {tech.icon && <tech.icon className="h-4 w-4 sm:h-5 sm:w-5" />}
              {tech.name}
            </motion.span>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          variants={staggerContainer}
          className="flex flex-wrap sm:flex-nowrap justify-center gap-2 sm:gap-3 md:gap-4 pt-3 overflow-x-auto pb-1"
        >
          {/* Get in Touch */}
          <motion.div variants={staggerItem}>
            <Button
              size="sm"
              // sm="lg"
              onClick={() => scrollToSection("#contact")}
              className="group px-4 py-2 sm:px-6 sm:py-3 rounded-full backdrop-blur-2xl dark:bg-black/10 border border-white/10 shadow-lg hover:shadow-xl hover:scale-105 transition whitespace-nowrap"
            >
              <span>Get in Touch</span>
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition" />
            </Button>
          </motion.div>

          {/* View Projects */}
          <motion.div variants={staggerItem}>
            <Button
              variant="outline"
              size="sm"
              // sm="lg"
              onClick={() => scrollToSection("#projects")}
              className="group px-4 py-2 sm:px-6 sm:py-3 rounded-full backdrop-blur-2xl bg-white/5 dark:bg-black/5 border border-white/10 shadow-lg hover:shadow-xl hover:scale-105 transition whitespace-nowrap"
            >
              <span>View Projects</span>
              <Code className="ml-2 h-4 w-4 group-hover:rotate-12 transition" />
            </Button>
          </motion.div>

          {/* Book a Meeting */}
          <motion.div variants={staggerItem}>
            <Button
              variant="outline"
              size="sm"
              // sm="lg"
              asChild
              className="group px-4 py-2 sm:px-6 sm:py-3 rounded-full backdrop-blur-2xl bg-white/5 dark:bg-black/5 border border-white/10 shadow-lg hover:shadow-xl hover:scale-105 transition whitespace-nowrap"
            >
              <a
                href="https://calendar.google.com/calendar/u/0/appointments/schedules/your-schedule-id"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center"
              >
                <CalendarDays className="h-4 w-4 mr-2" />
                <span className="font-medium">Book a Meeting</span>
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
