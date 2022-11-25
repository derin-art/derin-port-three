import { motion } from "framer-motion";
export default function NewHome() {
  const mainText = ["Hi,", "i'm derin", "a frontend dev."];

  return (
    <div>
      <div className="flex flex-col w-full p-4 text-white uppercase justify-center">
        {mainText.map((item, index) => {
          return (
            <motion.div
              key={item}
              className={`font-Ezcar lg:text-8xl mb-0 md:text-4xl p-4 px-0 py-6 flex items-center  sm:text-3xl border-b border-white   ${
                item === "a frontend dev." && "text-gray-400"
              } ${index === 0 && "border-t"}`}
            >
              <p className="mt-2">{item}</p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
