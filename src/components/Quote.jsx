import { motion } from "framer-motion";

const Quote = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-[#0A0A0A]">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-1/2 flex justify-center md:justify-end"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-blue-500/20 blur-[80px] rounded-full"></div>
              <img
                src="/vivekan.png"
                alt="Swami Vivekananda"
                className="relative z-10 max-w-[220px] md:max-w-[400px] drop-shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full md:w-1/2 text-center md:text-left"
          >
            <div className="mb-6 md:mb-8 relative">
              <span className="text-6xl md:text-8xl text-white/10 font-serif leading-none absolute -left-4 -top-6 md:-left-10 md:-top-8 font-bold select-none">
                "
              </span>
              <h2 className="text-xl md:text-5xl font-serif text-white leading-tight italic relative z-10 font-light">
                Give me 100 energetic young men and I shall transform India.
              </h2>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6 mt-6 md:mt-10">
              <div className="h-px bg-gradient-to-r from-blue-500 to-transparent w-20 md:w-32"></div>
              <p className="text-lg md:text-xl font-bold text-white uppercase tracking-widest">
                Swami Vivekananda
              </p>
            </div>

            <div className="mt-8 md:mt-12 inline-block">
              <div className="px-6 py-3 md:px-8 md:py-4 rounded-2xl bg-gradient-to-r from-white/5 to-white/10 border border-white/10 backdrop-blur-md shadow-2xl">
                <p className="text-sm md:text-2xl font-bold text-white flex items-center gap-3 md:gap-4">
                  <span className="relative flex h-3 w-3 md:h-4 md:w-4">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 md:h-4 md:w-4 bg-green-500"></span>
                  </span>
                  We Answered the Call.{" "}
                  <span className="text-blue-400">10,000 Strong.</span>
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Quote;
