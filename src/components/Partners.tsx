import FaqSection from "../components/ui/Faq"

const Partners = () => {
  const partnerData = [
    {
      src: '/Black Full Logo.png',
      link: 'https://www.hackculture.in',
    },
    {
      src: ['/github-mark.png', '/GitHub_Logo.png'],
      link: 'https://github.com/',
    },
    {
      src: '/tms.png',
      link: 'https://testmyskills.ai/',
    },
    {
      src: '/gr.png',
      link: 'https://www.geekroom.in/',
    },
  ];

  return (
    <section className="px-8 py-12">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Our Partners */}
        <div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white text-center mb-10 tracking-tight">
            OUR PARTNERS
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6">
            {partnerData.map((partner, index) => (
              <a
                key={index}
                href={partner.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div className="bg-gradient-to-br from-white to-white rounded-2xl h-40 flex items-center justify-center shadow-[8px_8px_0px_#a78bfa] hover:shadow-[12px_12px_0px_#7c3aed] transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 perspective-1000">
                  {Array.isArray(partner.src) ? (
                    <div className="flex items-center justify-center gap-4 px-6">
                      <img
                        src={partner.src[0]}
                        alt="GitHub Mark"
                        className="object-contain max-h-16"
                      />
                      <img
                        src={partner.src[1]}
                        alt="GitHub Logo"
                        className="object-contain max-h-12"
                      />
                    </div>
                  ) : (
                    <img
                      src={partner.src}
                      alt={`Partner ${index + 1}`}
                      className={`object-contain px-6 ${partner.src === '/gr.png' ? 'max-h-28' : 'max-h-16'}`}
                    />
                  )}
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
      <FaqSection />
    </section>
  );
};

export default Partners;
