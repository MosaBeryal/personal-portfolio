// /lib/animations.ts

// General fade-in upward motion
export const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 60 },
  transition: { duration: 0.6, ease: [0.45, 0, 0.55, 1] },
};

// General fade-in downward motion
export const fadeInDown = {
  initial: { opacity: 0, y: -60 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -60 },
  transition: { duration: 0.6, ease: [0.45, 0, 0.55, 1] },
};

// Simple fade
export const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.8, ease: [0.45, 0, 0.55, 1] },
};

// Slide from left
export const slideInLeft = {
  initial: { opacity: 0, x: -60 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -60 },
  transition: { duration: 0.6, ease: [0.45, 0, 0.55, 1] },
};

// Slide from right
export const slideInRight = {
  initial: { opacity: 0, x: 60 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 60 },
  transition: { duration: 0.6, ease: [0.45, 0, 0.55, 1] },
};

// Scale in smoothly
export const scaleUp = {
  initial: { opacity: 0, scale: 0.85 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.85 },
  transition: { duration: 0.55, ease: [0.45, 0, 0.55, 1] },
};

// Stagger container for child elements
export const staggerContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
  exit: {
    transition: {
      staggerChildren: 0.06,
      staggerDirection: -1,
    },
  },
};

// Staggered fade-in with upward movement
export const staggerItem = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 24 },
  transition: { duration: 0.45, ease: [0.45, 0, 0.55, 1] },
};

// Subtle floating motion
export const floatAnimation = {
  animate: {
    y: [0, -16, 0],
    transition: {
      duration: 5.5,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

// Subtle glowing pulse
export const glowAnimation = {
  animate: {
    boxShadow: [
      "0 0 16px rgba(59, 130, 246, 0.5)",
      "0 0 32px rgba(59, 130, 246, 0.8)",
      "0 0 16px rgba(59, 130, 246, 0.5)",
    ],
    transition: {
      duration: 3.5,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};
