"use client";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { fadeInUp, staggerContainer, staggerItem } from "@/lib/animations";

export function AboutSection() {
  const { ref: sectionRef, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative overflow-hidden py-28"
    >
      {/* Background Blobs */}
      <div className="absolute inset-0 pointer-events-none">
        {/* <div className="absolute top-20 left-10 w-60 h-60 md:w-72 md:h-72 bg-blue-400/30 rounded-full blur-3xl animate-blob" /> */}
        <div className="absolute bottom-32 right-20 w-80 h-80 md:w-96 md:h-96 bg-purple-400/10 rounded-full blur-3xl animate-blob" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 flex flex-col items-center text-center">
        {/* Section Title */}
        <motion.div
          className="mb-14"
          initial="initial"
          animate={isVisible ? "animate" : undefined}
          variants={fadeInUp}
        >
          <h2 className="text-4xl font-extrabold text-foreground mb-4 tracking-tight">
            About Me
          </h2>
          <div className="mx-auto w-24 h-1 bg-gradient-to-r from-primary to-violet-600 rounded-full" />
        </motion.div>

        {/* Description */}
        <motion.div
          className="max-w-3xl space-y-6 text-center"
          initial="initial"
          animate={isVisible ? "animate" : undefined}
          variants={staggerContainer}
        >
          <motion.h3
            className="text-2xl font-semibold text-foreground"
            variants={staggerItem}
          >
            Passionate Software Engineer
          </motion.h3>

          <motion.p
            className="text-lg text-muted-foreground leading-relaxed"
            variants={staggerItem}
          >
            I'm a dedicated engineer crafting beautiful, scalable user
            interfaces and efficient backend systems. Currently at En Route
            Technologies, I focus on React, TypeScript, and data-rich
            interfaces.
          </motion.p>

          <motion.p
            className="text-lg text-muted-foreground leading-relaxed"
            variants={staggerItem}
          >
            From fleet management tools to analytics dashboards, I thrive on
            transforming complex challenges into intuitive digital experiences.
          </motion.p>

          {/* Stats Cards */}
          <motion.div
            className="grid grid-cols-2 sm:grid-cols-2 gap-6 pt-8 w-full"
            variants={staggerContainer}
          >
            {[
              { label: "Years of Experience", value: "2+" },
              { label: "Projects Delivered", value: "10+" },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                variants={staggerItem}
                className="p-6 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 flex flex-col items-center shadow-lg transition hover:scale-105"
              >
                <div className="text-4xl font-bold text-primary">
                  {stat.value}
                </div>
                <div className="mt-2 text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
