import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
import react, { useState, useEffect } from "react";
import Image from "next/image";

export default function GalleryComponent({ imgArray }) {
  const variants = {
    out: {
      opacity: 0,
      x: 40,
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

  const [imgNo, setImgNo] = useState(0);

  return (
    <div>
      <div className="font-Ezcar mb-6 mt-4 sm:mb-0 sm:mt-0">
        {imgNo + 1} of {imgArray.length}
        <div className="flex w-full mt-1 mb-1 relative">
          <button
            className={`font-Ezcar mr-4 bg-slate-800 md:hidden block text-white p-2 rounded md:text-base text-sm ${
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
            className={`font-Ezcar ml-4 absolute right-0 md:hidden block bg-slate-800 text-white p-2 md:text-base text-sm rounded ${
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
      <div className="sm:flex-row flex w-full sm:border mt-8 sm:mt-0  p-2 rounded items-center justify-center">
        <button
          className={`font-Ezcar mr-4 bg-slate-800 hidden md:block text-white p-2 rounded md:text-base text-sm ${
            imgNo === 0 ? "bg-red-500 cursor-not-allowed" : ""
          }`}
          onClick={() => {
            if (imgNo === 0) return;
            setImgNo((prev) => prev - 1);
          }}
        >
          Prev
        </button>
        <div className="sm:h-72 h-40 relative w-fit">
          <AnimatePresence>
            <motion.div
              key={imgNo}
              variants={variants}
              animate="in"
              initial="out"
              exit={"out"}
              className="sm:h-72 items-center flex-center h-fit "
            >
              {imgArray.map((item, index) => {
                if (index === imgNo) {
                  return (
                    <img
                      alt="ScreenShots of Project"
                      className="sm:max-h-72 sm:h-72 border border-black max-h-56"
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
          className={`font-Ezcar ml-4 hidden md:block bg-slate-800 text-white p-2 md:text-base text-sm rounded ${
            imgNo === imgArray.length - 1 ? "bg-red-500 cursor-not-allowed" : ""
          }`}
          onClick={() => {
            if (imgNo === imgArray.length - 1) return;
            setImgNo((prev) => prev + 1);
          }}
        >
          {Arrow()}
        </button>
      </div>
    </div>
  );
}
