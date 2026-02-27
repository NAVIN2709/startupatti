import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";

const Team = () => {
  const team = [
    {
      name: "Venkateshwaran Vanniyarajan",
      role: "Head , Department of Economic & Entrepreneurship Development , UOY",
      linkedin: "https://www.linkedin.com/in/venkateshwaranvanniyarajan/",
      image: "/optimized/venkat.webp",
    },
    {
      name: "Vijay R",
      role: "Founder, Unity of Youth Foundation",
      linkedin: "https://www.linkedin.com/in/vijay-ramesh-pandiyan-17a503251/",
      image: "/optimized/vijay.webp",
    },
    {
      name: "Navin Kumar",
      role: "Tech Guy",
      linkedin:
        "https://www.linkedin.com/in/navin-kumar-nj?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BjB4SthGLSLq%2BgiimnW6Stg%3D%3D",
      image: "/optimized/navin.webp",
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
                className="mt-3 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-500 text-xs font-semibold"
              >
                <Linkedin size={13} />
                LinkedIn
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
