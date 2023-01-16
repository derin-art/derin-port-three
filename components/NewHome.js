import { motion } from "framer-motion";
import headShot from "../public/ProjectImages/headShot2.jpg";
import Image from "next/image";
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
      <div className="flex flex-col w-full h-full text-black text-center items-center justify-center xl:justify-end xl:text-left xl:mt-4 xl:p-4">
        <div className="xl:hidden">
          <Image
            src={headShot.src}
            alt="My passport picture"
            height={100}
            width={100}
            className="rounded-full z-30"
            unoptimized={true}
          ></Image>
        </div>
        <motion.div
          style={{ display: "inline-block", overflow: "hidden" }}
          className="mt-5"
        >
          <motion.div
            initial={{ opacity: 1, y: "100%" }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.7 }}
            className="font-inter text-2xl p-2 text-ultraGray md:text-3xl lg:text-4xl xl:text-8xl xl:w-full xl:p-2 xl:left-0 2xl:text-9xl  xl:text-left"
          >
            {" "}
            Hi, i&apos;m{" "}
            <span className="xl:inline hidden">
              <Image
                src={headShot.src}
                alt="My passport picture"
                height={100}
                width={100}
                className="rounded-full z-30"
                unoptimized={true}
              ></Image>
            </span>{" "}
            Derin and i&apos;m a <span className="">fullstack</span> engineer.
          </motion.div>
        </motion.div>
        <div className="blurry-gradient"></div>
        <div className="blurry-gradientII top-20"></div>
      </div>
    </div>
  );
}
