import dynamic from "next/dynamic";
import { useState } from "react";
import { motion, AnimatePresence, useCycle } from "framer-motion";
import { useAnimatePresence } from "use-animate-presence";
import Projects from "../components/Projects";

export default function Home() {
  const [openCrud, setOpenCrud] = useState(false);
  const FadeAlt = () => ({
    in: {
      style: {
        opacity: ["0.7", "1"],
        transitionDuration: "1s",
      },
    },
    out: {
      style: {
        opacity: ["0.7", "1"],
        transitionDuration: "1s",
      },
    },
  });

  const fadeableVariants = {
    opacity: {
      from: 0,
      to: 1,
    },
  };

  const fadeableVariants2 = {
    opacity: {
      from: 1,
      to: 0,
    },
  };

  const animatedText = useAnimatePresence({
    variants: fadeableVariants,
    initial: "visible",
  });

  const animatedText2 = useAnimatePresence({
    variants: fadeableVariants2,
    initial: "visible",
    duration: "0.5s",
  });

  /*  <div>
       <button onClick={() => animatedText.togglePresence()}>Toggle</button>
       
     </div>; */

  const downArrow = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="30"
      height="30"
      className=""
    >
      <path fill="none" d="M0 0h24v24H0z" />
      <path d="M13 16.172l5.364-5.364 1.414 1.414L12 20l-7.778-7.778 1.414-1.414L11 16.172V4h2v12.172z" />
    </svg>
  );

  return (
    <div className="w-full h-full">
      <div>
        <div className="h-screen w-full sticky top-0" key={"1"}>
          <div className="w-full h-screen bg-blue-50 z-40 border" id="home">
            <div className="flex sm:p-8 items-center justify-center lg:text-9xl md:text-5xl sm:text-4xl text-5xl w-full h-full">
              {" "}
              <div className="sm:w-5/6 w-full font-Ezcar  p-4 text-gray-800 flex flex-col relative">
                <div className="text-right lg:text-lg text-sm text-xs font-Abril text-gray-600 md:w-56 w-40 self-end absolute hidden sm:block">
                  I enjoy figuring out complex apps and putting the pieces until
                  a complete app is formed
                </div>{" "}
                <div className="absolute lg:bottom-10 -bottom-20 right-2 text-xl flex items-center font-bold justify-center animate-bounce hidden md:flex">
                  <p className="mr-2">Scroll Down</p>
                  <div className="rounded-full border-2 border-black ">
                    {" "}
                    {downArrow}
                  </div>
                </div>
                <div className="border-b border-t md:p-4 z-50">
                  <div> Hi,</div>
                  <div>I&apos;m Derin </div>
                  and im a frontend Engineer
                  <div className="text-sm text-gray-400">
                    Built by OluwasoromiDerin Kehinde Owoade, 2021
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-screen w-full sticky top-0" key={"2"}>
          <div id="Projects" className="w-full h-screen  border z-10 bg-white">
            <Projects></Projects>
          </div>
        </div>
        <div className="h-screen w-full sticky top-0 " key={"3"}>
          <div className="w-full h-screen bg-blue-200 border">
            <div className="flex p-8 w-full  justify-center lg:text-7xl md:text-5xl text-4xl w-full h-full">
              {" "}
              <div className="w-5/6 font-Ezcar pt-8 hidden md:block">
                {" "}
                <div className="text-left w-fit">STACK</div>
                <div className="text-right -mt-16 flex flex-col">
                  {[
                    "REACT",
                    "TAILWIND",
                    "NEXTJS",
                    "JAVASCRIPT",
                    "NODEJS",
                    "TYPESCRIPT",
                    "CSS",
                    "MONGODB",
                  ].map((item) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, skewX: "20deg" }}
                      whileInView={{ opacity: 1, skewX: "0deg" }}
                      transition={{ duration: 0.6 }}
                      viewport={{ once: false }}
                    >
                      {item}
                    </motion.div>
                  ))}
                </div>
              </div>
              <div className="text-3xl flex flex-col items-center pt-8 font-Ezcar md:hidden">
                <div className="text-gray-500 pb-2">STACK</div>
                {[
                  "REACT",
                  "TAILWIND",
                  "NEXTJS",
                  "JAVASCRIPT",
                  "NODEJS",
                  "TYPESCRIPT",
                  "CSS",
                  "MONGODB",
                ].map((item) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, skewX: "20deg" }}
                    whileInView={{ opacity: 1, skewX: "0deg" }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: false }}
                  >
                    {item}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
