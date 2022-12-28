import "../styles/globals.css";
import { useRouter } from "next/router";
import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

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
          <Component {...pageProps} key={router.pathname} location={router} />
        </Wrapper>
      ) : (
        <></>
      )}
    </AnimatePresence>
  );
}

export default MyApp;
