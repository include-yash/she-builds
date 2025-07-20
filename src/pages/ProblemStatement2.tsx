import React, { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ProblemStatement2 = () => {
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
          <h2 className="text-yellow-300 text-2xl font-bold mb-6">Track 2</h2>

          {/* Main Title */}
          <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
            Voice-Driven Virtual Customer Success Manager for Resident Support and Engagement
          </h1>

          {/* Description */}
          <p className="text-white/90 text-lg leading-relaxed mb-12">
            Build a voice-enabled Virtual Community Manager that serves two primary functions: Support Management 
            (allow residents to raise complaints or service requests and track their resolution using natural speech) 
            and Community Engagement Assistant (recommend potential events to the community manager, assist in promoting 
            selected events, and gather feedback and analytics post-event).
          </p>

          {/* Key Features */}
          <div className="mb-12">
            <h3 className="text-yellow-300 text-2xl font-bold mb-6">Key Features</h3>
            <ul className="text-white/90 space-y-4">
              <li className="flex items-start">
                <span className="text-yellow-300 mr-3 text-xl">•</span>
                <div>
                  <strong className="text-white">Voice Input via Omnidim.io:</strong> Residents log complaints through the Voice AI Assistant including details like issue type, location (room/floor), and a brief description.
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-300 mr-3 text-xl">•</span>
                <div>
                  <strong className="text-white">Automated Ticket Creation:</strong> System converts voice input into structured ticket format, assigns predefined priority levels (P1–P4) based on keywords and issue types, and allocates tickets to available technicians based on specialization and availability.
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-300 mr-3 text-xl">•</span>
                <div>
                  <strong className="text-white">Ticket Tracking:</strong> When residents provide ticket numbers, the assistant responds with current status (Assigned, In Progress, Resolved). Allows status checks using voice commands like "What's the update on ticket 2035?"
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-300 mr-3 text-xl">•</span>
                <div>
                  <strong className="text-white">Event Suggestions to Community Managers:</strong> The system suggests event ideas based on past successful events, facilities available at the property (e.g., terrace, lounge, garden), and calendar context (e.g., weekends, festivals).
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-300 mr-3 text-xl">•</span>
                <div>
                  <strong className="text-white">Event Promotion Assistance:</strong> Helps create and broadcast event announcement messages (text or voice-based) for community platforms like WhatsApp, bulletin boards, and internal apps.
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-300 mr-3 text-xl">•</span>
                <div>
                  <strong className="text-white">Feedback Collection & Analytics:</strong> Post-event, the assistant collects resident feedback via voice, short surveys, or ratings and generates basic analytics such as attendance count, positive/negative feedback trends, and engagement scores.
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
                  <strong className="text-white">Working Voice Interface (Using Omnidim.io):</strong> Residents can log complaints via voice and provide ticket numbers to get status updates through voice commands.
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-300 mr-3 text-xl">•</span>
                <div>
                  <strong className="text-white">Complaint Management Backend:</strong> Ticket generation based on voice input, priority tagging (P1–P4) based on predefined keyword mapping, and technician/staff assignment (mocked or basic logic is acceptable).
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-300 mr-3 text-xl">•</span>
                <div>
                  <strong className="text-white">Event Recommendation Module:</strong> Suggest events dynamically based on internal calendar, available infrastructure (you may mock this input), and past events stored in a mock dataset.
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-300 mr-3 text-xl">•</span>
                <div>
                  <strong className="text-white">Promotion Assistance:</strong> Generate sample text announcements and/or voice-friendly promotion scripts for at least 2 recommended events.
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-300 mr-3 text-xl">•</span>
                <div>
                  <strong className="text-white">Feedback & Analytics Dashboard:</strong> Collect and store feedback (ratings, voice responses, text) and display basic analytics including participation estimates (mock input acceptable), feedback distribution, and event popularity ranking.
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

export default ProblemStatement2; 