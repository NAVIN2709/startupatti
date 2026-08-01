import { redirect } from "next/navigation";
import { events } from "../../data/events";

export async function generateStaticParams() {
  return events.map((event) => ({
    slug: event.slug,
  }));
}

export default async function EventRedirectPage({ params }) {
  const { slug } = await params;
  redirect(`/events/${slug}`);
}
