import Image from "next/image";
import GalleryIcon from "../public/Icons/galleryIcon";
import GitIcon from "../public/Icons/githubIcon";
import GlobeIcon from "../public/Icons/globeIcon";
import { motion } from "framer-motion";

export default function ProjectSpecific({
  Name,
  query,
  OverView,
  Scope,
  Execution,
  Stack,
  Images,
}) {
  const icons = [
    { icon: GalleryIcon, link: false },
    { icon: GitIcon, link: true },
    { icon: GlobeIcon, link: true },
  ];
  return (
    <div className={`w-5/6 p-8 h-full`}>
      <div className="pt-8">
        <div className="font-Ezcar lg:text-7xl border-gray-700 md:text-3xl relative text-right text-2xl text-indigo-700 border-b">
          <div className="flex absolute left-0 -top-6">
            {icons.map((icon) => {
              return (
                <motion.div
                  className="ml-2 border bg-gray-100 rounded-lg"
                  initial={{ opacity: 0, translateX: "-100px" }}
                  animate={{ opacity: 1, translateX: "0px" }}
                  transition={{ delay: 0.7 }}
                >
                  {icon.icon("50", "50", "fill-indigo-700")}
                </motion.div>
              );
            })}
          </div>
          {Name}
        </div>
        <div className="flex mt-4 text-SmoBlack">
          <section className="font-Ezcar w-2/4 p-3 h-fit border border-gray-300 bg-gray-100">
            <div className="text-4xl mb-2 font-Ezcar border-b border-gray-500">
              OverView
            </div>
            <div className="">{OverView}</div>
          </section>

          <div className="flex flex-col font-Ezcar w-2/4 p-2 pt-0 ml-8 text-SmoBlack">
            <section className="font-Ezcar border p-3 border-gray-300 bg-gray-100">
              <div className="text-4xl mb-2 font-Ezcar border-b border-gray-500">
                Stack
              </div>
              <div className="flex flex-wrap">
                {Stack.map((tech, index) => {
                  console.log(index, Stack.length);
                  return (
                    <div className="ml-2">
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
        </div>
      </div>
    </div>
  );
}
