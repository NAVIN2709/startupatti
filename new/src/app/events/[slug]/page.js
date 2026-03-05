import { events } from "../../data/events";
import EventDetailsClient from "./EventDetailsClient";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const event = events.find((e) => e.slug === slug);

  if (!event) return { title: "Event Not Found | Startup Atti" };

  return {
    title: `${event.title} | Startup Atti`,
    description: event.description,
    openGraph: {
      title: `${event.title} | Startup Atti`,
      description: event.description,
      images: [event.image?.src || event.image],
    },
  };
}

export async function generateStaticParams() {
  return events.map((event) => ({
    slug: event.slug,
  }));
}

export default async function EventPage({ params }) {
  const { slug } = await params;
  const event = events.find((e) => e.slug === slug);

  if (!event) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Event not found</h2>
        </div>
      </div>
    );
  }

  return <EventDetailsClient event={event} />;
}
