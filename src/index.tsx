import React from "react";
import Navigation from "@/components/Navigation";
import AboutSection from "@/components/sections/AboutSection";
import ProblemStatement from "@/components/sections/ProblemStatement";
import PrizePool from "@/components/sections/PrizePool";
import Timeline from "@/components/sections/Timeline";
import ContactSection from "@/components/sections/ContactSection";

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
        <section id="about">
          <AboutSection />
        </section>
        <section id="problem-statement">
          <ProblemStatement />
        </section>
        <section id="prizes">
          <PrizePool />
        </section>
        <section id="who-can-apply">
          <ContactSection />
        </section>
        <section id="timelines">
          <Timeline />
        </section>
      </main>
    </>
  );
};

export default Index;
