import { motion } from "framer-motion";

const StatsSection = () => {
  const stats = [
    { value: "20k+", label: "Happy customers worldwide" },
    { value: "15+", label: "Years of work experience" },
    { value: "50", label: "Experienced speakers" },
    { value: "1k+", label: "Successfully finished events" },
  ];

  return (
    <section className="py-24 bg-black relative overflow-hidden">
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left: Text Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-left mb-8">
            <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6 text-white">
              We plan events you <br /> can celebrate
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed max-w-md">
              At our event agency, we understand that every occasion is unique,
              and we pride ourselves on delivering tailor-made solutions.
            </p>
          </div>
          <button className="px-8 py-3 rounded-full border border-white/20 text-white hover:bg-white hover:text-black transition-all font-medium">
            Who we are
          </button>
        </motion.div>

        {/* Right: Image + Stats */}
        <div className="relative">
          {/* Main Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative z-10 rounded-3xl overflow-hidden h-[600px] grayscale hover:grayscale-0 transition-all duration-700"
          >
            <img
              src="https://images.unsplash.com/photo-1515187029135-18ee286d815b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
              alt="Event Planning"
              className="w-full h-full object-cover"
            />

            {/* Stats Overlay (Vertical List) */}
            <div className="absolute top-0 right-0 h-full w-1/3 min-w-[150px] bg-black/80 backdrop-blur-md border-l border-white/10 flex flex-col justify-between py-10 px-6">
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
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
