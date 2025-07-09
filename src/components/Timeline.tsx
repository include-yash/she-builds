import React from 'react';
import { MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import FaqSection from './ui/Faq';

const timelineEvents = [
  { date: '10th - 22th July', title: 'Registrations' },
  { date: '10th - 22th July', title: 'Idea Submission' },
  { date: '27th July', title: 'Shortlisting' },
  { date: '29th July', title: 'AMA Session' },
  { date: '1st & 2nd August', title: '24 hrs Hackathon Day' },
];

const Timeline = () => {
  return (
    <>
      <section id="timelines" className="px-4 sm:px-6 lg:px-8 py-8 sm:py-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">

            {/* Title with Clock Icon */}
            <div className="flex items-center justify-center gap-2 mb-12">
              <h2 className="flex items-center gap-6 text-3xl sm:text-4xl font-extrabold text-purple-600">
                EVENT TIMELINE
                <div className="relative group">
                  <div className="absolute inset-0 bg-purple-200/30 rounded-full blur-xl group-hover:blur-2xl transition-all duration-300" />
                  <img
                    src="/clock.png"
                    alt="Clock Icon"
                    className="relative w-12 h-12 object-contain drop-shadow-lg group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
              </h2>
            </div>

            {/* Background Lines */}
            <div className="relative flex flex-col md:flex-row items-center md:justify-between gap-16 md:gap-0">
              {/* Horizontal line for desktop */}
              <div className="hidden md:block absolute top-[40px] left-20 right-20 h-1 bg-purple-200 z-0" />

              {/* Vertical line for mobile */}
              <div className="md:hidden absolute left-1/2 top-[40px] bottom-20 w-1 bg-purple-50 -translate-x-1/2 z-0" />

              {/* Timeline Events */}
              {timelineEvents.map((event, index) => (
                <motion.div
                  key={index}
                  className="relative z-10 flex flex-col items-center text-center"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.15,
                    ease: 'easeOut',
                  }}
                  viewport={{ once: true, amount: 0.6 }}
                >
                  {/* Icon with glowing hover */}
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                    className="bg-purple-100 p-3 rounded-full shadow-md"
                  >
                    <MapPin className="text-purple-600 w-6 h-6" />
                  </motion.div>

                  {/* Text */}
                  <div className="mt-4 text-sm sm:text-base text-gray-800 font-medium max-w-[180px]">
                    <div className="mb-1 text-gray-500">{event.date}</div>
                    <div className="font-bold text-purple-700 text-lg">
                      {event.title}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      
    </>
  );
};

export default Timeline;
