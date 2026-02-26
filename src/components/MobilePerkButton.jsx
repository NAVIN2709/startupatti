import { motion } from "framer-motion";
import { Coins } from "lucide-react";

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
      className="md:hidden fixed bottom-6 right-6 z-[45] w-14 h-14 rounded-full bg-white text-black shadow-2xl flex items-center justify-center border border-white/20 active:bg-gray-100"
      aria-label="View Atti Perks"
    >
      <div className="relative">
        <Coins size={24} className="text-black" />
        <span className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-500 rounded-full border-2 border-white animate-pulse"></span>
      </div>
    </motion.button>
  );
};

export default MobilePerkButton;
