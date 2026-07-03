import HomeClient from "./HomeClient";
import { events } from "./data/events";

export const metadata = {
  title: "Startup Atti | The Gateway to the Real Startup Ecosystem",
  description:
    "Join the real startup community in Chennai. Monthly offline events featuring unfiltered founder stories, structured networking, and a vibrant ecosystem.",
};

export default function HomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://startupatti.com/#organization",
    "name": "Startup Atti",
    "url": "https://startupatti.com",
    "logo": "https://startupatti.com/logo.svg",
    "image": "https://startupatti.com/optimized/attiog.png",
    "description": "Startup Atti is a monthly offline event by UOY Foundation to educate entrepreneurship through real founder stories and networking in Chennai.",
    "sameAs": [
      "https://wa.me/919487445528"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Chennai",
      "addressRegion": "Tamil Nadu",
      "addressCountry": "IN"
    }
  };

  const itemEventsLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": events.map((event, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "Event",
        "name": event.title,
        "description": event.description,
        "startDate": event.date,
        "image": event.image?.src || event.image,
        "location": {
          "@type": "Place",
          "name": event.location,
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Chennai",
            "addressRegion": "Tamil Nadu",
            "addressCountry": "IN"
          }
        }
      }
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemEventsLd) }}
      />
      <HomeClient />
    </>
  );
}
