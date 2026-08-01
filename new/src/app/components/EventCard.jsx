import { motion } from "framer-motion";
import { Calendar, MapPin, ArrowRight, Ticket } from "lucide-react";
import Link from "next/link";

const EventCard = ({
  id,
  slug,
  title,
  date,
  location,
  description,
  image,
  isFeatured,
  ticketLink,
  upcoming,
}) => {
  return (
    <div
      className={`group relative overflow-hidden rounded-2xl bg-[#0A0A0A] border border-white/10 transition-all duration-300 flex flex-col ${isFeatured ? "md:col-span-2" : ""}`}
    >
      {/* Image Container */}
      <div
        className={`relative overflow-hidden ${isFeatured ? "h-64" : "h-48"}`}
      >
        <img
          src={image?.src || image}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300" />
      </div>

      {/* Content */}
      <div className="p-5 md:p-6 flex flex-col flex-grow">
        <div className="flex items-center gap-2 text-[10px] md:text-xs font-bold text-gray-400 mb-2 md:mb-3 uppercase tracking-wider">
          <Calendar size={12} />
          <span className="text-white">{date}</span>
        </div>
        <h3 className="text-lg md:text-xl font-bold text-white mb-2">
          {title}
        </h3>
        <div className="flex items-center gap-1 text-gray-400 text-[10px] md:text-xs mb-3 md:mb-4">
          <MapPin size={12} />
          <span>{location}</span>
        </div>
        <p className="text-gray-400 text-xs md:text-sm leading-relaxed mb-4 md:mb-6 flex-grow border-b border-white/5 pb-4">
          {description}
        </p>
        
        <div className="flex flex-wrap items-center gap-3 mt-auto">
          <Link
            href={`/events/${slug}`}
            className="inline-flex items-center gap-1.5 text-xs md:text-sm font-bold border border-white/20 hover:border-white/40 transition-all duration-300 px-4 py-2 rounded-full text-white hover:bg-white/5"
          >
            Read More <ArrowRight size={14} />
          </Link>
          
          {upcoming && ticketLink && ticketLink !== "TBA" && (
            <a
              href={ticketLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs md:text-sm font-bold bg-yellow-500 text-black hover:bg-yellow-400 transition-all duration-300 px-4 py-2 rounded-full shadow-[0_0_15px_rgba(234,179,8,0.3)]"
            >
              <Ticket size={14} />
              Book Tickets
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default EventCard;
