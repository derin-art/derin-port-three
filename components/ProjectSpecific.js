import Image from "next/image";
import GalleryIcon from "../public/Icons/galleryIcon";
import GitIcon from "../public/Icons/githubIcon";
import GlobeIcon from "../public/Icons/globeIcon";
import BackIcon from "../public/Icons/backIcon";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import BetterGallery from "./BetterGallery";
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
            className={`${
              !mobile && "left-8 mb-20"
            }  rounded-lg  bg-ultraGray p-1 border border-2`}
            initial={{ opacity: 0, translateX: "-100px" }}
            animate={{ opacity: 1, translateX: "0px" }}
            transition={{ delay: 0.7 }}
            key={icon.icon}
          >
            {icon.icon(
              "24",
              "24",
              "fill-blue-300 hover:fill-gray-600 duration-300"
            )}
          </motion.a>
        );
      } else if (icon.back) {
        return (
          <motion.button
            onClick={() => {
              router.push("/");
            }}
            className={`${
              !mobile && "left-8 mb-20 "
            }  rounded-lg bg-ultraGray p-1 border border-2`}
            initial={{ opacity: 0, translateX: "-100px" }}
            animate={{ opacity: 1, translateX: "0px" }}
            transition={{ delay: 0.7 }}
            key={icon.icon}
          >
            {icon.icon(
              "24",
              "24",
              "fill-blue-300 hover:fill-gray-600 duration-300"
            )}
          </motion.button>
        );
      } else {
        return (
          <motion.button
            onClick={() => {
              setGalleryOpen((prev) => !prev);
            }}
            className={`${
              !mobile && "left-8 mb-20"
            }   rounded-lg  bg-ultraGray p-1 border border-2`}
            initial={{ opacity: 0, translateX: "-100px" }}
            animate={{ opacity: 1, translateX: "0px" }}
            transition={{ delay: 0.7 }}
            key={icon.icon}
          >
            {!galleryOpen
              ? icon.icon(
                  "24",
                  "24",
                  "fill-blue-300 hover:fill-gray-600 duration-300"
                )
              : bookIcon(
                  "24",
                  "24",
                  "fill-blue-300 hover:fill-gray-600 duration-300"
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
    { name: "Under the hood", data: Stack },
    { name: "Overview", data: OverView },
    { name: "Scope", data: Scope },
  ];
  return (
    <div
      className={`w-full lg:flex-row pt-20 h-screen  relative flex flex-col font-inter p-4 `}
    >
      {" "}
      {
        <div
          className={`absolute ${
            !galleryOpen ? "lg:hidden" : "lg:flex"
          }  items-center justify-center hidden h-screen top-0 backdrop-blur-sm`}
        >
          <div className="w-2/5">
            <BetterGallery imageArray={Images} key="Keeysdd"></BetterGallery>
          </div>
        </div>
      }
      <div className="text-5xl lg:text-6xl xl:text-8xl 2xl:text-9xl lg:p-2 xl:p-4 text-ultraBlack ">
        <div className="blurry-gradientII "></div>
        {Name}
        <div className="lg:flex space-x-4 mt-4 hidden">
          {iconsWithLinks(true)}
        </div>
      </div>
      <div className="flex space-x-4 mt-4 lg:hidden">
        {iconsWithLinks(true)}
      </div>
      <div className="mt-8 lg:mt-0 ">
        {read.map((item, index) => {
          return (
            <div key={index} className="mb-4 border-y py-2 ">
              <div className="text-4xl text-gray-700">{item.name}</div>
              <div className="text-gray-500 text-xs">
                {item.name === "Under the hood"
                  ? item.data.map((pir, index) => {
                      return (
                        <div className="mr-2" key={index}>
                          {pir}
                        </div>
                      );
                    })
                  : item.data}
              </div>
            </div>
          );
        })}
      </div>
      <div className="lg:hidden">
        <BetterGallery imageArray={Images} key="Keeysd"></BetterGallery>
      </div>
    </div>
  );
}
