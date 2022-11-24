import { motion } from "framer-motion";
export default function NewHome() {
  const mainText = ["Hi,", "i'm derin", "a frontend dev."];

  return (
    <div>
      <div className="flex flex-col w-full p-4 text-SmoBlack uppercase">
        {mainText.map((item) => {
          return (
            <motion.div
              key={item}
              initial={{ opacity: 0, skewX: "20deg", marginLeft: "50px" }}
              whileInView={{ opacity: 1, marginLeft: "0px", skewX: "0deg" }}
              transition={{ duration: 0.3 }}
              viewport={{ once: false }}
              className={`font-Ezcar lg:text-9xl md:text-4xl p-6 sm:text-3xl border-b border-black ${
                item === "a frontend dev." && "text-PigBlue"
              }`}
            >
              {item}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
