import { motion } from "framer-motion";
import { Users, Mic, Handshake } from "lucide-react";

const Mission = () => {
  return (
    <section
      id="roots"
      className="py-16 md:py-24 bg-black border-b border-white/10"
    >
      <div className="container mx-auto px-4 md:px-6">
        {/* What is Startup Atti */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center mb-16 md:mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            What is Startup Atti?
          </h2>
          <div className="w-16 h-1 bg-blue-500 mx-auto rounded-full mb-8"></div>

          <p className="text-base md:text-lg text-gray-300 leading-relaxed mb-4">
            A{" "}
            <span className="text-white font-semibold">
              monthly offline event
            </span>{" "}
            by{" "}
            <span className="text-white font-semibold">
              Unity of Youth Foundation (UOY)
            </span>{" "}
            to educate entrepreneurship through events & videos.
          </p>

          <p className="text-sm md:text-base text-gray-500">
            Not a club. Not mentorship. Just real founders, real stories, real
            connections.
          </p>
        </motion.div>

        {/* What we do */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 max-w-3xl mx-auto mb-16 md:mb-20">
          {[
            {
              icon: Users,
              title: "Curated Events",
              desc: "50-seat monthly gatherings with structured intros.",
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
              <item.icon className="w-7 h-7 text-blue-400 mb-3 mx-auto" />
              <h3 className="text-white font-bold text-sm mb-1">
                {item.title}
              </h3>
              <p className="text-gray-400 text-xs leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Who is this for */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center mb-16 md:mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Who is this for?
          </h2>
          <div className="w-16 h-1 bg-blue-500 mx-auto rounded-full mb-8"></div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
            {[
              {
                title: "Aspiring Founders",
                desc: "Have an idea? Come learn from those who've done it.",
              },
              {
                title: "Early Startups",
                desc: "Find the right people and grow through real conversations.",
              },
              {
                title: "Ecosystem Partners",
                desc: "Investors & experts — connect with builders on the ground.",
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="p-5 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
              >
                <h3 className="text-white font-bold text-sm mb-1">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-xs leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto text-center"
        >
          <div className="inline-block relative">
            <span className="text-white/90 text-base md:text-xl font-medium italic relative z-10">
              "Empowering youth to create ₹1 Crore wealth."
            </span>
            <div className="absolute -inset-3 bg-white/5 rounded-xl -z-0 blur-sm transform -rotate-1"></div>
          </div>
          <p className="text-gray-500 text-xs mt-3">— UOY Foundation</p>
        </motion.div>
      </div>
    </section>
  );
};

export default Mission;
