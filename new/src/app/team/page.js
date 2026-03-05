import Team from "../components/Team";

export const metadata = {
  title: "Our Team | Startup Atti",
  description:
    "Meet the passionate team behind Startup Atti and UOY Foundation working to empower the next generation of entrepreneurs.",
};

export default function TeamPage() {
  return (
    <div className="pt-20 bg-black min-h-screen">
      <Team />
    </div>
  );
}
