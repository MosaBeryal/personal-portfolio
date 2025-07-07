"use client";
import { motion } from "framer-motion";
import StackIcon from "tech-stack-icons";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { useTheme } from "./theme-provider";

export function TechStack() {
  const { theme } = useTheme();

  const stack = [
    "nodejs",
    "expressjs",
    "mongoose",
    "mysql",
    "mongodb",
    "docker",
    "aws",
    "react",
    "nextjs",
    "reactquery",
    "reactrouter",
    "redux",
    "typescript",
    "javascript",
    "html5",
    "css3",
    "zod",
    "vscode",
    "vercel",
  ];

  return (
    <section
      id="tech"
      className="relative overflow-hidden py-20 flex flex-col items-center justify-center"
    >
      {/* Background blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-16 w-64 h-64 bg-blue-400/20 rounded-full blur-3xl animate-blob" />
        <div className="absolute bottom-20 right-16 w-72 h-72 bg-purple-400/20 rounded-full blur-3xl animate-blob" />
      </div>

      {/* Section content */}
      <motion.div
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="relative z-10 container mx-auto px-6 text-center"
      >
        <motion.h2
          variants={staggerItem}
          className="text-4xl sm:text-5xl font-extrabold tracking-tight text-foreground mb-14"
        >
          Tech Stack I Work With
        </motion.h2>

        <motion.div
          variants={staggerContainer}
          className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4 sm:gap-5"
        >
          {stack.map((name, idx) => (
            <motion.div
              key={idx}
              variants={staggerItem}
              whileHover={{
                scale: 1.06,
                boxShadow: "0 0 30px rgba(255, 255, 255, 0.12)",
              }}
              whileTap={{ scale: 0.96 }}
              className="flex flex-col items-center justify-center gap-2 p-3 rounded-2xl
                         backdrop-blur-3xl bg-white/10 dark:bg-white/5 border border-white/20 
                         shadow-[inset_0_0_1px_rgba(255,255,255,0.1),0_0_12px_rgba(255,255,255,0.06)]
                         transition duration-300"
            >
              <StackIcon
                name={name}
                className="w-9 h-9 sm:w-10 sm:h-10 drop-shadow-[0_2px_6px_rgba(0,0,0,0.25)]"
                variant={theme === "dark" ? "dark" : "light"}
              />
              <span className="text-[11px] sm:text-xs text-muted-foreground font-medium capitalize tracking-wide">
                {name.replace(/([a-z])([A-Z])/g, "$1 $2")}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
