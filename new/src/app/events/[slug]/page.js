import { events } from "../../data/events";
import EventDetailsClient from "./EventDetailsClient";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const event = events.find((e) => e.slug === slug);

  if (!event) return { title: "Event Not Found | Startup Atti" };

  const seoDescription = `Startup Atti by Madras Marketers - An offline event. ${event.description}`;

  return {
    title: `${event.title} | Startup Atti`,
    description: seoDescription,
    openGraph: {
      title: `${event.title} | Startup Atti by Madras Marketers`,
      description: seoDescription,
      images: [event.image?.src || event.image],
    },
    twitter: {
      card: "summary_large_image",
      title: `${event.title} | Startup Atti by Madras Marketers`,
      description: seoDescription,
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

  // Format ISO date format for JSON-LD schema
  const parseDateToISO = (dateStr) => {
    try {
      const cleaned = dateStr.replace(/st|nd|rd|th/g, "").trim();
      const d = new Date(cleaned);
      if (!isNaN(d.getTime())) {
        return d.toISOString().split('T')[0];
      }
    } catch (e) {}
    return dateStr;
  };

  const isoDate = parseDateToISO(event.date);

  const eventLd = {
    "@context": "https://schema.org",
    "@type": "Event",
    "name": event.title,
    "description": event.description,
    "image": event.image?.src || event.image,
    "startDate": isoDate,
    "eventStatus": "https://schema.org/EventScheduled",
    "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
    "location": {
      "@type": "Place",
      "name": event.location,
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Chennai",
        "addressRegion": "Tamil Nadu",
        "addressCountry": "IN"
      }
    },
    ...(event.ticketLink && event.ticketLink !== "TBA" && {
      "offers": {
        "@type": "Offer",
        "url": event.ticketLink,
        "priceCurrency": "INR",
        "availability": "https://schema.org/InStock"
      }
    }),
    ...(event.speakers && event.speakers.length > 0 && {
      "performer": event.speakers.map(s => ({
        "@type": "Person",
        "name": s.name,
        "jobTitle": s.role,
        "worksFor": {
          "@type": "Organization",
          "name": s.company
        }
      }))
    })
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(eventLd) }}
      />
      <EventDetailsClient event={event} />
    </>
  );
}
