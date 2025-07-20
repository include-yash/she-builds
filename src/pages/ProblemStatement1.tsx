import React, { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ProblemStatement1 = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Always scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-400 via-purple-500 to-purple-600">
      {/* Yellow Banner */}
      <div className="bg-yellow-400 py-3 px-4">
        <div className="container mx-auto text-center">
          <p className="text-purple-900 font-semibold">
            Problem Statement announcement and Idea submissions starts from 20th July
            <button className="ml-4 text-purple-900 hover:text-purple-700">✕</button>
          </p>
        </div>
      </div>

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
                className="h-8 w-auto"
              />
            </div>
          </div>
          <Button className="bg-purple-600 hover:bg-purple-700 text-white font-bold px-6 py-2 rounded-full">
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
            <Button className="bg-purple-600 hover:bg-purple-700 text-white font-bold px-8 py-3 rounded-full text-lg">
              Register Now
            </Button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-purple-800/50 backdrop-blur-sm border-t border-white/20 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-6 mb-4 md:mb-0">
              <a href="#" className="text-yellow-300 hover:text-yellow-200 font-medium">Join Community</a>
              <a href="#" className="text-yellow-300 hover:text-yellow-200 font-medium">Privacy Policy</a>
              <a href="#" className="text-yellow-300 hover:text-yellow-200 font-medium">Code Of Conduct</a>
            </div>
            <div className="flex items-center gap-4">
              <a href="#" className="text-white hover:text-yellow-300 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="#" className="text-white hover:text-yellow-300 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.042-3.441.219-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.888-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.357-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z"/>
                </svg>
              </a>
              <a href="#" className="text-white hover:text-yellow-300 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.80l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProblemStatement1; 