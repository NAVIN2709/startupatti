import { motion } from "framer-motion";

const RainbowAmbient = () => {
  // Define the rainbow colors
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
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Container to ensure we don't cause scrollbars */}
      <div className="relative w-full h-full">
        {colors.map((color, index) => (
          <motion.div
            key={index}
            className="absolute rounded-full mix-blend-screen filter blur-[80px] opacity-40"
            style={{
              backgroundColor: color,
              width: "40vw", // Large responsive size
              height: "40vw",
              left: `${(index / colors.length) * 100}%`, // Distribute horizontally
              top: `${Math.sin(index) * 20 + 20}%`, // Vertical variation
            }}
            animate={{
              x: [0, 50, -50, 0],
              y: [0, -50, 50, 0],
              scale: [1, 1.2, 0.9, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 15 + index * 2, // Varied duration for organic feel
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 0.5,
            }}
          />
        ))}
      </div>

      {/* Overlay gradient to fade out edges/blend with black */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/90 pointer-events-none" />
    </div>
  );
};

export default RainbowAmbient;
