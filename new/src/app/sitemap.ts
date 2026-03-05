import { events } from "../app/data/events";

export default function sitemap() {
  const baseUrl = "https://startupatti.com";

  // Base pages
  const routes = ["", "/team", "/gallery", "/privacy-policy", "/terms"].map(
    (route) => ({
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: route === "" ? 1 : 0.8,
    }),
  );

  // Dynamic event pages
  const eventRoutes = events.map((event) => ({
    url: `${baseUrl}/events/${event.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...routes, ...eventRoutes];
}
