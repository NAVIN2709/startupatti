import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";

// Speaker images
import gopiImg from "../assets/speakers/gopi.png";
import premImg from "../assets/speakers/prem.png";
import pinkuImg from "../assets/speakers/pinku.png";
import nirmalImg from "../assets/speakers/nirmal.png";
import karunyaImg from "../assets/speakers/karunya.png";
import mosesImg from "../assets/speakers/moses.png";
import sathyaImg from "../assets/speakers/sathya.png";
import arunImg from "../assets/speakers/arun.png";
import sankariImg from "../assets/speakers/sankari.png";
import deepakImg from "../assets/speakers/deepak.png";
import selvamImg from "../assets/speakers/selvam.png";
import karthikImg from "../assets/speakers/karthik.png";

// Company logos
import badboyLogo from "../assets/companies/badboy.png";
import a99vcLogo from "../assets/companies/dc.png";
import taxinaLogo from "../assets/companies/taxina.png";
import ametLogo from "../assets/companies/amet_chamber.png";
import kottravaiLogo from "../assets/companies/kottravai.png";
import karupattiLogo from "../assets/companies/karupatti.png";
import bulkpeLogo from "../assets/companies/bulkpe.png";
import guviLogo from "../assets/companies/gui.png";
import oqhLogo from "../assets/companies/overqualified_housewives.png";
import yourtribeLogo from "../assets/companies/yourtribe.png";
import shortfundlyLogo from "../assets/companies/short_fundly.png";
import mindncompanyLogo from "../assets/companies/mindncompany.png";

const PastSpeakers = () => {
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  const speakers = [
    {
      name: "Gopi Raja",
      company: "Bad Boy",
      image: gopiImg,
      logo: badboyLogo,
      linkedin: "https://www.linkedin.com/in/gopi-raja-com/",
    },
    {
      name: "Prem Shanth",
      company: "a99VC",
      image: premImg,
      logo: a99vcLogo,
      linkedin: "https://www.linkedin.com/in/prem-shanth-027901105/",
    },
    {
      name: "Pinku Bharathi",
      company: "Taxina",
      image: pinkuImg,
      logo: taxinaLogo,
      linkedin: "https://www.linkedin.com/in/pinkubharathi",
    },
    {
      name: "Nirmal Raj",
      company: "AMET Chamber for Entrepreneurship Innovation and Incubation",
      image: nirmalImg,
      logo: ametLogo,
      linkedin: "https://www.linkedin.com/in/nirmalrajg/",
    },
    {
      name: "Karunya Gunavathy K",
      company: "Kottravai",
      image: karunyaImg,
      logo: kottravaiLogo,
      linkedin: "https://www.linkedin.com/in/karunyagunavathy/",
    },
    {
      name: "Moses Dharma Balan",
      company: "Aladipattiyan Karupaati Coffee",
      image: mosesImg,
      logo: karupattiLogo,
      linkedin: "https://www.linkedin.com/in/moses-dharma-balan-035b9866/",
    },
    {
      name: "Sathya Narayanan",
      company: "BulkPe",
      image: sathyaImg,
      logo: bulkpeLogo,
      linkedin: "https://www.linkedin.com/in/krypton-narayanan/",
    },
    {
      name: "Arun Prakash",
      company: "GUVI.io",
      image: arunImg,
      logo: guviLogo,
      linkedin: "https://www.linkedin.com/in/arunprakashm/",
    },
    {
      name: "Sankari Sudhar",
      company: "Overqualified Housewives",
      image: sankariImg,
      logo: oqhLogo,
      linkedin: "https://www.linkedin.com/in/sankarisudhar/",
    },
    {
      name: "Deepak Subramanian",
      company: "YourTribe",
      image: deepakImg,
      logo: yourtribeLogo,
      linkedin: "https://www.linkedin.com/in/deepaksubramanian/",
    },
    {
      name: "Selvam M",
      company: "ShortFundly",
      image: selvamImg,
      logo: shortfundlyLogo,
      linkedin: "https://www.linkedin.com/in/selvammuniyandi",
    },
    {
      name: "Karthik Manikonda",
      company: "The Mind And Company",
      image: karthikImg,
      logo: mindncompanyLogo,
      linkedin: "https://www.linkedin.com/in/ca-karthik-manikonda-7a184515a/",
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
              <motion.a
                key={index}
                href={speaker.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="min-w-[280px] md:min-w-[320px] bg-[#111] border border-white/10 rounded-2xl p-6 flex flex-col items-center text-center hover:border-white/30 transition-colors duration-300"
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="w-32 h-32 rounded-full overflow-hidden mb-4 border-4 border-white/5">
                  <img
                    src={speaker.image}
                    alt={speaker.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-12 h-12 rounded-lg overflow-hidden mb-4 bg-white/5 flex items-center justify-center p-1">
                  <img
                    src={speaker.logo}
                    alt={speaker.company}
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="text-xl font-bold text-white mb-1">
                  {speaker.name}
                </h3>
                <p className="text-gray-400 font-medium text-sm leading-tight">
                  {speaker.company}
                </p>
                <div className="mt-3 flex items-center gap-1.5 text-blue-400 text-xs font-medium">
                  <svg
                    className="w-3.5 h-3.5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  LinkedIn
                </div>
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default PastSpeakers;
