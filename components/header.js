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

  const isOnStack = router.pathname === "/Stack/Tools";

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
    <div className="w-full flex fixed z-40 top-0 items-center justify-center">
      <div className="w-11/12  mt-4 lg:mt-0 lg:rounded-none rounded-full  flex relative  h-10 justify-center">
        <div className="flex l:right-4 border border-gray-400 overflow-hidden lg:top-4 w-full lg:w-3/5  lg:justify-around justify-around absolute backdrop-blur-sm rounded-full p-[11px]">
          <span className="blurry-gradientIII right-0 z-0"></span>
          <span className="blurry-gradientII right-40 z-0"></span>

          {LinksIcons.map((item, index) => {
            if (item.location) {
              return (
                <Link
                  className="z-50"
                  key={index}
                  href={!isOnStack ? item.link : "/"}
                >
                  {!isOnStack ? (
                    <button className="z-50">
                      {item.icon("24", "24", "fill-black  z-50")}
                      <p className="text-xs absolute font-PlayI top-0 text-gray-500 z-50">
                        Stack
                      </p>
                    </button>
                  ) : (
                    <button className="z-50">
                      {BackIcon("24", "24", "fill-black  z-50")}
                    </button>
                  )}
                </Link>
              );
            } else {
              return (
                <a
                  href={item.link}
                  key={index}
                  target="_blank"
                  className="z-50"
                  rel="noreferrer"
                >
                  {item.icon("24", "24", "fill-black  z-50 ")}
                </a>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
}
