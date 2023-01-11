import { motion } from "framer-motion";
import Ecom2 from "../public/ProjectImages/Ecom2.png";
import Land1 from "../public/ProjectImages/Land1.png";
import Vert2 from "../public/ProjectImages/Vert1.png";
import agile2 from "../public/ProjectImages/agile1.png";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function ProjectsPages() {
  const NavIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      className="fill-gray-700 group-hover:fill-MikYellow"
    >
      <path fill="none" d="M0 0h24v24H0z" />
      <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-5-8.5L16 8l-3.5 9.002L11 13l-4-1.5z" />
    </svg>
  );
  const ProjectNames = [
    { name: "Landing Page", href: `/landing`, img: Land1 },
    { name: "E-Commerce", href: `/E-com`, img: Ecom2 },
    { name: "E-Com Management system", href: "/Crud", img: Vert2 },

    { name: "AGILE/Scrum app", href: `/Agile`, img: agile2 },
  ];
  const finalArray = [];
  const chunkSize = 2;
  for (let i = 0; i < ProjectNames.length; i += chunkSize) {
    const chunk = ProjectNames.slice(i, i + chunkSize);

    finalArray.push(chunk);
  }

  return (
    <div className="flex flex h-screen justify-center ">
      <div className="w-full relative md:p-8 p-4 pt-8">
        <div className="w-full pt-8 flex justify-around relative ">
          <motion.div className="text-black hidden font-PlayI lg:block sticky top-10 self-start  2xl:text-5xl lg:text-5xl xl:text-5xl z-50  md:text-5xl text-xl">
            PROJECTS
            <div className="blurry-gradientII -top-4"></div>
          </motion.div>
          <div className="">
            <motion.div className="text-black font-PlayI lg:hidden flex items-center justify-center top-10 self-start  2xl:text-5xl lg:text-5xl xl:text-5xl z-50  md:text-5xl text-2xl">
              PROJECTS
              <div className="blurry-gradientII -top-4"></div>
            </motion.div>
            {finalArray.map((item, index) => {
              return (
                <div
                  className={`  flex-col flex lg:flex-row  lg:p-0 p-2 pt-0`}
                  key={index}
                >
                  {item.map((project, index) => {
                    return (
                      <Link
                        key={project.name}
                        href={project.href}
                        className="flex "
                      >
                        <motion.div
                          style={{
                            display: "inline-block",
                            overflow: "hidden",
                          }}
                          className="p-2"
                        >
                          <motion.img
                            initial={{ opacity: 1, x: "50%" }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: false }}
                            transition={{ duration: 0.87 }}
                            src={project.img.src}
                            width={350}
                            height={350}
                            alt={project.name}
                            className="object-cover 2xl:h-[250px] xl:h-[250px] xl:w-[400px] 2xl:w-[400px] grit rounded-2xl "
                          ></motion.img>

                          <div className="lg:text-xs text-black text-xs font-Abril font-bold uppercase">
                            {project.name}
                          </div>
                        </motion.div>
                      </Link>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
