import { motion } from "framer-motion";

const Quote = () => {
  return (
    <section className="py-12 md:py-24 relative overflow-hidden bg-[#0A0A0A]">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-1/2 flex justify-center md:justify-end"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-yellow-500/20 blur-[80px] rounded-full"></div>
              <img
                src="/optimized/vivekan.webp"
                alt="Swami Vivekananda"
                className="relative z-10 max-w-[160px] sm:max-w-[220px] md:max-w-[400px] drop-shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
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
              <span className="text-4xl md:text-8xl text-white/10 font-serif leading-none absolute -left-2 -top-4 md:-left-10 md:-top-8 font-bold select-none">
                "
              </span>
              <h2 className="text-xl md:text-5xl font-serif text-white leading-tight italic relative z-10 font-light">
                Give me 100 energetic young men and I shall transform India.
              </h2>
              <p className="text-yellow-500 font-bold mt-4 md:mt-6 text-lg md:text-2xl tracking-tight">
                And here we are 10,000
              </p>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6 mt-6 md:mt-10">
              <div className="h-px bg-gradient-to-r from-yellow-500 to-transparent w-20 md:w-32"></div>
              <p className="text-base md:text-xl font-bold text-white uppercase tracking-widest">
                Swami Vivekananda
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Quote;
