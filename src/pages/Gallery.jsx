import { motion } from "framer-motion";

const Gallery = () => {
  const months = [
    {
      name: "November 2025",
      images: Array(10).fill(
        "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      ),
    },
    {
      name: "December 2025",
      images: Array(10).fill(
        "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      ),
    },
  ];

  return (
    <div className="bg-black min-h-screen pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
            Gallery
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
            Capturing the moments that define our startup ecosystem.
          </p>
        </motion.div>

        {months.map((month, monthIndex) => (
          <div key={monthIndex} className="mb-24">
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-white mb-8 border-l-4 border-blue-500 pl-4"
            >
              {month.name}
            </motion.h2>

            <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
              {month.images.map((src, imgIndex) => (
                <motion.div
                  key={imgIndex}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: imgIndex * 0.05 }}
                  className="break-inside-avoid relative group rounded-2xl overflow-hidden"
                >
                  <img
                    src={`${src}&random=${monthIndex * 10 + imgIndex}`}
                    alt={`Gallery ${month.name} ${imgIndex + 1}`}
                    className="w-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <p className="text-white text-sm font-medium">
                      Atti Moment #{imgIndex + 1}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
