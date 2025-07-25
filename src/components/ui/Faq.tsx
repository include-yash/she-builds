import React, { useState } from 'react';

const faqs = [
  {
    question: 'What is SheBuilds?',
    answer:
      'SheBuilds is a groundbreaking women-only hackathon and innovation program that empowers the next generation of women technologists, creators, and changemakers. It brings together passionate developers, designers, and problem-solvers from across India in an immersive, high-impact hackathon experience.',
  },
  {
    question: 'Who can participate?',
    answer: (
      <ul className="list-disc list-inside space-y-1">
        <li>Women professionals with up to 3 years of industry experience</li>
        <li>Female students currently pursuing undergraduate or postgraduate education</li>
      </ul>
    ),
  },
  {
    question: 'How do I register & submit my idea?',
    answer:
      'You can register by clicking the "Register Now" button on this page, which redirects to the Tally form for registration & idea submissions.',
  },
  {
    question: 'Is there a registration fee?',
    answer: 'No, there is no upfront registration or participation fee.',
  },
  {
    question: 'Can I participate alone, or do I need a team?',
    answer:
      'Participation is allowed only in teams of 2 to 4 members. The team can include participants from different colleges and disciplines—as long as all are women.',
  },
  {
    question: 'What if I’m a beginner?',
    answer:
      'No worries! Hackathons are a great way to learn and grow. We’ll also have mentors to guide you throughout the event.',
  },
  {
    question: 'How do I stay updated?',
    answer: (
      <p>
        Join the WhatsApp group for seamless communication & discussion:&nbsp;
        <a
          href="https://chat.whatsapp.com/JsLUPSu3sio7FLI7RZQ4hx?mode=r_t"
          target="_blank"
          rel="noopener noreferrer"
          className="text-purple-600 underline font-medium"
        >
          Join here
        </a>
      </p>
    ),
  },
  {
    question: 'Will there be any hardware provided?',
    answer: 'No, required hardware devices should be accommodated by participants.',
  },
  {
    question: 'How much time will it take to receive my rewards?',
    answer:
      'Kindly be advised that the processing of rewards for participants will require a minimum of 45 days and will be subject to applicable government taxes, which will be deducted from the source.',
  },
  {
    question: 'Can I apply for multiple problem statements?',
    answer: 'Yes, you can apply for multiple problem statements.',
  },
  {
    question: 'Do all team members need to register?',
    answer:
      'Only one person from the team has to register and idea submission should be done by the same person.',
  },
];

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <section className="px-4 pt-32 pb-0">
      <div className="container mx-auto px-4 md:px-8 max-w-5xl">
        <h1 className="text-center font-spaceGrotesk text-3xl md:text-5xl font-bold uppercase text-white mb-10">
          FAQ&apos;s
        </h1>

        <div className="space-y-6">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="rounded-xl border-2 border-purple-300 bg-white text-black shadow-[6px_6px_0px_0px_#a78bfa] transition-all"
            >
              <button
                type="button"
                onClick={() => toggleFAQ(idx)}
                className="flex w-full items-center justify-between px-4 py-5 sm:px-6 focus:outline-none"
              >
                <p className="text-md font-semibold text-left">{faq.question}</p>
                <svg
                  className={`h-6 w-6 text-black transition-transform duration-300 ${
                    openIndex === idx ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {openIndex === idx && (
                <div className="px-4 pb-4 sm:px-6 text-sm md:text-base">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
