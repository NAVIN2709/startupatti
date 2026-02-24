import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    id: 1,
    quote:
      "Mean if he they been no hold mr. Is at much do made took held help. Latter person am secure of estate genius at cheered.",
    author: "Irene Strong",
    role: "Founder at Entrans", // Added role for context
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
  },
  {
    id: 2,
    quote:
      "Blessing it ladyship on sensible judgment settling outweigh. Worse linen an of civil jokes leave offer. Parties all clothes removal.",
    author: "Jonas Kakaroto",
    role: "CEO at Spikra",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
  },
  {
    id: 3,
    quote:
      "The personalized matching system and comprehensive support provided me with valuable insights and connections.",
    author: "Katy Pankon",
    role: "Product Designer",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
  },
  {
    id: 4,
    quote:
      "Collaborating with the team was an incredibly enjoyable experience! Their meticulous attention to detail is unmatched.",
    author: "Tom Jameson",
    role: "Founder of Emma AI",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-play (optional, can be disabled if user wants manual only)
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % Math.ceil(testimonials.length / 2));
    }, 5000); // Change every 5 seconds
    return () => clearInterval(timer);
  }, []);

  // Display 2 cards at a time on desktop
  const visibleTestimonials = [
    testimonials[(activeIndex * 2) % testimonials.length],
    testimonials[(activeIndex * 2 + 1) % testimonials.length],
  ];

  return (
    <section className="py-24 bg-black relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-serif tracking-tight text-white">
            Testimonials
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-sm md:text-base">
            The expense windows adapted sir. Wrong widen drawn ample eat off
            doors money.
          </p>
        </div>

        {/* Cards Slider */}
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AnimatePresence mode="wait">
              {visibleTestimonials.map((item) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="bg-white/5 border border-white/5 rounded-2xl p-8 hover:border-white/20 transition-all text-center flex flex-col items-center group"
                >
                  <div className="w-20 h-20 rounded-full overflow-hidden mb-6 border-2 border-white/10 group-hover:border-white/40 transition-colors">
                    <img
                      src={item.image}
                      alt={item.author}
                      className="w-full h-full object-cover transition-all duration-500"
                    />
                  </div>

                  <h3 className="text-xl font-bold mb-1 text-white">
                    {item.author}
                  </h3>
                  <p className="text-xs text-gray-400 mb-6 uppercase tracking-wider">
                    {item.role}
                  </p>

                  <p className="text-gray-300 text-sm leading-relaxed max-w-sm">
                    "{item.quote}"
                  </p>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center gap-3 mt-12">
            {Array.from({ length: Math.ceil(testimonials.length / 2) }).map(
              (_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    idx === activeIndex
                      ? "w-8 bg-white"
                      : "w-2.5 bg-white/20 hover:bg-white/40"
                  }`}
                />
              ),
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
