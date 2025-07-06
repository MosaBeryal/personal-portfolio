import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { fadeInUp, staggerContainer, staggerItem } from "@/lib/animations";

export function AboutSection() {
  const { ref: sectionRef, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative overflow-hidden py-24 bg-card"
    >
      {/* Animated Blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-64 h-64 bg-blue-400/20 rounded-full blur-3xl animate-blob" />
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-purple-400/20 rounded-full blur-3xl animate-blob" />
      </div>

      {/* Liquid Glass Overlay */}
      <div className="absolute inset-0 bg-white/5 backdrop-blur-xl border border-white/20 rounded-2xl" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 flex flex-col items-center text-center">
        {/* Section Header */}
        <motion.div
          className="mb-16"
          initial="initial"
          animate={isVisible ? "animate" : undefined}
          variants={fadeInUp}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            About Me
          </h2>
          <div className="mx-auto w-20 h-1 bg-gradient-to-r from-primary to-violet-600" />
        </motion.div>

        {/* Text Content */}
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
            Passionate Frontend Developer
          </motion.h3>

          <motion.p
            className="text-lg text-muted-foreground leading-relaxed"
            variants={staggerItem}
          >
            I’m a dedicated Software Engineer building scalable, intuitive user experiences. Currently at En Route Technologies, I specialize in modern frontend technologies like React.js, TypeScript, and data-driven interfaces.
          </motion.p>

          <motion.p
            className="text-lg text-muted-foreground leading-relaxed"
            variants={staggerItem}
          >
            From fleet management platforms to energy data visualizations, I thrive on creating fast, maintainable, and impactful applications that solve real-world challenges.
          </motion.p>

          {/* Stats Cards */}
          <motion.div
            className="grid grid-cols-2 gap-6 pt-8 w-full"
            variants={staggerContainer}
          >
            {[
              { label: "Years Experience", value: "2+" },
              { label: "Projects Completed", value: "10+" },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                variants={staggerItem}
                className="p-4 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 flex flex-col items-center"
              >
                <div className="text-3xl font-bold text-primary">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
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
