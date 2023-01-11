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
        duration: 0.55,
      },
    },
    in: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.55,
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
              "24",
              "24",
              "fill-gray-600 hover:fill-gray-800 duration-300"
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
              "24",
              "24",
              "fill-gray-600 hover:fill-gray-800 duration-300"
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
                  "24",
                  "24",
                  "fill-gray-600 hover:fill-gray-800 duration-300"
                )
              : bookIcon(
                  "24",
                  "24",
                  "fill-gray-600 hover:fill-gray-800 duration-300"
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

  const read = [
    { name: "Stack", data: Stack },
    { name: "Overview", data: OverView },
    { name: "Scope", data: Scope },
  ];
  return (
    <div className={`w-full md:p-4 pt-8 h-screen  relative  `}>
      <div className=" border absolute right-2 md:hidden border-gray-400 top-40 rounded-full p-1 backdrop-blur-sm z-30">
        <motion.div className="flex flex-col space-y-6 z-50 text-right  right-2 sticky top-40 ">
          {iconsWithLinks(true)}
        </motion.div>
      </div>
      <div className="pt-10 bg-white">
        <div className="font-PlayI lg:text-6xl  md:text-3xl relative text-left p-4 lg:p-0 lg:pt-4 lg:text-center text-2xl ml-8 text-gray-900">
          {Name}
        </div>

        <motion.div className="w-full flex justify-center bg-white">
          <div className="hidden flex-col left-8 absolute mt-4 md:flex z-50 top-40">
            {iconsWithLinks()}
          </div>
          <AnimatePresence>
            <motion.div
              variants={variants}
              animate="in"
              initial="out"
              exit={"out"}
              key={galleryOpen}
              className="flex absolute w-full  item-center lg:justify-center  md:overflow-hidden md:h-fit bg-white z-10"
            >
              {galleryOpen ? (
                <div className="lg:w-full w-4/5 lg:ml-0 ml-6">
                  <GalleryComponentAlt
                    imgArray={Images}
                    key="Gallery"
                  ></GalleryComponentAlt>
                </div>
              ) : (
                <motion.div className="flex flex-col w-4/5 lg:p-8 ml-6  lg:items-center lg:justify-center lg:w-full">
                  <span className="blurry-gradientIV top-40 z-0"></span>{" "}
                  {read.map((item) => {
                    return (
                      <div
                        key={item.name}
                        className=" lg:w-4/5 w-11/12 p-4 lg:p-8 font-Abril border  z-30 backdrop-blur-lg glass border-gray-400 mb-4 rounded-2xl text-black"
                      >
                        <div className="font-bold">{item.name}</div>
                        <div className="w-full lg:text-sm text-xs text-gray-600">
                          {item.name != "Stack" ? (
                            item.data
                          ) : (
                            <div className="flex flex-col lg:flex-row  w-full">
                              {item.data.map((pir, index) => {
                                return (
                                  <div key={pir}>
                                    {pir}{" "}
                                    {index + 1 === Stack.length ? "." : ","}{" "}
                                  </div>
                                );
                              })}
                            </div>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </motion.div>
              )}
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}
