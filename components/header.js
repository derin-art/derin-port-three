import react, { useEffect, useState } from "react";

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

  console.log(pageLocation);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
        <div className="absolute right-0 flex">
          <div className="flex items-start">
            <button className="font-Josefin mr-4">Contact</button>
            <button className="font-Josefin ">Projects</button>
            <div className="-rotate-90 sm:mt-16 sm:-ml-4 relative mt-16 -ml-6 -mr-6 sm:mr-0">
              <button className="font-Josefin mr-4">Github</button>
              <button className="font-Josefin ">LinkedIn</button>
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
