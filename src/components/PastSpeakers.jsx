import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";

const PastSpeakers = () => {
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  const speakers = [
    {
      name: "Senthil Kumar",
      role: "CEO, Jio",
      image:
        "https://ui-avatars.com/api/?name=Senthil+Kumar&background=random&color=fff&size=200",
    },
    {
      name: "Priya Menon",
      role: "Founder, StartupX",
      image:
        "https://ui-avatars.com/api/?name=Priya+H&background=random&color=fff&size=200",
    },
    {
      name: "David Raj",
      role: "CTO, TechCorp",
      image:
        "https://ui-avatars.com/api/?name=David+R&background=random&color=fff&size=200",
    },
    {
      name: "Anitha V",
      role: "Investor",
      image:
        "https://ui-avatars.com/api/?name=Anitha+V&background=random&color=fff&size=200",
    },
    {
      name: "Karthik S",
      role: "Product Lead, Zoho",
      image:
        "https://ui-avatars.com/api/?name=Karthik+S&background=random&color=fff&size=200",
    },
  ];

  useEffect(() => {
    if (carousel.current) {
      setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    }
  }, []);

  return (
    <section className="py-24 bg-black overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Past Speakers
          </h2>
          <p className="text-gray-400 text-lg">
            Learning from the best in the industry.
          </p>
        </motion.div>

        <motion.div
          ref={carousel}
          className="cursor-grab overflow-hidden"
          whileTap={{ cursor: "grabbing" }}
        >
          <motion.div
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
            className="flex gap-8"
          >
            {speakers.map((speaker, index) => (
              <motion.div
                key={index}
                className="min-w-[280px] md:min-w-[320px] bg-[#111] border border-white/10 rounded-2xl p-6 flex flex-col items-center text-center pointer-events-none"
              >
                <div className="w-32 h-32 rounded-full overflow-hidden mb-6 border-4 border-white/5">
                  <img
                    src={speaker.image}
                    alt={speaker.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {speaker.name}
                </h3>
                <p className="text-gray-400 font-medium">{speaker.role}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default PastSpeakers;
