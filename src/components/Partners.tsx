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
                className="bg-white rounded-2xl h-32 flex items-center justify-center shadow-xl overflow-hidden"
              >
                <img
                  src={src}
                  alt={`Partner ${index + 1}`}
                  className="max-h-10 object-contain"
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
