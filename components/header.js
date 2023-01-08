import react, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/dist/client/router";
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
  const [pageLocationMobile, setPageLocationMobile] = useState("home");
  const handleScroll = () => {
    const position = window.pageYOffset;

    setSrollPosition((prev) => {
      if (position < 500) {
        setPageLocation("home");
      }
      if (position > 500) {
        setPageLocation("projects");
      }
      if (position > 1250) {
        setPageLocation("Stack");
      }
      if (position < 650) {
        setPageLocationMobile("home");
      }
      if (position > 650) {
        setPageLocationMobile("projects");
      }
      if (position > 1250) {
        setPageLocationMobile("Stack");
      }
      if (position > prev) {
        setScrolledUp(true);
      } else {
        setScrolledUp(false);
      }
      return position;
    });
  };

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

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
      <div className="w-11/12 lg:w-full mt-4 lg:mt-0 lg:rounded-none rounded-full  flex relative  h-10 justify-center">
        <div className="flex lg:right-4 border lg:top-4 lg:space-x-12 w-full lg:w-fit lg:justify-end justify-around absolute backdrop-blur-sm rounded-full p-2">
          {LinksIcons.map((item, index) => {
            if (item.location) {
              return (
                <Link key={index} href={item.link}>
                  {item.icon("24", "24", "fill-black cursor-pointer ")}
                </Link>
              );
            } else {
              return (
                <a href={item.link} key={index} target="_blank">
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
/*   <div
          className={`absolute right-0 flex hidden duration-300 sm:block ${
            router.pathname === "/" && alt
              ? pageLocation === "home"
                ? "text-white"
                : "text-black"
              : "text-black"
          } `}
        >
          <div className="flex items-start mt-4">
            <a
              href="mailto:owoadederin6@gmail.com?subject=Contact Me"
              className="font-Ezcar font-bold mr-4"
            >
              Mail
            </a>
            <Link href="/#Projects" className="font-Josefin  ">
              <div className="font-Ezcar font-bold cursor-pointer">
                Projects
              </div>
            </Link>
            <div className="-rotate-90 sm:mt-16 sm:-ml-4 relative mt-16 -ml-6 -mr-6 sm:mr-0">
              <a
                href="https://github.com/derin-art"
                target="_blank"
                rel="noreferrer"
                className="font-Ezcar font-bold mr-4"
              >
                Github
              </a>
              <a
                href="https://www.linkedin.com/in/derin-owoade-089685172/"
                target="_blank"
                className="font-Ezcar font-bold "
                rel="noreferrer"
              >
                LinkedIn
              </a>
              {sideDec()}
            </div>
          </div>
        </div> */
