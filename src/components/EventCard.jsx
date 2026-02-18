import { motion } from "framer-motion";
import { Calendar, MapPin, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const EventCard = ({
  id,
  title,
  date,
  location,
  description,
  image,
  isFeatured,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5 }}
      className={`group relative overflow-hidden rounded-2xl bg-[#0A0A0A] border border-white/10 hover:border-white/30 transition-all duration-300 flex flex-col ${isFeatured ? "md:col-span-2" : ""}`}
    >
      {/* Image Container */}
      <div
        className={`relative overflow-hidden ${isFeatured ? "h-64" : "h-48"}`}
      >
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300" />
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-center gap-2 text-xs font-bold text-gray-400 mb-3 uppercase tracking-wider">
          <Calendar size={12} />
          <span className="text-white">{date}</span>
        </div>
        <h3 className="text-xl font-bold text-white mb-2 group-hover:underline decoration-1 underline-offset-4">
          {title}
        </h3>
        <div className="flex items-center gap-1 text-gray-500 text-xs mb-4">
          <MapPin size={12} />
          <span>{location}</span>
        </div>
        <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow border-b border-white/5 pb-4">
          {description}
        </p>
        <Link
          to={`/event/${id}`}
          className="inline-flex items-center gap-2 text-sm font-bold text-white group-hover:gap-3 transition-all"
        >
          Read More <ArrowRight size={14} />
        </Link>
      </div>
    </motion.div>
  );
};

export default EventCard;
