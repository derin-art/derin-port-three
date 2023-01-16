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
    <div className="w-full flex fixed z-40 top-0 items-center justify-center ">
      <div className="w-full  lg:mt-0 lg:rounded-none  flex relative   justify-center">
        <div className="flex l:right-4 border-b   overflow-hidden bg-opacity-25 backdrop-blur-sm w-full  xl:space-x-48 xl:justify-center justify-around absolute   p-[11px]">
          {LinksIcons.map((item, index) => {
            if (item.location) {
              return (
                <Link
                  className="z-50"
                  key={index}
                  href={!isOnStack ? item.link : "/"}
                >
                  {!isOnStack ? (
                    <button className="z-50 rounded-lg">
                      {item.icon(
                        "24",
                        "24",
                        "fill-zinc-600   z-50 p-[3px] xl:p-[2px]"
                      )}
                      <p className="text-[10px] absolute font-inter top-0 text-gray-500 z-50">
                        Stack
                      </p>
                    </button>
                  ) : (
                    <button className="z-50">
                      {BackIcon(
                        "24",
                        "24",
                        "fill-zinc-600  z-50 p-[3px] xl:p-[2px]"
                      )}
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
                  className="z-50  rounded-lg"
                  rel="noreferrer"
                >
                  {item.icon(
                    "24",
                    "24",
                    "fill-zinc-600  z-50 p-[3px] xl:p-[2px[2px]"
                  )}
                </a>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
}
