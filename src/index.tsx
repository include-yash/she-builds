import React from "react";
import Navigation from "@/components/Navigation";
import AboutSection from "@/components/AboutSection";
import ProblemStatement from "@/components/ProblemStatement";
import PrizePool from "@/components/PrizePool";
import Timeline from "@/components/Timeline";
import ContactSection from "@/components/ContactSection";

interface IndexProps {
  activeSection: string;
  scrollToSection: (id: string) => void;
}

const Index = ({ activeSection, scrollToSection }: IndexProps) => {
  return (
    <>
      <Navigation
        activeSection={activeSection}
        scrollToSection={scrollToSection}
      />
      <main className="bg-black min-h-screen text-white scroll-smooth">
        <section id="about" className="py-10">
          <AboutSection />
        </section>
        <section id="problem-statement" className="py-10">
          <ProblemStatement />
        </section>
        <section id="prizes" className="py-10">
          <PrizePool />
        </section>
        <section id="who-can-apply" className="py-10">
          <ContactSection />
        </section>
        <section id="timelines" className="py-10">
          <Timeline />
        </section>
      </main>
    </>
  );
};

export default Index;
