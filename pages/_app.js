import PaintCursor from "../components/Cursor/PaintCursor";
//import { SplashCursor } from "react-bits";
import { Analytics } from "@vercel/analytics/react";

import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      {/* <SplashCursor
        colors={["#623a23", "#d4af37", "#e8d7be"]}
        particleCount={4}
        radius={8}
        speed={1.2}
      /> */}
      {/* <PaintCursor /> */}
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}
