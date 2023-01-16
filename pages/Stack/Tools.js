import { motion } from "framer-motion";

export default function Tools() {
  return (
    <motion.div
      initial={{ opacity: 0, translateY: "30%" }}
      animate={{ opacity: 1, translateY: "0%" }}
      transition={{ duration: 0.8 }}
      exit={{ opacity: 0, translateY: "-30%" }}
      className="bg-white w-full flex  items-center justify-center "
    >
      <div className="w-4/5 bg-white text-lg lg:text-4xl p-4 flex lg:flex-row flex-col  justify-between font-inter pt-20">
        <div className="mb-2 border-b border-black lg:border-none lg:mb-0 font-inter">
          STACK
        </div>
        <div className="  flex flex-col text-black">
          {[
            "REACT",
            "TAILWIND",
            "NEXTJS",
            "JAVASCRIPT",
            "NODEJS",
            "TYPESCRIPT",
            "CSS",
            "MONGODB",
            "JEST",
            "FRAMER MOTION",
          ].map((item) => (
            <motion.div className="mb-2" key={item}>
              {item}
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
