import React, { useState } from "react";
import Product from "./Product";
import { motion } from "framer-motion";
import video1 from "../assets/video-1.webm";
import video2 from "../assets/video2.webm";
import video3 from "../assets/video3.webm";
import video4 from "../assets/video4.webm";

function Products() {
  var products = [
    {
      title: "arqitel",
      description:
        "The Enneagram Type 1, also known as The Reformer, is a personality type characterized by a strong sense of right and wrong, with a desire to improve and reform themselves and others.",
      live: true,
      case: false,
    },
    {
      title: "TTR",
      description:
        "They are conscientious, ethical, and well-organized, striving to maintain high standards, but can also be critical and perfectionistic. This type is often driven by a fear of money hero is  ",
      live: true,
      case: false,
    },
    {
      title: "YIR 2022",
      description:
        "n contrast, Para One, a French electronic music producer and film director, is a distinct entity, known for his work on soundtracks for films like “Water Lilies” and “Portrait of a Lady on Fire”",
      live: true,
      case: false,
    },
    {
      title: "Yahoo!",
      description:
        "as well as his contributions to French rap group TTC. The term “one” can also refer to a single unit or thing, as defined by Ritik.Hard work is necessary for ourself",
      live: true,
      case: true,
    },
  ];

  const [pos, setPos] = useState(0);

  const mover = (index) => {
    setPos(index * 18);
  };

  return (
    <div className="mt-24 relative">
      {products.map((val, index) => (
        <Product key={index} count={index} mover={mover} product={val} />
      ))}
      <div className=" absolute top-0 w-full h-full pointer-events-none ">
        <motion.div
          initial={{ y: pos, x: "-50%" }}
          animate={{ y: pos + `rem` }}
          transition={{ ease: [0.75, 0, 0.24, 1], duration: 0.6 }}
          className="window w-96 h-[18rem] bg-white absolute left-[44%]  overflow-hidden "
        >
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.75, 0, 0.24, 1], duration: 0.5 }}
            className="w-full bg-sky-100 h-full "
          >
            <video
              autoPlay
              muted
              loop
              playsInline
              width="600"
              src={video1}
              type="video/webm"
            ></video>
          </motion.div>
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.75, 0, 0.24, 1], duration: 0.5 }}
            className="w-full bg-sky-200 h-full "
          >
            <video
              autoPlay
              muted
              loop
              playsInline
              width="600"
              src={video2}
              type="video/webm"
            ></video>
          </motion.div>
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.75, 0, 0.24, 1], duration: 0.5 }}
            className="w-full bg-sky-300 h-full "
          >
            <video
              autoPlay
              muted
              loop
              playsInline
              width="600"
              src={video3}
              type="video/webm"
            ></video>
          </motion.div>
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.75, 0, 0.24, 1], duration: 0.5 }}
            className="w-full bg-sky-400 h-full "
          >
            <video
              autoPlay
              muted
              loop
              playsInline
              width="600"
              src={video4}
              type="video/webm"
            ></video>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
export default Products;
