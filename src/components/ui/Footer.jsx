import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 py-12 px-4">
      <div className="flex flex-col items-center space-y-8 max-w-4xl mx-auto">
        {/* Brand Section */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-2 tracking-tight">
            HackCulture
          </h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm max-w-md">
            Building the future through innovation, community, and technology
          </p>
        </div>

        {/* Divider */}
        <div className="w-24 h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-600 to-transparent"></div>

        {/* Links Section */}
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          <a
            href="https://chat.whatsapp.com/HEuWrIRI3RC2d508a4dMD3"
            target="_blank"
            rel="noopener noreferrer"
            className="group text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300"
          >
            Join Community
          </a>
          <a
            href="https://www.termsfeed.com/live/33515683-37c6-4f27-acd9-9ba55d07281b"
            target="_blank"
            rel="noopener noreferrer"
            className="group text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300"
          >
            Privacy Policy
          </a>
          <a
            href="https://tinyurl.com/TGBHCOC"
            target="_blank"
            rel="noopener noreferrer"
            className="group text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300"
          >
            Code of Conduct
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex items-center space-x-6">
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/company/hackculture/"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-3 rounded-full bg-white dark:bg-gray-800 shadow-md hover:shadow-lg text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-all duration-300 hover:scale-110"
          >
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 448 512"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
            </svg>
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/hackculture.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-3 rounded-full bg-white dark:bg-gray-800 shadow-md hover:shadow-lg text-gray-600 hover:text-pink-500 dark:text-gray-400 dark:hover:text-pink-400 transition-all duration-300 hover:scale-110"
          >
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 448 512"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8z" />
            </svg>
          </a>

          {/* Twitter/X */}
          <a
            href="https://x.com/Hack_Culture"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-3 rounded-full bg-white dark:bg-gray-800 shadow-md hover:shadow-lg text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white transition-all duration-300 hover:scale-110"
          >
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 512 512"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
            </svg>
          </a>
        </div>

        {/* Bottom Section */}
        <div className="text-center pt-4 border-t border-gray-200/30 dark:border-gray-700/30 w-full max-w-2xl">
          <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
            © 2024 HackCulture. Crafted with passion for innovation and community.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
