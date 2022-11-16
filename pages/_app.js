import "../styles/globals.css";
import { useRouter } from "next/router";
import { AnimatePresence } from "framer-motion";

import Wrapper from "../components/Wrapper";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
    <AnimatePresence exitBeforeEnter={true}>
      <Wrapper location={router} key={router.pathname}>
        <Component {...pageProps} key={router.pathname} location={router} />
      </Wrapper>
    </AnimatePresence>
  );
}

export default MyApp;
