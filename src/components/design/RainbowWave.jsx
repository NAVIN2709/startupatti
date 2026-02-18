import { motion } from "framer-motion";

const RainbowWave = ({ className = "" }) => {
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
    <div className={`w-full overflow-hidden leading-[0] ${className}`}>
      <svg
        viewBox="0 0 1440 320"
        className="w-full h-auto block"
        preserveAspectRatio="none"
      >
        {colors.map((color, index) => (
          <motion.path
            key={index}
            fill={color}
            fillOpacity="1"
            initial={{
              d: "M0,160 C320,300 420,0 740,160 C1060,320 1380,160 1440,160 L1440,320 L0,320 Z",
            }}
            animate={{
              d: [
                "M0,160 C320,320 420,50 740,160 C1060,270 1380,100 1440,100 L1440,320 L0,320 Z",
                "M0,160 C320,50 420,270 740,160 C1060,50 1380,220 1440,220 L1440,320 L0,320 Z",
                "M0,160 C320,320 420,50 740,160 C1060,270 1380,100 1440,100 L1440,320 L0,320 Z",
              ],
            }}
            transition={{
              duration: 10 + index,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{
              transform: `translateY(${index * 15}px)`, // Stagger the waves vertically
              opacity: 0.8,
            }}
          />
        ))}
      </svg>
    </div>
  );
};

export default RainbowWave;
