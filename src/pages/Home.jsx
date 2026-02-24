import Hero from "../components/Hero";
import EventCard from "../components/EventCard";
import Mission from "../components/Mission";
import StatsSection from "../components/StatsSection";

import Partners from "../components/Partners";
import Initiative from "../components/Initiative";
import Quote from "../components/Quote";

import { events } from "../data/events";

const Home = () => {
  return (
    <>
      <Hero />

      {/* New Mission/Values Section */}
      <Mission />

      {/* 1. Latest Events Section */}
      <section id="events" className="py-12 md:py-24 relative">
        <div className="container mx-auto px-4 md:px-6">
          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 md:mb-12 border-b border-white/10 pb-4 md:pb-6">
            <div className="max-w-xl">
              <h2 className="text-2xl md:text-4xl font-bold mb-2 md:mb-4 text-white">
                Past events
              </h2>
            </div>
          </div>

          {/* Desktop Grid */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event) => (
              <EventCard key={event.id} {...event} />
            ))}
          </div>
        </div>

        {/* Mobile Carousel — simple horizontal scroll */}
        <div
          className="md:hidden flex gap-3 px-4 overflow-x-auto snap-x snap-mandatory pb-4 scrollbar-hide"
          style={{ WebkitOverflowScrolling: "touch" }}
        >
          {events.map((event) => (
            <div key={event.id} className="flex-shrink-0 w-[80vw] snap-start">
              <EventCard {...event} />
            </div>
          ))}
        </div>
      </section>

      {/* 5. Impact Stats */}
      <StatsSection />

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
