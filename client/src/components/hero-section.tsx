"use client";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Code,
  Phone,
  Mail,
  Linkedin,
  Github,
  ChevronDown,
  CalendarDays,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  fadeInUp,
  fadeInDown,
  fadeIn,
  floatAnimation,
  glowAnimation,
} from "@/lib/animations";

export function HeroSection() {
  const scrollToSection = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative overflow-hidden min-h-screen flex items-center justify-center pt-24"
    >
      {/* Background Blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-60 h-60 md:w-72 md:h-72 bg-blue-400/30 rounded-full blur-3xl animate-blob" />
        <div className="absolute bottom-32 right-20 w-80 h-80 md:w-96 md:h-96 bg-purple-400/30 rounded-full blur-3xl animate-blob" />
      </div>

      {/* Frosted Glass */}
      {/* <div className="absolute inset-0 bg-white/5 backdrop-blur-xl border border-white/20 rounded-xl" /> */}

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 flex flex-col items-center text-center">
        {/* Badge */}
        <motion.div
          {...fadeInUp}
          className="flex items-center gap-3 bg-background/80 border border-muted rounded-full px-4 py-1 text-xs sm:text-sm font-medium text-foreground shadow backdrop-blur-lg mb-6"
        >
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500" />
          </span>
          Available for New Projects
        </motion.div>

        {/* Profile */}
        <motion.div
          {...floatAnimation}
          className="mb-8 rounded-full p-1 bg-white/20 shadow-xl"
        >
          <motion.img
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
            className="w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-full object-cover border-2 border-background"
            {...glowAnimation}
            alt="Mosa Beryal"
          />
        </motion.div>

        {/* Name */}
        <motion.h1
          {...fadeInDown}
          className="text-3xl sm:text-4xl md:text-6xl font-bold text-foreground"
        >
          Mosa <span className="text-primary">Beryal</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.h2
          {...fadeInUp}
          className="mt-3 text-base sm:text-lg md:text-2xl text-muted-foreground"
        >
          Full Stack Software Engineer
        </motion.h2>

        {/* Bio */}
        <motion.p
          {...fadeIn}
          transition={{ delay: 0.5 }}
          className="mt-5 mb-10 max-w-2xl text-sm sm:text-base text-muted-foreground leading-relaxed"
        >
          Building scalable full stack applications, modern frontend
          experiences, and efficient backend systems with React, Node.js,
          Sequelize, Tailwind, Docker, and AWS.
        </motion.p>

        {/* Tech Stack */}
        <motion.div
          {...fadeInUp}
          transition={{ delay: 0.6 }}
          className="flex flex-wrap justify-center gap-3 mb-8"
        >
          {[
            "React",
            "Node.js",
            "Sequelize",
            "Tailwind CSS",
            "Docker",
            "AWS",
            "SQL",
          ].map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs sm:text-sm font-medium"
            >
              {tech}
            </span>
          ))}
        </motion.div>

        {/* Call to Actions */}
        <motion.div
          {...fadeInUp}
          transition={{ delay: 0.7 }}
          className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4 sm:gap-6"
        >
          <Button
            size="lg"
            onClick={() => scrollToSection("#contact")}
            className="group px-6 py-3 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition"
          >
            <span>Get in Touch</span>
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition" />
          </Button>

          <Button
            variant="outline"
            size="lg"
            onClick={() => scrollToSection("#projects")}
            className="group px-6 py-3 rounded-full hover:scale-105 transition"
          >
            <span>View Projects</span>
            <Code className="ml-2 h-4 w-4 group-hover:rotate-12 transition" />
          </Button>

          <Button
            variant="outline"
            size="lg"
            asChild
            className="group px-6 py-3 rounded-full hover:scale-105 transition"
          >
            <a
              href="https://calendar.google.com/calendar/u/0/appointments/schedules/your-schedule-id"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center"
            >
              <CalendarDays className="h-5 w-5 mr-2" />
              <span className="font-medium">Book a Meeting</span>
            </a>
          </Button>
        </motion.div>

        {/* Contact Links */}
        <motion.div
          {...fadeIn}
          transition={{ delay: 1 }}
          className="flex flex-wrap justify-center gap-5 mt-8 text-muted-foreground"
        >
          {[
            { icon: Phone, text: "+92 305 9823223", href: "tel:+923059823223" },
            {
              icon: Mail,
              text: "beryalmosa@gmail.com",
              href: "mailto:beryalmosa@gmail.com",
            },
            {
              icon: Linkedin,
              text: "LinkedIn",
              href: "https://www.linkedin.com/in/mosa-beryal-b03233211/",
            },
            {
              icon: Github,
              text: "GitHub",
              href: "https://github.com/MosaBeryal",
            },
          ].map((c, i) => (
            <a
              key={i}
              href={c.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-primary transition"
            >
              <c.icon className="h-4 w-4" />
              <span>{c.text}</span>
            </a>
          ))}
        </motion.div>

        {/* Scroll Down */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8"
        >
          <ChevronDown className="h-6 w-6 text-muted-foreground" />
        </motion.div>
      </div>
    </section>
  );
}
