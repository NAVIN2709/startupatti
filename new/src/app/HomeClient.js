"use client";

import { useState, useRef, useEffect } from "react";
import Hero from "./components/Hero";
import EventCard from "./components/EventCard";
import Mission from "./components/Mission";
import StatsSection from "./components/StatsSection";
import PastSpeakers from "./components/PastSpeakers";

import Partners from "./components/Partners";
import Initiative from "./components/Initiative";
import Quote from "./components/Quote";
import { ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";

import { events } from "./data/events";

const HomeClient = () => {
  const [showAllPast, setShowAllPast] = useState(false);

  const upcomingEvents = events.filter((e) => e.upcoming);
  const pastEvents = events.filter((e) => !e.upcoming).reverse();
  const visiblePastEvents = showAllPast ? pastEvents : pastEvents.slice(0, 3);

  // Mobile scroll dots state
  const [upcomingDot, setUpcomingDot] = useState(0);
  const [pastDot, setPastDot] = useState(0);
  const upcomingScrollRef = useRef(null);
  const pastScrollRef = useRef(null);

  const handleScroll = (ref, setDot, total) => {
    const el = ref.current;
    if (!el) return;
    const scrollLeft = el.scrollLeft;
    const card = el.querySelector(":scope > div");
    if (!card) return;
    const cardWidth = card.offsetWidth;
    const gap = 12; // gap-3 = 12px
    const index = Math.round(scrollLeft / (cardWidth + gap));
    setDot(Math.min(index, total - 1));
  };

  const scrollToIndex = (ref, index, total) => {
    const el = ref.current;
    if (!el) return;
    const card = el.querySelector(":scope > div");
    if (!card) return;
    const cardWidth = card.offsetWidth;
    const gap = 12;
    const target = Math.min(index, total - 1) * (cardWidth + gap);
    el.scrollTo({ left: target, behavior: "smooth" });
  };

  useEffect(() => {
    const upEl = upcomingScrollRef.current;
    const pastEl = pastScrollRef.current;
    const upHandler = () =>
      handleScroll(upcomingScrollRef, setUpcomingDot, upcomingEvents.length);
    const pastHandler = () =>
      handleScroll(
        pastScrollRef,
        setPastDot,
        showAllPast ? pastEvents.length : Math.min(pastEvents.length, 3),
      );

    if (upEl) upEl.addEventListener("scroll", upHandler, { passive: true });
    if (pastEl)
      pastEl.addEventListener("scroll", pastHandler, { passive: true });
    return () => {
      if (upEl) upEl.removeEventListener("scroll", upHandler);
      if (pastEl) pastEl.removeEventListener("scroll", pastHandler);
    };
  }, [upcomingEvents.length, pastEvents.length, showAllPast]);

  const ScrollDots = ({ total, active }) => {
    if (total <= 1) return null;
    return (
      <div className="flex justify-center gap-1.5 mt-6 md:hidden">
        {Array.from({ length: total }).map((_, i) => (
          <span
            key={i}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === active ? "bg-white w-6" : "bg-white/20"
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <>
      <Hero />
      <PastSpeakers />

      {/* New Mission/Values Section */}
      <Mission />

      {/* Events Section */}
      <section id="events" className="py-12 md:py-24 relative">
        <div className="container mx-auto px-4 md:px-6">
          {/* ===== UPCOMING EVENTS ===== */}
          {upcomingEvents.length > 0 && (
            <div className="mb-8 md:mb-20">
              {/* Header */}
              <div className="flex flex-row justify-between items-end mb-6 md:mb-12 border-b border-white/10 pb-4 md:pb-6">
                <div className="max-w-xl">
                  <h2 className="text-2xl md:text-4xl font-bold text-white">
                    Upcoming Events
                  </h2>
                </div>
                {/* Mobile Navigation */}
                <div className="flex items-center gap-2 md:hidden">
                  <span className="text-white/50 text-[10px] font-medium mr-1">
                    {upcomingDot + 1}/{upcomingEvents.length}
                  </span>
                  <button
                    onClick={() =>
                      scrollToIndex(
                        upcomingScrollRef,
                        upcomingDot - 1,
                        upcomingEvents.length,
                      )
                    }
                    className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-white border border-white/10"
                    disabled={upcomingDot === 0}
                    aria-label="Previous upcoming events"
                  >
                    <ChevronLeft size={16} />
                  </button>
                  <button
                    onClick={() =>
                      scrollToIndex(
                        upcomingScrollRef,
                        upcomingDot + 1,
                        upcomingEvents.length,
                      )
                    }
                    className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-white border border-white/10"
                    disabled={upcomingDot >= upcomingEvents.length - 1}
                    aria-label="Next upcoming events"
                  >
                    <ChevronRight size={16} />
                  </button>
                </div>
              </div>

              {/* Desktop Grid */}
              <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {upcomingEvents.map((event) => (
                  <EventCard key={event.id} {...event} />
                ))}
              </div>

              {/* Mobile Carousel */}
              <div
                ref={upcomingScrollRef}
                className="md:hidden flex gap-3 px-4 overflow-x-auto snap-x snap-mandatory pb-4 scrollbar-hide"
                style={{ WebkitOverflowScrolling: "touch" }}
              >
                {upcomingEvents.map((event) => (
                  <div
                    key={event.id}
                    className="flex-shrink-0 w-[80vw] snap-start"
                  >
                    <EventCard {...event} />
                  </div>
                ))}
              </div>
              <ScrollDots total={upcomingEvents.length} active={upcomingDot} />
            </div>
          )}

          {/* ===== PAST EVENTS ===== */}
          <div>
            {/* Header */}
            <div className="flex flex-row justify-between items-end mb-6 md:mb-12 border-b border-white/10 pb-4 md:pb-6">
              <div className="max-w-xl">
                <h2 className="text-2xl md:text-4xl font-bold text-white">
                  Past Events
                </h2>
              </div>
              {/* Mobile Navigation */}
              <div className="flex items-center gap-2 md:hidden">
                <span className="text-white/50 text-[10px] font-medium mr-1">
                  {pastDot + 1}/{visiblePastEvents.length}
                </span>
                <button
                  onClick={() =>
                    scrollToIndex(
                      pastScrollRef,
                      pastDot - 1,
                      visiblePastEvents.length,
                    )
                  }
                  className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-white border border-white/10"
                  disabled={pastDot === 0}
                  aria-label="Previous past events"
                >
                  <ChevronLeft size={16} />
                </button>
                <button
                  onClick={() =>
                    scrollToIndex(
                      pastScrollRef,
                      pastDot + 1,
                      visiblePastEvents.length,
                    )
                  }
                  className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-white border border-white/10"
                  disabled={pastDot >= visiblePastEvents.length - 1}
                  aria-label="Next past events"
                >
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>

            {/* Desktop Grid */}
            <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {visiblePastEvents.map((event) => (
                <EventCard key={event.id} {...event} />
              ))}
            </div>

            {/* Mobile Carousel */}
            <div
              ref={pastScrollRef}
              className="md:hidden flex gap-3 px-4 overflow-x-auto snap-x snap-mandatory pb-4 scrollbar-hide scroll-smooth"
              style={{
                WebkitOverflowScrolling: "touch",
                scrollPaddingInline: "1rem",
              }}
            >
              {visiblePastEvents.map((event) => (
                <div
                  key={event.id}
                  className="flex-shrink-0 w-[80vw] snap-start"
                >
                  <EventCard {...event} />
                </div>
              ))}
            </div>
            <ScrollDots total={visiblePastEvents.length} active={pastDot} />

            {/* Show More / Show Less */}
            {pastEvents.length > 3 && (
              <div className="flex justify-center mt-8">
                <button
                  onClick={() => setShowAllPast(!showAllPast)}
                  className="flex items-center gap-2 px-6 py-3 rounded-full border border-white/20 text-white/80 hover:text-white hover:border-white/40 hover:bg-white/5 transition-all text-sm font-medium cursor-pointer"
                >
                  {showAllPast
                    ? "Show Less"
                    : `Show ${pastEvents.length - 3} More`}
                  <ChevronDown
                    size={16}
                    className={`transition-transform duration-300 ${
                      showAllPast ? "rotate-180" : ""
                    }`}
                  />
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 5. Impact Stats */}
      <StatsSection />

      {/* Past Speakers */}

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

export default HomeClient;
