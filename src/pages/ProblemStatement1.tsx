import React, { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Footer from '@/components/Footer';

const ProblemStatement1 = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Always scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-400 via-purple-500 to-purple-600">
      {/* Header */}
      <div className="bg-white/10 backdrop-blur-sm border-b border-white/20">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button 
              onClick={() => navigate('/')}
              variant="ghost"
              className="text-white hover:bg-white/10 p-2"
            >
              <ArrowLeft className="w-5 h-5" />
            </Button>
            <div className="flex items-center gap-6">
              <img 
                src="/Black Full Logo.png" 
                alt="HackCulture" 
                className="h-8 w-auto"
              />
              <img 
                src="/vliv-logo.svg" 
                alt="VLIV" 
                className="h-8 w-auto"
              />
              <img 
                src="/omni-logo.webp" 
                alt="OMNI" 
                className="h-12 w-auto"
              />
            </div>
          </div>
          <Button 
            onClick={() => window.open('https://tally.so/r/mRQp7j', '_blank')}
            className="bg-purple-600 hover:bg-purple-700 text-white font-bold px-6 py-2 rounded-full"
          >
            Register Now
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-5xl mx-auto">
          {/* Track Header */}
          <h2 className="text-yellow-300 text-2xl font-bold mb-6">Track 1</h2>

          {/* Main Title */}
          <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
            AI-Powered Personalized Roommate Matching for Women's Co-Living Spaces
          </h1>

          {/* Description */}
          <p className="text-white/90 text-lg leading-relaxed mb-12">
            Design and develop an AI-driven roommate matching system that intelligently recommends 
            the most compatible roommates for twin-sharing accommodations. The system should rely on 
            minimal survey input while ensuring high accuracy in match quality. Additionally, participants 
            must consider incorporating Omnidim.io's Voice AI Assistant to capture user preferences in a 
            natural, conversational manner.
          </p>

          {/* Key Requirements */}
          <div className="mb-12">
            <h3 className="text-yellow-300 text-2xl font-bold mb-6">Key Requirements</h3>
            <ul className="text-white/90 space-y-4">
              <li className="flex items-start">
                <span className="text-yellow-300 mr-3 text-xl">•</span>
                <div>
                  <strong className="text-white">Minimal Input, Maximum Insight:</strong> Design a micro-survey with 5 or fewer questions that can capture essential compatibility attributes (e.g., lifestyle, sleeping habits, work hours, cleanliness, social behaviour).
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-300 mr-3 text-xl">•</span>
                <div>
                  <strong className="text-white">AI-Based Matching Algorithm:</strong> Build a model or matching logic that processes inputs and returns the best roommate matches available in the system and a match score or explanation for transparency and user trust.
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-300 mr-3 text-xl">•</span>
                <div>
                  <strong className="text-white">Omnidim Voice AI Integration:</strong> Integrate Omnidim.io's Voice Assistant to deliver the survey conversationally, personalize questions based on prior answers or tone, and store structured input for backend processing.
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-300 mr-3 text-xl">•</span>
                <div>
                  <strong className="text-white">Room Allocation Logic:</strong> Beyond matching people, suggest the most suitable room assignment based on availability (e.g., twin vs single), preferences (e.g., near window, floor level), and match outcome.
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-300 mr-3 text-xl">•</span>
                <div>
                  <strong className="text-white">Scalability & Ethics:</strong> Design with scalability in mind—consider how this would function with hundreds or thousands of users. Respect privacy and fairness—no biases based on race, religion, etc.
                </div>
              </li>
            </ul>
          </div>

          {/* Deliverables */}
          <div className="mb-12">
            <h3 className="text-yellow-300 text-2xl font-bold mb-6">Deliverables</h3>
            <ul className="text-white/90 space-y-4">
              <li className="flex items-start">
                <span className="text-yellow-300 mr-3 text-xl">•</span>
                <div>
                  <strong className="text-white">Voice-Based Micro-Survey (Omnidim.io Integration):</strong> A working demo of a voice-first intake form using Omnidim.io that asks 5 or fewer well-crafted questions to extract key compatibility traits with structured and usable responses.
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-300 mr-3 text-xl">•</span>
                <div>
                  <strong className="text-white">Matching Algorithm:</strong> Build an algorithm that compares incoming guest profiles with existing occupants, outputs the top roommate match with a compatibility score, and suggests an available twin-sharing room.
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-300 mr-3 text-xl">•</span>
                <div>
                  <strong className="text-white">Match Recommendation Output:</strong> Display the match result with suggested roommate name/profile, compatibility score (0–100 or High/Medium/Low), suggested room, and simple explanation of why the match was chosen.
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-300 mr-3 text-xl">•</span>
                <div>
                  <strong className="text-white">Basic Admin View or Log:</strong> Maintain a simple list of all incoming profiles, matching results, and room assignments through a basic UI, console printout, or spreadsheet-style log.
                </div>
              </li>
            </ul>
          </div>

          {/* Register Button */}
          <div className="text-center">
            <Button 
              onClick={() => window.open('https://tally.so/r/mRQp7j', '_blank')}
              className="bg-purple-600 hover:bg-purple-700 text-white font-bold px-8 py-3 rounded-full text-lg"
            >
              Register Now
            </Button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ProblemStatement1; 