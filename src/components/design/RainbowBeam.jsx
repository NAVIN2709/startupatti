import { motion } from "framer-motion";

const RainbowBeam = ({ className = "" }) => {
  const colors = [
    "#FF0000", // Red
    "#FF7F00", // Orange
    "#FFFF00", // Yellow
    "#00FF00", // Green
    "#0000FF", // Blue
    "#4B0082", // Indigo
    "#9400D3", // Violet
  ];

  return (
    <div
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
    >
      <motion.svg
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[200%] h-full opacity-40 blur-3xl mix-blend-screen"
        initial={{ opacity: 0, scaleY: 0 }}
        animate={{ opacity: 0.4, scaleY: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <defs>
          <linearGradient id="beam-fade" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="white" stopOpacity="0.8" />
            <stop offset="50%" stopColor="white" stopOpacity="0.2" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </linearGradient>
        </defs>

        {colors.map((color, index) => (
          <path
            key={index}
            d={`M ${40 + index * 3} 0 L ${35 + index * 4.5} 100 L ${38 + index * 4.5} 100 L ${43 + index * 3} 0 Z`}
            fill={color}
            style={{ mixBlendMode: "screen" }}
          />
        ))}
      </motion.svg>

      {/* Crisp Overlay for Definition */}
      <motion.svg
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[120%] h-full opacity-80"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.8 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        {colors.map((color, index) => (
          <motion.path
            key={index}
            d={`M ${45 + index * 1.5} 0 L ${20 + index * 8} 100 L ${28 + index * 8} 100 L ${46.5 + index * 1.5} 0 Z`}
            fill={color}
            stroke={color}
            strokeWidth="0.1"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 1.5,
              delay: 0.2 * index,
              ease: "easeInOut",
            }}
          />
        ))}
      </motion.svg>
    </div>
  );
};

export default RainbowBeam;
