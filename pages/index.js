import dynamic from "next/dynamic";
import ProjectsPages from "../components/ProjectsPages";
import { useState, useEffect } from "react";
import { motion, AnimatePresence, useCycle } from "framer-motion";
import { useAnimatePresence } from "use-animate-presence";
import Projects from "../components/Projects";
import NewHome from "../components/NewHome";
import useMediaQuery from "../hooks/useMediaQuery";

export default function Home() {
  const [openCrud, setOpenCrud] = useState(false);
  const [scrollPosition, setSrollPosition] = useState(0);
  const [scrolledUp, setScrolledUp] = useState(false);
  const [pageLocation, setPageLocation] = useState("home");
  const [pageLocationMobile, setPageLocationMobile] = useState("home");
  const [snapPointers, setSnapPointers] = useState("home");

  const { height, width } = useMediaQuery();

  const isSmall = width ? width < 550 : false;
  const handleScroll = () => {
    const position = window.pageYOffset;

    setSrollPosition((prev) => {
      if (position < 500) {
        setPageLocation("home");
      }
      if (position > 500) {
        setPageLocation("projects");
      }
      if (position > 1250) {
        setPageLocation("Stack");
      }
      if (position < 650) {
        setPageLocationMobile("home");
      }
      if (position > 650) {
        setPageLocationMobile("projects");
      }
      if (position > 1250) {
        setPageLocationMobile("Stack");
      }
      if (position < 50) {
        setSnapPointers("home");
      }
      if (position > 50) {
        setSnapPointers("projects");
      }
      if (position > 1000) {
        setSnapPointers("Stack");
      }

      if (position > prev) {
        setScrolledUp(true);
      } else {
        setScrolledUp(false);
      }
      return position;
    });
  };

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

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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

  const StackIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      className="fill-PineGreen"
    >
      <path fill="none" d="M0 0h24v24H0z" />
      <path d="M20.083 10.5l1.202.721a.5.5 0 0 1 0 .858L12 17.65l-9.285-5.571a.5.5 0 0 1 0-.858l1.202-.721L12 15.35l8.083-4.85zm0 4.7l1.202.721a.5.5 0 0 1 0 .858l-8.77 5.262a1 1 0 0 1-1.03 0l-8.77-5.262a.5.5 0 0 1 0-.858l1.202-.721L12 20.05l8.083-4.85zM12.514 1.309l8.771 5.262a.5.5 0 0 1 0 .858L12 13 2.715 7.429a.5.5 0 0 1 0-.858l8.77-5.262a1 1 0 0 1 1.03 0z" />
    </svg>
  );

  const alt = true;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      exit={{ opacity: 0, translateX: "50%" }}
      className="w-full h-full"
    >
      <div className="">
        <div className={`h-screen w-full sticky top-0 `} key={"1"}>
          <div
            className={`w-full h-screen overflow-hiddden ${
              alt ? "bg-[#011627]" : "bg-blue-100"
            } border-t-4 ${
              alt ? "border-PineGreen" : "border-gray-700 grit"
            } z-40 `}
            id="home"
          >
            <div className="flex sm:p-8 items-center justify-center lg:text-8xl md:text-4xl sm:text-3xl text-5xl w-full h-full">
              {" "}
              {alt ? (
                <div className=" sm:w-5/6 font-Ezcar  p-4 pt-0 text-gray-800 flex flex-col relative">
                  <div className="">
                    <NewHome></NewHome>
                  </div>
                </div>
              ) : (
                <div className="sm:w-5/6 w-full font-Ezcar  p-4 text-gray-800 flex flex-col relative">
                  <div className="text-right lg:text-lg text-sm text-xs font-Abril text-gray-600 md:w-56 w-40 self-end absolute hidden sm:block">
                    I enjoy figuring out complex apps and putting the pieces
                    until a complete app is formed
                  </div>{" "}
                  <div className="absolute lg:bottom-10 -bottom-20 right-2 text-xl flex items-center font-bold justify-center animate-bounce  md:flex">
                    <p className="mr-2">Scroll Down</p>
                    <div className="rounded-full border-2 border-black ">
                      {" "}
                      {downArrow}
                    </div>
                  </div>
                  <div className="border-b border-t md:p-4 z-50  border-black">
                    <motion.div
                      initial={{ opacity: 0, marginTop: "-50px" }}
                      whileInView={{
                        opacity: 1,
                        marginTop: "0px",
                        skewX: "0deg",
                      }}
                      transition={{ duration: 0.5 }}
                    >
                      {" "}
                      Hi,
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, marginTop: "-50px" }}
                      whileInView={{
                        opacity: 1,
                        marginTop: "0px",
                        skewX: "0deg",
                      }}
                      transition={{ duration: 0.7 }}
                    >
                      I&apos;m Derin{" "}
                    </motion.div>
                    and im a frontend Engineer
                    <motion.div
                      className="text-sm text-gray-400"
                      initial={{ opacity: 0, marginTop: "-50px" }}
                      whileInView={{
                        opacity: 1,
                        marginTop: "0px",
                        skewX: "0deg",
                      }}
                      transition={{ duration: 1 }}
                    >
                      Built by OluwasoromiDerin Kehinde Owoade, 2021
                    </motion.div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          exit={{ opacity: 0 }}
          className={`h-screen w-full sticky top-0 overflow-hidden ${
            !isSmall ? snapPointers === "projects" && "snap-center" : ""
          }`}
          key={"2"}
        >
          <div
            id="Projects"
            className="w-full h-screen  z-10 bg-TiWhite border-t-4 border-MikYellow overflow-hidden"
          >
            {true ? <ProjectsPages></ProjectsPages> : <Projects></Projects>}
          </div>
        </motion.div>
        <div
          className={`h-screen w-full sticky top-0 ${
            !isSmall ? snapPointers === "Stack" && "snap-center" : ""
          } `}
          key={"3"}
        >
          <div
            className={`w-full h-screen bg-TiWhite border-t-4 border-PineGreen `}
          >
            <div className="flex p-8 w-full  justify-center lg:text-7xl md:text-5xl text-4xl w-full h-full">
              {" "}
              <div className="w-5/6 font-Ezcar pt-8 hidden md:block">
                {" "}
                <div className="text-left font-PlayI w-fit text-gray-700 flex border-b-4 border-gray-700">
                  STACK
                  <div className=" mt-3 ml-1">{StackIcon}</div>
                </div>
                <div className="text-right -mt-16 flex flex-col text-PineGreen">
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
                      initial={{
                        opacity: 0,
                        skewX: "20deg",
                        marginRight: "50px",
                      }}
                      whileInView={{
                        opacity: 1,
                        skewX: "0deg",
                        marginRight: "0px",
                      }}
                      transition={{ duration: 0.6 }}
                      viewport={{ once: false }}
                    >
                      {item}
                    </motion.div>
                  ))}
                </div>
              </div>
              <div className="text-2xl flex flex-col items-center pt-8 font-Ezcar md:hidden">
                <div className="text-black mb-2 font-PlayI border-b-4 border-gray-700 text-3xl">
                  STACK
                </div>
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
                    className="text-PineGreen"
                  >
                    {item}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
