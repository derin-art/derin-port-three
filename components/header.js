import react, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/dist/client/router";
import BackIcon from "../public/Icons/backIcon";
import StackIcon from "../public/Icons/stackIcon";
import MailIcon from "../public/Icons/mailIcon";
import LinkIcon from "../public/Icons/linkIcon";
import GitIcon from "../public/Icons/githubIcon";

export default function Header() {
  const router = useRouter();

  const { ProjectPage } = router.query;
  const [scrollPosition, setSrollPosition] = useState(0);
  const [scrolledUp, setScrolledUp] = useState(false);
  const [pageLocation, setPageLocation] = useState("home");
  const isOnStack = router.pathname === "/Stack/Tools";
  const [pageLocationMobile, setPageLocationMobile] = useState("home");

  const sideDec = () => {
    return (
      <div className="flex absolute top-1 right-40 ">
        <div
          className={`h-2 w-2 rounded-full duration-300  ${
            pageLocation === "home" && "bg-MikYellow"
          } ${pageLocation === "projects" && "bg-neutral-400"} ${
            pageLocation === "Stack" && "bg-gray-700"
          } ${onSpecificPage && "bg-neutral-500"}`}
        ></div>
        <div
          className={`h-6 w-2 rounded-full duration-300 ml-2    ${
            pageLocation === "home" && "bg-gray-700"
          } ${pageLocation === "projects" && "bg-MikYellow"} ${
            pageLocation === "Stack" && "bg-PineGreen"
          } ${onSpecificPage && "bg-indigo-700"}`}
        ></div>
        <div
          className={`h-4 w-2 rounded-full duration-300 ml-2  ${
            pageLocation === "home" && "bg-PineGreen"
          } ${pageLocation === "projects" && "bg-neutral-600"} ${
            pageLocation === "Stack" && "bg-neutral-300"
          } ${onSpecificPage && "bg-indigo-200"}`}
        ></div>
      </div>
    );
  };

  const alt = true;

  const mobileLinks = [
    { Name: "Github", Link: "https://github.com/derin-art" },
    {
      Name: "LinkedIn",
      Link: "https://www.linkedin.com/in/derin-owoade-089685172/",
    },
    { Name: "Mail", Link: "mailto:owoadederin6@gmail.com?subject=Contact Me" },
    { Name: "Projects", Link: "/#Projects" },
  ];

  const onSpecificPage =
    ProjectPage === "Agile" ||
    ProjectPage === "E-com" ||
    ProjectPage === "Crud";

  const LinksIcons = [
    {
      icon: MailIcon,
      link: "mailto:owoadederin6@gmail.com?subject=Contact Me",
    },
    {
      icon: LinkIcon,
      link: "https://www.linkedin.com/in/derin-owoade-089685172/",
    },
    { icon: StackIcon, link: "/Stack/Tools", location: true },
    { icon: GitIcon, link: "https://github.com/derin-art" },
  ];

  return (
    <div className="w-full flex fixed z-50 top-0 items-center justify-center">
      <div className="w-11/12  mt-4 lg:mt-0 lg:rounded-none rounded-full  flex relative  h-10 justify-center">
        <div className="flex l:right-4 border border-gray-300 lg:top-4 w-full lg:w-3/5  lg:justify-around justify-around absolute backdrop-blur-sm rounded-full p-2">
          {LinksIcons.map((item, index) => {
            if (item.location) {
              return (
                <Link key={index} href={!isOnStack ? item.link : "/"}>
                  {!isOnStack ? (
                    <button>
                      {item.icon("24", "24", "fill-black  ")}
                      <p className="text-xs absolute font-PlayI -top-2 text-gray-500">
                        Stack
                      </p>
                    </button>
                  ) : (
                    <button>{BackIcon("24", "24", "fill-black  ")}</button>
                  )}
                </Link>
              );
            } else {
              return (
                <a
                  href={item.link}
                  key={index}
                  target="_blank"
                  rel="noreferrer"
                >
                  {item.icon("24", "24", "fill-black  ")}
                </a>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
}
