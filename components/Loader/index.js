import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Loader() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading();
    }, [3000]);
  }, []);
  return (
    <>
      {loading ? (
        <motion.div className="min-h-screen fixed top-0 bottom-0 left- right-0 w-full bg-primary flex justify-center items-center font-semibold z-50">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              scale: [1, 1, 1.2, 1, 1],
              opacity: "100%",
            }}
            transition={{ delay: 0.5, duration: 1 }}
            className=""
          >
            <h1 className="text-6xl text-brandColor">Welcome 👋🏾 </h1>
          </motion.div>
        </motion.div>
      ) : null}
    </>
  );
}
