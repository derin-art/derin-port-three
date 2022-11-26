import Image from "next/image";
import GalleryIcon from "../public/Icons/galleryIcon";
import GitIcon from "../public/Icons/githubIcon";
import GlobeIcon from "../public/Icons/globeIcon";
import BackIcon from "../public/Icons/backIcon";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import GalleryComponent from "../components/GalleryComponent";
import GalleryComponentAlt from "./GalleryComponentAlt";

import { useState } from "react";

export default function ProjectSpecific({
  Name,
  query,
  OverView,
  Scope,
  Execution,
  Stack,
  Images,
  Links,
  router,
}) {
  const icons = [
    { icon: BackIcon, link: false, back: true },
    { icon: GalleryIcon, link: false },
    { icon: GitIcon, link: true, realLink: Links.GitHub },
    { icon: GlobeIcon, link: true, realLink: Links.Live },
  ];
  const variants = {
    out: {
      opacity: 0,
      x: -40,
      transition: {
        duration: 0.75,
      },
    },
    in: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.75,
        delay: 0.3,
      },
    },
  };

  const iconsWithLinks = (mobile = false) => {
    return icons.map((icon) => {
      if (icon.link) {
        return (
          <motion.a
            href={icon.realLink}
            target="_blank"
            className={`${!mobile && "left-8 mb-20"}  rounded-lg `}
            initial={{ opacity: 0, translateX: "-100px" }}
            animate={{ opacity: 1, translateX: "0px" }}
            transition={{ delay: 0.7 }}
            key={icon.icon}
          >
            {icon.icon(
              "30",
              "30",
              "fill-indigo-700 hover:fill-gray-600 duration-300"
            )}
          </motion.a>
        );
      } else if (icon.back) {
        return (
          <motion.button
            onClick={() => {
              router.push("/");
            }}
            className={`${!mobile && "left-8 mb-20"}  rounded-lg`}
            initial={{ opacity: 0, translateX: "-100px" }}
            animate={{ opacity: 1, translateX: "0px" }}
            transition={{ delay: 0.7 }}
            key={icon.icon}
          >
            {icon.icon(
              "30",
              "30",
              "fill-indigo-700 hover:fill-gray-600 duration-300"
            )}
          </motion.button>
        );
      } else {
        return (
          <motion.button
            onClick={() => {
              setGalleryOpen((prev) => !prev);
            }}
            className={`${!mobile && "left-8 mb-20 "}   rounded-lg "`}
            initial={{ opacity: 0, translateX: "-100px" }}
            animate={{ opacity: 1, translateX: "0px" }}
            transition={{ delay: 0.7 }}
            key={icon.icon}
          >
            {!galleryOpen
              ? icon.icon(
                  "30",
                  "30",
                  "fill-indigo-700 hover:fill-gray-600 duration-300"
                )
              : bookIcon(
                  "30",
                  "30",
                  "fill-indigo-700 hover:fill-gray-600 duration-300"
                )}
          </motion.button>
        );
      }
    });
  };

  const bookIcon = (height, width, style) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width={width}
        height={height}
        className={style}
      >
        <path fill="none" d="M0 0h24v24H0z" />
        <path d="M21 4H7a2 2 0 1 0 0 4h14v13a1 1 0 0 1-1 1H7a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4h13a1 1 0 0 1 1 1v1zM5 18a2 2 0 0 0 2 2h12V10H7a3.982 3.982 0 0 1-2-.535V18zM20 7H7a1 1 0 1 1 0-2h13v2z" />
      </svg>
    );
  };

  const [galleryOpen, setGalleryOpen] = useState(false);
  return (
    <div className={`w-5/6 md:p-8 h-full`}>
      <div className="pt-8 ">
        <div className="font-PlayI lg:text-7xl border-gray-700 md:text-3xl border-b relative text-right text-2xl text-indigo-700">
          {Name}
        </div>
        <div className="relative pb-4 mb-4 md:hidden">
          <motion.div className="flex space-x-2 text-right absolute right-0">
            {iconsWithLinks(true)}
          </motion.div>
        </div>
        <div className="md:hidden font-PlayI">
          <div className="ml-2">Stack</div>
          <div className="text-sm flex font-PlayI space-x-2 md:hidden w-full flex-wrap">
            {Stack.map((tech, index) => {
              console.log(index, Stack.length);
              return (
                <div className="ml-2" key={index}>
                  {tech}
                  {index + 1 === Stack.length ? "." : ","}
                </div>
              );
            })}
          </div>
        </div>
        <motion.div className="">
          <div className="hidden flex-col left-8 absolute mt-4 md:flex">
            {iconsWithLinks()}
          </div>
          <AnimatePresence>
            <motion.div
              variants={variants}
              animate="in"
              initial="out"
              exit={"out"}
              key={galleryOpen}
              className="flex absolute w-5/6 h-[450px] overflow-auto md:h-fit"
            >
              {galleryOpen ? (
                <div className="absolute w-full">
                  <GalleryComponentAlt
                    imgArray={Images}
                    key="Gallery"
                  ></GalleryComponentAlt>
                </div>
              ) : (
                <motion.div className="flex flex-col md:flex-row mt-4 text-SmoBlack md:text-base text-sm">
                  <section className="font-Ezcar md:w-2/4 p-3 h-fit border border-gray-300 bg-gray-100">
                    <div className="text-4xl mb-2 font-Ezcar border-b border-gray-500">
                      OverView
                    </div>
                    <div className="">{OverView}</div>
                  </section>

                  <div className="flex flex-col font-Ezcar md:w-2/4 md:p-2 pt-0 md:ml-8 text-SmoBlack">
                    <section className="font-Ezcar border p-3 border-gray-300 bg-gray-100 md:block hidden">
                      <div className="text-4xl mb-2 font-Ezcar border-b border-gray-500">
                        Stack
                      </div>
                      <div className="flex flex-wrap">
                        {Stack.map((tech, index) => {
                          console.log(index, Stack.length);
                          return (
                            <div className="ml-2" key={index}>
                              {tech}
                              {index + 1 === Stack.length ? "." : ","}
                            </div>
                          );
                        })}
                      </div>
                    </section>

                    <section className="font-Ezcar  mt-4 border border-gray-300 p-3 bg-gray-100">
                      <div className="text-4xl mb-2 font-Ezcar text-black border-b border-gray-500">
                        Scope
                      </div>
                      <div>{Scope}</div>
                    </section>
                  </div>
                </motion.div>
              )}
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}
