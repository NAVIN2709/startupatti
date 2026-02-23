import { useParams, Link } from "react-router-dom";
import { events } from "../data/events";
import { motion } from "framer-motion";
import { Calendar, MapPin, ArrowLeft } from "lucide-react";
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
          <Link to="/" className="text-blue-500 hover:underline">
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
                  <Calendar className="text-blue-500" size={20} />
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="text-blue-500" size={20} />
                  <span>{event.location}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="md:col-span-2 space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-4 border-l-4 border-blue-500 pl-4">
                  About the Event
                </h2>
                <p className="text-gray-300 text-lg leading-relaxed">
                  {event.fullDescription || event.description}
                </p>
              </div>

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
