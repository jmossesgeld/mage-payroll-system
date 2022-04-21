import { Button } from "../UI/Button";
import { motion } from "framer-motion";
import React from "react";

const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const FadeIn = ({
  className,
  delay,
  children,
}: {
  className?: string;
  delay: number;
  children: React.ReactNode;
}) => (
  <motion.div
    initial="hidden"
    animate="visible"
    variants={variants}
    transition={{ duration: 1, delay }}
    className={className}
  >
    {children}
  </motion.div>
);

export default function Welcome() {
  return (
    <div className="h-screen flex flex-col justify-center items-center ">
      <FadeIn className="pt-12 text-center text-6xl font-bold font-sans  text-slate-700" delay={0}>
        Payroll in Simplest Form
      </FadeIn>

      <FadeIn delay={1}>
        <h1 className="pt-12 text-center text-2xl md:text-3xl font-sans text-sky-900">
          Timekeeping to Pay Slip
          <span className="font-bold mx-2 rounded-lg px-3 block py-1 my-1">Real Quick</span>
        </h1>
      </FadeIn>

      <FadeIn className="flex justify-evenly w-full pt-12 max-w-md font-sans" delay={2}>
        <Button round color="primary" className="shadow-md shadow-sky-300">
          Get Started
        </Button>
        <Button round color="secondary" className="shadow-md shadow-sky-300">
          Try Demo
        </Button>
      </FadeIn>
      <FadeIn
        delay={2}
        className="flex flex-col text-sky-900 items-stretch text-center gap-4 text-xl mt-12 font-sans opacity-50"
      >
        <p>Simple and Lightweight</p>
        <p>Almost Zero Learning Curve</p>
      </FadeIn>
    </div>
  );
}
