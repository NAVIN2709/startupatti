import { motion } from "framer-motion";

const StatsSection = () => {
  const stats = [
    { value: "5000+", label: "Energetic Students" },
    { value: "50+", label: "Industry Experts & Speakers" },
    { value: "100+", label: "Startups Impacted" },
    { value: "∞", label: "Learning & Experience" },
  ];

  return (
    <section className="py-24 bg-black relative overflow-hidden text-right">
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left: Text Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="lg:order-2"
        >
          <div className="text-left mb-8">
            <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6 text-white">
              Empowering the <br /> Next Generation
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed max-w-md">
              We bridge the gap between academic learning and real-world startup
              challenges. Through our events, mentorship, and community, we
              provide the XP you need to level up your entrepreneurial journey.
            </p>
          </div>
        </motion.div>

        {/* Right: Image + Stats */}
        <div className="relative lg:order-1">
          {/* Main Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative z-10 rounded-3xl overflow-hidden h-[400px] md:h-[600px] grayscale hover:grayscale-0 transition-all duration-700"
          >
            <img
              src="/optimized/AUGUST ATTI.webp"
              alt="Startup Atti Community"
              className="w-full h-full object-cover"
            />

            {/* Desktop Stats Overlay (Hidden on Mobile) */}
            <div className="hidden lg:flex absolute top-0 left-0 h-full w-1/3 min-w-[150px] bg-black/80 backdrop-blur-md border-r border-white/10 flex-col justify-between py-10 px-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group cursor-default">
                  <h3 className="text-3xl font-bold text-white mb-1">
                    {stat.value}
                  </h3>
                  <p className="text-xs text-gray-500 leading-tight uppercase tracking-wider">
                    {stat.label}
                  </p>
                  {index !== stats.length - 1 && (
                    <div className="w-8 h-px bg-white/10 mx-auto mt-8"></div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Mobile Stats Grid (Visible on Mobile Only) */}
          <div className="grid grid-cols-2 gap-4 mt-6 lg:hidden">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center backdrop-blur-sm"
              >
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-1">
                  {stat.value}
                </h3>
                <p className="text-xs text-gray-400 uppercase tracking-wider">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
