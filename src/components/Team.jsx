import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";

const Team = () => {
  const team = [
    {
      name: "Venkateshwaran Vanniyarajan",
      role: "Department of Economic & Entrepreneurship Development",
      linkedin: "https://www.linkedin.com/in/venkateshwaranvanniyarajan/",
      image: "/venkat.png",
    },
    {
      name: "Vijay R",
      role: "Founder, Unity of Youth Foundation",
      linkedin: "https://www.linkedin.com/in/vijay-ramesh-pandiyan-17a503251/",
      image: "/vijay.png",
    },
  ];

  return (
    <section className="py-12 md:py-24 bg-[#050505]">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 md:mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white tracking-tight">
            Our Team
          </h2>
          <p className="text-gray-400 text-lg">
            Leading the charge towards a brighter future.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-10">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-[#111] border border-white/10 rounded-2xl p-8 hover:border-white/30 transition-all duration-300 w-full max-w-sm flex flex-col items-center text-center group"
            >
              <div className="w-32 h-32 rounded-full overflow-hidden mb-6 border-4 border-white/5 group-hover:border-white/20 transition-all">
                {/* 
                   Ideally we would use real images if available in public folder. 
                   Since none were provided for team members, using UI Avatars or if the user provided specific images later.
                   For now, sticking to a generic placeholder logic or provided links if I can find them, but UI Avatars is safe.
                */}
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <h3 className="text-xl font-bold text-white mb-2">
                {member.name}
              </h3>
              <p className="text-sm text-gray-400 mb-6 min-h-[40px] flex items-center justify-center">
                {member.role}
              </p>

              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#0077b5] text-white hover:bg-[#006396] transition-colors"
                title="Connect on LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
