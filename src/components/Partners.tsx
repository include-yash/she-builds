const Partners = () => {
  const partnerLogos = [
    '/Black Full Logo.png',
    '/htv.jpg',
    '/tms.png'
  ];

  return (
    <section className="px-8 py-12">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Our Partners */}
        <div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white text-center mb-10 tracking-tight">
            OUR PARTNERS
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {partnerLogos.map((src, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-white to-white rounded-2xl h-40 flex items-center justify-center shadow-[8px_8px_0px_#a78bfa] hover:shadow-[12px_12px_0px_#7c3aed] transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 perspective-1000"
              >
                <img
                  src={src}
                  alt={`Partner ${index + 1}`}
                  className="max-h-16 object-contain px-6"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
