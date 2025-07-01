import React from "react";
import { Lightbulb } from "lucide-react";
import { motion } from "framer-motion";

const PrizePool = () => {
  const prizes = [
    { position: "WINNERS", amount: "75k" },
    { position: "1ST RUNNER UP", amount: "50k" },
    { position: "2ND RUNNER UP", amount: "20k" },
  ];

  return (
    <section id="prizes" className="px-4 sm:px-6 lg:px-8 py-24">
      <div className="max-w-7xl mx-auto">
        {/* Container */}
        <motion.div
          className="bg-white/80 backdrop-blur-xl rounded-3xl p-16 shadow-2xl relative"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Title & Icon */}
          <div className="text-center mb-12 relative">
            <h2 className="text-5xl font-extrabold text-purple-700 tracking-tight drop-shadow-md">
              PRIZE POOL
            </h2>
            
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {prizes.map((prize, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.06 }}
                transition={{ duration: 0.3 }}
                className="relative rounded-2xl p-12 text-center shadow-xl overflow-hidden group"
              >
                {/* Glowing Gradient Background */}
                <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#6F3CC7] via-[#A74DFE] to-[#D26EFF] group-hover:brightness-110 transition duration-300 rounded-2xl blur-sm"></div>

                {/* Content on top */}
                <div className="relative z-10">
                  <h3 className="text-white font-semibold text-lg uppercase mb-3 tracking-widest drop-shadow-sm">
                    {prize.position}
                  </h3>
                  <div className="text-white text-5xl md:text-6xl font-extrabold drop-shadow-xl">
                    ₹{prize.amount}
                  </div>
                </div>

                {/* Optional glow border */}
                <div className="absolute inset-0 rounded-2xl border border-white/20 group-hover:border-white/40 transition duration-300"></div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PrizePool;
