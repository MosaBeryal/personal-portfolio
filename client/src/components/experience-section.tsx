import { motion } from "framer-motion";
import {
  Truck,
  FastForward,
  Route,
  ChartLine,
  Zap,
  Search,
  CheckSquare,
  ExternalLink,
} from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { fadeInUp, staggerContainer, staggerItem } from "@/lib/animations";

const experiences = [
  {
    title: "Frontend Engineer",
    company: "En Route Technologies",
    location: "Islamabad, Punjab",
    period: "Jan 2024 - Present",
    status: "current",
    description:
      "A SIRA-approved provider offering GPS tracking and fleet management solutions, serving multiple industries with innovative telematics and monitoring tools.",
    projects: [
      {
        name: "Project Flotilla (FMS)",
        subtitle: "Fleet Management Platform",
        description:
          "Powerful telematics platform offering automated, goal-oriented fleet management to enhance operational efficiency.",
        icon: Truck,
        color: "text-blue-600",
        hasLink: true,
      },
      {
        name: "Project Premium Deliveries",
        subtitle: "Delivery Management Platform",
        description:
          "Platform streamlining end-to-end delivery management via real-time order tracking, driver assignment, and route optimization.",
        icon: FastForward,
        color: "text-amber-600",
        status: "In Progress",
      },
      {
        name: "Project NTSC",
        subtitle: "Fleet Management Platform",
        description:
          "Advanced multimodal transportation management platform for goods, services, and people.",
        icon: Route,
        color: "text-violet-600",
        hasLink: true,
      },
    ],
  },
  {
    title: "Frontend Engineer",
    company: "K2X Technologies",
    location: "Peshawar, KPK",
    period: "Jun 2022 - Dec 2024",
    status: "previous",
    description:
      "Collaborated cross-functionally to deliver performant web solutions, optimized large-scale applications, and ensured quality code delivery.",
    projects: [
      {
        name: "PMP Ukraine",
        subtitle: "Funds Management Platform",
        description:
          "Front-end development and optimization for scalable fund management platform generating high revenue.",
        icon: ChartLine,
        color: "text-green-600",
        hasLink: true,
      },
      {
        name: "ECOWAS",
        subtitle: "Energy Flow Visualization",
        description:
          "Built real-time Sankey visualizations for 16 ECOWAS countries integrating data APIs and responsive charting.",
        icon: Zap,
        color: "text-yellow-600",
        hasLink: true,
      },
      {
        name: "GeniHunt",
        subtitle: "B2B Company Search Application",
        description:
          "Enhanced performance by 50% through caching & pagination. Integrated Stripe & event streaming for analytics.",
        icon: Search,
        color: "text-purple-600",
        hasLink: true,
      },
      {
        name: "NTU",
        subtitle: "Project Management Platform",
        description:
          "Managed front-end user admin, security, and client-facing dashboards with reliable delivery and quality.",
        icon: CheckSquare,
        color: "text-blue-600",
        hasLink: true,
      },
      {
        name: "AEDMS",
        subtitle: "Data Management Platform",
        description:
          "Streamlined aviation emissions reporting under CORSIA standards with intuitive, regulation-compliant UI.",
        icon: CheckSquare,
        color: "text-emerald-600",
        hasLink: true,
      },
    ],
  },
];

export function ExperienceSection() {
  const { ref: sectionRef, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="relative overflow-hidden py-24 bg-card"
    >
      {/* Fluid Background Blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-8 left-8 w-64 h-64 bg-blue-400/20 rounded-full blur-3xl animate-blob" />
        <div className="absolute bottom-8 right-8 w-80 h-80 bg-purple-400/20 rounded-full blur-3xl animate-blob" />
      </div>

      {/* Frosted-Glass Overlay */}
      {/* <div className="absolute inset-0 bg-white/5 backdrop-blur-xl border border-white/20 rounded-2xl" /> */}

      <div className="relative z-10 container mx-auto px-6">
        {/* Section Heading */}
        <motion.div
          className="text-center mb-16"
          initial="initial"
          animate={isVisible ? "animate" : undefined}
          variants={fadeInUp}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            Experience
          </h2>
          <div className="mx-auto mb-8 w-20 h-1 bg-gradient-to-r from-primary to-violet-600" />
        </motion.div>

        <div className="max-w-5xl mx-auto space-y-14">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial="initial"
              animate={isVisible ? "animate" : undefined}
              variants={fadeInUp}
              transition={{ delay: i * 0.2 }}
            >
              <Card
                className="relative border-l-4 
                shadow-lg bg-white/10 backdrop-blur-md border-white/20
                overflow-hidden"
                style={{
                  borderColor: exp.status === "current" ? undefined : undefined,
                }}
              >
                <CardContent className="p-8 space-y-6">
                  {/* Job Header */}
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-1">
                        {exp.title}
                      </h3>
                      <h4
                        className={`text-lg font-medium ${
                          exp.status === "current"
                            ? "text-primary"
                            : "text-violet-600"
                        }`}
                      >
                        {exp.company}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {exp.location}
                      </p>
                    </div>
                    <Badge
                      variant={
                        exp.status === "current" ? "default" : "secondary"
                      }
                    >
                      {exp.period}
                    </Badge>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Related Projects */}
                  <motion.div
                    className="grid md:grid-cols-2 gap-6"
                    variants={staggerContainer}
                    initial="initial"
                    animate={isVisible ? "animate" : undefined}
                  >
                    {exp.projects.map((prj, j) => (
                      <motion.div
                        key={j}
                        variants={staggerItem}
                        className="relative p-5 bg-white/10 backdrop-blur-sm rounded-xl shadow-sm hover:shadow-md transition"
                      >
                        <div className="flex flex-wrap items-center gap-2 mb-2">
                          <prj.icon className={`h-5 w-5 ${prj.color}`} />
                          <h5 className="font-medium text-foreground">
                            {prj.name}
                          </h5>

                          {prj.hasLink && (
                            <a
                              href="#"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-primary hover:text-primary/80"
                            >
                              <ExternalLink className="h-4 w-4" />
                            </a>
                          )}
                          {prj.status && (
                            <Badge variant="outline" className="text-xs">
                              {prj.status}
                            </Badge>
                          )}
                        </div>
                        <p className="text-sm text-muted-foreground mb-1">
                          {prj.subtitle}
                        </p>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {prj.description}
                        </p>
                      </motion.div>
                    ))}
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
