import { motion } from "framer-motion";
import { Code, Database, Globe } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { fadeInUp, staggerContainer, staggerItem } from "@/lib/animations";

const courses = [
  { name: "Data Structures & Algorithms", icon: Code, color: "text-blue-400" },
  { name: "Database Management", icon: Database, color: "text-green-400" },
  { name: "Web Engineering", icon: Globe, color: "text-purple-400" },
];

export function EducationSection() {
  const { ref: sectionRef, isVisible } = useScrollAnimation({ threshold: 0.3 });

  return (
    <section
      id="education"
      ref={sectionRef}
      className="relative overflow-hidden py-24"
    >
      {/* Background Blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-60 h-60 md:w-72 md:h-72 bg-blue-400/30 rounded-full blur-3xl animate-blob" />
        <div className="absolute bottom-32 right-20 w-80 h-80 md:w-96 md:h-96 bg-purple-400/30 rounded-full blur-3xl animate-blob" />
      </div>

      {/* Liquid Glass Overlay */}
      {/* <div className="absolute inset-0 bg-white/5 backdrop-blur-xl border border-white/20 rounded-2xl" /> */}

      <div className="relative z-10 container mx-auto px-6">
        {/* Section Title */}
        <motion.div
          className="text-center mb-16"
          initial="initial"
          animate={isVisible ? "animate" : undefined}
          variants={fadeInUp}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            Education
          </h2>
          <div className="mx-auto w-20 h-1 bg-gradient-to-r from-primary to-violet-600" />
        </motion.div>

        <motion.div
          initial="initial"
          animate={isVisible ? "animate" : undefined}
          variants={fadeInUp}
          className="max-w-4xl mx-auto"
        >
          <Card className="relative border-l-4 shadow-lg bg-white/5 border-white/20  backdrop-blur-xl">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-semibold text-foreground mb-1">
                    Bachelor of Computer Science
                  </h3>
                  <h4 className="text-lg font-medium text-primary">
                    Islamia College University, Peshawar
                  </h4>
                </div>
                <Badge variant="outline" className="bg-primary/10 mt-4 md:mt-0">
                  Graduated Nov 2021
                </Badge>
              </div>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                <strong>Key Courses:</strong> Data Structures & Algorithms,
                Database Management, Web Engineering.
              </p>

              <motion.div
                className="grid md:grid-cols-3 gap-5 mt-6"
                variants={staggerContainer}
                initial="initial"
                animate={isVisible ? "animate" : undefined}
              >
                {courses.map((course, idx) => (
                  <motion.div
                    key={idx}
                    className="relative p-5 bg-white/10 backdrop-blur-sm rounded-2xl text-center shadow-sm"
                    variants={staggerItem}
                  >
                    <course.icon
                      className={`h-8 w-8 mx-auto mb-3 ${course.color}`}
                    />
                    <div className="text-base font-medium text-foreground">
                      {course.name}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
