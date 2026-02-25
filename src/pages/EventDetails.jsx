import { useParams, Link } from "react-router-dom";
import { events } from "../data/events";
import {
  Calendar,
  MapPin,
  ArrowLeft,
  Linkedin,
  Mic,
  Ticket,
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const EventDetails = () => {
  const { id } = useParams();
  const event = events.find((e) => e.id === parseInt(id));

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

  return (
    <div className="bg-black min-h-screen text-white">
      <Navbar />

      <div className="pt-24 pb-12">
        {/* Hero Image */}
        <div className="relative h-[400px] md:h-[500px] w-full overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent z-10" />
          <img
            src={event.image}
            alt={event.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 left-0 w-full z-20 p-6 md:p-12">
            <div className="container mx-auto">
              <Link
                to="/#events"
                className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-6 transition-colors"
              >
                <ArrowLeft size={20} /> Back to Events
              </Link>
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                {event.title}
              </h1>
              <div className="flex flex-col md:flex-row gap-4 md:gap-8 text-gray-300">
                <div className="flex items-center gap-2">
                  <Calendar className="text-yellow-500" size={20} />
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="text-yellow-500" size={20} />
                  <span>{event.location}</span>
                </div>
              </div>

              {/* Book Tickets Button */}
              {event.upcoming && event.ticketLink && (
                <div className="mt-8">
                  <a
                    href={event.ticketLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-yellow-600 hover:bg-yellow-700 text-black font-bold py-3 px-8 rounded-full transition-all transform hover:scale-105 shadow-lg shadow-yellow-500/20 text-white"
                  >
                    <Ticket size={20} />
                    Book Tickets
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="container mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="md:col-span-2 space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-4 border-l-4 border-yellow-500 pl-4">
                  About the Event
                </h2>
                <p className="text-gray-300 text-lg leading-relaxed">
                  {event.fullDescription || event.description}
                </p>
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
                            className="mt-4 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0A66C2]/10 border border-[#0A66C2]/20 text-[#70B5F9] text-xs font-semibold hover:bg-[#0A66C2]/25 hover:border-[#0A66C2]/40 transition-all"
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

      <Footer />
    </div>
  );
};

export default EventDetails;
