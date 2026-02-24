import { motion } from "framer-motion";

const Partners = () => {
  const partners = [
    {
      name: "Madras Marketers",
      role: "Founding Partner",
      url: "https://madrasmarketers.com",
      image: "/optimized/Madras marketers.webp",
    },
    {
      name: "Fellow Founders",
      role: "Founding Partner",
      url: "https://fellowfounder.ai",
      image: "/optimized/fellow founders.webp",
    },
    {
      name: "Refreshment Partner",
      role: "Founding Partner",
      url: "#",
      image: "/optimized/refreshment.webp",
    },
  ];

  return (
    <section className="py-12 md:py-24 bg-black border-t border-white/10">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-6 md:mb-16"
        >
          <h2 className="text-2xl md:text-5xl font-bold mb-4 md:mb-6 text-white tracking-tight">
            Founding Partners
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Powered by visionaries. United by a shared passion for innovation
            and growth.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12 items-center justify-center">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="flex flex-col items-center group"
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
                  className={`object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500 opacity-80 group-hover:opacity-100 ${
                    partner.name === "Madras Marketers"
                      ? "max-w-[280px] md:max-w-[400px] max-h-[200px] md:max-h-[250px]"
                      : "max-w-[140px] md:max-w-[180px] max-h-[80px] md:max-h-[100px]"
                  }`}
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
      </div>
    </section>
  );
};

export default Partners;
