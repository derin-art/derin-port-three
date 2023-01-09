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
      <div className="flex flex-col w-full text-black text-center  items-center  justify-center">
        <Image
          src={headShot.src}
          alt="My passport picture"
          height={100}
          width={100}
          className="rounded-full z-30  "
          unoptimized={true}
        ></Image>
        <motion.div
          style={{ display: "inline-block", overflow: "hidden" }}
          className="mt-5"
        >
          <motion.div
            initial={{ opacity: 1, y: "100%" }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.7 }}
          >
            {" "}
            Hi, i&apos;m Derin and i&apos;m a{" "}
            <span className="font-PlayI">fullStack</span> engineer
          </motion.div>
        </motion.div>
        <div className="blurry-gradient"></div>
        <div className="blurry-gradientII top-20"></div>
      </div>
    </div>
  );
}
