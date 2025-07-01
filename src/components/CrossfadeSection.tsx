// components/CrossfadeSection.tsx
import { motion } from 'framer-motion';
import React from 'react';

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: 'easeOut',
      duration: 0.8,
    },
  },
};

const CrossfadeSection = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.4 }}
      variants={fadeInUp}
      className="relative z-10"
    >
      {children}
    </motion.div>
  );
};

export default CrossfadeSection;
