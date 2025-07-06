import { motion } from "framer-motion";
import { Heart, Linkedin, Github, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const socialLinks = [
  { href: "https://www.linkedin.com/in/mosa-beryal-b03233211/", icon: Linkedin, color: "hover:bg-blue-600" },
  { href: "https://github.com/MosaBeryal", icon: Github, color: "hover:bg-gray-600" },
  { href: "mailto:beryalmosa@gmail.com", icon: Mail, color: "hover:bg-red-600" },
  { href: "tel:+923059823223", icon: Phone, color: "hover:bg-green-600" },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden py-12">
      {/* Animated background “liquid” blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-64 h-64 bg-blue-400/20 rounded-full blur-3xl animate-blob" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-400/20 rounded-full blur-3xl animate-blob" />
      </div>

      {/* Frosted glass overlay */}
      <div className="absolute inset-0 bg-white/5 backdrop-blur-2xl border-t border-white/20"></div>

      {/* Footer content */}
      <div className="relative z-10 container mx-auto px-6 flex flex-col items-center text-center text-white">
        <motion.h2 whileHover={{ scale: 1.05 }} className="text-2xl font-bold text-blue-300 mb-3">
          Mosa Beryal
        </motion.h2>

        <p className="text-slate-400 mb-6 max-w-xl">
          Frontend Software Engineer passionate about creating exceptional digital experiences
        </p>

        <div className="flex justify-center space-x-4 mb-8">
          {socialLinks.map((social, idx) => (
            <motion.div key={idx} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="ghost"
                size="icon"
                asChild
                className={`w-10 h-10 bg-slate-700/70 text-slate-200 rounded-full transition-colors duration-300 ${social.color}`}
              >
                <a
                  href={social.href}
                  target={social.href.startsWith("http") ? "_blank" : undefined}
                  rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              </Button>
            </motion.div>
          ))}
        </div>

        <div className="border-t border-slate-700 pt-6">
          <p className="text-slate-500 flex items-center justify-center gap-2">
            © {new Date().getFullYear()} Mosa Beryal. Built with{" "}
            <Heart className="h-4 w-4 text-red-500" fill="currentColor" /> and React.
          </p>
        </div>
      </div>
    </footer>
  );
}
