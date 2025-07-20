import React, { useState, useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ProblemStatement1 from "./pages/ProblemStatement1";
import ProblemStatement2 from "./pages/ProblemStatement2";

const queryClient = new QueryClient();

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>("about");

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setActiveSection(id);
  };

  useEffect(() => {
    const sectionIds = [
      "about",
      "problem-statement",
      "prizes",
      "who-can-apply",
      "timelines",
      "footer",
    ];

    const handleScroll = () => {
      for (const id of sectionIds) {
        const section = document.getElementById(id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 80) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <Index
                  activeSection={activeSection}
                  scrollToSection={scrollToSection}
                />
              }
            />
            <Route path="/problem-statement-1" element={<ProblemStatement1 />} />
            <Route path="/problem-statement-2" element={<ProblemStatement2 />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
