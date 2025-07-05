import React from "react";

const Footer = () => {
  return (
    <footer className="bg-purple-700 text-white px-4 py-10">
      <div className="max-w-6xl mx-auto flex flex-col items-center space-y-8 text-center">
        
        {/* Brand */}
        <div>
          <h3 className="text-2xl font-bold">HackCulture</h3>
          <p className="text-sm mt-1 max-w-md">
            Building the future through innovation and community.
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-wrap justify-center gap-6 text-sm font-medium">
          <a
            href="https://chat.whatsapp.com/HEuWrIRI3RC2d508a4dMD3"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline hover:text-white/80 transition"
          >
            Join Community
          </a>
          <a
            href="https://www.termsfeed.com/live/33515683-37c6-4f27-acd9-9ba55d07281b"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline hover:text-white/80 transition"
          >
            Privacy Policy
          </a>
          <a
            href="https://tinyurl.com/TGBHCOC"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline hover:text-white/80 transition"
          >
            Code of Conduct
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex items-center space-x-6">
          <a
            href="https://www.linkedin.com/company/hackculture/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-white/80 transition"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 448 512">
              <path d="M416 32H31.9C14.3 32 0...z" />
            </svg>
          </a>
          <a
            href="https://www.instagram.com/hackculture.in/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="hover:text-white/80 transition"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 448 512">
              <path d="M224.1 141c-63.6...z" />
            </svg>
          </a>
          <a
            href="https://x.com/Hack_Culture"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            className="hover:text-white/80 transition"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 512 512">
              <path d="M389.2 48h70.6...z" />
            </svg>
          </a>
        </div>

        {/* Copyright */}
        <p className="text-xs text-white/70 pt-2">
          © 2024 HackCulture. Crafted with passion for community.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
