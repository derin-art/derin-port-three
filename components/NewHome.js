import { motion } from "framer-motion";
export default function NewHome() {
  const mainText = ["Hi,", "i'm derin,", "a frontend dev."];

  const scrollDown = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="50"
      height="50"
      className="fill-MikYellow border-2 rounded-full"
    >
      <path fill="none" d="M0 0h24v24H0z" />
      <path d="M13 12h7l-8 8-8-8h7V4h2z" />
    </svg>
  );

  return (
    <div>
      <div className="flex flex-col w-full p-4 pt-0 border-y-4 text-white uppercase justify-center">
        {mainText.map((item, index) => {
          return (
            <motion.div
              key={item}
              className={`font-PlayI  xl:text-9xl lg:text-7xl mb-0 md:text-5xl p-4 px-0 py-2 flex items-center sm:text-3xl text-3xl border-white   ${
                item === "a frontend dev." && ""
              } ${index === 0 && ""}`}
            >
              <p className="mt-2">{item}</p>
              {item === "Hi," && (
                <div className="absolute right-0 lg:text-3xl text-base lg:top-10 -top-20 animate-bounce flex flex-col items-center justify-center">
                  scroll down
                  {scrollDown}
                </div>
              )}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
