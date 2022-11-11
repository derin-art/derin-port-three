import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
import react, { useState } from "react";
import GalleryComponent from "./GalleryComponent";

export default function ProjectDataRender({
  OverView,
  Scope,
  Execution,
  Stack,
  Name,
  Gallery,
}) {
  const [galleryOpen, setGalleryOpen] = useState(false);

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

  const GithubIconAgile = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="40"
      height="40"
      className="fill-slate-700 border rounded-full border-black"
    >
      <path fill="none" d="M0 0h24v24H0z" />
      <path d="M12 2C6.475 2 2 6.475 2 12a9.994 9.994 0 0 0 6.838 9.488c.5.087.687-.213.687-.476 0-.237-.013-1.024-.013-1.862-2.512.463-3.162-.612-3.362-1.175-.113-.288-.6-1.175-1.025-1.413-.35-.187-.85-.65-.013-.662.788-.013 1.35.725 1.538 1.025.9 1.512 2.338 1.087 2.912.825.088-.65.35-1.087.638-1.337-2.225-.25-4.55-1.113-4.55-4.938 0-1.088.387-1.987 1.025-2.688-.1-.25-.45-1.275.1-2.65 0 0 .837-.262 2.75 1.026a9.28 9.28 0 0 1 2.5-.338c.85 0 1.7.112 2.5.337 1.912-1.3 2.75-1.024 2.75-1.024.55 1.375.2 2.4.1 2.65.637.7 1.025 1.587 1.025 2.687 0 3.838-2.337 4.688-4.562 4.938.362.312.675.912.675 1.85 0 1.337-.013 2.412-.013 2.75 0 .262.188.574.688.474A10.016 10.016 0 0 0 22 12c0-5.525-4.475-10-10-10z" />
    </svg>
  );

  const LiveIconAgile = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="40"
      height="40"
      className="fill-slate-700 border border-black rounded-full"
    >
      <path fill="none" d="M0 0h24v24H0z" />
      <path d="M8.498 20h7.004A6.523 6.523 0 0 1 12 23.502 6.523 6.523 0 0 1 8.498 20zM18 14.805l2 2.268V19H4v-1.927l2-2.268V9c0-3.483 2.504-6.447 6-7.545C15.496 2.553 18 5.517 18 9v5.805zM12 11a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
    </svg>
  );

  const GithubIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="20"
      height="20"
      className="fill-slate-700 border rounded-full border-black"
    >
      <path fill="none" d="M0 0h24v24H0z" />
      <path d="M12 2C6.475 2 2 6.475 2 12a9.994 9.994 0 0 0 6.838 9.488c.5.087.687-.213.687-.476 0-.237-.013-1.024-.013-1.862-2.512.463-3.162-.612-3.362-1.175-.113-.288-.6-1.175-1.025-1.413-.35-.187-.85-.65-.013-.662.788-.013 1.35.725 1.538 1.025.9 1.512 2.338 1.087 2.912.825.088-.65.35-1.087.638-1.337-2.225-.25-4.55-1.113-4.55-4.938 0-1.088.387-1.987 1.025-2.688-.1-.25-.45-1.275.1-2.65 0 0 .837-.262 2.75 1.026a9.28 9.28 0 0 1 2.5-.338c.85 0 1.7.112 2.5.337 1.912-1.3 2.75-1.024 2.75-1.024.55 1.375.2 2.4.1 2.65.637.7 1.025 1.587 1.025 2.687 0 3.838-2.337 4.688-4.562 4.938.362.312.675.912.675 1.85 0 1.337-.013 2.412-.013 2.75 0 .262.188.574.688.474A10.016 10.016 0 0 0 22 12c0-5.525-4.475-10-10-10z" />
    </svg>
  );

  const LiveIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="20"
      height="20"
      className="fill-slate-700 border border-black rounded-full"
    >
      <path fill="none" d="M0 0h24v24H0z" />
      <path d="M8.498 20h7.004A6.523 6.523 0 0 1 12 23.502 6.523 6.523 0 0 1 8.498 20zM18 14.805l2 2.268V19H4v-1.927l2-2.268V9c0-3.483 2.504-6.447 6-7.545C15.496 2.553 18 5.517 18 9v5.805zM12 11a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
    </svg>
  );

  let LinksArr;

  if (Name === "E-COMMERCE AND CRUD-APP") {
    LinksArr = [
      {
        LinkName: "E-COMMERCE",
        GitHub: "https://github.com/derin-art/store-front",
        Live: "https://luminous-panda-691ede.netlify.app/",
      },
      {
        LinkName: "CRUD",
        GitHub: "https://github.com/derin-art/store-backend",
        Live: "https://superb-cannoli-39d1f8.netlify.app/",
      },
    ];
  } else {
    LinksArr = [
      {
        LinkName: "AGILE",
        GitHub: "https://github.com/derin-art/Agile",
        Live: "https://agile-hazel.vercel.app/",
      },
    ];
  }

  return (
    <div className="text-black">
      <div className="flex">
        <button
          onClick={() => {
            setGalleryOpen((prev) => !prev);
          }}
          className="text-right mb-2 md:text-base text-sm font-Ezcar border p-2 mt-1 rounded border-black hover:bg-neutral-700 duration-300 hover:text-white"
        >
          {galleryOpen ? "OverView" : "Gallery"}
        </button>
        <div className="flex-col ml-2 md:text-sm text-xs font-Ezcar">
          {LinksArr.map((item) => {
            if (item.LinkName !== "AGILE") {
              return (
                <div className="flex mb-1 items-center" key={item.LinkName}>
                  <div className="border-b border-black h-fit">
                    {item.LinkName}:
                  </div>
                  <div className="ml-2">
                    <a href={item.Live} target="_blank" rel="noreferrer">
                      {LiveIcon}
                    </a>
                  </div>
                  <div className="ml-2">
                    <a href={item.GitHub} target="_blank" rel="noreferrer">
                      {GithubIcon}
                    </a>
                  </div>
                </div>
              );
            } else {
              return (
                <div className="flex  mt-1" key={item.LinkName}>
                  <div className="ml-2">
                    <a href={item.Live} target="_blank" rel="noreferrer">
                      {LiveIconAgile}
                    </a>
                  </div>
                  <div className="ml-2">
                    <a href={item.GitHub} target="_blank" rel="noreferrer">
                      {GithubIconAgile}
                    </a>
                  </div>
                </div>
              );
            }
          })}
        </div>
      </div>
      <AnimatePresence exitBeforeEnter initial={false}>
        <motion.div
          animate="in"
          initial="out"
          exit={"out"}
          className="flex w-full"
          variants={variants}
          key={String(galleryOpen)}
        >
          {galleryOpen ? (
            <div className="w-full mt-4 relative">
              <GalleryComponent
                imgArray={Gallery}
                key="Gallery"
              ></GalleryComponent>
            </div>
          ) : (
            <div className="flex sm:flex-row flex-col sm:p-8 mr-0 sm:mr-0 font-Abril lg:max-h-96 sm:max-h-fit  max-h-80 overflow-y-auto sm:min-w-full lg:text-base text-sm">
              <div className="font-Abril p-2 sm:max-h-96 h-fit sm:overflow-y-auto">
                <div className="font-Ezcar text-lg border-b border-black">
                  Over View
                </div>
                {OverView}
              </div>
              <div className="sm:max-h-96 sm:overflow-y-auto p-2">
                <div>
                  {" "}
                  <div className="font-Ezcar mb-4 text-lg border-b border-black">
                    Planning
                  </div>
                  <div className="font-Ezcar">Scope</div>
                  <div>{Scope}</div>
                </div>
                <div>
                  <div className="font-Ezcar mt-2">Execution</div>
                  <div>{Execution}</div>
                </div>
              </div>
              <div className="p-2">
                {" "}
                <div className="font-Ezcar text-lg border-b border-black">
                  Stack
                </div>
                {Stack.map((items) => (
                  <div key={items}>{items}</div>
                ))}
              </div>
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
