"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { CalendarDays } from "lucide-react";
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
  const [typedName, setTypedName] = useState("");
  const fullName = "Mosa Beryal";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setTypedName(fullName.slice(0, index + 1));
      index++;
      if (index === fullName.length) clearInterval(interval);
    }, 130);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative overflow-hidden min-h-[80vh] flex items-center justify-center pt-16 pb-12"
    >
      {/* Background Blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-16 left-6 w-56 h-56 bg-blue-400/30 rounded-full blur-3xl animate-blob" />
        <div className="absolute bottom-20 right-8 w-64 h-64 bg-purple-400/30 rounded-full blur-3xl animate-blob" />
      </div>

      {/* Content */}
      <motion.div
        variants={staggerContainer}
        initial="initial"
        animate="animate"
        className="relative z-10 container mx-auto px-6 flex flex-col items-center text-center space-y-5"
      >
        {/* Availability Badge */}
        <motion.div
          variants={staggerItem}
          className="flex items-center gap-2 bg-background/70 border border-white/10 rounded-full px-4 py-1 text-xs sm:text-sm font-medium text-foreground shadow backdrop-blur-lg"
        >
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500" />
          </span>
          Open for freelance / projects
        </motion.div>

        {/* Profile Image */}
        <motion.div
          variants={floatAnimation}
          className="rounded-full p-1 bg-white/20 shadow-2xl"
        >
          <motion.img
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
            alt="Mosa Beryal"
            className="w-24 h-24 sm:w-32 sm:h-32 rounded-full object-cover border-2 border-background"
            {...glowAnimation}
          />
        </motion.div>

        {/* Name with Typing */}
        <motion.h1
          variants={fadeInDown}
          className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-foreground tracking-tight leading-tight"
        >
          {typedName}
          <span className="text-primary animate-pulse">|</span>
        </motion.h1>

        {/* Title */}
        <motion.h2
          variants={fadeInUp}
          className="text-lg sm:text-xl md:text-2xl font-medium text-muted-foreground"
        >
          Full Stack Software Engineer
        </motion.h2>

        {/* Bio */}
        <motion.p
          variants={fadeIn}
          className="max-w-2xl text-base sm:text-lg text-muted-foreground leading-relaxed"
        >
          I design scalable, fast web applications with modern stacks — React,
          Next.js, Node.js, Sequelize, Tailwind CSS, and AWS.
        </motion.p>

        {/* CTA Button */}
        <motion.div variants={staggerItem} className="pt-4">
          <Button
            variant="outline"
            size="lg"
            asChild
            className="group px-6 py-3 rounded-full 
    backdrop-blur-[12px] 
    bg-white/30 dark:bg-white/5
    border border-black/10 dark:border-white/10 
    shadow-[0_8px_24px_rgba(0,0,0,0.08)] dark:shadow-[0_8px_24px_rgba(255,255,255,0.08)]
    hover:shadow-[0_12px_32px_rgba(0,0,0,0.15)] dark:hover:shadow-[0_12px_32px_rgba(255,255,255,0.12)]
    transition transform hover:scale-105 text-base"
          >
            <a
              href="https://calendar.google.com/calendar/u/0/appointments/schedules/your-schedule-id"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center text-foreground"
            >
              {/* <CalendarDays className="h-5 w-5 mr-2" /> */}
              <img
                src="/assets/icons8-google-calendar.svg"
                className="w-7 h-8 mr-2"
              />
              <span className="font-medium">Schedule a Call</span>
            </a>
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
