import { motion } from "framer-motion";
import { Coins } from "lucide-react";

const Sparkle = ({ delay = 0 }) => (
  <motion.div
    initial={{ scale: 0, opacity: 0, x: 0, y: 0 }}
    animate={{
      scale: [0, 1, 0],
      opacity: [0, 1, 0],
      x: [0, (Math.random() - 0.5) * 60],
      y: [0, (Math.random() - 0.5) * 60],
    }}
    transition={{
      duration: 1.8,
      repeat: Infinity,
      delay,
      ease: "easeOut",
    }}
    className="absolute w-1.5 h-1.5 bg-yellow-400 rounded-full"
    style={{
      left: "50%",
      top: "50%",
      filter: "blur(0.5px)",
    }}
  />
);

/**
 * MobilePerkButton - A floating action button for mobile users to access Perks.
 */
const MobilePerkButton = ({ onClick }) => {
  return (
    <motion.button
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileTap={{ scale: 0.9 }}
      onClick={onClick}
      className="md:hidden fixed bottom-6 right-6 z-[45] w-16 h-16 rounded-full bg-white text-black shadow-[0_0_30px_rgba(255,255,255,0.3)] flex items-center justify-center border border-white/20 active:bg-gray-100 overflow-visible"
      aria-label="View Atti Perks"
    >
      <div className="absolute inset-0 pointer-events-none overflow-visible">
        <Sparkle delay={0} />
        <Sparkle delay={0.5} />
        <Sparkle delay={1.0} />
      </div>
      <div className="relative">
        <Coins size={28} className="text-black" />
        <span className="absolute -top-1 -right-1 w-4 h-4 bg-yellow-500 rounded-full border-2 border-white animate-pulse shadow-lg"></span>
      </div>
      <motion.div
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute inset-0 rounded-full bg-yellow-400/20 blur-xl -z-10"
      />
    </motion.button>
  );
};

export default MobilePerkButton;
