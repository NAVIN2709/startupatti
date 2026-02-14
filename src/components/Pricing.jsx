import { Check } from "lucide-react";

const Pricing = () => {
  return (
    <section className="py-24 bg-black relative border-t border-white/10">
      <div className="absolute left-0 top-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/5 rounded-full blur-[120px]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Get a ticket
          </h2>
          <p className="text-gray-400">
            Secure your spot for the next Startup Atti gathering.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Standard Ticket */}
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-white/30 transition-all group">
            <div className="flex justify-between items-start mb-8">
              <div>
                <h3 className="text-2xl font-bold mb-1 text-white">
                  Standard Access
                </h3>
                <p className="text-sm text-gray-400">Perfect for networking</p>
              </div>
              <div className="text-right">
                <span className="text-3xl font-bold block text-white">
                  Free
                </span>
                <span className="text-xs text-gray-500 uppercase font-bold tracking-wider">
                  Monthly
                </span>
              </div>
            </div>

            <ul className="space-y-4 mb-8">
              {[
                "Networking Opportunities",
                "Event Materials",
                "Community Access",
                "Q&A Sessions",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-300">
                  <div className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center text-white">
                    <Check size={12} strokeWidth={3} />
                  </div>
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>

            <button className="w-full py-4 rounded-xl border border-white/20 text-white font-bold hover:bg-white hover:text-black transition-all uppercase tracking-wider text-sm">
              Get Ticket
            </button>
          </div>

          {/* VIP Ticket */}
          <div className="bg-[#111] border border-white/20 rounded-3xl p-8 relative overflow-hidden group hover:border-white transition-all">
            <div className="absolute top-0 right-0 bg-white text-black text-xs font-bold px-3 py-1 rounded-bl-xl uppercase tracking-wider">
              Recommended
            </div>

            <div className="flex justify-between items-start mb-8">
              <div>
                <h3 className="text-2xl font-bold mb-1 text-white">
                  VIP Access
                </h3>
                <p className="text-sm text-gray-400">For serious founders</p>
              </div>
              <div className="text-right">
                <span className="text-3xl font-bold block text-white">
                  ₹499
                </span>
                <span className="text-xs text-gray-500 uppercase font-bold tracking-wider">
                  per event
                </span>
              </div>
            </div>

            <ul className="space-y-4 mb-8">
              {[
                "All Standard Benefits",
                "Private Dinner",
                "1-on-1 Mentorship",
                "Pitch Review",
                "Swag Bag",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-300">
                  <div className="w-5 h-5 rounded-full bg-white flex items-center justify-center text-black">
                    <Check size={12} strokeWidth={3} />
                  </div>
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>

            <button className="w-full py-4 rounded-xl bg-white text-black font-bold hover:bg-gray-200 transition-colors uppercase tracking-wider text-sm shadow-lg shadow-white/10">
              Get VIP Access
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
