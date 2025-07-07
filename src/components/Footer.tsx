import React from "react";
import { FaInstagram, FaXTwitter, FaLinkedin } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer
      className="text-white text-xs sm:text-sm py-4 sm:py-6 w-full relative z-50"
      style={{
        backgroundColor: "#9333EA", // solid purple (Tailwind's purple-900)
        opacity: 1,                 // force full opacity
        backdropFilter: "none",    // remove blur/transparency effects
        mixBlendMode: "normal",    // prevent blending with background
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20">
        <div className="flex flex-col sm:flex-row justify-between items-center sm:items-start gap-4 sm:gap-0 text-center sm:text-left">

          {/* Links */}
          <div className="flex flex-wrap justify-center sm:justify-start gap-x-6 gap-y-2">
            <a
              href="https://accidental-potato-870.notion.site/Vliv-presents-SheBuild-Hackathon-224ce9ad774880718a22c14db3c4bd6f"
              className="hover:underline"
              style={{ textShadow: "1px 1px 0 #a78bfa" }}
              target="_blank"
              rel="noopener noreferrer"
            >
              Code of Conduct
            </a>
            <a
              href="https://www.termsfeed.com/live/33515683-37c6-4f27-acd9-9ba55d07281b"
              className="hover:underline"
              style={{ textShadow: "1px 1px 0 #a78bfa" }}
              target="_blank"
              rel="noopener noreferrer"
            >
              Privacy Policy
            </a>
            <a
              href="https://bento.me/hackculture"
              className="hover:underline"
              style={{ textShadow: "1px 1px 0 #a78bfa" }}
              target="_blank"
              rel="noopener noreferrer"
            >
              Join Community
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center sm:justify-end gap-5 text-lg sm:text-xl w-full sm:w-auto">
            <a
              href="https://www.instagram.com/hackculture.in/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram
                className="hover:text-purple-300 transition"
                style={{ textShadow: "1px 1px 0 #a78bfa" }}
              />
            </a>
            <a
              href="https://x.com/Hack_Culture"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X"
            >
              <FaXTwitter
                className="hover:text-purple-300 transition"
                style={{ textShadow: "1px 1px 0 #a78bfa" }}
              />
            </a>
            <a
              href="https://www.linkedin.com/company/hackculture/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin
                className="hover:text-purple-300 transition"
                style={{ textShadow: "1px 1px 0 #a78bfa" }}
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
