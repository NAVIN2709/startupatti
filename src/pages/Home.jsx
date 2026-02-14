import Hero from "../components/Hero";
import EventCard from "../components/EventCard";
import StatsSection from "../components/StatsSection";
import Testimonials from "../components/Testimonials";
import Pricing from "../components/Pricing";
import { ArrowRight } from "lucide-react";

const Home = () => {
  const events = [
    {
      id: 1,
      title: "July Atti: SaaS Special",
      date: "July 26, 2024",
      location: "Tharamani, Chennai",
      description:
        "Dive deep into the world of SaaS with industry leaders. A networking event dedicated to scaling softwre products.",
      isFeatured: false,
      image:
        "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1632&q=80",
    },
    {
      id: 2,
      title: "Tech Mixer",
      date: "August 10, 2024",
      location: "T-Hub, Hyderabad",
      description:
        "Connect with developers, designers, and founders in this casual mixer event.",
      isFeatured: false,
      image:
        "https://images.unsplash.com/photo-1515187029135-18ee286d815b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    },
    {
      id: 3,
      title: "Pitch Perfect",
      date: "August 24, 2024",
      location: "Koramangala, Bangalore",
      description:
        "Refine your pitch deck with feedback from experienced VCs and Angels.",
      isFeatured: false,
      image:
        "https://images.unsplash.com/photo-1544531586-fde5298cdd40?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    },
  ];

  return (
    <>
      <Hero />

      {/* Latest Events Section */}
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

      <StatsSection />

      <Testimonials />

      <Pricing />
    </>
  );
};

export default Home;
