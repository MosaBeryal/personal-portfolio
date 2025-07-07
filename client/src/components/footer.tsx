"use client";
import { motion } from "framer-motion";
import { Linkedin, Github, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const socialLinks = [
  {
    href: "https://www.linkedin.com/in/mosa-beryal-b03233211/",
    icon: Linkedin,
  },
  { href: "https://github.com/MosaBeryal", icon: Github },
  { href: "mailto:beryalmosa@gmail.com", icon: Mail },
  { href: "tel:+923059823223", icon: Phone },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden py-10">
      {/* Blobs */}
      <div className="absolute inset-0 pointer-events-none">
        {/* <div className="absolute top-0 left-0 w-56 h-56 bg-blue-400/20 rounded-full blur-3xl animate-blob" /> */}
        {/* <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-400/20 rounded-full blur-3xl animate-blob" /> */}
      </div>

      {/* Glass overlay */}
      <div className="absolute inset-0 backdrop-blur-xl" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 flex flex-col items-center text-center space-y-4">
        {/* Social icons */}
        <div className="flex space-x-3">
          {socialLinks.map((social, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                variant="ghost"
                size="icon"
                asChild
                className="w-10 h-10 bg-background/70 text-foreground border border-white/10 backdrop-blur-lg rounded-full hover:scale-110 transition"
              >
                <a
                  href={social.href}
                  target={social.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              </Button>
            </motion.div>
          ))}
        </div>

        {/* Copyright */}
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}
