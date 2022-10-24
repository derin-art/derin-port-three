import "../styles/globals.css";
import { AnimatePresence } from "framer-motion";

import Wrapper from "../components/Wrapper";

function MyApp({ Component, pageProps }) {
  return (
    <Wrapper>
      <Component {...pageProps} key={"page1"} />
    </Wrapper>
  );
}

export default MyApp;
