import Hero from "../components/Hero";
import EventCard from "../components/EventCard";
import DonateButton from "../components/DonateButton"; // Kept if needed later, but not used currently
import Mission from "../components/Mission";
import StatsSection from "../components/StatsSection";
import PastSpeakers from "../components/PastSpeakers";
import { ArrowRight } from "lucide-react";
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

      {/* 1. Latest Events Section (Moved to top as requested) */}
      <section id="events" className="py-24 px-6 relative">
        <div className="container mx-auto">
          {/* Header: Title Left, Link Right */}
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-white/10 pb-6">
            <div className="max-w-xl">
              <h2 className="text-4xl font-bold mb-4 text-white">
                Latest events
              </h2>
              <p className="text-gray-400">
                Whether you're planning a corporate conference or a casual
                meetup, our events designed to bring the community together.
              </p>
            </div>
            <a
              href="#"
              className="hidden md:flex items-center gap-2 text-white font-bold hover:gap-4 transition-all mt-6 md:mt-0 group"
            >
              <span>View all</span>
              <span className="bg-white text-black w-6 h-6 rounded-full flex items-center justify-center text-xs group-hover:bg-gray-200 transition-colors">
                <ArrowRight size={14} />
              </span>
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event) => (
              <EventCard key={event.id} {...event} />
            ))}
          </div>

          <div className="mt-12 text-center md:hidden">
            <button className="text-white border-b border-white pb-1 font-bold">
              View All Events
            </button>
          </div>
        </div>
      </section>

      {/* 2. Mission Statement */}
      <section>
        <Quote />
      </section>

      {/* 5. Impact Stats */}
      <StatsSection />

      {/* 6. Social Proof: Past Speakers */}
      <section id="speakers">
        <PastSpeakers />
      </section>

      {/* 3. Authority & Backing (Moved here) */}
      <Initiative />

      {/* 7. Ecosystem Partners */}
      <Partners />
    </>
  );
};

export default Home;
