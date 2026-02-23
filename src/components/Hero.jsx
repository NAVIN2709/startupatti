import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const featured_event = [
  {
    title: "February Atti",
    date: "February 28, 2026 • 2:30 PM",
    location: "Tekclan Software Solutions Pvt Ltd, Chennai",
    description:
      "A monthly hangout for founders, solopreneurs, and aspiring entrepreneurs. Network, share knowledge, and build connections.",
    image:
      "../AUGUST ATTI.jpeg",
    link: "https://allevents.in/chennai/startup-atti-%7C-february-atti-%7C-a-monthly-hangout-tickets/80001513088601",
  },
];

const Hero = () => {
  const event = featured_event[0];

  return (
    <section className="relative w-full min-h-screen flex items-center pt-24 pb-10 px-6 overflow-hidden bg-black">
      {/* Rainbow Beam Background */}

      {/* Background Ambience - Subtle White/Gray Glow instead of colors */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-white/5 rounded-full blur-[120px] pointer-events-none z-0" />

      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Column: Text Content */}
        <div className="text-left space-y-8">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.1] text-white"
          >
            The Gateway to <br />
            the Real Startup <br />
            Ecosystem.
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="space-y-4 md:space-y-6"
          >
            <p className="text-xl md:text-3xl text-gray-400 font-medium leading-tight">
              A Monthly Hangout.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex gap-4"
          >
            <a
              href="#events"
              className="px-8 py-4 rounded-full bg-white text-black font-bold hover:bg-gray-200 transition-all flex items-center gap-2 group"
            >
              <span>Discover more</span>
              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>
          </motion.div>
        </div>

        {/* Right Column: Featured Event Card */}
        {event && (
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            {/* Subtle gray glow behind */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-[60px] opacity-40"></div>

            <div className="relative bg-[#0A0A0A] border border-white/10 rounded-3xl p-8 hover:border-white/30 transition-all group cursor-pointer">
              <div className="mb-6 overflow-hidden rounded-2xl h-64 relative grayscale group-hover:grayscale-0 transition-all duration-700">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 right-4 bg-white text-black text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  Featured
                </div>
              </div>

              <h3 className="text-3xl font-bold mb-3 text-white group-hover:text-gray-200 transition-colors">
                {event.title}
              </h3>

              <div className="space-y-1 mb-6">
                <p className="text-sm font-bold text-white/80 uppercase tracking-wide">
                  {event.date}
                </p>
                <p className="text-sm text-gray-500">{event.location}</p>
              </div>

              <div className="h-px w-full bg-white/10 mb-6"></div>

              <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                {event.description}
              </p>

              <div className="flex justify-end">
                <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white group-hover:bg-white group-hover:text-black transition-all">
                  <ArrowRight
                    size={18}
                    onClick={() => (window.location.href = event.link)}
                  />
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Hero;
