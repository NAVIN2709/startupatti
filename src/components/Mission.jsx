import { motion } from "framer-motion";

const Mission = () => {
  return (
    <section id="roots" className="py-20 bg-black border-b border-white/10">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center space-y-12"
        >
          {/* Section Title */}
          <div className="space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
              Who is this for?
            </h2>
            <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full"></div>
          </div>

          {/* Main Content */}
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto font-light">
            Whether you are a{" "}
            <span className="text-white font-semibold">student</span> with a
            spark of an idea, a{" "}
            <span className="text-white font-semibold">
              budding entrepreneur
            </span>{" "}
            taking your first steps, or an{" "}
            <span className="text-white font-semibold">
              established founder
            </span>{" "}
            looking to scale —
            <span className="block mt-4 text-xl md:text-2xl font-normal text-white">
              Startup Atti is your tribe.
            </span>
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left mt-12">
            {[
              {
                title: "Aspiring Founders",
                desc: "Validate your ideas and find your co-founders.",
              },
              {
                title: "Early Stage Startups",
                desc: "Get mentorship, resources, and initial traction.",
              },
              {
                title: "Ecosystem Enablers",
                desc: "Connect with investors, mentors, and industry experts.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
              >
                <h3 className="text-white font-bold mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="pt-8">
            <div className="inline-block relative">
              <span className="text-white/90 text-xl md:text-2xl font-medium italic relative z-10">
                "We aren't just a community. We are a catalyst for meaningful
                connections and offline collisions."
              </span>
              <div className="absolute -inset-4 bg-white/5 rounded-xl -z-0 blur-sm transform -rotate-1"></div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Mission;
