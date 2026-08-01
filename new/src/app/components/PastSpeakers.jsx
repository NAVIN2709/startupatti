"use client";

import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight, Linkedin } from "lucide-react";

// Speaker images
import gopiImg from "../assets/speakers/optimized/gopi.webp";
import premImg from "../assets/speakers/optimized/prem.webp";
import pinkuImg from "../assets/speakers/optimized/pinku.webp";
import nirmalImg from "../assets/speakers/optimized/nirmal.webp";
import karunyaImg from "../assets/speakers/optimized/karunya.webp";
import mosesImg from "../assets/speakers/optimized/moses.webp";
import sathyaImg from "../assets/speakers/optimized/sathya.webp";
import arunImg from "../assets/speakers/optimized/arun.webp";
import sankariImg from "../assets/speakers/optimized/sankari.webp";
import deepakImg from "../assets/speakers/optimized/deepak.webp";
import selvamImg from "../assets/speakers/optimized/selvam.webp";
import karthikImg from "../assets/speakers/optimized/karthik.webp";
import dhineshImg from "../assets/speakers/optimized/dhinesh.webp";
import dineshArjunImg from "../assets/speakers/optimized/Dinesh Arjun.webp";
import brabasuthanImg from "../assets/speakers/optimized/brabasuthan.webp";
import vinothImg from "../assets/speakers/optimized/vinoth.webp";
import velmuruganImg from "../assets/speakers/optimized/velmurugan.webp";
import maniImg from "../assets/speakers/optimized/mani.webp";
import praveenImg from "../assets/speakers/optimized/praveen.webp";

// Company logos
import badboyLogo from "../assets/companies/optimized/badboy.webp";
import a99vcLogo from "../assets/companies/optimized/a99vc.webp";
import taxinaLogo from "../assets/companies/optimized/taxina.webp";
import ametLogo from "../assets/companies/optimized/amet_chamber.webp";
import kottravaiLogo from "../assets/companies/optimized/kottravai.webp";
import karupattiLogo from "../assets/companies/optimized/karupatti.webp";
import bulkpeLogo from "../assets/companies/optimized/bulkpe.webp";
import guviLogo from "../assets/companies/optimized/gui.webp";
import oqhLogo from "../assets/companies/optimized/overqualified_housewives.webp";
import yourtribeLogo from "../assets/companies/optimized/yourtribe.webp";
import shortfundlyLogo from "../assets/companies/optimized/short_fundly.webp";
import mindncompanyLogo from "../assets/companies/optimized/mindncompany.webp";
import vividobotsLogo from "../assets/companies/optimized/vividobots.webp";
import rapteeLogo from "../assets/companies/optimized/Raptee.webp";
import cummaLogo from "../assets/companies/optimized/cumma.webp";
import drawleadLogo from "../assets/companies/optimized/drawlead.webp";
import taxinaLogoFull from "../assets/companies/optimized/taxina.webp";
import cloudbankinLogo from "../assets/companies/optimized/cloudbankin.webp";
import backspaceLogo from "../assets/companies/optimized/backspace.webp";

const PastSpeakers = () => {
  const scrollRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const speakers = [
    {
      name: "Arun Prakash",
      company: "GUVI.io",
      image: arunImg,
      logo: guviLogo,
      linkedin: "https://www.linkedin.com/in/arunprakashm/",
    },
    {
      name: "Dinesh Arjun",
      company: "Raptee.HV",
      image: dineshArjunImg,
      logo: rapteeLogo,
      linkedin: "https://www.linkedin.com/in/dinesharjun/",
    },
    {
      name: "Moses Dharma Balan",
      company: "Aladipattiyan Karupaati Coffee",
      image: mosesImg,
      logo: karupattiLogo,
      linkedin: "https://www.linkedin.com/in/moses-dharma-balan-035b9866/",
    },
    {
      name: "Prem Shanth",
      company: "a99VC",
      image: premImg,
      logo: a99vcLogo,
      linkedin: "https://www.linkedin.com/in/prem-shanth-027901105/",
    },
    {
      name: "Gopi Raja",
      company: "Bad Boy",
      image: gopiImg,
      logo: badboyLogo,
      linkedin: "https://www.linkedin.com/in/gopi-raja-com/",
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
      name: "Sathya Narayanan",
      company: "BulkPe",
      image: sathyaImg,
      logo: bulkpeLogo,
      linkedin: "https://www.linkedin.com/in/krypton-narayanan/",
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
    {
      name: "Dhinesh Babu",
      company: "Vividobots",
      image: dhineshImg,
      logo: vividobotsLogo,
      linkedin: "https://www.linkedin.com/in/dhinesh-babu-vividobots/",
    },
    {
      name: "Brabasuthan Murugesan",
      company: "Cumma",
      image: brabasuthanImg,
      logo: cummaLogo,
      linkedin: "https://www.linkedin.com/in/brabasuthan-murugesan/",
    },
    {
      name: "VinothKumar Babu",
      company: "Drawlead",
      image: vinothImg,
      logo: drawleadLogo,
      linkedin: "https://www.linkedin.com/in/vinothkumarkb/",
    },
    {
      name: "Vel Murugan",
      company: "Taxina Mobility",
      image: velmuruganImg,
      logo: taxinaLogoFull,
      linkedin: "https://www.linkedin.com/in/velmuruganpaneerselvam/",
    },
    {
      name: "Mani Parthasarathy",
      company: "Cloudbankin",
      image: maniImg,
      logo: cloudbankinLogo,
      linkedin: "https://www.linkedin.com/in/maniparthasarathy/",
    },
    {
      name: "Praveen Krishna Dev",
      company: "Backspace Tech (Blackspace)",
      image: praveenImg,
      logo: backspaceLogo,
      linkedin: "https://www.linkedin.com/in/praveen-krishna-dev/",
    },
  ];

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    let animationFrameId;
    let isHovered = false;

    // Set initial scroll position to the middle (start of second copy)
    const initTimer = setTimeout(() => {
      if (el.scrollWidth > 0) {
        el.scrollLeft = el.scrollWidth / 2;
      }
    }, 100);

    const scroll = () => {
      if (!isHovered) {
        el.scrollLeft -= 0.6; // Smooth auto-scroll speed moving left to right
      }

      const halfWidth = el.scrollWidth / 2;
      if (halfWidth > 0) {
        if (el.scrollLeft <= 0) {
          el.scrollLeft += halfWidth;
        } else if (el.scrollLeft >= halfWidth) {
          el.scrollLeft -= halfWidth;
        }
      }

      animationFrameId = requestAnimationFrame(scroll);
    };

    const handleMouseEnter = () => { isHovered = true; };
    const handleMouseLeave = () => { isHovered = false; };
    const handleTouchStart = () => { isHovered = true; };
    const handleTouchEnd = () => { isHovered = false; };

    el.addEventListener("mouseenter", handleMouseEnter);
    el.addEventListener("mouseleave", handleMouseLeave);
    el.addEventListener("touchstart", handleTouchStart, { passive: true });
    el.addEventListener("touchend", handleTouchEnd, { passive: true });

    const startTimer = setTimeout(() => {
      animationFrameId = requestAnimationFrame(scroll);
    }, 200);

    return () => {
      clearTimeout(initTimer);
      clearTimeout(startTimer);
      cancelAnimationFrame(animationFrameId);
      if (el) {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
        el.removeEventListener("touchstart", handleTouchStart);
        el.removeEventListener("touchend", handleTouchEnd);
      }
    };
  }, [speakers.length]);

  const handleScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    const firstItem = el.querySelector(":scope > a");
    if (!firstItem) return;

    const itemWidth = firstItem.offsetWidth;
    const style = window.getComputedStyle(el);
    const gapWidth = parseInt(style.gap) || 0;

    const rawIndex = Math.round(el.scrollLeft / (itemWidth + gapWidth));
    const index = Math.max(0, rawIndex) % speakers.length;
    setCurrentIndex(index);
  };

  const scrollTo = (direction) => {
    const el = scrollRef.current;
    if (!el) return;
    const firstItem = el.querySelector(":scope > a");
    if (!firstItem) return;

    const itemWidth = firstItem.offsetWidth;
    const style = window.getComputedStyle(el);
    const gapWidth = parseInt(style.gap) || 0;
    const step = itemWidth + gapWidth;

    const newScroll =
      direction === "next" ? el.scrollLeft + step : el.scrollLeft - step;
    el.scrollTo({ left: newScroll, behavior: "smooth" });
  };

  const row1 = speakers.filter((_, idx) => idx % 2 === 0);
  const row2 = speakers.filter((_, idx) => idx % 2 !== 0);

  return (
    <section className="py-10 md:py-24 bg-black overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Header with arrows */}
        <div className="flex items-end justify-between mb-8 md:mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-5xl font-bold text-white mb-2">
              Past Speakers
            </h2>
            <p className="text-gray-400 text-sm md:text-lg">
              Learning from the best in the industry.
            </p>
          </motion.div>

          {/* Arrows + Indicator */}
          <div className="hidden md:flex items-center gap-2">
            <button
              onClick={() => scrollTo("prev")}
              className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={() => scrollTo("next")}
              className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Desktop Carousel */}
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="hidden md:flex gap-6 md:gap-8 overflow-x-auto pb-4 scrollbar-hide"
          style={{ WebkitOverflowScrolling: "touch" }}
        >
          {[...speakers, ...speakers].map((speaker, index) => (
            <a
              key={index}
              href={speaker.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="min-w-[240px] md:min-w-[280px] bg-[#111] border border-white/10 rounded-2xl p-5 md:p-6 flex flex-col items-center text-center hover:border-white/30 hover:bg-white/5 transition-all duration-300"
            >
              <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden mb-4 border-4 border-white/5">
                <img
                  src={speaker.image.src || speaker.image}
                  alt={speaker.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg overflow-hidden mb-3 bg-white/5 flex items-center justify-center p-1">
                <img
                  src={speaker.logo.src || speaker.logo}
                  alt={speaker.company}
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-white mb-1">
                {speaker.name}
              </h3>
              <p className="text-gray-400 font-medium text-xs md:text-sm leading-tight">
                {speaker.company}
              </p>
              <div className="mt-3 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-500 text-xs font-semibold">
                <Linkedin size={13} />
                LinkedIn
              </div>
            </a>
          ))}
        </div>

        {/* Mobile View: 2 Auto-sliding Rows in opposite directions */}
        <div className="md:hidden flex flex-col gap-4">
          {/* Row 1: Left to Right */}
          <div className="flex overflow-hidden w-full py-1">
            <motion.div
              animate={{ x: ["-50%", "0%"] }}
              transition={{
                ease: "linear",
                duration: 40,
                repeat: Infinity,
              }}
              className="flex gap-4 shrink-0"
            >
              {[...row1, ...row1].map((speaker, index) => (
                <a
                  key={index}
                  href={speaker.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 bg-[#111]/80 border border-white/10 rounded-2xl p-4 w-[310px] flex-shrink-0 hover:border-white/20 transition-all"
                >
                  {/* Speaker Photo */}
                  <div className="w-16 h-16 rounded-full overflow-hidden border border-white/10 flex-shrink-0">
                    <img
                      src={speaker.image.src || speaker.image}
                      alt={speaker.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Text Content */}
                  <div className="flex-grow min-w-0">
                    <div className="flex items-center gap-2">
                      <h3 className="text-sm font-bold text-white truncate max-w-[150px]">
                        {speaker.name}
                      </h3>
                      <div className="w-7 h-7 rounded-md bg-white/5 flex items-center justify-center p-0.5 flex-shrink-0 border border-white/10">
                        <img
                          src={speaker.logo.src || speaker.logo}
                          alt={speaker.company}
                          className="w-full h-full object-contain"
                        />
                      </div>
                    </div>
                    <p className="text-gray-400 text-xs truncate mt-0.5">
                      {speaker.company}
                    </p>
                    <div className="mt-1.5 flex items-center gap-1.5 text-[11px] font-semibold text-yellow-500">
                      <Linkedin size={11} className="text-yellow-500" />
                      <span>LinkedIn</span>
                    </div>
                  </div>
                </a>
              ))}
            </motion.div>
          </div>

          {/* Row 2: Right to Left */}
          <div className="flex overflow-hidden w-full py-1">
            <motion.div
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                ease: "linear",
                duration: 40,
                repeat: Infinity,
              }}
              className="flex gap-4 shrink-0"
            >
              {[...row2, ...row2].map((speaker, index) => (
                <a
                  key={index}
                  href={speaker.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 bg-[#111]/80 border border-white/10 rounded-2xl p-4 w-[310px] flex-shrink-0 hover:border-white/20 transition-all"
                >
                  {/* Speaker Photo */}
                  <div className="w-16 h-16 rounded-full overflow-hidden border border-white/10 flex-shrink-0">
                    <img
                      src={speaker.image.src || speaker.image}
                      alt={speaker.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Text Content */}
                  <div className="flex-grow min-w-0">
                    <div className="flex items-center gap-2">
                      <h3 className="text-sm font-bold text-white truncate max-w-[150px]">
                        {speaker.name}
                      </h3>
                      <div className="w-7 h-7 rounded-md bg-white/5 flex items-center justify-center p-0.5 flex-shrink-0 border border-white/10">
                        <img
                          src={speaker.logo.src || speaker.logo}
                          alt={speaker.company}
                          className="w-full h-full object-contain"
                        />
                      </div>
                    </div>
                    <p className="text-gray-400 text-xs truncate mt-0.5">
                      {speaker.company}
                    </p>
                    <div className="mt-1.5 flex items-center gap-1.5 text-[11px] font-semibold text-yellow-500">
                      <Linkedin size={11} className="text-yellow-500" />
                      <span>LinkedIn</span>
                    </div>
                  </div>
                </a>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PastSpeakers;
