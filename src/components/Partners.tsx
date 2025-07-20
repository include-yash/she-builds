import FaqSection from "../components/ui/Faq"

const Partners = () => {
  const partnerData = [
    {
      src: '/Black Full Logo.png',
      link: 'https://www.hackculture.in',
      className: 'object-contain px-6 max-h-12',
      background: 'bg-gradient-to-br from-white to-white',
    },
    {
      src: '/vliv-logo.svg',
      link: 'https://thevliv.com/',
      className: 'object-contain px-6 w-36 h-auto',
      background: 'bg-gradient-to-br from-white to-white',
    },
    {
      src: '/GitHub_Logo.png',
      link: 'https://github.com/',
      className: 'object-contain px-6 max-h-16',
      background: 'bg-gradient-to-br from-white to-white',
    },
    {
      src: '/omni-logo.webp',
      link: 'https://www.omnidim.io/',
      className: 'object-contain px-6 max-h-16',
      background: 'bg-slate-900',
      fallbackText: 'OMNI',
      hasSpecialBackground: true,
    },
    {
      src: '/gr.png',
      link: 'https://www.geekroom.in/',
      className: 'object-contain px-6 max-h-28',
      background: 'bg-gradient-to-br from-white to-white',
    },
    {
      src: '/SheBuilds.png',
      link: '#',
      className: 'object-contain px-6 max-h-28',
      background: 'bg-gradient-to-br from-white to-white',
    },
    {
      src: '/women-in-tech.png',
      link: 'https://women-in-tech.org/',
      className: 'object-contain px-6 max-h-16',
      background: 'bg-gradient-to-br from-white to-white',
    },
  ];

  const handleImageError = (event: React.SyntheticEvent<HTMLImageElement>, partner: any) => {
    const img = event.target as HTMLImageElement;
    if (partner.fallbackText && partner.hasSpecialBackground) {
      // Replace with fallback text for OMNI
      const parent = img.parentElement;
      if (parent) {
        parent.innerHTML = `<div class="text-white font-bold text-xl text-center">${partner.fallbackText}</div>`;
      }
    }
  };

  return (
    <section className="px-8 py-12">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Our Partners */}
        <div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white text-center mb-10 tracking-tight">
            OUR PARTNERS
          </h2>

          <div className="space-y-6">
            {/* First 4 logos - 2 rows of 2 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {partnerData.slice(0, 4).map((partner, index) => (
                <a
                  key={index}
                  href={partner.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <div className={`${partner.background} rounded-2xl h-40 flex items-center justify-center shadow-[8px_8px_0px_#a78bfa] hover:shadow-[12px_12px_0px_#7c3aed] transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 perspective-1000`}>
                    <img
                      src={partner.src}
                      alt={`Partner ${index + 1}`}
                      className={partner.className}
                      onError={(e) => handleImageError(e, partner)}
                      loading="lazy"
                    />
                  </div>
                </a>
              ))}
            </div>
            
            {/* Last 3 logos - 1 row of 3 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {partnerData.slice(4).map((partner, index) => (
                <a
                  key={index + 4}
                  href={partner.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <div className={`${partner.background} rounded-2xl h-40 flex items-center justify-center shadow-[8px_8px_0px_#a78bfa] hover:shadow-[12px_12px_0px_#7c3aed] transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 perspective-1000`}>
                    <img
                      src={partner.src}
                      alt={`Partner ${index + 5}`}
                      className={partner.className}
                      onError={(e) => handleImageError(e, partner)}
                      loading="lazy"
                    />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      <FaqSection />
    </section>
  );
};

export default Partners;
