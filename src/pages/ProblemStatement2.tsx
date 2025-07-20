import React, { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Footer from '@/components/Footer';

const ProblemStatement2 = () => {
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
                src="/vliv-logo.svg" 
                alt="VLIV" 
                className="h-12 w-auto"
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

export default ProblemStatement2; 