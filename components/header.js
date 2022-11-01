import react, { useEffect, useState } from "react";
import Link from "next/link";

export default function Header() {
  const [scrollPosition, setSrollPosition] = useState(0);
  const [scrolledUp, setScrolledUp] = useState(false);
  const [pageLocation, setPageLocation] = useState("home");
  const handleScroll = () => {
    const position = window.pageYOffset;

    setSrollPosition((prev) => {
      if (position < 500) {
        setPageLocation("home");
      }
      if (position > 500) {
        setPageLocation("projects");
      }
      if (position > 1100) {
        setPageLocation("Stack");
      }
      if (position > prev) {
        console.log(prev);
        setScrolledUp(true);
      } else {
        setScrolledUp(false);
      }
      return position;
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const mobileLinks = [
    { Name: "Github", Link: "https://github.com/derin-art" },
    {
      Name: "LinkedIn",
      Link: "https://www.linkedin.com/in/derin-owoade-089685172/",
    },
    { Name: "Mail", Link: "mailto:owoadederin6@gmail.com?subject=Contact Me" },
    { Name: "Projects", Link: "/#Projects" },
  ];

  return (
    <div className="w-full flex fixed z-50 top-0 items-center justify-center">
      <div className="w-screen p-2 flex relative">
        {" "}
        <div
          className={`font-Nabla text-3xl p-4 rounded-full px-6 duration-300  ${
            pageLocation === "home" && "border-gray-300"
          } ${pageLocation === "projects" && "border-red-800"} ${
            pageLocation === "Stack" && "border-gray-400"
          }`}
        >
          D
        </div>
        <div className="absolute right-0 flex text-sm sm:hidden">
          {mobileLinks.map((item) => {
            return (
              <a
                key={item.Name}
                target={`${item.Name !== "Projects" ? "_blank" : ""}`}
                href={item.Link}
                className="mr-2 font-Josefin"
              >
                {item.Name}
              </a>
            );
          })}
        </div>
        <div className="absolute right-0 flex hidden sm:block">
          <div className="flex items-start">
            <a
              href="mailto:owoadederin6@gmail.com?subject=Contact Me"
              className="font-Josefin mr-4"
            >
              Mail
            </a>
            <Link href="/#Projects" className="font-Josefin ">
              Projects
            </Link>
            <div className="-rotate-90 sm:mt-16 sm:-ml-4 relative mt-16 -ml-6 -mr-6 sm:mr-0">
              <a
                href="https://github.com/derin-art"
                target="_blank"
                rel="noreferrer"
                className="font-Josefin mr-4"
              >
                Github
              </a>
              <a
                href="https://www.linkedin.com/in/derin-owoade-089685172/"
                target="_blank"
                className="font-Josefin "
                rel="noreferrer"
              >
                LinkedIn
              </a>
              <div className="flex absolute top-1 right-40">
                <div
                  className={`h-4 w-4 rounded-full duration-300  ${
                    pageLocation === "home" && "bg-blue-300"
                  } ${pageLocation === "projects" && "bg-neutral-400"} ${
                    pageLocation === "Stack" && "bg-blue-800"
                  }`}
                ></div>
                <div
                  className={`h-4 w-4 rounded-full duration-300 ml-2  ${
                    pageLocation === "home" && "bg-gray-700"
                  } ${pageLocation === "projects" && "bg-black"} ${
                    pageLocation === "Stack" && "bg-gray-700"
                  }`}
                ></div>
                <div
                  className={`h-4 w-4 rounded-full duration-300 ml-2 ${
                    pageLocation === "home" && "bg-gray-400"
                  } ${pageLocation === "projects" && "bg-neutral-600"} ${
                    pageLocation === "Stack" && "bg-blue-400"
                  }`}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
