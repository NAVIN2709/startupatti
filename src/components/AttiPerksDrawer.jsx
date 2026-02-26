import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Music,
  Globe,
  Ticket,
  Coins,
  Zap,
  Star,
  Info,
  LockOpen,
  Sparkles,
  ChevronRight,
} from "lucide-react";

/**
 * AttiPerksDrawer - A premium, high-end side panel for exclusive founder perks.
 * Designed with glassmorphism, depth, and dynamic animations.
 */
const AttiPerksDrawer = ({ isOpen, onClose }) => {
  const perks = [
    {
      id: "party",
      title: "Atti Party",
      subtitle: "The Elite Reset Experience",
      description:
        "Founders need time to socialize, reset, and take a break. An evening-only experience with curated DJ sets, premium cocktails, and the real Atti vibe.",
      requirement: "Redeem 3 Atti Tokens or Invite link from Atti Patrons",
      icon: Music,
      accent: "rgba(168, 85, 247, 0.5)", // Purple
      frequency: "Happens twice a year",
      tokensToEarn: 6,
    },
    {
      id: "tour",
      title: "Atti Tour",
      subtitle: "Flagship Annual International Tour",
      description:
        "A curated founder journey to global startup hubs focused on deep bonding, high-level exposure, and international perspective.",
      stats: "60% Adventure | 40% Ecosystem",
      requirement: "Redeem 9 Atti Tokens or Invite link from Atti Patrons",
      icon: Globe,
      accent: "rgba(59, 130, 246, 0.5)", // Blue
      frequency: "Annual",
      tokensToEarn: null,
    },
  ];

  const tokenRules = [
    { action: "Attend monthly events", reward: "1 Atti Token", icon: Zap },
    { action: "Attend Atti Party", reward: "6 Atti Tokens", icon: Star },
    { action: "Token Donation", reward: "Coming Soon", icon: Coins },
  ];

  const containerVariants = {
    hidden: { x: "100%", opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 30,
        stiffness: 200,
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
    exit: {
      x: "100%",
      opacity: 0,
      transition: {
        type: "spring",
        damping: 30,
        stiffness: 200,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* High-end Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-md z-[99]"
          />

          {/* Premium Drawer Container */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed top-0 right-0 h-full w-full max-w-lg bg-[#050505] border-l border-white/5 z-[100] shadow-[0_0_100px_rgba(0,0,0,0.5)] flex flex-col overflow-hidden"
          >
            {/* Animated Background Blobs */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  x: [0, 50, 0],
                  y: [0, 30, 0],
                }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute top-[-10%] right-[-10%] w-[300px] h-[300px] bg-purple-600/30 blur-[100px] rounded-full"
              />
              <motion.div
                animate={{
                  scale: [1, 1.3, 1],
                  x: [0, -40, 0],
                  y: [0, 50, 0],
                }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute bottom-[-10%] left-[-10%] w-[250px] h-[250px] bg-blue-600/30 blur-[100px] rounded-full"
              />
            </div>

            {/* Header: Sticky & Glassy */}
            <div className="relative sticky top-0 z-20 flex items-center justify-between p-8 bg-black/40 backdrop-blur-xl border-b border-white/5">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="absolute inset-0 bg-yellow-400 blur-md opacity-20 animate-pulse" />
                  <Sparkles
                    className="text-yellow-400 relative z-10"
                    size={24}
                  />
                </div>
                <div>
                  <h2 className="text-2xl font-black text-white tracking-tight uppercase">
                    Atti <span className="text-yellow-400">Perks</span>
                  </h2>
                  <div className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-yellow-400 animate-pulse" />
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40">
                      Founder Exclusive
                    </span>
                  </div>
                </div>
              </div>
              <button
                onClick={onClose}
                className="group relative w-12 h-12 rounded-full flex items-center justify-center transition-all"
                aria-label="Close"
              >
                <div className="absolute inset-0 bg-white/5 group-hover:bg-white/10 rounded-full transition-all" />
                <X
                  size={24}
                  className="text-white/40 group-hover:text-white relative z-10"
                />
              </button>
            </div>

            {/* Scrollable Content */}
            <div className="flex-1 overflow-y-auto p-8 space-y-10 relative z-10 scrollbar-hide">
              {/* Introduction Narrative */}
              <motion.div variants={itemVariants} className="relative">
                <p className="text-white/60 text-base leading-relaxed font-light">
                  Growth isn't just about business; it's about the{" "}
                  <span className="text-white font-medium italic">
                    perspective
                  </span>{" "}
                  you gain. Attending monthly Atti events unlocks a new
                  dimension of our ecosystem.
                </p>
                <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-yellow-500/0 via-yellow-500/40 to-yellow-500/0" />
              </motion.div>

              {/* Perks: High-end Cards */}
              <div className="space-y-6">
                {perks.map((perk) => (
                  <motion.div
                    key={perk.id}
                    variants={itemVariants}
                    whileHover={{ y: -5 }}
                    className="group relative"
                  >
                    {/* Glow effect on hover */}
                    <div
                      className="absolute -inset-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl rounded-2xl z-0"
                      style={{ background: perk.accent }}
                    />

                    <div className="relative p-7 rounded-2xl bg-[#0d0d0d] border border-white/10 backdrop-blur-sm shadow-2xl z-10 transition-colors group-hover:border-white/20 overflow-hidden">
                      {/* Sub-atmospheric Pattern Integration */}
                      <div
                        className="absolute inset-0 opacity-[0.03] pointer-events-none"
                        style={{
                          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2v-4h4v-2h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2v-4h4v-2H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                        }}
                      />

                      <div className="flex items-start justify-between mb-6">
                        <div className="relative">
                          <div className="absolute inset-0 bg-white/10 blur-md rounded-lg" />
                          <div className="relative p-3 rounded-xl bg-white/5 border border-white/10 text-white group-hover:text-yellow-400 transition-colors">
                            <perk.icon size={26} />
                          </div>
                        </div>
                        <div className="flex flex-col items-end">
                          <span className="px-3 py-1 rounded-full bg-yellow-400/10 text-yellow-400 text-[9px] font-black uppercase tracking-wider border border-yellow-400/20">
                            Pre-access
                          </span>
                          <span className="text-[10px] text-white/30 mt-2 font-bold uppercase tracking-widest">
                            {perk.frequency}
                          </span>
                        </div>
                      </div>

                      <h3 className="text-2xl font-black text-white mb-1 group-hover:translate-x-1 transition-transform">
                        {perk.title}
                      </h3>
                      <p className="text-xs font-bold text-white/40 uppercase tracking-[0.1em] mb-4">
                        {perk.subtitle}
                      </p>

                      <p className="text-gray-400 text-sm leading-relaxed mb-6">
                        {perk.description}
                        {perk.stats && (
                          <span className="block mt-3 text-white/80 font-bold flex items-center gap-2">
                            <ChevronRight size={14} className="text-blue-500" />{" "}
                            {perk.stats}
                          </span>
                        )}
                      </p>

                      <div className="flex items-center gap-4 pt-6 border-t border-white/5">
                        <div className="flex -space-x-2">
                          {[1, 2, 3].map((i) => (
                            <div
                              key={i}
                              className="w-6 h-6 rounded-full border border-black bg-white/5 flex items-center justify-center"
                            >
                              <LockOpen size={10} className="text-white/40" />
                            </div>
                          ))}
                        </div>
                        <div className="text-[11px] text-white/40 font-medium">
                          <span className="text-white">
                            {perk.requirement.split("Token")[0]}Tokens
                          </span>{" "}
                          required for access
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Token System: Tactical Glass */}
              <motion.div
                variants={itemVariants}
                className="relative overflow-hidden p-8 rounded-3xl bg-gradient-to-br from-white/[0.05] to-transparent border border-white/10"
              >
                <div className="absolute top-0 right-0 p-8 opacity-5">
                  <Coins size={100} />
                </div>

                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-10 h-10 rounded-xl bg-yellow-400/10 flex items-center justify-center text-yellow-400 border border-yellow-400/20 shadow-[0_0_20px_rgba(234,179,8,0.1)]">
                      <Coins size={20} />
                    </div>
                    <h3 className="text-lg font-black text-white uppercase tracking-tight">
                      The Token Engine
                    </h3>
                  </div>

                  <div className="space-y-6">
                    {tokenRules.map((rule, idx) => (
                      <div
                        key={idx}
                        className="flex items-center justify-between group"
                      >
                        <div className="flex items-center gap-4">
                          <div className="p-2 rounded-lg bg-white/5 text-white/40 group-hover:text-yellow-400 transition-colors">
                            <rule.icon size={16} />
                          </div>
                          <span className="text-gray-400 text-sm">
                            {rule.action}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          {rule.reward !== "Coming Soon" && (
                            <div className="h-1 w-4 bg-yellow-400/20 rounded-full" />
                          )}
                          <span
                            className={`text-xs font-black uppercase tracking-wider ${rule.reward === "Coming Soon" ? "text-white/20" : "text-white"}`}
                          >
                            {rule.reward}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Bottom Info */}
              <motion.div variants={itemVariants} className="pt-4 space-y-4">
                <div className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-white/5 border border-white/5">
                  <Info size={16} className="text-blue-400" />
                  <p className="text-[11px] text-white/40 font-medium leading-tight">
                    <span className="text-white/60 block mb-0.5 uppercase tracking-widest text-[10px]">
                      Validity
                    </span>
                    Tokens expire 3 years from the date of issue.
                    Non-transferable.
                  </p>
                </div>
                <p className="text-[10px] text-white/20 italic text-center leading-relaxed px-6">
                  *Tokens guarantee access to purchase passes. Separate ticket
                  pricing applies. Subject to evolution.
                </p>
              </motion.div>
            </div>

            {/* Dynamic Footer Button */}
            <div className="relative sticky bottom-0 z-20 p-8 bg-black/60 backdrop-blur-xl border-t border-white/5">
              <button
                onClick={onClose}
                className="relative w-full group overflow-hidden bg-white text-black font-black text-xs uppercase tracking-[0.3em] py-5 rounded-2xl transition-all hover:scale-[1.02] active:scale-[0.98] shadow-2xl"
              >
                <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-yellow-500 via-transparent to-blue-500 opacity-20" />
                <span className="relative z-10">Confirm & Acknowledge</span>
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default AttiPerksDrawer;
