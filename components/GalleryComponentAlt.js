import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
import react, { useState, useEffect } from "react";
import Image from "next/image";

export default function GalleryComponentAlt({ imgArray }) {
  const variants = {
    out: {
      opacity: 0,
      x: 40,
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

  const Arrow = (width = "24", height = "24", style) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width={width}
        height={height}
        className={style}
      >
        <path fill="none" d="M0 0h24v24H0z" />
        <path d="M13.172 12l-4.95-4.95 1.414-1.414L16 12l-6.364 6.364-1.414-1.414z" />
      </svg>
    );
  };

  const ArrowLeft = (width = "24", height = "24", style) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width={width}
        height={height}
        className={style}
      >
        <path fill="none" d="M0 0h24v24H0z" />
        <path d="M10.828 12l4.95 4.95-1.414 1.414L8 12l6.364-6.364 1.414 1.414z" />
      </svg>
    );
  };

  const [imgNo, setImgNo] = useState(0);

  return (
    <div>
      <div className="font-Abril font-bold mb-6 mt-4 sm:mb-0 sm:mt-0">
        <div className="ml-2 ">
          {imgNo + 1} of {imgArray.length}
        </div>
        <div className="flex w-11/12 mt-1 mb-1 relative md:ml-0 ml-2 ">
          <button
            className={`font-Abril bg-slate-800 md:hidden block text-white p-2 rounded md:text-base text-xs ${
              imgNo === 0 ? "bg-red-500 cursor-not-allowed" : ""
            }`}
            onClick={() => {
              if (imgNo === 0) return;
              setImgNo((prev) => prev - 1);
            }}
          >
            Prev
          </button>
          <button
            className={`font-Abril  absolute right-0 md:hidden block bg-slate-800 text-white p-2 md:text-base text-xs rounded ${
              imgNo === imgArray.length - 1
                ? "bg-red-500 cursor-not-allowed"
                : ""
            }`}
            onClick={() => {
              if (imgNo === imgArray.length - 1) return;
              setImgNo((prev) => prev + 1);
            }}
          >
            Next
          </button>
        </div>
      </div>

      <section className="flex  justify-center h-fit">
        <div className="h-72">
          <button
            className={`font-Ezcar mr-4 h-full hidden md:block text-white p-2 rounded md:text-base text-sm ${
              imgNo === 0 ? "cursor-not-allowed" : ""
            }`}
            onClick={() => {
              if (imgNo === 0) return;
              setImgNo((prev) => prev - 1);
            }}
          >
            {ArrowLeft(
              "24",
              "24",
              `${imgNo === 0 ? "fill-red-600" : "fill-black"} duration-300 `
            )}
          </button>
        </div>
        <div className="lg:w-2/4 flex w-11/12  justify-center max-w-[550px] relative">
          <AnimatePresence>
            <motion.div
              key={imgNo}
              variants={variants}
              animate="in"
              initial="out"
              exit={"out"}
              className="sm:h-72 h-fit  w-full absolute right-0"
            >
              {imgArray.map((item, index) => {
                if (index === imgNo) {
                  return (
                    <img
                      alt="ScreenShots of Project"
                      className="sm:max-h-72 sm:h-72 border border-black  "
                      src={item.src}
                      key={index}
                    ></img>
                  );
                }
              })}
            </motion.div>
          </AnimatePresence>
        </div>
        <button
          className={`font-Ezcar ml-4 hidden md:block  text-white p-2 md:text-base text-sm rounded ${
            imgNo === imgArray.length - 1 ? " cursor-not-allowed" : ""
          }`}
          onClick={() => {
            if (imgNo === imgArray.length - 1) return;
            setImgNo((prev) => prev + 1);
          }}
        >
          {Arrow(
            "24",
            "24",
            `${
              imgNo === imgArray.length - 1 ? "fill-red-600" : "fill-black"
            } duration-300`
          )}
        </button>
      </section>
    </div>
  );
}
