import React from "react";
import Navigation from "@/components/Navigation";
import AboutSection from "@/components/AboutSection";
import ProblemStatement from "@/components/ProblemStatement";
import PrizePool from "@/components/PrizePool";
import Timeline from "@/components/Timeline";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/ui/Footer";

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
        <section id="about" className="py-0">
          <AboutSection />
        </section>
        <section id="problem-statement" className="py-0">
          <ProblemStatement />
        </section>
        <section id="prizes" className="py-0">
          <PrizePool />
        </section>
        <section id="who-can-apply" className="py-0">
          <ContactSection />
        </section>
        <section id="timelines" className="py-0">
          <Timeline />
        </section>
        <section id="timelines" className="py-0">
        </section>
      </main>
    </>
  );
};

export default Index;
