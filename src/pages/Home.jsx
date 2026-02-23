import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import Hero from "../components/Hero";
import EventCard from "../components/EventCard";
import Mission from "../components/Mission";
import StatsSection from "../components/StatsSection";
import PastSpeakers from "../components/PastSpeakers";
import Partners from "../components/Partners";
import Initiative from "../components/Initiative";
import Quote from "../components/Quote";

import { events } from "../data/events";

const Home = () => {
  const carouselRef = useRef(null);
  const [dragWidth, setDragWidth] = useState(0);

  useEffect(() => {
    if (carouselRef.current) {
      setDragWidth(
        carouselRef.current.scrollWidth - carouselRef.current.offsetWidth,
      );
    }
  }, []);
  return (
    <>
      <Hero />

      {/* New Mission/Values Section */}
      <Mission />

      {/* 1. Latest Events Section */}
      <section id="events" className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-6">
          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-white/10 pb-6">
            <div className="max-w-xl">
              <h2 className="text-4xl font-bold mb-4 text-white">
                Latest events
              </h2>
              <p className="text-gray-400">
                Whether you're planning a corporate conference or a casual
                meetup, our events designed to bring the community together.
              </p>
            </div>
          </div>

          {/* Desktop Grid */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event) => (
              <EventCard key={event.id} {...event} />
            ))}
          </div>
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden relative overflow-hidden">
          <motion.div
            ref={carouselRef}
            className="flex gap-4 cursor-grab active:cursor-grabbing px-6"
            drag="x"
            dragConstraints={{
              right: 0,
              left: -dragWidth,
            }}
            dragElastic={0.1}
            dragTransition={{ bounceStiffness: 300, bounceDamping: 30 }}
          >
            {events.map((event) => (
              <div key={event.id} className="flex-shrink-0 w-[300px]">
                <EventCard {...event} />
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 5. Impact Stats */}
      <StatsSection />

      {/* 6. Social Proof: Past Speakers */}
      <section id="speakers">
        <PastSpeakers />
      </section>

      {/* 2. Mission Statement */}
      <section>
        <Quote />
      </section>

      {/* 3. Authority & Backing (Moved here) */}
      <Initiative />

      {/* 7. Ecosystem Partners */}
      <Partners />
    </>
  );
};

export default Home;
