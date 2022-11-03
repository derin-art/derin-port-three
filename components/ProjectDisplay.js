import ProjectDataRender from "./ProjectDataRender";
import react, { useState } from "react";
import { useAnimatePresence } from "use-animate-presence";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
import agile1 from "../public/ProjectImages/agile1.png";
import agile2 from "../public/ProjectImages/agile2.png";
import agile3 from "../public/ProjectImages/agile3.png";
import agile4 from "../public/ProjectImages/agile4.png";
import agile5 from "../public/ProjectImages/agile5.png";
import Crud2 from "../public/ProjectImages/Crud2.png";
import porP2 from "../public/ProjectImages/porP2.jpg";
import portP3 from "../public/ProjectImages/portP3.png";

export default function ProjectDisplay({ page, setPage }) {
  const projectData = [
    {
      Name: "AGILE/SCRUM APP",
      OverView: (
        <p>
          {" "}
          The most complex project i&apos;ve built so far, a Team Agile and
          Scrum app that is meant to give a Team, Agile and Scrum tools and
          Communication tools. The primary objective of this project was to
          build an App to coordinate, manage and communicate with a selected
          group of people who would be the team. This app was built was built
          with Nextjs and Tailwind and made use of a wide array of technologies
          including, React Draggable and Drop, Firebase to register users and
          for the login and logout capabilities and Mongodb to keep a record of
          the team&apos;s data and patch it on request.
        </p>
      ),
      Scope: (
        <p>
          {" "}
          This project was bound to be large and it was important to decide on
          the scope early on to avoid burnout and spiralling out or compromising
          the features that i wanted in the app. Early on after i completed and
          collected my agile and scrum certificate, I knew i wanted to build
          something that applied that knowledge, the only problem was where to
          start. I needed an overarching idea to direct its scope and I
          eventually end on, “an app to connect and coordinate teams equipped
          with agile and scrum technologies”. I decided on key features like the
          existence of team data that could be edited and basic agile features
          like a backlog, a story map, and a sprint planner.
        </p>
      ),
      Execution: (
        <div>
          After completing this project, there are little changes I would make
          if I was doing it again;
          <ol className="mt-2">
            <li>
              1. I would use Redux as the amount of states in this project where
              a lot and i think a technology meant for state management would
              have been really helpful.
            </li>
            <li className="mt-1">
              2. I would use Typescript instead of JavaScript for tighter code.
            </li>
          </ol>
        </div>
      ),
      Stack: ["NextJs", "TailWind", "MongoDB", "FireBase"],
      Images: [agile1, agile2, agile3, agile4, agile5],
    },
    {
      Name: "E-COMMERCE AND CRUD-APP",
      OverView: (
        <p>
          {" "}
          A project that actually comprises of two apps, An E-commerce App and a
          C.R.U.D app. The C.R.U.D app was built with NodeJs, ExpressJs and
          MongoDB, and handles the data that is fed to the E-commerce app on
          request. It is essentially the backend interface for the E-commerce
          App. The C.R.U.D also features a SignIn feature. The E-commerce was
          built with react and tailwind and enabled through useContext.
        </p>
      ),
      Scope: (
        <p>
          {" "}
          This project was my first capstone. I imagined it as how an actual
          online store would run, so it had to not just be the E-commerce but a
          Crud app behind it to add new items, edit them and delete them. Keys
          features were the use of a login system for the Crud app and
          useContext architecture for the E-commerce app.
        </p>
      ),
      Execution: (
        <div>
          <ul>
            After completing this project, there are little changes I would make
            if I was doing it again;
            <li className="mt-1">
              1. I would use Nextjs to avoid hosting an independent ExpressJs
              backend
            </li>
          </ul>
        </div>
      ),
      Stack: ["ReactJs", "TailWind", "MongoDB", "ExpressJs", "NodeJs"],
      Images: [porP2, portP3, Crud2],
    },
  ];

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

  const variants2 = {
    out: {
      opacity: 0,
      y: 20,
      transition: {
        duration: 0.75,
      },
    },
    in: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.75,
      },
    },
  };

  return (
    <div className="overflow-hidden   relative w-full">
      <div className="flex">
        <button
          className="text-right font-Ezcar border p-2 text-black sm:text-base text-sm rounded border-black hover:bg-neutral-700 duration-300 hover:text-white"
          onClick={() => {
            setPage((prev) => {
              if (prev === 0) {
                return 1;
              } else {
                return 0;
              }
            });
          }}
        >
          Next Project ›
        </button>
      </div>

      <AnimatePresence exitBeforeEnter initial={false}>
        <motion.div
          key={page}
          variants={variants}
          animate="in"
          initial="out"
          exit={"out"}
          className="flex"
        >
          {projectData.map((itemData, index) => {
            return (
              <div key={index} className="">
                {page === index && (
                  <ProjectDataRender
                    Gallery={itemData.Images}
                    Stack={itemData.Stack}
                    Scope={itemData.Scope}
                    OverView={itemData.OverView}
                    Execution={itemData.Execution}
                    key={index}
                    Name={itemData.Name}
                  ></ProjectDataRender>
                )}
              </div>
            );
          })}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
