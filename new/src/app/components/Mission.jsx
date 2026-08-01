import { motion } from "framer-motion";
import { Users, Mic, Handshake } from "lucide-react";

const Mission = () => {
  return (
    <section
      id="roots"
      className="py-10 md:py-24 bg-black border-b border-white/10"
    >
      <div className="container mx-auto px-4 md:px-6">
        {/* What is Startup Atti */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center mb-10 md:mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            What is Startup Atti?
          </h2>
          <div className="w-16 h-1 bg-yellow-500 mx-auto rounded-full mb-8"></div>

          <p className="text-base md:text-lg text-gray-300 leading-relaxed mb-4">
            An{" "}
            <span className="text-white font-semibold">
              invite-only networking session
            </span>{" "}
            initiative by{" "}
            <span className="text-white font-semibold">
              Madras Marketers
            </span>{" "}
            to educate entrepreneurship through events & videos.
          </p>

          <p className="text-sm md:text-base text-gray-400">
            Not a club. Not mentorship. Just real founders, real stories, real
            connections.
          </p>
        </motion.div>

        {/* What we do */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 max-w-3xl mx-auto">
          {[
            {
              icon: Users,
              title: "Curated Events",
              desc: "Handpicked monthly gatherings bringing together select founders & marketing leaders.",
            },
            {
              icon: Mic,
              title: "Founder Stories",
              desc: "Real entrepreneurs share their journey in 20 mins.",
            },
            {
              icon: Handshake,
              title: "Networking",
              desc: "Meet the right people over structured sessions & tea.",
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="p-5 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors text-center"
            >
              <item.icon className="w-7 h-7 text-yellow-400 mb-3 mx-auto" />
              <h3 className="text-white font-bold text-md mb-1">
                {item.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Mission;
