import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { events } from "../data/events";
import {
  Calendar,
  MapPin,
  ArrowLeft,
  Linkedin,
  Mic,
  Ticket,
  Clock,
  Target,
  Info,
  Share2,
  Check,
  CalendarPlus,
} from "lucide-react";
import Navbar from "../components/Navbar";

const EventDetails = () => {
  const { slug } = useParams();
  const event = events.find((e) => e.slug === slug);
  const [isCopied, setIsCopied] = useState(false);

  const handleShare = async () => {
    const shareData = {
      title: event?.title || "Startup Atti",
      text: event?.description || "Join us for Startup Atti!",
      url: window.location.href,
    };

    if (
      navigator.share &&
      navigator.canShare &&
      navigator.canShare(shareData)
    ) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        console.error("Error sharing:", err);
      }
    } else {
      try {
        await navigator.clipboard.writeText(window.location.href);
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000);
      } catch (err) {
        console.error("Error copying to clipboard:", err);
      }
    }
  };

  const getGoogleCalendarUrl = (event) => {
    if (!event) return "";
    const { title, date, time, location, description } = event;

    const parseTime = (timeStr) => {
      const match = timeStr.match(/(\d+):(\d+)\s*(AM|PM)/i);
      if (!match) return { hours: 0, mins: 0 };
      let [_, h, m, p] = match;
      h = parseInt(h);
      m = parseInt(m);
      if (p.toUpperCase() === "PM" && h < 12) h += 12;
      if (p.toUpperCase() === "AM" && h === 12) h = 0;
      return { hours: h, mins: m };
    };

    const months = {
      January: "01",
      February: "02",
      March: "03",
      April: "04",
      May: "05",
      June: "06",
      July: "07",
      August: "08",
      September: "09",
      October: "10",
      November: "11",
      December: "12",
    };

    const dateParts = date.match(/(\w+)\s+(\d+),\s+(\d+)/);
    if (!dateParts) return "";
    const [_, monthName, day, year] = dateParts;
    const month = months[monthName];
    const formattedDay = day.padStart(2, "0");

    const startTimeParts = parseTime(time.split(" – ")[0]);
    const start = `${year}${month}${formattedDay}T${String(startTimeParts.hours).padStart(2, "0")}${String(startTimeParts.mins).padStart(2, "0")}00`;

    let end;
    if (time.includes(" – ")) {
      const endTimeParts = parseTime(time.split(" – ")[1]);
      end = `${year}${month}${formattedDay}T${String(endTimeParts.hours).padStart(2, "0")}${String(endTimeParts.mins).padStart(2, "0")}00`;
    } else {
      // Add 3 hours
      const endHours = (startTimeParts.hours + 3) % 24;
      end = `${year}${month}${formattedDay}T${String(endHours).padStart(2, "0")}${String(startTimeParts.mins).padStart(2, "0")}00`;
    }

    const params = new URLSearchParams({
      action: "TEMPLATE",
      text: title,
      dates: `${start}/${end}`,
      details: description,
      location: location,
    });

    return `https://www.google.com/calendar/render?${params.toString()}`;
  };

  if (!event) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Event not found</h2>
          <Link to="/" className="text-yellow-500 hover:underline">
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  const formatContent = (content) => {
    if (!content) return null;

    // Split by double newlines for semantic blocks
    const rawBlocks = content.split("\n\n");

    return rawBlocks.map((block, idx) => {
      const lines = block.split("\n").filter((l) => l.trim() !== "");
      if (lines.length === 0) return null;

      // Detect Block Type
      const firstLine = lines[0].trim();

      // Header Detection
      const isHeader =
        firstLine.endsWith("?") ||
        firstLine.includes("Agenda:") ||
        firstLine.includes("Important details:");

      if (isHeader && lines.length === 1) {
        let icon = (
          <Info size={18} className="text-yellow-500 md:w-[22px] md:h-[22px]" />
        );
        if (firstLine.endsWith("?"))
          icon = (
            <Target
              size={18}
              className="text-yellow-500 md:w-[22px] md:h-[22px]"
            />
          );
        if (firstLine.includes("Agenda:"))
          icon = (
            <Clock
              size={18}
              className="text-yellow-500 md:w-[22px] md:h-[22px]"
            />
          );

        return (
          <div
            key={idx}
            className="flex items-center gap-2 md:gap-3 mt-8 md:mt-12 mb-4 md:mb-6 first:mt-0 border-b border-white/5 pb-2"
          >
            {icon}
            <h3 className="text-lg md:text-2xl font-black text-white tracking-tight">
              {firstLine}
            </h3>
          </div>
        );
      }

      // Agenda Detection
      const isAgenda = lines.some((line) => line.match(/\d+\.\d+\s*(PM|AM)/i));

      if (isAgenda) {
        return (
          <div
            key={idx}
            className="my-6 md:my-8 space-y-4 md:space-y-3 relative before:absolute before:left-[11px] md:before:left-[15.5px] before:top-4 before:bottom-4 before:w-0.5 before:bg-white/10"
          >
            {lines.map((item, i) => {
              const parts = item.split(" - ");
              if (parts.length >= 2) {
                return (
                  <div
                    key={i}
                    className="relative pl-8 md:pl-12 group transition-all duration-300"
                  >
                    {/* Timeline Dot */}
                    <div className="absolute left-[7px] md:left-[10px] top-2 w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-yellow-500 border-2 border-black z-10 group-hover:scale-125 transition-transform" />

                    <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-6 p-3 md:p-4 rounded-xl md:rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.05] hover:border-yellow-500/20 transition-all duration-300">
                      <div className="text-yellow-500 text-[10px] md:text-sm font-black uppercase tracking-wider">
                        {parts[0]}
                      </div>
                      <p className="text-gray-300 text-xs md:text-base leading-relaxed">
                        {parts.slice(1).join(" - ")}
                      </p>
                    </div>
                  </div>
                );
              }
              return (
                <div
                  key={i}
                  className="relative pl-8 md:pl-12 flex items-start gap-4 text-gray-500 text-[10px] md:text-sm italic"
                >
                  <div className="absolute left-[9px] md:left-[12px] top-1.5 w-1.5 h-1.5 rounded-full bg-white/20" />
                  {item}
                </div>
              );
            })}
          </div>
        );
      }

      // Regular Multiline Block
      return (
        <div key={idx} className="mb-4 md:mb-6 space-y-3 md:space-y-4">
          {lines.map((line, i) => (
            <p
              key={i}
              className="text-gray-400 md:text-gray-300 text-[13px] md:text-lg leading-relaxed font-medium"
            >
              {line}
            </p>
          ))}
        </div>
      );
    });
  };

  return (
    <div className="bg-black min-h-screen text-white">
      <Navbar />

      <div
        className={
          event.upcoming
            ? "pt-24 pb-10 md:pt-28 md:pb-12"
            : "pt-24 pb-12 md:pt-28 md:pb-12"
        }
      >
        {/* Hero Image */}
        <div className="relative h-[300px] md:h-[500px] w-full overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent z-10" />
          <img
            src={event.image}
            alt={event.title}
            className={`${event.upcoming ? "object-contain object-center" : "object-cover object-center"} w-full h-full`}
          />
        </div>

        {/* Event Header Info (Formerly overlapping on mobile) */}
        <div className="relative z-20 pb-4 pt-0 md:pt-0 md:absolute md:bottom-0 md:left-0 md:w-full md:p-12">
          <div className="container mx-auto px-4 md:px-0">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-6 transition-colors"
            >
              <ArrowLeft size={18} />{" "}
              <span className="text-sm md:text-base">Back to Events</span>
            </Link>
            <h1 className="text-3xl md:text-6xl font-bold mb-4 tracking-tight">
              {event.title}
            </h1>
            <div className="flex flex-col md:flex-row gap-3 md:gap-8 text-gray-400 md:text-gray-300 text-sm md:text-base">
              <div className="flex items-center gap-2">
                <Calendar className="text-yellow-500" size={16} />
                <span>{event.date}</span>
              </div>
              {event.mapsLink ? (
                <a
                  href={event.mapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-300 hover:text-yellow-500 transition-colors group/loc"
                >
                  <MapPin
                    className="text-yellow-500 group-hover/loc:scale-110 transition-transform"
                    size={16}
                  />
                  <span className="border-b border-transparent group-hover/loc:border-yellow-500/50">
                    {event.location}
                  </span>
                </a>
              ) : (
                <div className="flex items-center gap-2">
                  <MapPin className="text-yellow-500" size={16} />
                  <span>{event.location}</span>
                </div>
              )}
            </div>

            {/* Action Buttons */}
            <div className="mt-6 md:mt-8 flex flex-wrap gap-4">
              {event.ticketLink == "TBA" ? (
                <p
                  className="inline-flex items-center gap-2 bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-2.5 md:py-3 px-6 md:px-8 rounded-full shadow-lg shadow-yellow-500/20 text-sm md:text-base hover:cursor-not-allowed"
                >
                  <Ticket size={18} />
                  Tickets Soon !
                </p>
              ) : event.upcoming && event.ticketLink && (
                <a
                  href={event.ticketLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-2.5 md:py-3 px-6 md:px-8 rounded-full transition-all transform hover:scale-105 shadow-lg shadow-yellow-500/20 text-sm md:text-base"
                >
                  <Ticket size={18} />
                  Book Tickets
                </a>
              )}
              <button
                onClick={handleShare}
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold py-2.5 md:py-3 px-6 md:px-8 rounded-full transition-all transform hover:scale-105 backdrop-blur-sm border border-white/10 text-sm md:text-base"
              >
                {isCopied ? (
                  <>
                    <Check size={18} className="text-green-500" />
                    Copied!
                  </>
                ) : (
                  <>
                    <Share2 size={18} />
                    Share Event
                  </>
                )}
              </button>
              <a
                href={getGoogleCalendarUrl(event)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold py-2.5 md:py-3 px-6 md:px-8 rounded-full transition-all transform hover:scale-105 backdrop-blur-sm border border-white/10 text-sm md:text-base"
              >
                <CalendarPlus size={18} />
                Add to Calendar
              </a>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 md:px-6 py-8 md:py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {/* Main Content */}
            <div className="md:col-span-2 space-y-6 md:space-y-8">
              <div className="max-w-4xl">
                <h2 className="text-xl md:text-3xl font-bold mb-4 md:mb-6 border-l-4 border-yellow-500 pl-4">
                  About the Event
                </h2>
                <div className="bg-[#0A0A0A] border border-white/5 rounded-2xl md:rounded-3xl p-4 md:p-10 shadow-2xl">
                  {formatContent(event.fullDescription || event.description)}
                </div>
              </div>

              {/* Speakers */}
              {event.speakers && event.speakers.length > 0 && (
                <div>
                  <h2 className="text-2xl font-bold mb-8 border-l-4 border-purple-500 pl-4 flex items-center gap-3">
                    Speakers
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {event.speakers.map((speaker, idx) => (
                      <div
                        key={idx}
                        className="relative bg-[#111] border border-white/10 rounded-2xl p-6 text-center hover:border-purple-500/30 transition-all duration-500 group"
                      >
                        {/* Circular Portrait */}
                        <div className="mx-auto mb-4 relative w-28 h-28">
                          <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-yellow-500/40 to-purple-500/40 blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                          {speaker.image ? (
                            <img
                              src={speaker.image}
                              alt={speaker.name}
                              className="relative w-28 h-28 rounded-full object-cover object-top ring-2 ring-white/10 group-hover:ring-purple-500/40 transition-all duration-500"
                            />
                          ) : (
                            <div className="relative w-28 h-28 rounded-full bg-gradient-to-br from-yellow-600 to-purple-600 flex items-center justify-center ring-2 ring-white/10">
                              <span className="text-3xl font-bold text-white/80">
                                {speaker.name.charAt(0)}
                              </span>
                            </div>
                          )}
                        </div>

                        {/* Name */}
                        <h3 className="text-lg font-bold text-white leading-tight">
                          {speaker.name}
                        </h3>
                        <p className="text-xs text-purple-400 font-semibold mt-0.5">
                          {speaker.role}
                        </p>

                        {/* Company + Logo */}
                        <div className="flex items-center justify-center gap-2 mt-1.5">
                          {speaker.companyLogo && (
                            <img
                              src={speaker.companyLogo}
                              alt={speaker.company}
                              className="h-4 w-auto object-contain opacity-60"
                            />
                          )}
                          <p className="text-xs text-gray-500">
                            {speaker.company}
                          </p>
                        </div>

                        {/* Divider */}
                        <div className="h-px bg-white/5 my-4 mx-4" />

                        {/* Topic */}
                        <div className="text-left bg-white/[0.03] rounded-xl px-4 py-3">
                          <p className="text-[10px] text-gray-600 uppercase tracking-[0.15em] font-bold mb-1">
                            Spoke about
                          </p>
                          <p className="text-[13px] text-gray-300 leading-relaxed">
                            {speaker.topic}
                          </p>
                        </div>

                        {/* LinkedIn */}
                        {speaker.linkedin && (
                          <a
                            href={speaker.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-3 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-500 text-xs font-semibold"
                          >
                            <Linkedin size={13} />
                            LinkedIn
                          </a>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Gallery */}
              {event.gallery && event.gallery.length > 0 && (
                <div>
                  <h2 className="text-2xl font-bold mb-6 border-l-4 border-purple-500 pl-4">
                    Gallery
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {event.gallery.map((img, idx) => (
                      <div
                        key={idx}
                        className="rounded-xl overflow-hidden h-64 border border-white/10 group"
                      >
                        <img
                          src={img}
                          alt={`Gallery ${idx + 1}`}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
