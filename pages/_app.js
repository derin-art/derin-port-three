import "../styles/globals.css";
import { useRouter } from "next/router";
import { AnimatePresence } from "framer-motion";

import dynamic from "next/dynamic";

const AnimatedCursor = dynamic(() => import("react-animated-cursor"), {
  ssr: false,
});

import Wrapper from "../components/Wrapper";
import react from "react";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [isLoaded, setLoaded] = react.useState(false);

  react.useEffect(() => {
    setLoaded(true);
  }, []);
  return (
    <AnimatePresence mode="wait">
      {isLoaded ? (
        <Wrapper location={router} key={router.pathname}>
          <AnimatedCursor
            innerSize={11}
            outerSize={23}
            color="41,37,36"
            outerAlpha={0.2}
            innerScale={0.7}
            outerScale={3}
            clickables={[
              "a",
              'input[type="text"]',
              'input[type="email"]',
              'input[type="number"]',
              'input[type="submit"]',
              'input[type="image"]',
              "label[for]",
              "select",
              "textarea",
              "button",
              ".link",
              "img",
            ]}
          />
          <Component {...pageProps} key={router.pathname} location={router} />
        </Wrapper>
      ) : (
        <></>
      )}
    </AnimatePresence>
  );
}

export default MyApp;
