import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const featured_event = [
  {
    title: "February Atti",
    date: "February 28, 2026 • 2:30 PM",
    location: "Tekclan Software Solutions Pvt Ltd, Chennai",
    description:
      "A monthly hangout for founders, solopreneurs, and aspiring entrepreneurs. Network, share knowledge, and build connections.",
    image: "/optimized/AUGUST ATTI.webp",
    link: "https://allevents.in/chennai/startup-atti-%7C-february-atti-%7C-a-monthly-hangout-tickets/80001513088601",
  },
];

const Hero = () => {
  const event = featured_event[0];

  return (
    <section className="relative w-full min-h-screen flex items-center pt-20 pb-10 px-4 md:px-6 overflow-hidden bg-black">
      {/* Rainbow Beam Background */}

      {/* Background Ambience - Subtle White/Gray Glow instead of colors */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-white/5 rounded-full blur-[120px] pointer-events-none z-0" />

      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center relative z-10">
        {/* Left Column: Text Content */}
        <div className="text-left space-y-5 md:space-y-8">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-3xl sm:text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.1] text-white"
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
              className="px-6 py-3 md:px-8 md:py-4 rounded-full bg-white text-black font-bold hover:bg-gray-200 transition-all flex items-center gap-2 group text-sm md:text-base"
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

            <div className="relative bg-[#0A0A0A] border border-white/10 rounded-2xl md:rounded-3xl p-4 md:p-8 hover:border-white/30 transition-all group cursor-pointer">
              <div className="mb-4 md:mb-6 overflow-hidden rounded-xl md:rounded-2xl h-44 md:h-64 relative grayscale group-hover:grayscale-0 transition-all duration-700">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 right-4 bg-white text-black text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  Upcoming
                </div>
              </div>

              <h3 className="text-xl md:text-3xl font-bold mb-2 md:mb-3 text-white group-hover:text-gray-200 transition-colors">
                {event.title}
              </h3>

              <div className="space-y-1 mb-4 md:mb-6">
                <p className="text-sm font-bold text-white/80 uppercase tracking-wide">
                  {event.date}
                </p>
                <p className="text-sm text-gray-500">{event.location}</p>
              </div>

              <div className="h-px w-full bg-white/10 mb-4 md:mb-6"></div>

              <p className="text-gray-400 text-xs md:text-sm mb-4 md:mb-6 leading-relaxed">
                {event.description}
              </p>

              <div className="booknow flex w-full items-center justify-end">
                <a
                  href={event.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full md:w-60 flex items-center justify-center gap-2 px-5 py-2.5 md:px-6 md:py-3 rounded-full bg-white text-black font-bold text-sm md:text-base hover:bg-gray-200 transition-all group/btn"
                >
                  Book Tickets
                  <ArrowRight
                    size={18}
                    className="transition-transform group-hover/btn:translate-x-1"
                  />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Hero;
