import { motion } from "framer-motion";

const Partners = () => {
  const foundingPartners = [
    {
      name: "Madras Marketers",
      role: "Founding Partner",
      url: "https://madrasmarketers.com",
      image: "/optimized/mm-logo.png",
    },
  ];

  const supportingPartners = [
    {
      name: "Fellow Founders",
      role: "Supporting Partner",
      url: "https://fellowfounder.ai",
      image: "/optimized/fellow founders.webp",
    },
    {
      name: "Refreshment Company",
      role: "Supporting Partner",
      url: "#",
      image: "/optimized/refreshment.webp",
    },
    {
      name: "KYN",
      role: "Discovery & Connectivity Partner",
      url: "https://kynhood.com/",
      image: "/optimized/kynLogo.svg",
    },
    {
      name: "YuniQ",
      role: "Venue Partner",
      url: "https://yuniq.co/",
      image: "/optimized/yuniqlogo1.webp",
    },
  ];

  return (
    <section className="py-12 md:py-24 bg-black border-t border-white/10">
      <div className="container mx-auto px-6">
        {/* Founding Partners Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-6 md:mb-16"
        >
          <h2 className="text-2xl md:text-5xl font-bold mb-4 md:mb-6 text-white tracking-tight">
            An initiative by Madras Marketers
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            South India's invite-only OG Marketers Community, on a mission of building Madras as the global marketing capital. 
            Marketers from leading brands like Lenskart, Apollo, and The Hindu have already joined.
          </p>
        </motion.div>

        <div className="flex justify-center mb-16 md:mb-24">
          {foundingPartners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col items-center group w-full md:w-96"
            >
              <a
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block relative p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-white/30 hover:bg-white/10 transition-all duration-300 w-full h-36 md:h-48 flex items-center justify-center"
              >
                <img
                  src={partner.image}
                  alt={partner.name}
                  className="object-contain filter grayscale-0 md:grayscale group-hover:grayscale-0 transition-all duration-500 opacity-100 md:opacity-80 group-hover:opacity-100 max-w-[280px] md:max-w-[400px] max-h-[200px] md:max-h-[250px]"
                />
              </a>
              <div className="mt-6 text-center">
                <h3 className="text-xl font-bold text-white mb-1">
                  {partner.name}
                </h3>
                <p className="text-sm text-gray-400 uppercase tracking-wider font-medium">
                  {partner.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Supporting Partners Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-6 md:mb-12"
        >
          <h2 className="text-xl md:text-3xl font-bold mb-3 text-white/80 tracking-tight">
            Supporting Partners
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base">
            Grateful for the support of our esteemed partners.
          </p>
        </motion.div>

        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12">
          {supportingPartners.map((sponsor, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="flex flex-col items-center group w-full md:w-72"
            >
              <a
                href={sponsor.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block relative p-4 rounded-xl bg-white/5 border border-white/5 hover:border-white/20 hover:bg-white/10 transition-all duration-300 w-full h-28 md:h-36 flex items-center justify-center"
              >
                <img
                  src={sponsor.image}
                  alt={sponsor.name}
                  className="object-contain filter grayscale-0 md:grayscale group-hover:grayscale-0 transition-all duration-500 opacity-100 md:opacity-60 group-hover:opacity-100 max-w-[140px] md:max-w-[200px] max-h-[80px] md:max-h-[110px]"
                />
              </a>
              <div className="mt-4 text-center">
                <h3 className="text-lg font-bold text-white/90 mb-0.5">
                  {sponsor.name}
                </h3>
                <p className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">
                  {sponsor.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
