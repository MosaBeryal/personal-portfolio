import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { fadeInUp, staggerContainer, staggerItem } from "@/lib/animations";

const projects = [
  {
    title: "2k Unity Web App",
    description:
      "Full-stack web app with real-time chat and optimized data handling for smooth UX.",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&h=400",
    tech: ["React", "Node.js", "WebSocket"],
    type: "Client Project",
    link: "#",
    linkType: "source",
  },
  {
    title: "Shopping App",
    description:
      "E-commerce platform with Stripe checkout and user-friendly navigation.",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&h=400",
    tech: ["React", "Stripe", "Redux"],
    type: "Personal Project",
    link: "#",
    linkType: "source",
  },
  {
    title: "Game Hub Web App",
    description:
      "React.js app for browsing game data with APIs and Chakra UI for modern design.",
    image:
      "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=800&h=400",
    tech: ["React", "Chakra UI", "API"],
    type: "Personal Project",
    link: "#",
    linkType: "live",
  },
];

const techColors: Record<string, string> = {
  React: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
  "Node.js":
    "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
  WebSocket:
    "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200",
  Stripe:
    "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200",
  Redux:
    "bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200",
  "Chakra UI": "bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-200",
  API: "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200",
};

export function ProjectsSection() {
  const { ref: sectionRef, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative overflow-hidden py-24"
    >
      {/* Background Blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-60 h-60 md:w-72 md:h-72 bg-blue-400/30 rounded-full blur-3xl animate-blob" />
        <div className="absolute bottom-32 right-20 w-80 h-80 md:w-96 md:h-96 bg-purple-400/30 rounded-full blur-3xl animate-blob" />
      </div>
      {/* <div className="absolute inset-0 bg-white/5 backdrop-blur-xl border border-white/20 rounded-2xl" /> */}

      <div className="relative z-10 container mx-auto px-6">
        <motion.h2
          className="text-center text-3xl md:text-4xl font-bold text-foreground mb-4"
          initial="initial"
          animate={isVisible ? "animate" : undefined}
          variants={fadeInUp}
        >
          Featured Projects
        </motion.h2>
        <div className="mx-auto mb-16 w-20 h-1 bg-gradient-to-r from-primary to-violet-600" />

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
          variants={staggerContainer}
          initial="initial"
          animate={isVisible ? "animate" : undefined}
        >
          {projects.map((project, i) => (
            <motion.div key={i} variants={staggerItem}>
              <Card className="relative flex flex-col h-full overflow-hidden rounded-2xl shadow-lg transition-transform duration-300 hover:scale-[1.015] bg-white/10 backdrop-blur-md border border-white/20">
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                </div>

                {/* Glassy Shimmer Layer */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none"></div>
                {/* Optional distortion works in Chromium */}
                <svg style={{ display: "none" }}>
                  <filter id="liquid-distort">
                    <feTurbulence
                      type="fractalNoise"
                      baseFrequency="0.01 0.02"
                      numOctaves="2"
                      result="noise"
                    />
                    <feDisplacementMap
                      in="SourceGraphic"
                      in2="noise"
                      scale="10"
                      xChannelSelector="R"
                      yChannelSelector="G"
                    />
                  </filter>
                </svg>

                <CardContent className="relative z-10 flex flex-col flex-1 p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="text-xs bg-white/20 backdrop-blur-sm border border-white/20"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="mt-auto flex items-center justify-between pt-4">
                    <span className="text-xs text-muted-foreground">
                      {project.type}
                    </span>
                    <Button
                      variant="ghost"
                      size="sm"
                      asChild
                      className="text-primary hover:text-primary/80"
                    >
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center"
                      >
                        {project.linkType === "source" ? "Source" : "Live"}
                        <ExternalLink className="ml-1 h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
