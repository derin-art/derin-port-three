import { motion } from "framer-motion";
import Link from "next/link";

export default function ProjectsPages() {
  const NavIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      className="fill-gray-700"
    >
      <path fill="none" d="M0 0h24v24H0z" />
      <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-5-8.5L16 8l-3.5 9.002L11 13l-4-1.5z" />
    </svg>
  );
  const ProjectNames = ["AGILE/SCRUM APP", "E-COMMERCE"];
  return (
    <div className="flex h-full flex items-center justify-center">
      <div className="w-5/6 h-full relative p-8">
        <div className="w-full h-full pt-8">
          <div className="font-Ezcar lg:text-7xl md:text-3xl text-2xl text-MikYellow border-b">
            PROJECTS
          </div>
          <div className="mt-8">
            {ProjectNames.map((item) => {
              return (
                <motion.div
                  className="font-Ezcar lg:text-7xl md:text-3xl flex text-2xl text-gray-700 mb-2 hover:text-blue-800 duration-300"
                  key={item}
                  initial={{ opacity: 0, skewX: "20deg" }}
                  whileInView={{ opacity: 1, skewX: "0deg" }}
                  transition={{ duration: 0.7, delayChildren: 0.8 }}
                  viewport={{ once: false }}
                >
                  <Link
                    key={item}
                    href={item.includes("AGILE") ? `/Agile` : `/E-com`}
                  >
                    <button className="flex">
                      {item} <div>{NavIcon}</div>
                    </button>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
