import { useParams } from "react-router-dom";
import { motion } from "framer-motion";

const EventGallery = () => {
  const { month } = useParams();

  // Format month name from URL param (e.g., "august-2025" -> "August 2025")
  const formattedMonth = month
    ? month
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ")
    : "Event Gallery";

  // Dummy images with mixed aspect ratios for Masonry effect
  // In a real app, these would come from a database based on the 'month' param
  const images = [
    "https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1523580494863-6f3031224c94?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1515187029135-18ee286d815b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1606787366850-de6330128bfc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  ];

  return (
    <div className="pt-24 pb-24 min-h-screen bg-black">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight">
            {formattedMonth}
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Captured moments from our community gathering. Relive the memories
            and connections made.
          </p>
        </motion.div>

        {/* Masonry Grid Setup */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {images.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="break-inside-avoid relative group overflow-hidden rounded-2xl"
            >
              <img
                src={src}
                alt={`Gallery ${index}`}
                className="w-full h-auto object-cover grayscale group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventGallery;
