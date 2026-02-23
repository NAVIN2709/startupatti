import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn } from "lucide-react";

import img1 from "../assets/gallery/DSC09636.JPG";
import img2 from "../assets/gallery/IMG_0552.JPG";
import img3 from "../assets/gallery/IMG_0555.JPG";
import img4 from "../assets/gallery/IMG_0557.JPG";
import img5 from "../assets/gallery/IMG_0574.JPG";
import img6 from "../assets/gallery/IMG_0578.JPG";
import img7 from "../assets/gallery/IMG_0602.JPG";
import img8 from "../assets/gallery/IMG_0625.JPG";
import img9 from "../assets/gallery/IMG_0684.JPG";
import img10 from "../assets/gallery/IMG_0709.JPG";
import img11 from "../assets/gallery/IMG_0733.JPG";
import img12 from "../assets/gallery/IMG_0764.JPG";
import img13 from "../assets/gallery/IMG_0779.JPG";

const galleryImages = [
  { src: img1, alt: "Atti Moments", span: "tall" },
  { src: img2, alt: "Founder Stories", span: "normal" },
  { src: img3, alt: "Networking Session", span: "wide" },
  { src: img4, alt: "Startup Conversations", span: "normal" },
  { src: img5, alt: "Community Connect", span: "tall" },
  { src: img6, alt: "Speaker Session", span: "normal" },
  { src: img7, alt: "Atti Vibes", span: "normal" },
  { src: img8, alt: "The Hangout", span: "wide" },
  { src: img9, alt: "Real Connections", span: "tall" },
  { src: img10, alt: "Panel Talk", span: "normal" },
  { src: img11, alt: "Startup Energy", span: "normal" },
  { src: img12, alt: "Atti Network", span: "wide" },
  { src: img13, alt: "Group Photo", span: "normal" },
];

const Gallery = () => {
  const [selected, setSelected] = useState(null);

  return (
    <div className="bg-black min-h-screen pt-24 pb-16 px-3 sm:px-6 lg:px-8">
      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-white mb-4 tracking-tight">
            Atti Moments
          </h1>
          <p className="text-gray-500 text-base md:text-lg max-w-lg mx-auto">
            Snapshots from our monthly hangouts — real people, real energy.
          </p>
        </motion.div>

        {/* Pinterest Masonry Grid */}
        <div className="columns-2 sm:columns-3 lg:columns-4 gap-3 sm:gap-4">
          {galleryImages.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.03 }}
              className="break-inside-avoid mb-3 sm:mb-4 relative group cursor-pointer"
              onClick={() => setSelected(img)}
            >
              <div
                className="relative rounded-xl sm:rounded-2xl overflow-hidden"
                style={{
                  aspectRatio:
                    img.span === "tall"
                      ? "3/4"
                      : img.span === "wide"
                        ? "16/10"
                        : "4/3",
                }}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  loading="lazy"
                />

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center transform scale-0 group-hover:scale-100 transition-transform duration-300 delay-100">
                      <ZoomIn size={18} className="text-white" />
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4">
                    <p className="text-white text-xs sm:text-sm font-medium">
                      {img.alt}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8"
            onClick={() => setSelected(null)}
          >
            <button
              className="absolute top-4 right-4 sm:top-6 sm:right-6 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors z-10"
              onClick={() => setSelected(null)}
            >
              <X size={20} />
            </button>

            <motion.img
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              src={selected.src}
              alt={selected.alt}
              className="max-w-full max-h-[85vh] object-contain rounded-2xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="absolute bottom-6 sm:bottom-10 text-white/70 text-sm font-medium"
            >
              {selected.alt}
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery;
