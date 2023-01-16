import { motion } from "framer-motion";
import agile1 from "../public/ProjectImages/agile1.png";
import agile2 from "../public/ProjectImages/agile2.png";
import agile3 from "../public/ProjectImages/agile3.png";
import agile4 from "../public/ProjectImages/agile4.png";
import agile5 from "../public/ProjectImages/agile5.png";
import Crud2 from "../public/ProjectImages/Crud2.png";
import porP2 from "../public/ProjectImages/porP2.jpg";
import portP3 from "../public/ProjectImages/portP3.png";
import Land1 from "../public/ProjectImages/Land1.png";
import Land2 from "../public/ProjectImages/Land2.png";
import Land3 from "../public/ProjectImages/Land3.png";
import Ecom1 from "../public/ProjectImages/Ecom1.png";
import Ecom2 from "../public/ProjectImages/Ecom2.png";
import Ecom3 from "../public/ProjectImages/Ecom3.png";
import Ecom4 from "../public/ProjectImages/Ecom4.png";
import Ecom5 from "../public/ProjectImages/Ecom5n.png";
import Vert1 from "../public/ProjectImages/Vert1.png";
import Vert2 from "../public/ProjectImages/Vert2.png";
import Vert3 from "../public/ProjectImages/Vert3.png";
import Vert4 from "../public/ProjectImages/Vert4.png";
import ProjectSpecific from "../components/ProjectSpecific";
import { useRouter } from "next/dist/client/router";
export default function ProjectPage() {
  const router = useRouter();

  const { ProjectPage } = router.query;

  const projectData = [
    {
      Name: "AGILE /SCRUM APP",
      query: "Agile",
      OverView: (
        <p>
          {" "}
          The most complex project i&apos;ve built so far, a Team Agile and
          Scrum app that is meant to give a Team, Agile and Scrum tools andy
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
          like a backlog, a story map, and a sprint planner. I thought about the
          process of managing multiple user story and thought a drag and drop
          system would add to the user experience, so this technology was
          implemented across most of the app.
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
      Stack: [
        "NextJs",
        "TailWind",
        "MongoDB",
        "FireBase",
        "React Drag and Drop",
      ],
      Images: [agile1, agile2, agile3, agile4, agile5],
      Links: {
        LinkName: "AGILE",
        GitHub: "https://github.com/derin-art/Agile",
        Live: "https://agile-hazel.vercel.app/",
      },
    },
    {
      Name: "ECOM APP",
      query: "E-com",
      OverView: (
        <p>
          {" "}
          An E-com app built and designed by me. I built this project in Nextjs,
          with an eye for performance, making use of server side rendering, next
          image e.t.c to improve performance
        </p>
      ),
      Scope: (
        <p>
          {" "}
          This project was my first capstone. I imagined it as how an actual
          online store would run, so it had to not just be the E-commerce but a
          Crud app behind it to add new items, edit them and delete them. Keys
          features were the use of a user/login system, Redux state management,
          wishlisting system, and a buying history record. To improve the
          performance of this app i made use of the getStaticProps function as
          opposed to getServerSide props, as this is an Ecom and the behind it
          data does not change very much from session to session.
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
      Stack: [
        "Nextjs",
        "TailWind",
        "MongoDB",
        "Cloudinary",
        "Framer Motion",
        "Redux",
        "TypeScript",
        "Firebase",
      ],
      Images: [Ecom1, Ecom2, Ecom3, Ecom4, Ecom5],
      Links: {
        LinkName: "E-COMMERCE",
        GitHub: "https://github.com/derin-art/VertFront",
        Live: "https://vert-front.vercel.app/",
      },
    },
    {
      Name: "ECOM CRUD",
      query: "Crud",
      OverView: <p> A Crud app that serves the ecom.</p>,
      Scope: (
        <p className="">
          {" "}
          The entire point of this project was to get more farmiliar with apis,
          and design and build a project with everything i had learned in mind
          previously. On this project i also wanted to try to bridge the gap
          between api responses and what the user saw on screen, I made use of
          toastify to send specific error responses for various errors. I also
          leveraged Cloudinary and Multiparty to store my image urls. But
          primarly this project contains all the apis that E-com uses.
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
      Stack: [
        "Nextjs",
        "TailWind",
        "MongoDB",
        "Cloudinary",
        "Framer Motion",
        "TypeScript",
      ],
      Images: [Vert1, Vert2, Vert3, Vert4],
      Links: {
        LinkName: "E-COM CRUD",
        GitHub: "https://github.com/derin-art/VertCrud",
        Live: "https://vert-crud-8d3s.vercel.app/",
      },
    },
    {
      Name: "LANDING PAGE",
      query: "landing",
      OverView: (
        <p>
          {" "}
          A Landing page built with Nextjs and some technologies I wanted to
          learn.
        </p>
      ),
      Scope: (
        <p className="">
          A landing page built with Chartjs, Nextjs, Framer motion, react
          parallax and animated cursor. I wanted to learn this technologies, so
          what better way than to use them for something. This was a pretty
          straight forward process, I don’t think the performance of this app is
          bad, but in the future i would probably like to focus particularly on
          that aspect of the app. Animations and flashy things can really slow
          down sites, especially on mobile. Although, I used Next dynamic
          imports to improve the performance on mobile, i have feeling that i
          can still squeeze a lot more out it in terms of performance.
        </p>
      ),
      Execution: (
        <div>
          <ul>
            This was a pretty straight forward process, I don’t think the
            performance of this app is bad, but in the future i would probably
            like to focus particularly on that aspect of the app. Animations and
            flashy things can really slow down sites, especially on mobile.
            Although, I used Next dynamic imports to improve the performance on
            mobile, i have feeling that i can still squeeze a lot more out it in
            terms of performance.
          </ul>
        </div>
      ),
      Stack: [
        "Nextjs",
        "TailWind",
        "Framer Motion",
        "TypeScript",
        "React-Parallax",
        "Animated-Cusor",
        "ChartJs",
      ],
      Images: [Land1, Land2, Land3],
      Links: {
        LinkName: "E-COM CRUD",
        GitHub: "https://github.com/derin-art/landing",
        Live: "https://landing-five-umber.vercel.app/",
      },
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, translateY: "50%" }}
      animate={{ opacity: 1, translateY: "0%" }}
      transition={{ duration: 0.8 }}
      exit={{ opacity: 0, translateY: "-50%" }}
      className="h-fit w-full flex items-center justify-center "
    >
      {projectData.map((Project) => {
        if (Project.query === ProjectPage) {
          return (
            <ProjectSpecific
              Execution={Project.Execution}
              Images={Project.Images}
              Name={Project.Name}
              OverView={Project.OverView}
              Scope={Project.Scope}
              Stack={Project.Stack}
              query={Project.query}
              key={Project.Name}
              Links={Project.Links}
              router={router}
            ></ProjectSpecific>
          );
        }
      })}
    </motion.div>
  );
}
