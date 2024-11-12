"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Home = () => {
  const [h1AnimationState, setH1AnimationState] = useState("visible");
  const [divAnimationState, setDivAnimationState] = useState("hidden");

  useEffect(() => {
    const h1Timer = setTimeout(() => {
      setH1AnimationState("animateUp");
    }, 3000);

    const divTimer = setTimeout(() => {
      setDivAnimationState("visible");
    }, 3000);

    return () => {
      clearTimeout(h1Timer);
      clearTimeout(divTimer);
    };
  }, []);

  return (
    <section className="h-screen w-full flex flex-col items-center justify-center bg-black p-0">
      <motion.h1
        className="text-white text-center max-md:text-[32px] max-md:max-w-[70%]"
        initial="hidden"
        animate={h1AnimationState}
        variants={{
          hidden: { opacity: 0, scale: 0.5 },
          visible: {
            opacity: 1,
            scale: 1,
            transition: {
              duration: 0.5,
              delay: 0.75,
            },
          },
          animateUp: {
            opacity: 0.3,
            scale: 0.5,
            y: -100,
            transition: {
              duration: 1,
              ease: "easeInOut",
            },
          },
        }}
      >
        We craft brand <span className="text-[#E7BD70] italic">identities</span>
        , then market
        <br />
        their <span className="text-[#E7BD70] italic">personalities</span> on
        social media
      </motion.h1>

      <motion.div
        className="text-white flex flex-col items-center gap-[16px] text-center"
        initial="hidden"
        animate={divAnimationState}
        variants={{
          hidden: { opacity: 0, scale: 0.5 },
          visible: {
            opacity: 1,
            scale: 1,
            y: -100,
            transition: {
              duration: 1.5,
              ease: "easeInOut",
            },
          },
        }}
      >
        <h2 className="text-[54px] max-md:text-[32px]">How can we help you?</h2>
        <span className="flex gap-6 max-md:gap-2">
          <Link href="/services">
            <button className="secondary-btn max-md:scale-90">Services</button>
          </Link>
          <Link href="/interships">
            <button className="secondary-btn max-md:scale-90">
              Internships
            </button>
          </Link>
        </span>
      </motion.div>
    </section>
  );
};

export default Home;
