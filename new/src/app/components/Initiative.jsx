import { motion } from "framer-motion";

const Initiative = () => {
  return (
    <section className="py-12 md:py-20 bg-gradient-to-b from-black to-[#050505] border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12 justify-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full md:w-1/3 flex justify-center md:justify-end"
          >
            <div className="relative w-32 h-32 md:w-64 md:h-64 rounded-full bg-white/5 flex items-center justify-center border border-white/10 p-5 md:p-8 shadow-[0_0_50px_-12px_rgba(255,255,255,0.1)]">
              <img
                src="/optimized/UOY.webp"
                alt="Unity of Youth Foundation"
                className="w-full h-full object-contain"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full md:w-2/3 text-center md:text-left"
          >
            <h3 className="text-xs md:text-sm font-bold text-yellow-400 mb-2 md:mb-3 uppercase tracking-[0.2em]">
              A Vision Brought to Life By
            </h3>
            <h2 className="text-2xl md:text-5xl font-extrabold text-white mb-2 leading-tight">
              Department of <br className="hidden md:block" />
              Economic & Entrepreneurship
            </h2>
            <div className="w-16 md:w-24 h-1 bg-white/20 my-4 md:my-6 mx-auto md:mx-0"></div>
            <h4 className="text-lg md:text-3xl text-gray-200 mb-6 md:mb-8 font-light tracking-wide">
              Unity of Youth Foundation
            </h4>

            <a
              href="https://wa.me/919487445528?text=Hi%2C%20I%20strongly%20believe%20in%20empowering%20young%20entrepreneurs%20and%20would%20be%20glad%20to%20contribute%20to%20your%20initiative.%20Kindly%20share%20the%20details%20to%20proceed%20with%20a%20donation."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-2.5 md:px-8 md:py-3 rounded-full bg-white text-black font-bold text-sm md:text-base hover:bg-gray-200 transition-colors"
            >
              Donate to Support
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Initiative;
