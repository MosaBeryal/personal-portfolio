import { motion } from "framer-motion";
import { Code, Palette, Cloud, Wrench } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { fadeInUp, staggerContainer, staggerItem } from "@/lib/animations";
import { useEffect, useState } from "react";

const skillCategories = [
  {
    title: "Frontend",
    icon: Code,
    color: "text-blue-400",
    skills: [
      { name: "JavaScript", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "React.js", level: 95 },
      { name: "Redux", level: 80 },
    ],
  },
  {
    title: "Styling",
    icon: Palette,
    color: "text-purple-400",
    skills: [
      { name: "CSS", level: 90 },
      { name: "Tailwind CSS", level: 95 },
      { name: "Bootstrap", level: 85 },
      { name: "Chakra UI", level: 88 },
    ],
  },
  {
    title: "Cloud",
    icon: Cloud,
    color: "text-green-400",
    skills: [
      { name: "Azure", level: 75 },
      { name: "AWS", level: 70 },
      { name: "Firebase", level: 80 },
    ],
  },
  {
    title: "Tools",
    icon: Wrench,
    color: "text-amber-400",
    skills: [
      { name: "D3.js", level: 82 },
      { name: "Git", level: 90 },
      { name: "Next.js", level: 78 },
      { name: "Leaflet.js", level: 75 },
    ],
  },
];

function SkillItem({ skill, isVisible, delay }) {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    if (isVisible) setTimeout(() => setProgress(skill.level), delay);
  }, [isVisible]);
  return (
    <motion.div variants={staggerItem} className="space-y-1">
      <div className="flex justify-between text-sm text-foreground">
        <span>{skill.name}</span>
        <span className="text-muted-foreground">{skill.level}%</span>
      </div>
      <Progress value={progress} className="h-2 rounded-full" />
    </motion.div>
  );
}

export function SkillsSection() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section id="skills" ref={ref} className="relative py-20 overflow-hidden">
      {/* Animated “water blobs” */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-60 h-60 md:w-72 md:h-72 bg-blue-400/30 rounded-full blur-3xl animate-blob" />
        <div className="absolute bottom-32 right-20 w-80 h-80 md:w-96 md:h-96 bg-purple-400/30 rounded-full blur-3xl animate-blob" />
      </div>

      <div className="relative z-10 container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial="initial"
          animate={isVisible ? "animate" : undefined}
          variants={fadeInUp}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Skills & Technologies
          </h2>
          <div className="mx-auto w-20 h-1 bg-gradient-to-r from-primary to-violet-600" />
        </motion.div>

        <motion.div
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-4"
          variants={staggerContainer}
          initial="initial"
          animate={isVisible ? "animate" : undefined}
        >
          {skillCategories.map((cat, idx) => (
            <motion.div key={idx} variants={staggerItem}>
              <Card className="relative flex flex-col h-full overflow-hidden rounded-3xl border border-white/20 bg-white/10 backdrop-blur-2xl shadow-2xl hover:scale-[1.03] transition-transform duration-300">
                <CardContent className="flex flex-col flex-1 p-6">
                  {/* Shimmer & specular reflection */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-3xl pointer-events-none" />

                  <div className="flex flex-col items-center mb-6 z-10">
                    <div className="animate-shimmer flex h-16 w-16 items-center justify-center rounded-full bg-white/10">
                      <cat.icon className={`h-8 w-8 ${cat.color}`} />
                    </div>
                    <h3 className="mt-4 text-xl font-semibold text-foreground">
                      {cat.title}
                    </h3>
                  </div>

                  <motion.div
                    className="space-y-4 z-10 flex-1"
                    variants={staggerContainer}
                  >
                    {cat.skills.map((skill, i2) => (
                      <SkillItem
                        key={i2}
                        skill={skill}
                        isVisible={isVisible}
                        delay={i2 * 200}
                      />
                    ))}
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
